<template>
  <section class="features style-7 section-padding" data-scroll-index="2">
    <div class="container">
      <div class="section-head text-center style-4 mb-40">
        <div class="top-title mb-10">
          <img src="/assets/img/line_l.png" alt="" />
          <h5>公司沿革</h5>
          <img src="/assets/img/line_r.png" alt="" />
        </div>
        <h4 class="">
          {{ $t("legacypage.start") }}
          <br />
          {{ $t("legacypage.who") }}
          <br />
          {{ $t("legacypage.cap") }}
          <br />
          {{ $t("legacypage.staffs") }}
          <br />
          {{ $t("legacypage.history") }}
        </h4>
      </div>
    </div>
    <div class="content">
      <div class="features-slider7">
        <swiper :options="swiperOptions">
          <swiper-slide >
            <div class="info">
              <p class="color-999">《1980》</p>
              <h5>
                {{$t('legacypage.1980')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《1983》</p>
              <h5>
                {{$t('legacypage.1983')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《1990》</p>
              <h5>
                {{$t('legacypage.1990')}} 
                <br>
                {{$t('legacypage.1990-1')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《1994》</p>
              <h5>
                {{$t('legacypage.1994')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《1995》</p>
              <h5>
                {{$t('legacypage.1995')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《1997》</p>
              <h5>
                {{$t('legacypage.1997')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2003》</p>
              <h5>
                {{$t('legacypage.2003')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2007》</p>
              <h5>
                {{$t('legacypage.2007')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2008》</p>
              <h5>
                {{$t('legacypage.2008')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2013》</p>
              <h5>
                {{$t('legacypage.2013')}} 
                <br>
                {{$t('legacypage.2013-1')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2015》</p>
              <h5>
                {{$t('legacypage.2015')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2016》</p>
              <h5>
                {{$t('legacypage.2016')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2017》</p>
              <h5>
                {{$t('legacypage.2017')}} 
                <br>
                {{$t('legacypage.2017-1')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2018》</p>
              <h5>
                {{$t('legacypage.2018')}} 
              </h5>
            </div>
          </swiper-slide>
          <swiper-slide >
            <div class="info">
              <p class="color-999">《2019》</p>
              <h5>
                {{$t('legacypage.2019')}} 
              </h5>
            </div>
          </swiper-slide>          
        </swiper>
      </div>
    </div>
    <img
      src="/assets/img/feat_circle.png"
      alt=""
      class="img-circle rotate-center"
    />
  </section>
</template>

<script>
import features from "../../data/ITCreative/features.json";

export default {
  data() {
    return {
      features,
      swiperOptions: {
        spaceBetween: 15,
        centeredSlides: true,
        speed: 10000,
        autoplay: {
          delay: 1,
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          787: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
};
</script>
