const messages = {
  user: {
    email: {
      empty: "email обязательное поле",
      format: "email должен быть в формате: sega@yandex.ru",
      isBusy: "уже занят",
    },
    password: {
      empty: "password обязательное поле",
      minLength: "password должен содержать не менее 8 символов",
    },
    name: {
      empty: "name обязательное поле",
      minLength: "name должно содержать не менее 2 символов",
      maxLength: "name должно содержать не более 30 символов",
    },
  },
  article: {
    keyword: {
      empty: "keyword обязательное поле",
      minLength: "keyword должно содержать не менее 2 символов",
      maxLength: "keyword должно содержать не более 30 символов",
    },
    title: {
      empty: "title обязательное поле",
      minLength: "title должно содержать не менее 2 символов",
      maxLength: "title должно содержать не более 150 символов",
    },
    text: {
      empty: "text обязательное поле",
      minLength: "text должно содержать не менее 2 символов",
    },
    date: {
      empty: "date обязательное поле",
      minLength:
        "date должно содержать не менее 8 символов, желатеьно в формате: 01 месяц, 2020",
      maxLength: "date должно содержать не более 30 символов",
    },
    source: {
      empty: "source обязательное поле",
      minLength: "source должно содержать не менее 2 символов",
      maxLength: "source должно содержать не более 30 символов",
    },
    link: {
      empty: "link статьи обязательное поле",
      uri:
        "Ссылка на статью должна быть в формате: https://sega.org/sega/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F",
    },
    image: {
      empty: "Ссылка на image обязательное поле",
      uri:
        "Ссылка на image должна быть в формате: https://sega/c630831/KNQZxpXt3jk.jpg",
    },
    owner: {
      empty: "owner обязательное поле",
      length: "owner должно содержать 24 символа",
    },
    deleteArticle: {
      positiveResponse: "Статья удалена",
      noArticle: "Вы пытаетесь удалить несуществующую статью!",
      notMyArticle: "Нельзя удалить статью другого пользователя",
    },
    id: {
      length: "id статьи должен состоять из 24 симолов",
    },
  },
  authorization: {
    positiveResponse: "Вы успешно авторизировались!",
    invalidEmailOrPassword: "Неправильныe почта или пароль",
    needAuthorization: "Необходима авторизация",
    badToken: "С токеном что-то не так",
  },
  path: {
    invalid: "Запрашиваемый ресурс не найден",
  },
};

module.exports = {
  messages,
};
