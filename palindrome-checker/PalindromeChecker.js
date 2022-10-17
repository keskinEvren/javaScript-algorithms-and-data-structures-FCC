function palindrome(str) {
  str = str.replace(/\W|_/g, "").toLowerCase();
  let reverse = str.split("").reverse().join("");
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("radar"));
console.log(palindrome("not"));
