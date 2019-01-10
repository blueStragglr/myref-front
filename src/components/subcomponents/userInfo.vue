<template>
    <div id="login">
      <div>Login</div>
      <!-- <i class="fa fa-refresh" v-on:click="refresh()"></i> refresh icon 넣기 -->
      <input type="text" name="username" v-model="input.username" placeholder="User name"/>
      <input type="password" name="password" v-model="input.password" placeholder="Password"/>
      <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
  export default {
    name: "userInfo",
    data() {
      return {
        input: {
          username: ""
        }
      }
    },
    methods: {
      login() {
        if(this.input.username != "") {
          if(this.input.username == this.$parent.mockAccount.username
            && this.input.password == this.$parent.mockAccount.password) {
            //아이디, 비번 일치 시 로그인
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
</style>
