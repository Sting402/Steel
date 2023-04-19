<template>
  <footer class="style-5 border-top brd-gray">
    <div class="container">
      <div class="row gx-0 justify-content-between">
        <div class="col-lg-3 col-sm-6">
          <div class="logo">
              <img src="/assets/img/vs.png" alt="" />
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">{{$t('header.about')}}</div>
            <small class="footer-text">
              {{$t('footer.footer1')}}
              <ul>
                <li>{{$t('footer.footer2')}}</li>
                <li>{{$t('footer.footer3')}}</li>
                <li>{{$t('footer.footer4')}}</li>
              </ul>
              {{$t('footer.footer5')}}
            </small>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">{{$t('footer.footer6')}}</div>
            <small class="text mb-10 d-block">
              {{ footerData.address.address1 }} <br />
              {{ footerData.address.address2 }}
            </small>
            <small class="text mb-10 d-block">
              {{ footerData.phone }}
            </small>
            <small class="text d-block">
              {{ footerData.email }}
            </small>
          </div>
        </div>
        <!-- <div class="col-lg-2">
          <div class="items">
            <div class="title">{{$t('footer.footer7')}}</div>
            <ul>
              <li>
                123
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">{{$t('footer.footer7')}}</div>
            <ul>
              <li>
                123
              </li>
            </ul>
          </div>
        </div>-->
      </div> 
      <div class="foot">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            
          </div>
          <div class="col-lg-6 copy">
            <small class="small">
              © 2006 Copyright by 宇盛精密鈑金工業有限公司 all right reserved
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerData from "../../data/Saas/footer.json";

export default {
  data() {
    return {
      footerData,
    };
  },
};
</script>
<style scoped>
.logo {
  height: 130px;
}
.container{
  padding-top: -100px;
}
.copy{
  display: flex !important;
  margin-top: -60px;
  justify-content: center;
}
</style>
