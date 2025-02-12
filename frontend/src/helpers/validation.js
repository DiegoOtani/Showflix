export const validateEmail = (email) => {
  if (!email) {
    return { isValid: false, message: "O email é obrigatório" };
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Email inválido" };
  }

  return { isValid: true, message: "" };
};

export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, message: "A senha é obrigatória" };
  }

  if (password.length < 6) {
    return { isValid: false, message: "A senha deve ter pelo menos 6 caracteres" };
  }

  return { isValid: true, message: "" };
};
