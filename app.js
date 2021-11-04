const lowdash = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = lowdash.flattenDeep(items);

console.log(newItems)
