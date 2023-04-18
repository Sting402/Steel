<template>
  <footer class="style-5 border-top brd-gray">
    <div class="container">
      <div class="row gx-0 justify-content-between">
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">公司介紹</div>
            <small class="footer-text">
              宇盛產品範圍涵蓋
              <ul>
                <li>電控 / 儀控外箱</li>
                <li>電子通訊產品及機櫃</li>
                <li>CNC 加工機械</li>
              </ul>
              面板及零配件等。
            </small>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">公司資訊</div>
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
        <div class="col-lg-2">
          <div class="items">
            <div class="title">相關連結</div>
            <ul>
              <li v-for="(link, index) in footerData.usefulLinks" :key="index">
                <a :href="link.link">{{ link.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">相關連結</div>
            <ul>
              <li v-for="(link, index) in footerData.resources" :key="index">
                <a :href="link.link">{{ link.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="logo">
              <img src="/assets/img/vs.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
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
  height: 40px;
}
</style>
