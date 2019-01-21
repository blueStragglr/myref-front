<template>
  <div id="app">
    <router-view/>
    <modal name="receiptModal" height="auto" :scrollable="true" :width="300" @before-open="beforeOpen" >
      <p>요리명 : {{ recipeName }}</p>
      <p>카테고리: {{ nation }}</p>
      <p>소요 시간: {{ cook_t }}</p>
      <p>재료: {{ ingredient }}</p>
      <p>{{ sumry }}</p>
      <img :src="imgs">
      <button @click="closeModal">
        닫기
      </button>
    </modal>
    <modal name="submitModal" :width="300" :height="300">
      <input type="text" name="ingredientName" v-model="input.ingredientName" placeholder="이름"> <br/>
      <input type="text" name="ingredientAmount" v-model="input.ingredientAmount" placeholder="개수"> <br/>
      <input type="text" name="expiryDate" v-model="input.expiryDate" placeholder="날짜(YYYY-MM-DD)"> <br/>
      <input type="text" name="ingredientUnit" v-model="input.ingredientUnit" placeholder="단위(개/ml)"> <br/>
      <input type="submit" value="추가하기" @click=addIngredient >

      <button @click="closeSubmitModal">
        닫기
      </button>
    </modal>
  </div>
</template>

<script>
import receiptElement from "./components/subcomponents/receiptElement";

export default {
  name: 'App',
  components: { receiptElement },
  // props: ['recipeId', 'recipeKoName'],
  data () {
    let ingredient, recipeName, sumry, imgs, nation, cook_t, key;
    return {
      ingredient,
      recipeName, 
      sumry, 
      imgs, 
      nation, 
      cook_t, 
      key,
      input: {
          ingredientName: "",
          ingredientAmount: "",
          expiryDate: "",
          ingredientUnit: ""
        }
    }
  },
  methods: {
      beforeOpen(event) {
      this.recipeName = event.params.recipeKoName;
      this.ingredient = event.params.recipe_ingredients;
      this.sumry = event.params.recipeSumry;
      this.imgs = event.params.imgs;
      this.nation = event.params.nation;
      this.cook_t = event.params.cook_t;
      this.key = event.params.key;
      console.log(event);
      const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
      let spec_recipes;
      this.$http.get(`${baseURI}/nzg/2/recipe/${this.key}`)
      .then((result) =>{
        this.spec_recipes = result.data;
        console.log(this.spec_recipes);
      });
    },
    closeModal() {
      this.$modal.hide('receiptModal')
    },
    closeSubmitModal() {
      this.$modal.hide('submitModal')
    },
    addIngredient() {
      const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
      const url = `${baseURI}/nzg/2/food/added`;
      this.$http.post(url,
        {
          name: this.input.ingredientName,
          amount: this.input.ingredientAmount,
          created_at: this.input.expiryDate,
          unit: this.input.ingredientUnit
        })
        .then(function(res){
          console.log(res);
      });
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  @import url('//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css');

  body {
    margin: 0;
  }
  #app {
    font-size: 20px;
    /*font-family: 'Iropke Batang', serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
