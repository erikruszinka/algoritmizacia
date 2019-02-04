//LONGEST CHARS
function longRepeat(line) {
  if (!line.length) {
    return 0;
  }
  var max = 1;
  for (let i = 0, j = 0; i < line.length - 1; i = j) {
    for (j = i + 1; j < line.length && line[j] == line[i]; j++) {}
    if (j - i > max) {
      max = j - i;
    }
  }
  return max;
}

console.log(longRepeat("yyuuufhvksoooooooo"));

//ADD TWO BIG NUMBERS

function add(str1, str2) {
  let sum = "";
  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i++) {
    a = parseInt(str1.charAt(str1.length - 1 - i));
    b = parseInt(str2.charAt(str2.length - 1 - i));
    b = b ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;
    sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum;
}
console.log(add("547587354768596645479659764", "748598563537653949367"))

// RANDOM NUMBERS
var uniqueRandoms = [];
var numRandoms = 5;
function makeUniqueRandom() {
  // refill the array if needed
  if (!uniqueRandoms.length) {
    for (var i = 0; i < numRandoms; i++) {
      uniqueRandoms.push(i);
    }
  }
  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var val = uniqueRandoms[index];

  // now remove that value from the array
  uniqueRandoms.splice(index, 1);

  return val;
}

for (var i = 0; i < 30; i++) {
  var rand = makeUniqueRandom();
  if (i % numRandoms == 0) {
    console.log("---");
  }
  console.log(rand);
}
