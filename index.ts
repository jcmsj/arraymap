/**
 * Adds more array-like functionalities to the Map data structure.
 */
export class EnhancedMap<K, V> extends Map<K, V>{
    constructor(map:Map<K, V>|null = null) {
        super()
        if (map instanceof Map) {
            for (const pair of map) {
                this.set(...pair)
            }
        }
    }

    /**
     * Similar to Array.indexOf
     * @returns An index-value pair
     */
    pairOf(key:K):[number?, V?] {
        return pairOf(key, this);
    }

    /**
     * @returns The key-value pair at index n
     */
    at(n:number) {
        return at(n, this)
    }
}

/**
 * @returns int-value pair.
 */
export function pairOf(key:any, map:Map<any, any>): [number, any] {
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
export function at(n:number, map:Map<any, any>) {
    const def = [undefined, undefined];
    if (n < 0 || n >= map.size)
        return def;

    let i = 0
    for (const pair of map) {
        if (n == i++)
            return pair;
    }
    
    return def;
}