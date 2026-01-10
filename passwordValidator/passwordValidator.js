function passwordValidator(password) {
  const passwordLength = password.length >= 8;

  const passwordHasUpperCase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasDigits = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  const passwordHasLowerCase = password
    .split("")
    .some((char) => char !== char.toUpperCase() && char === char.toLowerCase());

  return {
    passwordLength: passwordLength,
    passwordHasUpperCase: passwordHasUpperCase,
    passwordHasLowerCase: passwordHasLowerCase,
    hasDigits: hasDigits,
  };
}
const password = "Abcd1234";
console.log(passwordValidator(password));
