<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <h2 v-if="errors">{{errors}}</h2>
    <div   v-for="result in results"  :key="result.id" class="col-md-4">
      <weather :woeid="result.woeid"></weather>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import Weather from './Weather.vue'
export default {
  name: 'Search',
  data () {
    return {
      results: [],
      errors: null
    }
  },
  components: { Weather },
  methods: {
    search () {
      this.results = []
      let keyword = encodeURI(this.$route.params.keyword)
      this.$http.get(`${this.$api_url}?command=search&keyword=${keyword}`)
        .then(response => {
          this.results = response.data
          if (this.results.length === 0) {
            this.errors = 'No results were found.'
          }
        })
    }
  },
  watch: {
    '$route': 'search'
  },
  created () {
    this.search()
  }
}
</script>
