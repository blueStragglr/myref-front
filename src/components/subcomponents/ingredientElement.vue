<template>
    <div class="ingredient-item">
      123
      <div v-for="item in items">
        {{ item.message }}
      </div>
    </div>
</template>

<script>
  export default {
    name: "ingredientElement",
    data() {
      return {
        items: [
          { name: 'a' },
          { amount: 'b' },
          { expiaryDate: 'c' }
        ]
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
  }
</style>
