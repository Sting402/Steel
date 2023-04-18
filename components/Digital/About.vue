<template>
  <section class="about style-1" data-scroll-index="1">
    <div class="container">
      <div class="content">
        <div class="about-info">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="title">
                <h3 class="wow fadeInUp slow">
                  “Technology is best when it brings people together.”
                </h3>
                <small class="wow fadeInUp slow fw-bold">Patricia Cross</small>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info">
                <h6 class="wow fadeInUp slow">
                  {{$t("aboutpage.p1")}}
                </h6>
                <p class="wow fadeInUp slow">
                  {{$t("aboutpage.p2")}}
                </p>
                <p class="wow fadeInUp slow">
                  {{$t("aboutpage.p3")}}
                </p>
                <NuxtLink to="/ys-about" class="btn btn-outline-light mt-5 sm-butn wow fadeInUp slow">
                  <span>公司介紹</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/about/num_shap.png" alt="" class="about_shap" />
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
import aboutData from "../../data/Digital/about.json";

export default {
  data() {
    return {
      aboutData,
      position: { from: 300, to: 550 },
      restart: true,
    };
  },
  components: {
    countTo,
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (!this.position) return;

      const { from, to } = this.position;

      if (window.scrollY > from && window.scrollY < to && this.restart) {
        this.$refs.counter.forEach((counter) => counter.start());
        this.restart = false;
      }

      if (window.scrollY < from && !this.restart) {
        this.restart = true;
      }
    });
  },
};
</script>
