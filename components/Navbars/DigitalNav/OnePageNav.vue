<template>
  <nav class="navbar navbar-expand-lg navbar-light style-1" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="#" @click="scrollToSection">
        <img src="/assets/img/logo_cd.png" data-scroll-nav="0" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" data-scroll-nav="1" @click="scrollToSection">
              {{ $t("header.about") }}
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" data-scroll-nav="2" @click="scrollToSection">
              {{ $t("header.quality") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="3" @click="scrollToSection">
              {{ $t("header.equipment") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="4" @click="scrollToSection">
              {{ $t("header.product") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="5" @click="scrollToSection">
              {{ $t("header.contact") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="6" @click="scrollToSection">
              {{ $t("header.map") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-scroll-nav="6" @click="scrollToSection">
              {{ $t("header.employee") }}
            </a>
          </li>
        </ul>
        <div class="nav-side">
          <div class="hotline pe-4">
            
            <div class="cont">
              <small class="text-muted m-0">請來電: </small>
              <small>(+886)-6-3842699</small>
            </div>
          </div>
          <div class="qoute-nav ps-4">

                <select class="form-select form-select-sm">
                  <option value="1">繁體中文</option>
                  <option value="2">日本語</option>
                  <option value="3">English</option>
                </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import scrollToSection from '../../../common/scrollToSection';
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  data() {
    return {
      scrollToSection
    }
  },
  methods: {
    ScrollToSection(e) {
      this.scrollToSection(e);
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);

    const sections = document.querySelectorAll('[data-scroll-index]');

    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const index = section.getAttribute('data-scroll-index');
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll + 200 > offset && scroll + 200 < offset + height) {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.add('active');
        } else {
          document.querySelector(`[data-scroll-nav="${index}"]`).classList.remove('active');
        }
      });
    });
  },
}
</script>
