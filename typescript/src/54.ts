import { getInput, time } from './lib'

type Rank = {
  rank: RANKS
  subrank?: number
  sortedCardValues: number[]
}

enum RANKS {
  'HIGH',
  'ONE_PAIR',
  'TWO_PAIR',
  'THREE_OF_A_KIND',
  'STRAIGHT',
  'FLUSH',
  'FULL_HOUSE',
  'FOUR_OF_A_KIND',
  'STRAIGHT_FLUSH',
  'ROYAL_FLUSH'
}

const CARD_VALUES: { [k: string]: number } = {
  2: 0,
  3: 1,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
  8: 6,
  9: 7,
  T: 8,
  J: 9, // tslint:disable-line object-literal-sort-keys
  Q: 10,
  K: 11,
  A: 12
}

function rankHand(hand: string[]): Rank {
  const bySuit: { [k: string]: string[] } = {
    S: [],
    C: [], // tslint:disable-line object-literal-sort-keys
    D: [],
    H: []
  }
  const valueCounts: { [k: string]: number } = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    T: 0,
    J: 0, // tslint:disable-line object-literal-sort-keys
    Q: 0,
    K: 0,
    A: 0
  }

  const sortedCardValues: number[] = []
  const pairs = []
  let maxPairValue = ''
  let isStraight = true
  let maxOfAKind = 0
  let maxOfAKindValue = ''
  let isFullHouse = false
  let isFlush = false
  let isRoyalFlush = false
  let isStraightFlush = false

  for (const [value, suit] of hand) {
    bySuit[suit].push(value)
    valueCounts[value]++
  }

  {
    let runStarted = false
    let cardsAccountedFor = 0
    for (const value of Object.keys(valueCounts)) {
      const count = valueCounts[value]
      // three of a kind, 4 of a kind
      if (count >= 3) {
        maxOfAKind = count
        maxOfAKindValue = value
      }

      // pairs
      if (count === 2) {
        pairs.push(value)
        maxPairValue = value
      }

      for (let i = 0; i < count; i++) {
        sortedCardValues.unshift(CARD_VALUES[value])
      }

      // straight
      if (count > 1) {
        isStraight = false
      } else if (runStarted && count !== 1) {
        isStraight = false
      } else if (count === 1) {
        runStarted = true
      }

      cardsAccountedFor += count
      if (cardsAccountedFor === 5) {
        break
      }
    }
  }

  // flush
  for (const suit of Object.keys(bySuit)) {
    if (bySuit[suit].length === 5) {
      isFlush = true
      if (isStraight) {
        isStraightFlush = true
        if (valueCounts.A === 1) {
          isRoyalFlush = true
        }
      }
      break
    }
  }

  // full house
  isFullHouse = maxOfAKind === 3 && pairs.length === 1

  let rank: RANKS
  let subrank = '' // value of 2/3/4 of a kind (including in full house)

  if (isRoyalFlush) {
    rank = RANKS.ROYAL_FLUSH
  } else if (isStraightFlush) {
    rank = RANKS.STRAIGHT_FLUSH
  } else if (maxOfAKind === 4) {
    rank = RANKS.FOUR_OF_A_KIND
    subrank = maxOfAKindValue
  } else if (isFullHouse) {
    rank = RANKS.FULL_HOUSE
    subrank = maxOfAKindValue
  } else if (isFlush) {
    rank = RANKS.FLUSH
  } else if (isStraight) {
    rank = RANKS.STRAIGHT
  } else if (maxOfAKind === 3) {
    rank = RANKS.THREE_OF_A_KIND
    subrank = maxOfAKindValue
  } else if (pairs.length === 2) {
    rank = RANKS.TWO_PAIR
    subrank = maxPairValue
  } else if (pairs.length === 1) {
    rank = RANKS.ONE_PAIR
    subrank = maxPairValue
  } else {
    rank = RANKS.HIGH
  }

  return {
    rank,
    subrank: CARD_VALUES[subrank],
    sortedCardValues // tslint:disable-line object-literal-sort-keys
  }
}

function getWinner([p1Hand, p2Hand]: string[][]) {
  const p1Rank = rankHand(p1Hand)
  const p2Rank = rankHand(p2Hand)
  if (p1Rank.rank > p2Rank.rank) {
    return 1
  } else if (p1Rank.rank < p2Rank.rank) {
    return 2
  } else {
    if (typeof p1Rank.subrank !== 'undefined' && typeof p2Rank.subrank !== 'undefined') {
      if (p1Rank.subrank > p2Rank.subrank) {
        return 1
      } else if (p1Rank.subrank < p2Rank.subrank) {
        return 2
      }
    }
    {
      let i = 0
      // find highest card that both players don't have
      while (p1Rank.sortedCardValues[i] === p2Rank.sortedCardValues[i]) {
        i++
      }
      if (p1Rank.sortedCardValues[i] > p2Rank.sortedCardValues[i]) {
        return 1
      } else {
        return 2
      }
    }
  }
}

getInput('54').then((data) => {
  let p1Wins = 0

  time(() => {
    p1Wins = data
      .toString()
      .trim()
      .split('\n')
      .map((r) => {
        const cards = r.split(' ')
        const p1 = cards.slice(0, 5)
        const p2 = cards.slice(5)
        return [p1, p2]
      })
      .filter((r) => getWinner(r) === 1)
      .length
  })

  console.log(p1Wins)
})
