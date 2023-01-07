/**
 * Adds more array-like functionalities to the Map data structure.
 */
export class EnhancedMap<K, V> extends Map<K, V>{
    /**
     * Similar to Array.indexOf
     * @returns An index-value pair
     */
    pairOf(key:K):[number, V?] {
        return pairOf(key, this);
    }

    /**
     * @returns The key-value pair at index n
     */
    at(n:number):[K?, V?] {
        return at(n, this)
    }
}

/**
 * @returns int-value pair.
 * 
 */
export function pairOf<K,V>(key:any, map:Map<K, V>): [number, V?] {
    let i = 0;
    for (const [k, val] of map) {
        if (key == k)
            return [i, val];
        i++
    }
    return [-1, undefined]
}

/**
 * @returns The key-val pair
 */
export function at<K,V>(n:number, map:Map<K, V>):[K?, V?] {
    if (n < 0 || n >= map.size)
        return [];

    let i = 0
    for (const pair of map) {
        if (n === i++)
            return pair;
    }
    
    return [];
}