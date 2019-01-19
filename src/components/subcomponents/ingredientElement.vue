<template>
    <div class="ingredient-item">

      <img class="ingredient-img" :src="getImgUrl(name)">
      <br/>
      <span class="amount" @click=modifyAmount>{{amount}}</span>
      <span class="unit" @click=editUnit>{{unit}}</span><br/>
      <div class="days-between" @click=editExpDate>D-{{days_between()}}</div>
    </div>
</template>
<script>


  export default {
    // 컴포넌트 내용 정의
    name: "ingredientElement",
    props: ['name', 'amount', 'unit', 'expiryDate','food_id'],
    data() {
      return {
        
      }
    },
    computed: {

    },
    methods: {
      days_between() {
        var date1 = new Date().toISOString().substr(0, 10).replace('T', ' ');
        var d_Day;
        var FORMAT = "-";

        var start_dt = date1.split(FORMAT);
        var end_dt = this.expiryDate.split(FORMAT);

        start_dt[1] = (Number(start_dt[1]) - 1) + "";
        end_dt[1] = (Number(end_dt[1]) - 1) + "";

        var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
        var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);

        d_Day= (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
        return d_Day;

      },
      getImgUrl(name) {
        var images = require.context('../../assets/', false, /\.png$/)
        return images('./' + name + ".png")
      },
      editUnit() {
        const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
        const url = `${baseURI}:8000/nzg/2/food/${this.food_id}/unit`;
        let redata = prompt("fill unit", "unit");
        this.$http.post(url, 
          {unit: redata})
          .then(function(res){
            // console.log(res);
            // console.log(redata);
        });
      },
      editExpDate() {
        const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
        const url = `${baseURI}:8000/nzg/2/food/created_at/${this.food_id}`;
        var redata = prompt("YYYY-MM-DD", "YYYY-MM-DD");
        this.$http.post(url, 
          {expiry_date: redata})
          .then(function(res){
            // console.log(res);
            // console.log(redata);
        });
      },
      addIngredient() {
        const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
        const url = `${baseURI}/nzg/2/food/added`;
        var redata = prompt("YYYY-MM-DD", "YYYY-MM-DD");
        this.$http.post(url, 
          {
            name: redata,
            count: redata,
            created_at: redata,
            unit: redata
          })
          .then(function(res){
            // console.log(res);
        });
      },
      removeIngredient() {
        const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
        const url = `${baseURI}/nzg/2/food/delete/${this.food_id}`;
        var redata = prompt("submit Food-id", "food-id");
        this.$http.get(`${baseURI}/nzg/2/food/amount/${this.food_id}/${redata}`);
      },

      modifyAmount() {
        var redata = prompt("fill amount", "amount");
        const baseURI = 'http://ec2-13-125-237-47.ap-northeast-2.compute.amazonaws.com';
        this.$http.get(`${baseURI}/nzg/2/food/amount/${this.food_id}/${redata}`);
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

  .days-between{
    border-top: 1px solid #eaeaea;
    color: #cc2c2d;
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
