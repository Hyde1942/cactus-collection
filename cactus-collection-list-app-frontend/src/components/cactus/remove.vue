<template>
    <div>
       <h1>Cactus fue borrado</h1>
    </div>
</template>

<script>
import axios from 'axios'
import { server } from '../../helper'
import router from '../../router/router'

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    setTimeout(() => {
      this.deleteCactus(this.$route.params.id)
    }, 1000)
  },
  methods: {
    deleteCactus (id) {
      axios
        .delete(`${server.baseURL}/cactus/delete?cactusID=${id}`)
        .then(data => {
          console.log(data)
          router.push({ name: 'home' })
        })
    }
  }
}
</script>
