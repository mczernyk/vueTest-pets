<template>
  <div class="home">
    <div class="home-box">
      <div>
        <h1>Find your new <span class="emph">friend</span> today.</h1>
        <img src="../../public/adopt.gif">
        <div class="count-button-container">
          <div class="count-home">
            <p><i>Available Pets:</i><b> {{animalsCount }} </b></p>
            <div class="count-button-container">
              <font-awesome-icon icon="dog"/>
              {{ getAllDogs }}
              <font-awesome-icon icon="cat"/>
              {{ getAllCats }}
            </div>
          </div>

          <button @click="togglePetForm" class="btn btn-add-pet"><b>Add</b> A Pet</button>
        </div>
      </div>
    </div>
    <!-- .prevent is like prevent default -->

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm" class="pet-form">
      <b-form-group id="input-group-1" label="Pet Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Breed:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.breed"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="formData.gender"
          :options="['male', 'female']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Age:" label-for="input-5">
        <b-form-input
          id="input-5"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Color:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="formData.color"
          required
          placeholder="Enter color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Weight:" label-for="input-7">
        <b-form-input
          id="input-7"
          type="number"
          v-model="formData.weight"
          required
          placeholder="Enter weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Location:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="formData.location"
          required
          placeholder="Enter location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Notes:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="formData.notes"
          placeholder="Enter notes"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="btn btn-submit">Submit</b-button>
      <b-button type="reset" variant="danger" class="btn btn-submit">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: '',
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name, breed, gender, color, weight, location, notes } = this.formData
      const petPayload = {
        species,
        pet: {
          name,
          age,
          species,
          breed,
          gender,
          color,
          weight,
          location,
          notes
        }
      }
      this.addPet(petPayload)

      // reset form after submit
      this.formData = {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: '',
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
      this.species = null
    }
  }
}
</script>
