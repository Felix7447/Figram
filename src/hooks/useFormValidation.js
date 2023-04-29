const sendMessage = (element, message) => {
  element.current.setAttribute("placeholder", message);
  element.current.value = "";
  throw new Error(message);
};

export const useFormValidation = () => {
  const signUpValidation = (user, email, password, repeatPassword) => {
    if (user.current.value.length === 0) {
      sendMessage(user, "User field is required");
    }
    if (user.current.value.length < 3) {
      sendMessage(user, "User field must have more than 3 characters");
    }
    if (email.current.value.length === 0) {
      sendMessage(email, "Email field is required");
    }
    if (password.current.value.length === 0) {
      sendMessage(password, "Password field is required");
    }
    if (password.current.value.length < 8) {
      sendMessage(password, "Password field must have at least 8 characters");
    }
    if (repeatPassword.current.value !== password.current.value) {
      sendMessage(
        repeatPassword,
        "Password & Repeat Password Fields must be the same"
      );
    }
  };

  const loginValidation = (email, password) => {
    if (email.current.value.length === 0) {
      sendMessage(email, "Email field is required");
    }
    if (password.current.value.length === 0) {
      sendMessage(password, "Password field is required");
    }
  };

  return {
    signUpValidation,
    loginValidation,
  };
};
