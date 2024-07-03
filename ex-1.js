// เริ่มเขียนโค้ดตรงนี้
function printPattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        result += j + "\n";
      } else result += j + "\t";
    }
  }
  return result;
}

const num = 5;

console.log(printPattern(num));
