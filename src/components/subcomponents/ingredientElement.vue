<template>
    <div class="ingredient-item">
      123
    </div>
</template>

<script>


  export default {
    // 컴포넌트 내용 정의
    name: "ingredientElement",
    amount: "amount",
    expdate: "expdate",

    methods: {
      edit(data) {
        return data;
      },
      confirm() {
        return;
      },
      delete() {
        return;
      }

    },
    data: function() {
          return data;
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
