<template>
  <div>
    <h1>{{ cactus.genere }}, {{ cactus.species }}</h1>
    <div class="img-wrapper"><img :src="`../assets/cactus/${cactus.species}.jpg`" :alt="cactus.species"/></div>
    <p>{{cactus.description }} </p>
    <button class="btn btn-success"><router-link :to="{name: 'Edit', params: {id: cactus._id}}">Edit Cactus Data </router-link></button>
    <button class="btn btn-danger"><router-link :to="{name: 'remove',  params: {id: cactus._id}}" >Delete Cactus</router-link></button>
  </div>
</template>

<script>
import axios from 'axios'
import { server } from '../../helper'

export default {
  data () {
    return {
      id: 0,
      cactus: {}
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getCactus()
  },
  methods: {
    getCactus () {
      axios
        .get(`${server.baseURL}/cactus/cactus/${this.id}`)
        .then(data => (this.cactus = data.data))
    }
  }
}
</script>

<style scoped>
.img-wrapper {
  max-width: 1980px;
  margin: 0 auto
}
img {
  max-width: 100%;
}
button:first-of-type {
  margin-right: 1em;
}
button > a {
  color: white !important;
}
</style>
