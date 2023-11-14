/**
 * 模拟JSON.stringify的功能
 * @param {any} item 
 */
const toJSON = function(item) {
    const type = typeof item;
    if (type === "number") {
        return `${item}`;
    } else if (type === "string") {
        return `"${item}"`;
    } else if (item === null) {
        return "null";
    } else if (Array.isArray(item)) {
        return `[${item.map(i => {
            return toJSON(i);
        }).join(',')}]`
    } else {
        return `{${Object.entries(item).map(([k,v])=>toJSON(k)+':'+toJSON(v)
        )}}`
    }
}

const data = { a: 2, v: 4, n: { c: 234, b: [1, 13] } };
console.log(JSON.stringify(data))
console.log(toJSON(data))