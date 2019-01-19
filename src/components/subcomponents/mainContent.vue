<template>
  <div class="main-contents">
    <div class="ingredient-wrap">
      <ingredient-element
        v-for="item in items"
        v-bind:key="item[0]"
        v-bind:name="item[1]"
        v-bind:amount="item[2]"
        v-bind:unit="item[3]"
        v-bind:expiaryDate="item[4]"
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
      return {
        items: [
           [0, '계란','10', '알', '2019-01-30'],
           [1, '우유','1', 'L', '2019-01-28'],
           [2, '계란','10', '알', '2019-01-30'],
           [3, '계란','10', '알', '2019-01-30']
        ]
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
