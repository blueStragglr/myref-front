<template>
  <div class="ingredient-item">
    
      <img class="ingredient-img" :src="getImgUrl(name)" >
      <br/>
      <span class="amount">{{amount}}</span>
      <span class="unit">{{unit}}</span><br/>
      <div class="commit-button">
        <button @click=addDeepdata()>예</button>
        <div>&nbsp;</div>
        <button @click=removeDeepdata()>아니오</button>
      </div>
    
  </div>


</template>

<script>
  export default {
    // 컴포넌트 내용 정의
    name: "deepData",
    props: ['name', 'amount', 'unit', 'expiryDate','food_id'],
    data() {

      return {
        
      }
    },
    methods: {
      getImgUrl(name) {
        var images = require.context('../../assets/', false, /\.png$/)
        return images('./' + name + ".png")
      },
      removeDeepdata() {
        const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
        let ingredients;
                this.$http.get(`${baseURI}/nzg/2/deep/delete/${this.food_id}`)
          .then((result) =>{
              this.$router.go()
          });
        return {
        }
      },
      addDeepdata() {
        const baseURI = 'http://ec2-52-79-41-12.ap-northeast-2.compute.amazonaws.com';
        let ingredients;
        this.$http.get(`${baseURI}/nzg/2/deep/add/${this.food_id}`)
          .then((result) =>{
            this.$router.go()
          });
        return {
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
    padding: 10px;
  }

  .commit-button>button:hover{
    opacity: 1;
  }
  .commit-button>button{
    border: none;
    background-color: transparent;
    font-size: 12px;
    font-weight: 500;
    width: 45%;
    opacity: .6;
    cursor: pointer
  }
  .commit-button>div{
    display: inline-block;
    width: 1px;
    margin-top: 2px;
    background-color: #808080;
  }

  .commit-button{
    border-top: 1px solid #eaeaea;
    font-size: 14px;
    padding: 5px;
  }

  .ingredient-img{
    width: 48px;
    height: auto;
  }
  .ingredient-data {
    padding: 10px;
  }

  .unit,
  .amount{
    opacity: 0.6;
    font-size: 16px;
    cursor: pointer;
  }
  .unit:hover,
  .amount:hover{
    opacity: 1;
  }

  .amount{

  }
  .unit{

  }
</style>
