<template>    
    <div class="ingredient-item">
      
      <img v-bind:src=imagePath />
      <h2>{{message}}</h2>
      <br>1개
      <br>D-7

    </div>
</template>

<script>
    
  export default {
    name: "ingredientElement",
    data() {
      return {
        message : 'Hello',
        imagePath: "../assets/carrot.png"
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
  }
</style>
