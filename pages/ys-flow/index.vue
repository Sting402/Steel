<script>
//作業流程
import navbarScrollEffect from "../../common/navbarScrollEffect";
import PreLoader from "../../components/PreLoader/index.vue";
import ScrollToTop from "../../components/ScrollToTop/index.vue";
import Navbar from "../../components/Navbars/PreviewNav";
import Footer from "../../components/Saas/Footer";

export default {
  components: {
    PreLoader,
    ScrollToTop,
    Navbar,
    Footer,
  },
  head() {
    return {
      link: [
        { rel: "stylesheet", href: "/assets/css/lib/bootstrap-icons.css" },
        { rel: "stylesheet", href: "/assets/css/lib/swiper.min.css" },
        { rel: "stylesheet", href: "/assets/css/lib/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/lib/all.min.css" },
        { rel: "stylesheet", href: "/assets/css/lib/animate.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "stylesheet", href: "/landing-preview/css/preview-style.css" },
      ],
      script: [{ src: "/landing-preview/js/parallax.min.js" }],
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>
<template>
  <div>
    <PreLoader />
    <Navbar ref="navbarRef" />

    <main class="contact-page style-5"></main>
    <ScrollToTop />
    <Footer :noWave="true" />
  </div>
</template>


