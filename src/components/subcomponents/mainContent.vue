<template>
  <div class="main-contents">
    <div class="ingredient-wrap">
      <ingredient-element/>
      <ingredient-element/>
      <ingredient-element/>
      <ingredient-element/>
      <ingredient-element/>
      <ingredient-element/>
      <ingredient-element/>
    </div>
  </div>
</template>

<script>
  import IngredientElement from "./ingredientElement";
  export default {
    name: "mainContent",
    components: {IngredientElement}
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
