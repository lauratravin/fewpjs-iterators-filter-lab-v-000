// Code your solution here
//    findMatching()
function findMatching(drivers, args){
  return drivers.filter( f  =>  f.toLowerCase() === args.toLowerCase()

  )}


//otra forma
// function findMatching (list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }


function fuzzyMatch(drivers, args){
  return drivers.filter( f  =>  f.charAt(0).toLowerCase() === args.toLowerCase()

  )}
