export function createArray<T>(arrayLength: number, fillItem: (i: number) => T) {
    return [...new Array(arrayLength)].map((el, i) => fillItem(i));
}