const validator = {
  maskify: function (creditCardNumber) {
    const number = [];
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {
        number.push("*");
      }
      else {
        number.push(creditCardNumber[i])
      }
    }
    return number.join(""); //array en un string
  },
  isValid: function (cardNum) {
    const array = cardNum.split('').reverse()
    let result = 0;
    for (let i = 0; i < array.length; i++) {

      if (i % 2 === 1) {
        const resultTemporal = array[i] * 2;

        if (resultTemporal >= 10) {
          const digits = resultTemporal.toString().split("");
          const digitsResult = parseInt(digits[0]) + parseInt(digits[1]);
          result = result + digitsResult;
        } else {
          result = result + resultTemporal;
        }
      }

      if (i % 2 === 0) {
        result = result + parseInt(array[i]);
      }


    }
    if (result % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default validator;
