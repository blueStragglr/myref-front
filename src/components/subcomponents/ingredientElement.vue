<template>
    <div class="ingredient-item">


      <img src="../../assets/plus.png"/>

      <img src="../../assets/carrot.png"/>
      <img src="../../assets/remove.png"/>

      <!--
        이미지 경로찾는법.
        + - 버튼 위치
        <img v-bind:src="'../../assets/'+ imageName"/>
      -->
      <h2>{{ingredientData}}</h2>

    </div>
</template>

<script>

  export default {
    // 컴포넌트 내용 정의
    name: "ingredientElement",
    data() {
      return {
        ingredientData :  '1개, D-7',
        imageName: 'carrot.png'

      }
    },
    computed: {
      computedFunc: function () {

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
