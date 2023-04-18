<script>
//聯絡我們
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Form from "../../components/Contact/Form";
import Navbar from "../../components/Navbars/PreviewNav";
import Footer from "../../components/Saas/Footer";
import ScrollToTop from "../../components/ScrollToTop/index.vue";

export default {
  name: "PageContact5",
  layout: "Main",
  components: {
    ScrollToTop,
    Navbar,
    Form,
    Footer
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
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>
<template>
  <div>
    <Navbar ref="navbarRef" />
    <main class="contact-page style-5">
      <Form styleType="5" />
    </main>
    <ScrollToTop />
    <Footer :noWave="true" />
  </div>
</template>


