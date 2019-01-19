<template>
  <div class="main-contents">
    <div class="ingredient-wrap">
      <ingredient-element
        v-for="item in ingredients"
        v-bind:key="item.id"
        v-bind:name="item.name"
        v-bind:amount="item.count"
        v-bind:unit="item.unit"
        v-bind:expiryDate="item.expiray_date"
      />
    </div>
  </div>
</template>

<script>
  import IngredientElement from "./ingredientElement";
  export default {
    name: "mainContent",
    components: {IngredientElement},
    methods: {
      checkItem(item) {
        console.log(item)
      }
    },
    data() {
      const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
      let ingredients;
      this.$http.get(`${baseURI}/nzg/main/2`)
        .then((result) =>{
          // console.log(result.data[0]);
          this.ingredients = result.data;
          // console.log(ingredients[0].count);
        });
      console.log(ingredients);
      return {
        ingredients,
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
  .ingredient-wrap{
    display: flex;
    flex-wrap: wrap;
  }


</style>
