export const removeStartWithZero = (inputValue) => {
  // Remove leading 0s, allowing only a single 0 at the beginning
  if (inputValue.length > 1 && inputValue.startsWith("0")) {
    return (inputValue = inputValue.replace(/^0+/, ""));
  }
};

export function validateEmail(email) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "Enter a valid email address!";
  } else return null;
}

export function validatePassword(password) {
  if (
    !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/i.test(
      password
    )
  ) {
    return "Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long";
  } else return null;
}

export function validatePasswordLength(password) {
  if (password.length < 8 && password.length > 0) {
    return "Password must be at least 6 characters long ";
  } else return null;
}

export function validateUsername(username) {
  if (/\d+/.test(username)) {
    return "Username must be at least 6 figures and include a number";
  }
}

export function validatePhoneNumber(number) {
  // Convert the number to a string for easier manipulation
  const numberString = String(number);

  // Check if the number starts with '0' and is exactly 10 digits long
  if (/^0\d{9}$/.test(numberString)) {
    return true; // Valid
  } else {
    return false; // Invalid
  }
}

export function isValidNumber(input) {
  // Check if the input is a number and does not start with '0'
  if (!isNaN(input) && !input.startsWith("0")) {
    return true; // Valid
  } else {
    return false; // Invalid
  }
}
