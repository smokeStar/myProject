<template>
  <div id="node">
    <item :item="items"></item>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    mounted: function (to, from, next) {
      this.$http.get('../../static/sass.json').then(function (data){
        this.items = data.body;
        console.log(this.items);
      })
    }
  }

</script>

<style lang="scss" scoped>

</style>
