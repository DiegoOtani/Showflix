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

const validateTvShowForm = (title, description, imgUrl, language, rating, genres) => {

  if (!title || title.trim() === "") return { error: "O título não pode ser vazio. "};

  if (!description || description.trim() === "") return { error: "A descrição não pode ser vazia. "};

  try {
    new URL(imgUrl); 
  } catch (_) {
    return { error: "A URL da imagem não é válida. "};
  }

  if (!language || language.trim() === "") return { error: "O idioma não pode ser vazio. "};

  if (rating < 0 || rating > 10 || isNaN(rating)) return { error: "A avaliação deve ser um número entre 0 e 10. "};

  if (genres.length === 0) return { error: "elo menos um gênero deve ser selecionado. "};

  return { error: null };
};

export default validateTvShowForm;
