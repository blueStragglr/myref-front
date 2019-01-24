<template>
    <div id="login">
      <!-- <i class="fa fa-refresh" v-on:click="refresh()"></i> refresh icon 넣기 -->
      <img src="../../assets/user.png">
      <button type="button" class ="btn" v-on:click="logout()">logout</button>
    </div>
</template>

<script>
  export default {
    name: "userInfo",
    data() {
      return {
        mockAccount: {
          username: "chlwltn",
          password: "tmdwogud"
        },
        input: {
          username: ""
        }
      }
    },
    methods: {
      logout() {
            alert("로그아웃되었습니다.");
      },
      refresh() {

      }
    }
  }
</script>

<style scoped>
  #login {
    display: inline-block;
    width: auto;
    border: 1px #CCCCCC;
    background-color: #FFFFFF;
    margin: 10px auto;
    text-align: center;
  }

  #login > input{
    width: 150px;
    padding: 4px;
  }

  .btn {
    background-color: #269b74;
    border: none;
    width: 150px;
    font-size: 12px;
    padding: 5px 20px;
    margin-top: 8px;
    color: #ffffff;
  }
  



  
</style>
