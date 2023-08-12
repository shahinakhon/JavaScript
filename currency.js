// project codex.io
// programm to transform yuan, yen, and won to USD 💵

let cn = 560
let jp = 2455
let kr = 3280

const yuan = 0.1382
const yen = 0.0069
const won = 0.0075

let total = (cn * yuan) + jp * yen + kr * won

console.log("What do you have left in yuan?", cn)
console.log("What do you have left in yen?", jp)
consloe.log("What do you have left in won?", kr)

consloe.log(total)