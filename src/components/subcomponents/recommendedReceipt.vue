<template>
  <div class="recipe-wrap">
    <receiptElement
        v-for="recipe in recipes"
        v-bind:key="recipe.recipe_id"
        v-bind:recipe_nm="recipe.recipe_nm"
        v-bind:recipe_ingredients="recipe.recipe_ingredients"
        v-bind:irdnt_nm="recipe.irdnt_nm"
        v-bind:sumry="recipe.sumry"
        v-bind:img_url="recipe.img_url"
        v-bind:nation_nm="recipe.nation_nm"
    />
  </div>
</template>

<script>
  import receiptElement from "./receiptElement";
  export default {
    name: "recommendedReceipt",
    components: {receiptElement},
    data() {
      const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
        let recipes;
        this.$http.get(`${baseURI}/nzg/recipe/search/계란`)
        .then((result) =>{
            this.recipes = result.data;
            console.log(this.recipes);
          });
     return {
       recipes;
     }
    }
  }
</script>

<style scoped>

</style>
