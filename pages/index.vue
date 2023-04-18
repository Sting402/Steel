<template>
  <div>
    <TopNav />
    <Navbar />
    <Header />
    <main>
      <About />
      <Features />
      <Portfolio />
      <Services />
      <Contact />
      <Map/>
      <br>
      <br>
      <ChooseUs />
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from "../components/Navbars/DigitalNav/TopNav";
import Navbar from "../components/Navbars/DigitalNav/OnePageNav";
import Header from "../components/Digital/Header";
import About from "../components/Digital/About";
import Services from "../components/Digital/Services";
import ChooseUs from "../components/Digital/ChooseUs";
import Portfolio from "../components/Digital/Portfolio";
import Contact from "../components/Contact/Form";
import Map from "../components/Gmap/index.vue";
import Footer from "../components/Saas/Footer";
import Features from "../components/ITCreative/Features.vue"

export default {
  name: "HomeDigitalAgency",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    About,
    Map,
    Services,
    ChooseUs,
    Portfolio,
    Contact,
    Footer,
    Features
  },
  head() {
    return {
      titleTemplate: "%s - Digital Agency",
    };
  },
};
</script>
