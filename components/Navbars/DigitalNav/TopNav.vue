<template>
  <div class="top-navbar style-1">
    <div class="container">
      <div class="content">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="top-links">
              <div class="text text-white">
                <i class="fas fa-bullhorn"></i>
                <strong>Now Hiring:</strong>
                <span>Are you a driven and motivated <a href="#" class="p-0"><u>1st Line Sheet Metal Industry?</u></a></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="r-side">
              <div class="socail-icons">
                <!-- <a href="#">
                  <i class="fab fa-twitter"></i>
                </a> -->
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <!-- <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a> -->
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="dropdown" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="me-1" src="/assets/img/lang.png" alt="" /> English
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">French</a></li>
                  <li><a class="dropdown-item" href="#">Arabic</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";
import scrollToSection from "../../../common/scrollToSection";

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
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add('show');
      dropDownMenu?.classList?.add('show');
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
      const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
      const dropDownMenu = dropdown.querySelector('.dropdown-menu');

      dropDownToggler?.classList?.remove('show');
      dropDownMenu?.classList?.remove('show');
    }
  },
  mounted() {
    let getlang = sessionStorage.getItem("savedlocale");

    if (getlang) {
      if (getlang === "zh-TW") {
        this.$i18n.locale = "zh-TW";
      } else if (getlang === "en-US") {
        this.$i18n.locale = "en-US";
      } else if (getlang === "jp-JP") {
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
