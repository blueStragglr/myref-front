<template>
  <div id="app">
    <router-view/>
    <recommendedReceipt/>
    <modal name="receiptModal" @before-open="beforeOpen" :width="300" :height="300">
      <p>{{ ingredient }}</p>
      <p>{{ recipe }}</p>
      <button @click="closeModal">
        닫기
      </button>
    </modal>
  </div>
</template>

<script>
import recommendedReceipt from "./components/subcomponents/recommendedReceipt";

export default {
  name: 'App',
  components: {recommendedReceipt},
  data () {
    let ingredient, recipe;
    return {
      ingredient: 'ingredient',
      recipe
    }
  },
  methods: {
    beforeOpen(event) {
      this.ingredient = '추천 레시피의 디테일한 정보를';
      this.recipe = '보여줍니다.';
    },
    closeModal() {
      this.$modal.hide('receiptModal')
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
    font-family: 'Iropke Batang', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
