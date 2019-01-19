<template>
  <div class="recipe-item">
    <div class="recipe-data">
      {{name}}
    </div>

    <div class="recipe-data">
      {{recipe}}
    </div>

  </div>
</template>

<script>
  export default {
    name: "receiptElement",
    props: ['name', 'recipe'],
    data() {
      return {
      }
    },
    methods: {
      openReceiptModal() {

      }
    }
  }
</script>

<style scoped>

</style>
