export const checkValidData = (userEmail, userPassword) => {
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      userPassword
    );
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    userEmail
  );
  if (!isEmailValid) return "Please enter a valid email address.";

  if (!isPasswordValid)
    return "Your password must be eight characters including one uppercase letter, one special character and alphanumeric characters";
  return null;
};
