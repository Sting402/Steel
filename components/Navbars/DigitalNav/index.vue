<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  methods: {
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
    navbarScrollEffect(this.$refs.navbarRef);
  },
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light style-1" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo_cd.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/page-blog-5" class="nav-link">
              {{ $t("header.home") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-blog-5" class="nav-link">
              {{ $t("header.about") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-portfolio-5" class="nav-link">
              {{ $t("header.quality") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-blog-5" class="nav-link">
              {{ $t("header.equipment") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-5" class="nav-link">
              {{ $t("header.product") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-5" class="nav-link">
              {{ $t("header.contact") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-5" class="nav-link">
              {{ $t("header.map") }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-5" class="nav-link">
              {{ $t("header.employee") }}
            </NuxtLink>
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



