<template>
  <div>
    <TopNav />
    <Navbar />
    <Header />
    <main>
      <About />
      <Services />
      <ChooseUs />
      <Portfolio />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
//公司介紹
import TopNav from '../../components/Navbars/DigitalNav/TopNav';
import Navbar from '../../components/Navbars/DigitalNav/OnePageNav';
import Header from '../../components/Digital/Header';
import Footer from '../../components/Saas/Footer';

export default {
  name: 'HomeDigitalAgency',
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Header,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Digital Agency",
    }
  }
}
</script>
