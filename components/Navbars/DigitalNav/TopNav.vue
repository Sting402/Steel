<template>
  <div class="top-navbar style-3">
    <div class="container">
      <div class="content">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="top-links"></div>
          </div>
          <div class="col-lg-4">
            <div class="r-side">
              <div
                class="dropdown"
                @mousemove="handleMouseMove"
                @mouseleave="handleMouseLeave"
                
              >
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li
                    class="dropdown-item"
                    href="#"
                    @click="changeLanguage('zh-TW')"
                  >
                    繁體中文
                  </li>
                  <li
                    class="dropdown-item"
                    href="#"
                    @click="changeLanguage('en-US')"
                  >
                    >English
                  </li>
                  <li
                    class="dropdown-item"
                    href="#"
                    @click="changeLanguage('ja-JP')"
                  >
                    日本語 >
                  </li>
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


export default {
  
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains("dropdown-toggle")
        ? event.target
        : event.target.querySelector(".dropdown-toggle");
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add("show");
      dropDownMenu?.classList?.add("show");
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains("dropdown")
        ? event.target
        : event.target.closest(".dropdown");
      const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
      const dropDownMenu = dropdown.querySelector(".dropdown-menu");

      dropDownToggler?.classList?.remove("show");
      dropDownMenu?.classList?.remove("show");
    },
    
  },
};
</script>
