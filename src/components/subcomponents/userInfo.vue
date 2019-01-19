<template>
    <div id="login">
      <div>Login</div>
      <!-- <i class="fa fa-refresh" v-on:click="refresh()"></i> refresh icon 넣기 -->
      <input type="text" name="username" v-model="input.username" placeholder="User name"/>
      <input type="password" name="password" v-model="input.password" placeholder="Password"/>
      <button type="button" class ="btn" v-on:click="login()">Login</button>
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
      login() {
        if(this.input.username != "") {
          if(this.input.username == this.mockAccount.username
            && this.input.password == this.mockAccount.password) {
            //아이디, 비번 일치 시 로그
            alert("logined!");
            } else {
            console.log("The username and / or password is incorrect.");
          }
        } else {
          console.log("Please enter username and password.");
        }
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
    margin: auto;
    margin-top: 10px ;
    text-align: left;
  }

  .btn {
    display: inline-block;
    background: #1fb5bf;
    border: 1px solid darken(#1fb5bf, 5%);
    padding: .5em 2em;
    color: white;
    margin-right: .5em;
    box-shadow: inset 0px 1px 0px fadeout(white, 80%); 
  }
  



  
</style>
