<template>
  <div class="recipe-wrap">
    <receiptElement
      v-for="recipe in recipes"
      v-bind:key="recipe.recipe_id"
      v-bind:recipe_id="recipe.recipe_id"
      v-bind:recipe_nm="recipe.recipe_name"
      v-bind:recipe_ingredients="recipe.recipes_ingredients"
      v-bind:sumry="recipe.sumry"
      v-bind:img_url="recipe.img_url"
      v-bind:nation_nm="recipe.nation_nm"
      v-bind:cook_t="recipe.cooking_time"
      v-bind:irdnt_nm="recipe.recipes_ingredients"
      v-bind:spec_recipes="recipe.img_url"
    />

  </div>
</template>

<script>
  import receiptElement from "./receiptElement";
  export default {
    name: "recommendedReceipt",
    components: {receiptElement},
    data() {
      const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
        let recipes;
        this.$http.get(`${baseURI}/nzg/2/recipe/recommand`)
        .then((result) =>{
            this.recipes = result.data;
          });
     return {
       recipes
     }
   }
  }
</script>

<style scoped>
.recipe-wrap{
  height: 350px;
  overflow-y: scroll;
  margin-top: 16px;
}
</style>
