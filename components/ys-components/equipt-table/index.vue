<script>
export default {};
</script>

<template>
  <section class="community section-padding style-5">
    <div class="container">
      <div class="h1">
        <h1>設備清單</h1>
      </div>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th colspan="1">{{ $t("equipmentpage.name") }}</th>
              <th colspan="1">{{ $t("equipmentpage.style") }}</th>
              <th colspan="1">{{ $t("equipmentpage.amount") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ $t("equipmentpage.name1") }}</th>
              <td>AMADA VIROS 357 Queen</td>
              <td class="amount">1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name2") }}</th>
              <td>AMADA LC-1212</td>
              <td class="amount">1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name3") }}</th>
              <td>AMADA RG80&RG60</td>
              <td class="amount">1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name4") }}</th>
              <td></td>
              <td class="amount">5</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name5") }}</th>
              <td></td>
              <td class="amount">5</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name6") }}</th>
              <td></td>
              <td class="amount">2</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name7") }}</th>
              <td></td>
              <td class="amount">2</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name8") }}</th>
              <td></td>
              <td class="amount">1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name9") }}</th>
              <td>{{ $t("equipmentpage.name9-1") }}</td>
              <td class="amount">1 / 1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name10") }}</th>
              <td>AMADA VIROS 357 Queen</td>
              <td class="amount">1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name11") }}</th>
              <td></td>
              <td class="amount">1</td>
            </tr>
            <tr>
              <th>{{ $t("equipmentpage.name12") }}</th>
              <td></td>
              <td class="amount">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<style scoped>
.table {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.amount {
  text-align: center;
}

table th,
td {
  border-collapse: collapse;
  border: 1px solid black;
  padding: 5px;
}
.h1{
  text-align: center;
  margin-bottom: 20px;
}
</style>
