<template>
  <div class="recipe-wrap">
    <receiptElement
      v-for="recipe in recipes"
      v-bind:key="recipe[0]"
      v-bind:name="recipe[1]"
      v-bind:recipe="recipe[2]"
      />
  </div>
</template>

<script>
  import receiptElement from "./receiptElement";
  export default {
    name: "recommendedReceipt",
    components: {receiptElement},
    data() {
      return {
        recipes: [
          [0, '계란', '계란 레시피'],
          [1, '소고기', '소고기 레시피'],
          [2, '당근', '당근 레시피'],
          [3, '고구마', '고구마 레시피']
        ]
      }
    },
    methods: {
      requestReceiptList() {

      }
    }
  }
</script>

<style scoped>

</style>
