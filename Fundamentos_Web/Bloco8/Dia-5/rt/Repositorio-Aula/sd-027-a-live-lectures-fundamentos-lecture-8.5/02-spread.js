const horrorMovies = ['Get Out', 'Us', 'Ma'];
const scifiMovies = ['Blade', 'MIB', 'Tenet', 'I Am Legend'];

const awesomeMovies = (horror, scifi) => {
  return [...horror, ...scifi]
};

console.log(awesomeMovies(horrorMovies, scifiMovies));









module.exports = { awesomeMovies };