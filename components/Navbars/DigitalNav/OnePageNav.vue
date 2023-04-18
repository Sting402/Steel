<template>
  <nav class="navbar navbar-expand-lg navbar-light style-1" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="#" @click="handleSectionClick">
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
            <a class="nav-link" data-scroll-nav="1" @click="handleSectionClick">
              {{ $t("header.about") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="2" @click="handleSectionClick">
              {{ $t("header.equipment") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="handleSectionClick">
              {{ $t("header.contact") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="handleSectionClick">
              {{ $t("header.map") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="handleSectionClick">
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
          <select class="lang">
  <option value="1">繁體中文</option>
  <option value="2">English</option>
  <option value="3">日本語</option>
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
    return {};
  },
  methods: {
    handleSectionClick(e) {
      scrollToSection(e);
    },
    changeLanguage(language) {
      this.$i18n.locale = language;
    },
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);

    const sections = document.querySelectorAll("[data-scroll-index]");

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const index = section.getAttribute("data-scroll-index");
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll + 200 > offset && scroll + 200 < offset + height) {
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
}
.lang{
  border-radius: 6px;
  border: 1px solid black;
  margin-left: 10px;
  margin-top: 10px;
  padding: 4px;
}
</style>
