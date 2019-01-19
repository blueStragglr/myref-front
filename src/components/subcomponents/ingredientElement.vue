<template>
    <div class="ingredient-item">
      {{name}}<br/>
      {{amount}}<br/>
      {{unit}}<br/>
      {{expiryDate}}
    </div>
</template>
<script>

  export default {
    // 컴포넌트 내용 정의
    name: "ingredientElement",
    props: ['name', 'amount', 'unit', 'expiryDate'],
    data() {
      return {
        ingredientData :  '1개, D-7',
        imageName: 'carrot.png'

      }
    },
    computed: {
      computedFunc: function () {
      }
    },
    methods: {
      edit(data) {
        return data;
      },
      confirm() {
        return 0;
      },
      delete() {
        return 0;
      }
    }
  }

</script>

<style scoped>
  .ingredient-item {
    flex: 0 1 calc(100% / 4 - 20px);
    border: 0px solid #e9e9e9;
    margin: 10px;
    height: 120px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  .ingredient-data {
    padding: 10px;
  }
</style>
