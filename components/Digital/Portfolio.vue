<template>
  <section
    class="portfolio section-padding bg-gray style-1"
    data-scroll-index="4"
  >
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h2 class="wow fadeInUp">
              {{ $t('header.equipment') }}
            </h2>
          </div>
        </div>
      </div>
      <div class="content wow fadeIn slow">
        <div class="portfolio-slider">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name1')}}</h5>
                  <div class="text">AMADA VIROS 357 Queen</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name2')}}</h5>
                  <div class="text">AMADA LC-1212</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name3')}}</h5>
                  <div class="text">AMADA ASF_48CF</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 5 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name4')}}</h5>
                  <div class="text">	AMADA RG80&RG60</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 5 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name5')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 2 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name6')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 2 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name7')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name8')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name9')}}</h5>
                  <div class="text">{{$t('equipmentpage.name9-1')}}</div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name10')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name11')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="portfolio-card">
                <div class="info">
                  <small class="d-block color-main text-uppercase"> {{$t('equipmentpage.amount')}}: 1 </small>
                  <h5>{{$t('equipmentpage.name')}}:{{$t('equipmentpage.name12')}}</h5>
                  <div class="text"></div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <img src="/assets/img/projects/prog/shap_r.png" alt="" class="shap_r" />
    <img src="/assets/img/projects/prog/shap_l.png" alt="" class="shap_l" />
  </section>
</template>

<script>
import portfolios from "../../data/Digital/portfolio.json";

export default {
  data() {
    return {
      portfolios,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".portfolio-slider .swiper-pagination",
        },
        navigation: {
          nextEl: ".portfolio-slider .swiper-button-next",
          prevEl: ".portfolio-slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000,
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          787: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
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
