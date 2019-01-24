<template>
  <div class="ingredient-item">
    <img :src="getImg()" @click=openModal() class="plus center">
  </div>


</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      getImg() {
          var images = require.context('../../assets/', false, /\.png$/)
          return images('./' + "plus" + ".png")
      },
      reload() {
        this.$router.go()
      },
      
      openModal() {
        this.$modal.show('submitModal', {

        });
      },
      deepData(){
        const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
        let ingredients;
        this.$http.get(`${baseURI}/nzg/main/2/food_deep`)
          .then((result) =>{
            this.ingredients = result.data;
            console.log(result);
          });
        return {
          ingredients,
        }
      }
    }
  }
</script>

<style scoped>
  .ingredient-item {
    flex: 0 1 calc(100% / 4 - 20px);
    border: 1px solid #eaeaea;
    border-radius: 3px;
    margin: 10px;
    height: 120px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    text-align: center;
    padding: 25px;
  }


  .center{
      vertical-align: middle;
  }

  .plus{
    opacity: 0.6;
    width: 120px;
    height: auto;
    margin-top: -36px;

  }

  .plus:hover{
    opacity: 1;

  }

  .amount{

  }
  .unit{

  }
</style>
