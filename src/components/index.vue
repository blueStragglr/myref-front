<template>
  <div class="container">
    <div class="navbar">
      <img src ="../assets/logo.png">
<<<<<<< HEAD
=======



>>>>>>> 2e8a52f16e56fc17667d4f63137c904d5d9adfb2
    </div>
    <ingredient/>
    <sidebar/>
  </div>
</template>

<script>
import Ingredient from "./subcomponents/mainContent";
import Sidebar from "./subcomponents/sidebar";
export default {
  name: 'HelloWorld',
  components: {Sidebar, Ingredient},

  data () {

    // const ingredientExample = [{'소고기', '육류'}];
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}

.container{
  display: flex;
  flex-wrap: wrap;
}

.navbar{
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  padding: 20px;
  flex: 1 1 100%;
  text-align: center;
}

.navbar>img{
  height: 60px;
}

.good{
  height: 30px;
}

</style>
