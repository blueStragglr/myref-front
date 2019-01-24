<template>
  <div class="sidebar">
    <div id="login-wrap">
      User Info
      <user-info/>
    </div>
    <div class="recipe">
        <img :src="getImg()" @click=reload()>
        <div class="recipe-label">
        <span>추천 레시피</span>
    
      </div>
      <div class="recipe-scroll">
        <recommendedReceipt/>
      </div>
    </div>
  </div>
</template>

<script>
  import userInfo from "./userInfo";
  import recommendedReceipt from "./recommendedReceipt";

  import receiptElement from "./receiptElement";

  export default {
    name: "sidebar",
    props: [
      'receiptElement',
      'recipe_nm',
      'recipe_ingredients',
      'irdnt_nm',
      'sumry',
      'img_url',
      'nation_nm'
    ],
    components: {userInfo, recommendedReceipt, receiptElement},
    methods: {

      getImg() {
          var images = require.context('../../assets/', false, /\.png$/)
          return images('./' + "refresh-button" + ".png")
      },
      reload() {
        this.$router.go()
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    width: 200px;
    padding: 15px;
    border-left: 1px solid #e9e9e9;

  }

  @media screen and (max-width: 480px) {
    .sidebar {
      flex: 1 1 100%;
    }
  }

  #login-wrap {
    display: inline;
    border-bottom: 1px solid #e9e9e9;
    font-size: 16px;
  }

  .recipe {
    margin-top: 20px;
    padding-top: 10px;
  }

  .recipe-label {
    font-size: 16px;
    color: #4d4d4d;
    font-weight: 500;
  }
  .recipe-label > span{
    border-bottom: 1px solid #269b74;
  }
</style>
