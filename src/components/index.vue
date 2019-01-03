<template>
  <div class="container">
    <div class="navbar">
      NAVBAR COMES HERE
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
}

</style>
