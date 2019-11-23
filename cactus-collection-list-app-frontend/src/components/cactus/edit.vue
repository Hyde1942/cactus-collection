<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" @click="navigate()">View All Cactus</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit Cactus</h2>
      <form id="create-post-form" @submit.prevent="editCactus">
        <div class="form-group col-md-12">
          <label for="genere">Genere</label>
          <input
            type="text"
            id="genere"
            v-model="cactus.genere"
            name="title"
            class="form-control"
            placeholder="Enter New Genere"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="species">Last Name</label>
          <input
            type="text"
            id="species"
            v-model="cactus.species"
            name="title"
            class="form-control"
            placeholder="Enter new species"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            v-model="cactus.description"
            name="title"
            class="form-control"
            placeholder="Enter new Description"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="watering">Watering</label>
          <input
            type="text"
            id="watering"
            v-model="cactus.watering"
            name="title"
            class="form-control"
            placeholder="Enter New Watering"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit Cactus</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { server } from '../../helper'
import axios from 'axios'
import router from '../../router/router'

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
    editCactus () {
      let cactusData = {
        species: this.cactus.species,
        genere: this.cactus.genere,
        description: this.cactus.description,
        watering: this.cactus.watering
      }
      axios
        .put(`${server.baseURL}/cactus/update?cactusID=${this.id}`, cactusData)
        .then(data => {
          router.push({ name: 'home' })
        })
    },
    getCactus () {
      axios
        .get(`${server.baseURL}/cactus/cactus/${this.id}`)
        .then(data => (this.cactus = data.data))
    },
    navigate () {
      router.go(-1)
    }
  }
}
</script>
