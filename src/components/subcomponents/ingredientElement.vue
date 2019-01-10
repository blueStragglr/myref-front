<template>
    <div class="ingredient-item">
      <div class="ingredient-data">
      {{name}}
      </div>

      <div class="ingredient-data">
      {{amount}}{{unit}}
      </div>

      <div class="ingredient-data">
      {{expiaryDate}}
      </div>

    </div>
</template>

<script>
  export default {
    name: "ingredientElement",
    props: ['name', 'amount', 'unit', 'expiaryDate'],
    data() {
      return {
      }
    },
    methods: {
      edit() {

      },
      editConfirm() {

      },
      delete() {

      }
    }
  }

</script>

<style scoped>
  .ingredient-item {
    flex: 0 1 calc(100% / 4 - 20px);
    border: 1px solid #e9e9e9;
    margin: 10px;
    height: 120px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  .ingredient-data {
    padding: 10px;
  }
</style>
