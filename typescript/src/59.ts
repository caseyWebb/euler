import { getInput, time } from './lib'

const COMMON_WORDS = [
  'the',
  'and',
  // 'a',
  // 'i'
]

const LOWERCASE_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

function* generatePassphrases() {
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      for (let k = 0; k < 26; k++) {
        yield LOWERCASE_ALPHABET[i] + LOWERCASE_ALPHABET[j] + LOWERCASE_ALPHABET[k]
      }
    }
  }
}

function* createCipher(str: string) {
  let i = 0
  while (true) {
    yield str.charCodeAt(i)
    i = (i + 1) % 3
  }
}

function decrypt(encryptedASCII: number[], passphrase: string) {
  const ciper = createCipher(passphrase)
  const decryptedASCII = []
  for (const code of encryptedASCII) {
    decryptedASCII.push(code ^ ciper.next().value) // tslint:disable-line no-bitwise
  }
  return decryptedASCII.map((code) => String.fromCharCode(code)).join('')
}

function hasCommonWords(str: string) {
  return COMMON_WORDS.some((word) => str.indexOf(' ' + word + ' ') > -1)
}

getInput('59').then((data) => {
  const encryptedChars = data.toString().split(',').map((c) => parseInt(c, 10))
  let decrypted = ''
  time('Decrypt', () => {
    for (const passphrase of generatePassphrases()) {
      decrypted = decrypt(encryptedChars, passphrase)
      if (hasCommonWords(decrypted)) {
        break
      }
    }
  })

  let sum = 0
  for (let i = 0; i < decrypted.length; i++) {
    sum += decrypted.charCodeAt(i)
  }
  console.log(sum)
})
