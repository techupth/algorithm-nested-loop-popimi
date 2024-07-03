// เริ่มเขียนโค้ดตรงนี้
function printStar(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        result += "*" + "\n";
      } else result += "*" + "\t";
    }
  }
  return result;
}

const num = 5;

console.log(printStar(num));
