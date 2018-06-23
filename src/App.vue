<template>
  <div id="app">
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo">Weather App</a>
        <ul class="right hide-on-med-and-down">
          <li>
            <div  id="navbarSupportedContent">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" @keyup.enter="search()"  aria-label="Search" v-model="keyword" placeholder="Search" type="search" >
              </form>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      keyword: this.$route.params.keyword
    }
  },
  methods: {
    search () {
      this.$router.push({name: 'search', params: {keyword: encodeURI(this.keyword)}})
    }
  }
}
</script>

<style>

</style>
