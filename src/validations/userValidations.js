const invalidEntriesError = { error: { message: 'Invalid entries. Try again.', status: 400 } };

const validateName = (name) => {
  if (!name) {
    return invalidEntriesError;
  }

  return true;
};

const validateEmail = (email) => {
  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  
  if (!isEmailValid) {
    return invalidEntriesError;
  }

  return true;
};

const validatePassword = (password) => {
  if (!password) {
    return invalidEntriesError;
  }
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};