<template>
<div class="container">
  <div class="section">
    <!--   Icon Section   -->
    <div class="row">
      <weather :woeid="2344116" class="col-md-4"></weather>
      <weather :woeid="638242" class="col-md-4"></weather>
      <weather :woeid="44418" class="col-md-4"></weather>
      <weather :woeid="565346" class="col-md-4"></weather>
      <weather :woeid="560743" class="col-md-4"></weather>
      <weather :woeid="9807" class="col-md-4"></weather>
    </div>
  </div>
  <br><br>
</div>

</template>

<script>
import Weather from './Weather.vue'
export default {
  name: 'Index',
  components: { Weather }
}
</script>
