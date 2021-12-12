import { promises as fs } from 'fs'
import * as path from 'path'

export function getInput(fileName: string): Promise<string> {
    return fs.readFile(path.join(__dirname, '../../../input', fileName + '.txt'), { encoding: 'utf8' })
}