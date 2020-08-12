<template>
  <div class="pet">
    <div class="pet-container">
      <div class="pet-left">
        <div class="pet-img">
          <h1>{{ animal.name }} </h1>
          <h1 v-if="species==='dog'">
            <font-awesome-icon icon="dog" />
          </h1>
          <h1 v-else>
            <font-awesome-icon icon="cat" />
          </h1>
          <p><b>{{ species }}</b></p>
        </div>
        <h5><i>"{{ animal.notes }}"</i></h5>
      </div>
      <div class="pet-right">
        <p><b>Age: </b>{{ animal.age }} years old</p>
        <p><b>Breed: </b>{{ animal.breed }}</p>
        <p><b>Gender: </b>{{ animal.gender }}</p>
        <p><b>Color: </b>{{ animal.color }}</p>
        <p><b>Weight: </b>{{ animal.weight }} lbs</p>
        <p><b>Location: </b>{{ animal.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {},
      species: {},
      petData: {
        age: '',
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
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal

    const species = this.$route.params.species.slice(0, -1)
    this.species = species
  }
  // instead of methods below use mounted and data
  // methods: {
  //   pet () {
  //     const animal = this[this.$route.params.species][this.$route.params.id]
  //     return animal
  //   }
  // }
}
</script>
