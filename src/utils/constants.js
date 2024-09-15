export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/102140354?s=400&u=e8edc5a111e871b5d5cd62ad0f6d101e19ce4410&v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const POSTER_PATH = "https://image.tmdb.org/t/p/w500";

export const preferredLanguage = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
];

export const openAiKey = process.env.REACT_APP_OPENAI_KEY;
