export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.cats.length
    // return state.pets.filter((pet) => {
    //   return pet.species === 'cats'
    // })
  },
  getAllDogs: (state) => {
    return state.dogs.length
    // return state.pets.filter((pet) => {
    //   return pet.species === 'dogs'
    // })
  }
}
