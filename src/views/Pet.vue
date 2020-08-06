<template>
  <div class="pet">
    <h1>{{ animal.name }} ({{ species }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {},
      species: {}
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
