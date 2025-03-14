import { customAlphabet } from "nanoid"

const ALPHABET_SIZE = 8

export const generateId = (size = ALPHABET_SIZE) => {
  const generator = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", size)
  return generator()
}
