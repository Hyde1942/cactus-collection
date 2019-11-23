<template>
 <div>
     <h1>{{genere}}</h1>
 </div>
</template>
<script>
import axios from 'axios'
import { server } from '../../helper'

export default {
  data () {
    return {
      genere: '',
      ids: [],
      species: []
    }
  },
  created () {
    this.genere = this.$route.params.genere
    this.ids = this.$route.params.ids
    this.getCactus()
  },
  methods: {
    getCactus () {
      axios
        .get(`${server.baseURL}/cactus/cactus`)
        .then((data) => {
          debugger
          data.data.forEach(record => {
            this.ids.forEach((id) => {
              if (record._id === id) {
                this.species.push(record)
              }
            })
          })
        })
    }
  }
}
</script>
