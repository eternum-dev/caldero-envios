import { v4 as uuidv4 } from "uuid";

/**
 * Generates a unique ID.
 * @returns {string} A unique ID.
 */
export function generateId() {
  return uuidv4();
}
