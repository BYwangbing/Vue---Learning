<template>
  <div>
      <p>click {{ count }} times, count is {{ evenOrOdd }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        mounted() {
            console.log(this.$store);
        },
        computed: {
            ...mapGetters(['evenOrOdd']),
            
            ...mapState(['count'])
        },
        methods: {
            ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
        }
    }
</script>

<style>

</style>
