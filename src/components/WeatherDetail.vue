<template>
<div class="container">
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text"><h2>{{ weather.title }} / {{ weather.parent.title }}</h2></h1>
      <br><br>
    </div>
  </div>
  <div class="section">
    <div class="row">
      <div class="col s12 m4" v-for="day in weather.consolidated_weather" :key="day.id">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
          <h5 class="card-title"><img :src="weatherIcon( day.weather_state_abbr )" /> {{ day.applicable_date | weekname }}</h5>
          <p class="light"> {{ weather.today.the_temp | round }}°  (Max: {{ weather.today.max_temp | round  }}° - Min: {{ weather.today.min_temp | round  }}° )</p>
          </div>
        </div>
      </div>
    </div>
   </div>
   <br><br>
 </div>
</template>

<script>
export default {
  name: 'WeatherDetail',
  data () {
    return {
      weather: null
    }
  },
  methods: {
    loadWeather () {
      let woeid = this.$route.params.woeid
      this.$http.get(`${this.$api_url}?command=location&woeid=${woeid}`)
        .then(response => {
          this.weather = response.data
          this.weather.today = response.data.consolidated_weather[0]
        })
    },
    weatherIcon (abbr) {
      return `https://www.metaweather.com/static/img/weather/${abbr}.svg`
    }
  },
  filters: {
    round (value) {
      return value ? value.toFixed(0) : value
    },
    weekname (value) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let d = new Date(value)
      return days[d.getDay()]
    }
  },
  watch: {
    '$route': 'loadWeather'
  },
  created () {
    this.loadWeather()
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
