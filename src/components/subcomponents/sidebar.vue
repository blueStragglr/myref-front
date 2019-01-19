<template>
    <div class="sidebar">
      <div id="login-wrap">
        User Info
        <user-info/>
      </div>
      <div>
        <button @click="openModal()">
          modal
        </button>
        {{recipeId}}
        <recommendedReceipt/>

      </div>
    </div>
</template>

<script>
  import userInfo from "./userInfo";
  import recommendedReceipt from "./recommendedReceipt";

  export default {
    name: "sidebar",
    props: [ 'recipeId' ],
    components: { userInfo,recommendedReceipt },
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
.sidebar{
  width: 200px;
  padding: 15px;
  border-left: 1px solid #e9e9e9;

}
@media screen and (max-width: 480px) {
  .sidebar{
    flex: 1 1 100%;
  }
}
#login-wrap {
  display: inline;
}
</style>
