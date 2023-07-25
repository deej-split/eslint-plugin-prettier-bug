const { number: numberFormatter } = require('@json2csv/formatters');

const foo = () => numberFormatter(123);

console.log(foo());
