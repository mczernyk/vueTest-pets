<template>
  <div class="pets">
    <h1><font-awesome-icon icon="cat"/></h1>
    <p>Available Cats: {{ getAllCats }}</p>

    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/pets/cats/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// @ is shortcut to src directory, dont need ../../
// import cats from '@/data/cats'
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ]),
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  }
}
</script>
