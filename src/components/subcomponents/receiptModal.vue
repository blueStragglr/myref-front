<template>
  <modal name="example"
         :width="300"
         :height="300"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <b>{{time}}</b>
  </modal>
</template>
<script>
export default {
  name: 'ExampleModal',
  data () {
    return {
      time: 0,
      duration: 5000
    }
  },
  methods: {
    beforeOpen (event) {
      console.log(event)
      // Set the opening time of the modal
      this.time = Date.now()
    },
    beforeClose (event) {
      console.log(event)
      // If modal was open less then 5000 ms - prevent closing it
      if (this.time + this.duration < Date.now()) {
        event.stop()
      }
    }
  }
}
</script>

  // import VModal from 'vue-js-modal'
  // import recipe from 'receiptElement'
  // Vue.use(VModal)
  //
  // <modal name="hello-world">
  //   hello, world!
  // </modal>
  //
  // methods: {
  //   show () {
  //     this.$modal.show({ recipe });
  //   },
  //   hide () {
  //     this.$modal.hide({ recipe });
  //   }
  // }
  //
  // export default {
  //   name: "receiptModal",
  //   components: {
  //     props: ['name', 'ingredient', 'receipt']
  //   }
  // }

</script>

<style scoped>

</style>
