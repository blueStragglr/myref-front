<template>
  <div id="app">
    <router-view/>
    <modal name="receiptModal" @before-open="beforeOpen" :width="300" :height="300">
      <p>{{ ingredient }}</p>
      <p>{{ recipe }}</p>
      <p>{{ recipeKoName }}</p>
      <button @click="closeModal">
        닫기
      </button>
    </modal>
  </div>
</template>

<script>
import receiptElement from "./components/subcomponents/recommendedReceipt";

export default {
  name: 'App',
  components: { receiptElement },
  props: ['recipeId', 'recipeKoName'],
  data () {
    let ingredient, recipe, koName;
    return {
      ingredient,
      recipe,
      koName
    }
  },
  methods: {
    beforeOpen(event) {
      this.recipe = event.params.recipeId;
      console.log(event);
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
    /*font-family: 'Iropke Batang', serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
