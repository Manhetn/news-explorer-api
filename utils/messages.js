module.exports.messages = {
  user: {
    email: {
      required: "email обязательное поле",
      empty: "email не может быть пустым",
      format: "email должен быть в формате: sega@yandex.ru",
      isBusy: "уже занят",
    },
    password: {
      required: "password обязательное поле",
      empty: "password не может быть пустым",
      minLength: "password должен содержать не менее 8 символов",
    },
    name: {
      required: "name обязательное поле",
      empty: "name не может быть пустым",
      minLength: "name должно содержать не менее 2 символов",
      maxLength: "name должно содержать не более 30 символов",
    },
  },
  article: {
    keyword: {
      required: "keyword обязательное поле",
      empty: "keyword не может быть пустым",
      minLength: "keyword должно содержать не менее 2 символов",
      maxLength: "keyword должно содержать не более 30 символов",
    },
    title: {
      required: "title обязательное поле",
      empty: "title не может быть пустым",
      minLength: "title должно содержать не менее 2 символов",
      maxLength: "title должно содержать не более 150 символов",
    },
    text: {
      required: "text обязательное поле",
      empty: "text не может быть пустым",
      minLength: "text должно содержать не менее 2 символов",
    },
    date: {
      required: "date обязательное поле",
      empty: "date не может быть пустым",
      minLength:
        "date должно содержать не менее 8 символов, желатеьно в формате: 01 месяц, 2020",
      maxLength: "date должно содержать не более 30 символов",
    },
    source: {
      required: "source обязательное поле",
      empty: "source не может быть пустым",
      minLength: "source должно содержать не менее 2 символов",
      maxLength: "source должно содержать не более 30 символов",
    },
    link: {
      required: "link обязательное поле",
      empty: "Поле link не может быть пустым",
      uri:
        "Ссылка на статью должна быть в формате: https://sega.org/sega/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F",
    },
    image: {
      required: "image обязательное поле",
      empty: "Поле image не может быть пустым",
      uri:
        "Ссылка на image должна быть в формате: https://sega/c630831/KNQZxpXt3jk.jpg",
    },
    owner: {
      required: "owner обязательное поле",
      empty: "owner не может быть пустым",
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
  errorServer: "На сервере произошла ошибка",
};
