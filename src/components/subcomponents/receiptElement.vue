<template>
  <div class="recipe-item">
    <div class="recipe-name">
      {{recipe_nm}}
    </div>
      <!--{{recipe_ingredients}}-->
      {{irdnt_nm}}
      <!--{{sumry}}-->
    <img :src="img_url">
      <!--{{nation_nm}}-->
  </div>
</template>

<script>
  export default {
    name: "receiptElement",
    props: [
      'recipe_nm',
      'recipe_ingredients',
      'irdnt_nm',
      'sumry',
      'img_url',
      'nation_nm'

    ],
    data() {
      // const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
      // let recipes;
      // this.$http.get(`${baseURI}/nzg/search/나물비빔밥`)
      //   .then((result) =>{
      //     this.recipes = result;
      //     console.log(result);
      //   });
      return {

      }
    },
    methods: {
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
