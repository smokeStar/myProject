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
    mounted: function () {
      this.$http.get('http://localhost:8088/api/article/description?type=Node').then((res) => {
        if(!res || !res.data || !res.data.ok) return;
        this.items = res.data.data;
      })
    }
  }

</script>

<style lang="scss" scoped>

</style>
