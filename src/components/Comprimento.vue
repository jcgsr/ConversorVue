<template>
  <div class="tempetatura">
    <div class="card text-white bg-primary mb-3 animate__animated animate__fadeInLeft" style="max-width: 20rem;">
      <div class="card-header">Pé para Metro</div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ subtitulo }}</h3>
          <input @focus="$event.target.select()" type="number" name="number" v-model="number" />
          <h3>{{ result }}</h3>
        </div>
      </div>
    </div>

    <div class="card text-white bg-primary mb-3 animate__animated animate__fadeInRight" style="max-width: 20rem;">
      <div class="card-header">Metro para Pé</div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ subtitulo1 }}</h3>
          <input @focus="$event.target.select()" type="number" name="number1" v-model="number1" />
          <h3>{{ result1 }}</h3>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      subtitulo: "Pés - Metro",
      subtitulo1: "Metro - Pés",
      number: 0,
      number1: 0,
    };
  },

  computed: {
    result() {
      return (this.number / 3.281).toFixed(2) + ' ft' 
    },
    result1() {
      return (this.number1 * 3.281).toFixed(2) + ' m'
    }
  }
};
</script>

<style>
.temperatura {
  color: aliceblue;
  text-align: center;
}

h3 {
  padding: 1rem;
}
</style>