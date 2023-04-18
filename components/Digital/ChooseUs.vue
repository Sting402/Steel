<template>
  <section class="choose-us section-padding pt-0 style-1" data-scroll-index="3">
    <div class="container">
      <div class="info">
        <div class="section-head mb-60">
          <h6 class="color-main text-uppercase wow fadeInUp">
            {{ $t("header.employee") }}
          </h6>
          <h2 class="wow fadeInUp">
            {{ $t("employeepage.benifit") }}
          </h2>
        </div>
        <div class="contain">
          <ul class="column-list">
            <li>
              <span class="icon">
                <i class="bi bi-check2"></i>
              </span>
              <h6>
                {{ $t("employeepage.bonus") }}
              </h6>
            </li>
          </ul>
          <ul class="column-list">
            <li>
              {{ $t("employeepage.bonus1") }}
              {{ $t("employeepage.bonus2") }}
              {{ $t("employeepage.bonus3") }}
            </li>
          </ul>
          <ul class="column-list">
            <li>
              <span class="icon">
                <i class="bi bi-check2"></i>
              </span>
              <h6>
                {{ $t("employeepage.insurence") }}
              </h6>
            </li>
          </ul>
          <ul class="column-list">
            <li>
              {{ $t("employeepage.insurence1") }}
              {{ $t("employeepage.insurence2") }}
              {{ $t("employeepage.insurence3") }}
            </li>
          </ul>
          <ul class="column-list">
            <li>
              <span class="icon">
                <i class="bi bi-check2"></i>
              </span>
              <h6>
                {{ $t("employeepage.policy") }}
              </h6>
            </li>
          </ul>
          <ul class="column-list">
            <li>
              {{ $t("employeepage.policy1") }}
              {{ $t("employeepage.policy2") }}
              {{ $t("employeepage.policy3") }}
            </li>
          </ul>
          <ul class="column-list">
            <li>
              <span class="icon">
                <i class="bi bi-check2"></i>
              </span>
              <h6>
                {{ $t("employeepage.off") }}
              </h6>
            </li>
          </ul>
          <ul class="column-list">
            <li>
              {{ $t("employeepage.off1") }}
              {{ $t("employeepage.off2") }}
              {{ $t("employeepage.off3") }}
            </li>
          </ul>
          <ul class="column-list">
            <li>
              <span class="icon">
                <i class="bi bi-check2"></i>
              </span>
              <h6>
                {{ $t("employeepage.sup") }}
              </h6>
            </li>
          </ul>
          <ul class="column-list">
            <li>
              {{ $t("employeepage.sup1") }}
              {{ $t("employeepage.sup2") }}
              {{ $t("employeepage.sup3") }}
            </li>
          </ul>
        </div>
        <br />
        <br />
        <span>{{ $t("employeepage.rules") }}</span>
      </div>
      <div class="info">
        <div class="section-head mb-60">
          <h6 class="color-main text-uppercase wow fadeInUp">
            {{ $t("header.quality") }}
          </h6>
          <h2 class="wow fadeInUp">
            {{ $t("header.quality") }}
          </h2>
        </div>
        <div class="contain">
          <ul class="column-list">
            <li>
              {{ $t("policypage.p1") }}
            </li>
            <li>
              {{ $t("policypage.p2") }}
            </li>
            <li>
              {{ $t("policypage.p3") }}
            </li>
            <li>
              {{ $t("policypage.p4") }}
            </li>
            <li>
              {{ $t("policypage.p5") }}
            </li>
            <li>
              {{ $t("policypage.p6") }}
            </li>
            <li>
              {{ $t("policypage.p7") }}
            </li>
            <li>
              {{ $t("policypage.p8") }}
            </li>
            <li>
              {{ $t("policypage.p9") }}
            </li>
            <li>
              {{ $t("policypage.p10") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chooseUsData from "../../data/Digital/chooseus.json";

export default {
  data() {
    return {
      chooseUsData,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
}

.info {
  flex-basis: 50%;
  max-width: 50%;
}
</style>
