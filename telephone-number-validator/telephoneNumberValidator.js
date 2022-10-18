function telephoneCheck(str) {
  const validPatterns = [
    //for 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    //for 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    //for 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    //for 5555555555
    /^\d{10}$/,

    //for (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    //for 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    //for 1(555)555-5555
    /1\(\d{3}\)\d{3}-\d{4}/,
  ];

  return validPatterns.some((pattern) => pattern.test(str));
}
console.log(telephoneCheck("1 555-555-5555"));
