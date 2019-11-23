<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Cactus Collection</h1>
       <p>Mi colección personal de cactáceas</p>
       <div v-if="cactus.length === 0">
            <h2>No hay Cactus agregados a la base de datos</h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Genere</th>
                  <th scope="col">Species</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(family, idx) in cactaceae" :key="idx">
                  <td>{{ family.genere }}</td>
                  <td>{{ family.species }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <router-link :to="{name: 'genere', params: {genere: family.genere, ids: family.ids}}">View family</router-link>
                    </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>
<script>
import { server } from '../helper'
import axios from 'axios'
export default {
  data () {
    return {
      cactus: [],
      cactaceae: {}
    }
  },
  created () {
    this.fetchCactusCollection()
  },
  methods: {
    fetchCactusCollection () {
      axios
        .get(`${server.baseURL}/cactus/cactus`)
        .then(data => {
          this.cactus = data.data
          this.getCactusGeneres()
        })
    },
    getCactusGeneres () {
      let generes = [...new Set(this.cactus.map(plant => plant.genere))]
      generes.forEach((g, k) => {
        this.cactaceae[g] = {
          genere: g,
          species: '',
          ids: []
        }
        this.cactus.forEach((plant) => {
          if (plant.genere.toLowerCase() === g.toLowerCase()) {
            this.cactaceae[g].species++
            this.cactaceae[g].ids.push(plant._id)
          }
        })
      })
    },
    getCactusByGenere () {

    }
  }
}
</script>

<style scoped>
.btn-group {
  flex-wrap: wrap;
}
.btn-group > p.description {
  flex-basis: 100%;
  text-align: left;
}
</style>
