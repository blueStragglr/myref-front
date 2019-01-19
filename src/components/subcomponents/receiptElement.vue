<template>
  <div class="recipe-item">
    <div class="recipe-data">

    </div>
  </div>
</template>

<script>
  export default {
    name: "receiptElement",
    props: ['recipeId', 'recipeKoName'],
    data() {
      // const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
      // let recipes;
      // this.$http.get(`${baseURI}/nzg/search/나물비빔밥`)
      //   .then((result) =>{
      //     this.recipes = result;
      //     console.log(result);
      //   });
      // return {
      //   recipes,
      // }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
