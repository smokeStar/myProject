<template>
  <div id="javascript" style="height: 88vh;">
      <item :item="item"></item>
  </div>
</template>

<script>

  import scroll from './scroll.vue';
  export default {
    data () {
      return {
        item: [],
        data: [],
        pulldown: true
      }
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
          this.$http.get('http://localhost:8088/api/article/description?type=Js')
            .then((res) => {
              if(!res || !res.data || !res.data.ok) return;
              this.item = res.data.data;
            })
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>
