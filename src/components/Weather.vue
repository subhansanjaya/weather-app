<template>
    <div class="col s12 m4" @click="weatherDetail()">
      <div class="card blue-grey darken-1">
        <div class="card-content" v-if="loading">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
        </div>
        <div class="card-content white-text" v-if="!loading">
        <h5 class="card-title"><img :src="weatherIcon( weather.today.weather_state_abbr )" /> {{ weather.title }}</h5>
        <p class="light"> {{ weather.today.the_temp | round }}°  (Max: {{ weather.today.max_temp | round  }}° - Min: {{ weather.today.min_temp | round  }}° )</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'weather',
  props: ['woeid'],
  data () {
    return {
      weather: '',
      loading: true
    }
  },
  filters: {
    round (value) {
      return value ? value.toFixed(0) : value
    }
  },
  methods: {
    fetchWeather (woeid) {
      this.$http.get(`${this.$api_url}?command=location&woeid=${woeid}`)
        .then(response => {
          this.weather = response.data
          this.weather.today = response.data.consolidated_weather[0]
          this.loading = false
        })
    },
    weatherDetail () {
      this.$router.push({name: 'weather', params: {woeid: this.woeid}})
    },
    weatherIcon (state) {
      return `https://www.metaweather.com/static/img/weather/${state}.svg`
    }
  },
  created () {
    this.fetchWeather(this.woeid)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-title img {
  width: 20px;
  height: 20px;
}
</style>
