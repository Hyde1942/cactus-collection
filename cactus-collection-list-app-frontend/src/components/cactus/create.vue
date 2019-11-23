<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Add Cactus to collection</h2>
      <form id="create-post-form" @submit.prevent="createCactus">
        <div class="form-group col-md-12">
          <label for="genere"></label>
          <input
            type="text"
            id="genere"
            v-model="genere"
            name="title"
            class="form-control"
            placeholder="Enter Cactus Name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="species">Species</label>
          <input
            type="text"
            id="species"
            v-model="species"
            name="title"
            class="form-control"
            placeholder="Enter species name"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            v-model="description"
            name="title"
            class="form-control"
            placeholder="Enter Cactus Description"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="watering">Watering</label>
          <input
            type="text"
            id="watering"
            v-model="watering"
            name="title"
            class="form-control"
            placeholder="Enter Watering Frecuency"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Add Cactus</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { server } from '../../helper'
import router from '../../router/router'

export default {
  data () {
    return {
      genere: '',
      species: '',
      description: '',
      watering: ''
    }
  },
  methods: {
    createCactus () {
      var date = new Date()
      let cactusData = {
        genere: this.genere,
        species: this.species,
        description: this.description,
        watering: this.watering,
        created_at: date.toDateString()
      }
      this._submitToServer(cactusData)
    },
    _submitToServer (data) {
      axios.post(`${server.baseURL}/cactus/create`, data).then(data => {
        console.log(data)
        router.push({ name: 'home' })
      })
    }
  }
}
</script>

<style>
</style>
