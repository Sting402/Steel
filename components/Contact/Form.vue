<template>
  <section :class="`contact section-padding pt-${styleType === '4' ? '0':'50'} style-6`">
    <template v-if="styleType === '5'">
      <div class="section-head text-center mb-100 style-5">
        <h2 class="mb-20">{{ rtl ? 'يسعدنا' : '聯絡' }} <span>{{ rtl ? 'تواصلك' : '我們' }}</span> {{ rtl && 'معنا' }}</h2>
        <p>{{ rtl ? 'سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة' : '您也可以透過以下聯絡資料，直接聯絡我們' }}</p>
      </div>
      <div class="text-center mb-100">
        <h2 class="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">電話:{{ contactInfoData.phone }}</h2>
        <h4 class="fw-normal mb-20 color-000">傳真:{{ contactInfoData.fax }}</h4>
        <h4 class="fw-normal mb-10 color-000">廠址: {{ contactInfoData.address }}</h4>
      </div>
    </template>
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form action="contact.php" class="form" method="post" @submit="handleFormSubmit">
              <p class="text-center text-danger fs-12px mb-30">{{ rtl ? 'الحقل اللذى يحتوى على هذة العلامة اجبارى *' : ' * 星號為必填必選資料' }}</p>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="name" class="form-control" :placeholder="rtl ? 'الاسم' : '寄件人姓名 *'" v-model="formData.name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="name" class="form-control" :placeholder="rtl ? 'الاسم' : '公司名稱 *'" v-model="formData.company" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="number" name="name" class="form-control" :placeholder="rtl ? 'الاسم' : '連絡電話 *'" v-model="formData.mobile" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="name" class="form-control" :placeholder="rtl ? 'الاسم' : '手機號碼'" v-model="formData.phone" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="name" class="form-control" :placeholder="rtl ? 'الاسم' : '聯絡地址'" v-model="formData.address" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input type="text" name="email" class="form-control" :placeholder="rtl ? 'البريد الالكترونى *' : '電子郵件 *'" v-model="formData.email" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-20">
                    <select class="form-select" :value="rtl ? 'كيف يمكننا مساعدتك ؟' : '問題選項 *'" name="option" @change="handleFormOptionChange">
                      <option value="問題選項">{{ rtl ? 'كيف يمكننا مساعدتك ؟' : '問題選項' }}</option>
                      <option value="option 1">{{ rtl ? 'الاختيار الاول' : '產品問題' }}</option>
                      <option value="option 2">{{ rtl ? 'الاختيار الثاني' : '其他問題' }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea rows="10" name="message" class="form-control" :placeholder="rtl ? 'كيف يمكننا مساعدتك ؟' : '訊息內容 *'" v-model="formData.message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <div class="form-check d-inline-flex mt-30 mb-30">
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <input type="submit" :value="rtl ? 'ارسل طلبك' : '填好送出'" :class="`btn rounded-pill ${styleType === '4' ? 'bg-blue4 text-white fs-12px' : 'blue5-3Dbutn hover-blue2 sm-butn'} fw-bold text-light`" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <img src="/assets/img/icons/contact_a.png" alt="" class="contact_a" />
        <img src="/assets/img/icons/contact_message.png" alt="" class="contact_message" />
      </div>
    </div>
  </section>
</template>

<script>
import contactInfo from '../../data/Contact/form.json';
import contactInfoRTL from '../../data/Contact/form-rtl.json';

export default {
  props: ['rtl', 'styleType'],
  computed: {
    contactInfoData() {
      return this.rtl ? contactInfoRTL : contactInfo;
    }
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        website: "",
        option: "",
        message: ""
      }
    }
  },
  methods: {
    handleFormOptionChange(e) {
      this.formData.option = e.target.value
    },
    async handleFormSubmit(e)  {
      e.preventDefault();
      const formValues = new FormData();

      formValues.append('name', this.formData.name);
      formValues.append('email', this.formData.email);
      formValues.append('option', this.formData.option);
      formValues.append('phone', this.formData.phone);
      formValues.append('website', this.formData.website);
      formValues.append('message', this.formData.message);
      
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: formValues
      })
        .catch(err => alert(err.message));
        

      if (!res.ok) return;

      alert('Form submitted successfully.')
    }
  }
}
</script>
