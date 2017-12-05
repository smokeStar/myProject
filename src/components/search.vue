<template>
  <div id="search">
    <div class="result">搜索结果</div>
    <item :item="this.$store.state.results" v-if="this.$store.state.results.length" :type="'search'"></item>
    <div v-else>无搜索结果！</div>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				items:[]
      }
		},
    activated(){
			  console.log(11);

    }
	}
</script>

<style lang="scss" scoped>
  .result{
    width: 100%;
    height: 20px;
    padding: 10px;
    border: 1px dashed orange;
    background-color: ghostwhite;
    color: red;
    text-align: center;
    line-height:20px;
    margin-bottom: 30px;
  }

</style>
