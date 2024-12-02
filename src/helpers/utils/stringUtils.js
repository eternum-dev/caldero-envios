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

/**
 * Capitalizes a string by converting the first letter to uppercase
 * keeping the remaining letters lowercase and standardizing its format.
 *
 * @param {string} text - The string to Capitalize.
 * @returns {string} The Capitalize string  or an empty string if input is invalid.
 *
 * @example
 * stringCapitalization("title");
 * // Returns "Title"
 * @example
 * stringCapitalization("");
 * // Returns ""
 *
 * @example
 * stringCapitalization(123);
 * // Returns ""
 */

export const stringCapitalization = (text) => {
  if (typeof text !== "string" || text.length === 0) {
    return "";
  }

  return text[0].toUpperCase() + text.slice(1).toLowerCase();
};
