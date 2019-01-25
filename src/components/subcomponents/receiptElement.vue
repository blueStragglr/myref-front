<template>
  <div class="recipe-item" v-on:click.self="openModal()">
    <div class="recipe-name" v-on:click.self="openModal()">
      {{recipe_nm}}
    </div>
    <img :src="img_url" v-on:click.self="openModal()">
      <!--{{nation_nm}}-->
  </div>
</template>

<script>
  export default {
    name: "receiptElement",
    props: [
      'recipe_id',
      'recipe_nm',
      'recipe_ingredients',
      'irdnt_nm',
      'sumry',
      'img_url',
      'nation_nm',
      'cook_t',
      'spec_recipes'
    ],
    data() {
      return {
      }
    },
    methods: {
      openModal() {
        this.$modal.show('receiptModal', {
          recipeKoName: this.recipe_nm,
          recipeIngredients: this.recipe_ingredients,
          recipeSumry: this.sumry,
          imgs: this.img_url,
          nation: this.nation_nm,
          cook_t: this.cook_t,
          recipe_id: this.recipe_id,
          spec_recipes: this.img_url
        });
      }
    }
  }
</script>

<style scoped>
.recipe-item>img{
  width: 100px;
  margin: 10px auto;
}
.recipe-item{
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: -1px;
  padding: 10px 5px;
  font-size: 14px;
  opacity: 0.7;
  cursor: pointer;
  width: 100%;
}
.recipe-item:hover{
  opacity: 1;
}

</style>
