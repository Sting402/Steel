<template>
  <nav class="navbar navbar-expand-lg style-1" ref="{navbarRef}">
    <div class="container">
      <a class="navbar-brand" href="#" @click="ScrollToSection">
        <img src="/assets/img/vs.jpg" data-scroll-nav="0" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" data-scroll-nav="1" @click="ScrollToSection">
              {{ $t("header.about") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="2" @click="ScrollToSection">
              {{ $t("about.legacy") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="ScrollToSection">
              {{ $t("header.equipment") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="ScrollToSection">
              {{ $t("header.product") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="ScrollToSection">
              {{ $t("header.contact") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="6" @click="ScrollToSection">
              {{ $t("header.map") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="7" @click="ScrollToSection">
              {{ $t("header.employee") }}
            </a>
          </li>
        </ul>

        <div class="nav-side">
          <div class="hotline pe-4">
            <div class="cont">
              <small class="text-muted m-0">{{ $t("header.contact") }}:</small>
              <h6>+(886)-6-384-2699</h6>
            </div>
          </div>
          
            

          <select @change="onChangeLang($event.target.value)">
  <option value="zh-TW">繁體中文</option>
  <option value="en-US">English</option>
  <option value="jp-JP">日本語</option>
</select>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import scrollToSection from "../../../common/scrollToSection";
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  data() {
    return {
      showlang: true,
    };
  },

  methods: {
    onChangeLang(locale) {
    this.showlang = !this.showlang;
    this.$i18n.locale = locale;
    sessionStorage.setItem("savedlocale", this.$i18n.locale);
    this.$store.commit("changeLang");
  },
    ScrollToSection(e) {
      scrollToSection(e);
    },
    changeLang() {
      this.$store.commit("changeLang");
    },

    changeLanguage(locale) {
      this.showlang = !this.showlang;
      sessionStorage.setItem("savedlocale", this.$i18n.locale);
      this.$i18n.locale = locale;
      this.$store.commit("changeLang");
      console.log("locale", this.$i18n.locale);
      console.log("store", Store.state.locale);
    },
    isChangeLang() {
      this.showlang = !this.showlang;
      this.$i18n.locale = "zh-TW";
      sessionStorage.setItem("savedlocale", this.$i18n.locale);
      this.$store.commit("changeLang");
    },
    isChangeLang1() {
      this.showlang = !this.showlang;
      this.$i18n.locale = "en-US";
      sessionStorage.setItem("savedlocale", this.$i18n.locale);
      this.$store.commit("changeLang");
    },
    isChangeLang2() {
      this.showlang = !this.showlang;
      this.$i18n.locale = "jp-JP";
      sessionStorage.setItem("savedlocale", this.$i18n.locale);
      this.$store.commit("changeLang");
    },
  },
  mounted() {
    let getlang = sessionStorage.getItem("savedlocale");

    if (getlang) {
      if (getlang === "zh-TW") {
        this.$i18n.locale = "zh-TW";
      } else if (getlang === "en-US") {
        this.$i18n.locale = "en-US";
      } else if (getlang ==="jp-JP"){
        this.$i18n.locale = "jp-JP";
      }
    } else {
      
    }
    console.log(this.$i18n.locale);
    navbarScrollEffect(this.$refs.navbarRef);
    const sections = document.querySelectorAll("[data-scroll-index]");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const index = section.getAttribute("data-scroll-index");
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll > offset && scroll < offset + height) {
          document
            .querySelector(`[data-scroll-nav="${index}"]`)
            .classList.add("active");
        } else {
          document
            .querySelector(`[data-scroll-nav="${index}"]`)
            .classList.remove("active");
        }
      });
    });
  },
};
</script>

<style scoped>
img {
  border-radius: 12px !important;
  border: 1px solid black;
  margin-left: -40px;
  height: 50px;
}
.lang {
  border-radius: 6px;
  border: 1px solid black;
  margin-left: 10px;
  margin-top: 10px;
  padding: 4px;
}
</style>
