/**
 * Normalizes a string by converting it to lowercase, removing diacritics (e.g., accents),
 * and standardizing its format.
 *
 * @param {string} text - The string to normalize.
 * @returns {string} The normalized string.
 *
 * @example
 * normalizeString ("NombreÁéïü");
 * // Returns "nombreaeiu"
 */
export const normalizeString = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
    .normalize();
};
