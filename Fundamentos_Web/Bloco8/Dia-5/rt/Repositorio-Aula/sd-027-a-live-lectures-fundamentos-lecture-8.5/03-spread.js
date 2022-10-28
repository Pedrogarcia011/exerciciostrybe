const otherPoint = [0.1, 3.5, -99.6];
const otherPointCoordinates = (a, b, c) => {
return `Other coordinates are a = ${a}, b = ${b}, c = ${c}`
};
console.log(otherPointCoordinates(...otherPoint));


const point = [1.0, 2.2, -6.6, -10.6, 5.0];
const printPointCoordinates = (a, b, c) => {
return `Point coordinates are a = ${a}, b = ${b}, c = ${c}`
}
console.log(printPointCoordinates(...point));


module.exports = { printPointCoordinates, point, otherPoint };