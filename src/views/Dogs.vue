<template>
  <div class="pets">
    <div class="pets-header">
      <div class="pets-img">
        <h1><font-awesome-icon icon="dog"/></h1>
        <p>Available Dogs: {{ getAllDogs }}</p>
      </div>
    </div>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/dogs/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ]),
    ...mapGetters([
      'animalsCount',
      'getAllDogs'
    ])
  }
}
</script>
