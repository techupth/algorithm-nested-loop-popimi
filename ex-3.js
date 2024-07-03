// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable() {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (j === num) {
        result += i * j + "\n";
      } else result += i * j + "\t";
    }
  }
  return result;
}

const num = 5;

console.log(multiplicationTable(num));
