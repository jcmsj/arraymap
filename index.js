/**
 * Adds more array-like functionalities to the Map data structure.
 */
export class EnhancedMap extends Map {
    /**
     * Similar to Array.indexOf
     * @param {String} key
     * @returns An index-value pair
     */
    pairOf(key) {
        return pairOf(key, this);
    }
    /**
     * @returns The key-value pair at index n
     */
    at(n) {
        return at(n, this);
    }
}
/**
 * @returns int-value pair.
 */
export function pairOf(key, map) {
    let i = 0;
    for (const [k, val] of map) {
        if (key == k)
            return [i, val];
        i++;
    }
    return [-1, undefined];
}
/**
 * @returns The key-val pair
 */
export function at(n, map) {
    let i = 0;
    for (const pair of map) {
        if (n == i++)
            return pair;
    }
    return [undefined, undefined];
}
//# sourceMappingURL=index.js.map