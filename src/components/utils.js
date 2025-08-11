/**
 * Checks if two strings are anagrams of each other.
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {boolean} True if anagrams, false otherwise.
 */
export function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[\W_]+/g, '');
    const s1 = normalize(str1);
    const s2 = normalize(str2);
    if (s1.length !== s2.length) return false;

    // Sort and compare (O(n log n) time, O(n) space, but less code and no hash map)
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}
