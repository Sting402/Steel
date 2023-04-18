<template>
  <section class="services section-padding style-1 section" >
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h2 class="wow fadeInUp">
              {{$t('header.product')}}
            </h2>
          </div>
        </div>
      </div>
      <div class="content1">
        <div class="row">
          <div class="col-lg-4">
            <div
              class="service-box mb-4 wow fadeInUp"
              
            >
              <h5>
                {{$t('quality.product1')}}
                
              </h5>
              <!-- <div class="icon">
                <img :src="service.icon" alt="" />
              </div> -->
              <div class="info">
                <div class="text">{{$t('quality.product2')}}</div>
                <div class="text">{{$t('quality.product3')}}</div>
                <div class="text">{{$t('quality.product4')}}</div>
                <div class="text">{{$t('quality.product5')}}</div>
                <div class="text">{{$t('quality.product6')}}</div>
                <div class="text">{{$t('quality.product7')}}</div>  
                
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="service-box mb-4 wow fadeInUp"
              
            >
              <h5>
                {{$t('quality.design')}}
                
              </h5>
              <!-- <div class="icon">
                <img :src="service.icon" alt="" />
              </div> -->
              <div class="info">
                <div class="text">{{$t('quality.design1')}}</div>
                <div class="text">{{$t('quality.design2')}}</div>
                <div class="text">{{$t('quality.design3')}}</div>
                <div class="text">{{$t('quality.design4')}}</div>
                <div class="text">{{$t('quality.design5')}}</div>
                <div class="text">{{$t('quality.design6')}}</div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="service-box mb-4 wow fadeInUp"
              
            >
              <h5>
                {{$t('productpage.intro')}}
                
              </h5>
              <!-- <div class="icon">
                <img :src="service.icon" alt="" />
              </div> -->
              <div class="info3">
                <div class="text">{{$t('productpage.product')}}</div>
                <div class="text">{{$t('productpage.product1')}}</div>
                <div class="text">{{$t('productpage.product2')}}</div>
                <div class="text">{{$t('productpage.product3')}}</div>
                <div class="text">{{$t('productpage.product4')}}</div>
                <div class="text">{{$t('productpage.product5')}}</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/services/ser_shap_l.png" alt="" class="ser_shap_l" />
    <img src="/assets/img/services/ser_shap_r.png" alt="" class="ser_shap_r" />
  </section>
</template>

<script>
import services from "../../data/Digital/services.json";

export default {
  data() {
    return {
      services,
    };
  },
};
</script>

<style scoped>
.content1{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.info3 .text {
  margin-bottom: 10px;
}
</style>
