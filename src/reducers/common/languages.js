const languages = [
  {
    code: 'ru',
    title: 'русский',
  },
  {
    code: 'en',
    title: 'English',
  },
  {
    code: 'fr',
    title: 'Français',
  },
  {
    code: 'de',
    title: 'Deutsch',
  },
];

export function getLanguagesReducer(state = languages, action) {
  return state;
}
