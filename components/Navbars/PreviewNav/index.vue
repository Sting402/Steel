<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light style-1 nav-preview py-0">
    <div class="container-xxl">
      <a class="navbar-brand" href="/">
        <img src="/assets/img/logo_cd.png" alt="" />
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
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-about">
              公司介紹
              <small class="icon"
                ><i class="bi bi-chevron-down me-1"></i
              ></small>
            </a>
            <ul class="dropDownMenu">
              <li class="dropdown-items">
                <ul class="subDropDown">
                  <li>
                    <NuxtLink to="/ys-legacy" class="subLink">
                      公司沿革
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/ys-concept" class="subLink">
                      經營理念
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/ys-policy" class="subLink">
                      品質政策
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/ys-flow" class="subLink">
                      作業流程
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/ys-production" class="subLink">
                      生產作業導覽
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-policy"> 品質政策 </a>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-equipment"> 設備介紹 </a>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-product"> 產品介紹 </a>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-contact"> 聯絡我們 </a>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-map"> 公司地圖 </a>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="/ys-employee"> 人才招募 </a>
          </li>
        </ul>
        <button>123</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
