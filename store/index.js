export const state = () => ({
  drawer: true,
  axios_url: process.env.VUE_APP_AXIOS_BASE_URL,
  language: false,
  locales: ["en-US", "zh-TW", "jp-JP"],
  locale: "zh-TW",
  //language: false,
  //refwebsite:[],
});

export const mutations = {
  changeLang (state) {
    state.language = !state.language;
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}