<template>
  <section class="about section-padding style-3" data-scroll-index="3">
    <div class="top-content">
      <div class="img img-left">
        <img src="/assets/img/about/style_3_1.png" alt="" />
        <div class="info-circle" v-for="(number, index) in aboutData.numbers" :key="index">
          <div class="cont">
            <h2>{{ number.value }}</h2>
            <small>{{ number.title }}</small>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row gx-0 justify-content-end">
          <div class="col-lg-5">
            <div class="info">
              <div class="section-head long-shape mb-40 style-3">
                <h3>Iteck’s <span>Mission & Vision</span></h3>
              </div>
              <h5 class="h5">
                “It is only when they go wrong that machines remind you how powerful they are.”
              </h5>
              <div class="text mb-20">
                Iteck Co is the partner of choice for many of the world’s leading enterprises, SMEs
                and technology challengers. We help businesses elevate their value through custom
                software development, product design, QA and consultancy services.
              </div>
              <div class="text mb-70">
                Iteck specializes in technological and IT-related services such as product
                engineering, warranty management, building cloud, etc.
              </div>
              <NuxtLink to="/page-about-5" class="btn rounded-pill bg-blue2 sm-butn text-white">
                <span>More About Us</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btm-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="info pe-lg-5">
              <div class="section-head mb-40 style-3">
                <h3>Iteck’s <span>Technology</span></h3>
              </div>
              <div class="text mb-30">
                Our team can assist you in transforming your business through latest tech
                capabilities to stay ahead of the curve.
              </div>
              <ul>
                <li v-for="(feature, index) in aboutData.features" :key="index"> <i class="bi bi-star-fill me-3"></i> {{ feature }}</li>
              </ul>
              <NuxtLink to="/page-about-5" class="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                <span>How We Works</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="img img-right">
        <img src="/assets/img/about/style_3_2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import aboutData from '../../data/Software/about.json';

export default {
  data() {
    return {
      aboutData
    }
  },
}
</script>
