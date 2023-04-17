<script>
export default {};
</script>

<template>
  <section class="community section-padding style-5">
    <div class="container">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th colspan="1">{{ $t('equipmentpage.name') }}</th>
              <th colspan="1">{{ $t('equipmentpage.style') }}</th>
              <th colspan="1">{{ $t('equipmentpage.amount') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>CNC 電腦沖床</th>
              <td>AMADA VIROS 357 Queen</td>
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

table th, td {
  border-collapse: collapse;
  border: 1px solid black;
}
</style>
