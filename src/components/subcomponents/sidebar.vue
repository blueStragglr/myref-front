<template>
    <div class="sidebar">
      123
    </div>
</template>

<script>
  export default {
    name: "sidebar"
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
</style>
