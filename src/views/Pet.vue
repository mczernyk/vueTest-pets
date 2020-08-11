<template>
  <div class="pet">
    <h1>{{ animal.name }} </h1>
    <h1 v-if="species==='dogs'">
      <font-awesome-icon icon="dog" />
    </h1>
    <h1 v-else>
      <font-awesome-icon icon="cat" />
    </h1>
    <p>{{ species }}<p>
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
      species: {},
      petData: {
        age: '',
        breed: ''
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
