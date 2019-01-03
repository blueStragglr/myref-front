<template>
  <div id="ingredient">
    <div class="ingredient-item">
      123
    </div>
    <div class="ingredient-item">
      123
    </div>
    <div class="ingredient-item">
      123
    </div>
    <div class="ingredient-item">
      123
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainContent"
  }
</script>

<style scoped>
  #ingredient {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }

  .ingredient-item {
    flex: 0 1 calc(100% / 3 - 20px);
    border: 1px solid #e9e9e9;
    margin: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  }

</style>
