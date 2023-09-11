let vm = Vue.createApp({
  data() {
    return {
      birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
      people: [
        { name: 'John', age: 20 },
        { name: 'Rick', age: 18 },
        { name: 'Any', age: 33 }
      ]
    }
  },
}).mount('#app')