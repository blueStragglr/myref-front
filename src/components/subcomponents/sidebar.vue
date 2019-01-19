<template>
  <div class="sidebar">
    <div id="login-wrap">
      User Info
      <user-info/>
    </div>
    <div class="recipe">
      <div class="recipe-label">
        <span>추천 레시피</span>
      </div>
      <div class="recipe-scroll">
      <!--<button @click="openModal()">-->
      <!--modal-->
      <!--</button>-->
      <!--{{recipeId}}-->
        <recommendedReceipt/>
      </div>
    </div>
  </div>
</template>

<script>
  import userInfo from "./userInfo";
  import recommendedReceipt from "./recommendedReceipt";

  export default {
    name: "sidebar",
    props: ['recipeId'],
    components: {userInfo, recommendedReceipt},
    methods: {
      openModal() {
        this.$modal.show('receiptModal', {
          recipeId: this.key,
          recipeKoName: this.recipe_nm

        });
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
