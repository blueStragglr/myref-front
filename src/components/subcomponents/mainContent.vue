<template>
  <div class="main-contents">
    <div class="ingredient-wrap-label">
      지금 냉장고에 있는 재료
      <div class="label-bar"></div>
    </div>
    <div class="ingredient-wrap">
      <ingredient-element
        v-for="item in ingredients"
        v-bind:key="item.id"
        v-bind:food_id="item.id"
        v-bind:name="item.name"
        v-bind:amount="item.amount"
        v-bind:unit="item.unit"
        v-bind:expiryDate="item.expiry_date"
      />
      <init-page/>
    </div>
    <div class="ingredient-wrap-label">
      혹시 이 재료가 추가되었나요?
      <div class="label-bar"></div>
    </div>
    <div class="ingredient-wrap">
      <deep-data
        v-for="item in detectedDatas"
        v-bind:key="item.id"
        v-bind:food_id="item.id"
        v-bind:name="item.name"
        v-bind:amount="item.amount"
        v-bind:unit="item.unit"
        v-bind:expiryDate="item.expiry_date"/>
    </div>
  </div>
</template>

<script>
  import IngredientElement from "./ingredientElement";
  import initPage from "./initPage";
  import deepData from "./deepData";


  export default {
    name: "mainContent",
    components: {IngredientElement, initPage, deepData},
    methods: {
      loadData() {
        const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
        this.$http.get(`${baseURI}/nzg/main/2`)
          .then((result) => {
            this.ingredients = result.data;
            this.$http.get(`${baseURI}/nzg/main/2/food_deep`)
              .then((res) => {
                this.detectedDatas = res.data;
              })
          });
        this.$nextTick()
      }
    },
    data() {
      const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
      let ingredients;
      let detectedDatas;
      this.$http.get(`${baseURI}/nzg/main/2`)
        .then((result) => {
          this.ingredients = result.data;
          console.log(result);
          this.$http.get(`${baseURI}/nzg/main/2/food_deep`)
            .then((res) => {
              this.detectedDatas = res.data;
              console.log(res);
            })
        });
      return {
        ingredients, detectedDatas
      }
    }
  }
</script>

<style scoped>

  .main-contents {
    flex: 1 1 calc(100% - 220px);
    padding: 10px;
    height: calc(100vh - 62px);
  }

  @media screen and (max-width: 480px) {
    .main-contents {
      flex: 1 1 100%;
    }
  }

  .ingredient-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .ingredient-wrap-label {
    text-align: left;
    padding: 20px 10px 0;
    font-size: 16px;
    font-weight: 700;
    color: #2d2d2d;
  }

  .label-bar {
    width: 40px;
    height: 3px;
    background-color: #9ed0c6;
  }

</style>
