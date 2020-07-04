<template>
  <div id="app">
    <h1 class="animate__animated animate__bounce">{{ titulo }}</h1>   
    <div class="button-div">
      <button @click="temperatura" type="button" class="btn btn-primary animate__animated animate__backInLeft">Temperatura</button>
      <button type="button" class="btn btn-primary animate__animated animate__fadeInDown">Comprimento</button>
      <button type="button" class="btn btn-primary animate__animated animate__backInRight">Massa</button>
    </div>
    <Temperatura v-if="showTemperatura" />
    <Footer />
  </div>
</template>

<script>
import Temperatura from "./components/Temperatura";
import Footer from "./components/Footer";

export default {
  data() {
    return {
      titulo: "Conversor Vue",
      showTemperatura: true,
    }
  },
  components: {
    Footer, Temperatura
  },
  methods: {
    temperatura() {
      this.showTemperatura = !this.showTemperatura
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap");

*,
html,
body {
  box-sizing: border-box;
  font-family: "Archivo", sans-serif;  
  background-color: rgb(33, 126, 118);
  color: aliceblue;
  margin: 0 auto;  
}

h1 {
  text-align: center;
  padding: 1rem;
}

.button-div {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;  
  justify-content: space-around;
  width: 100%;
  text-align: center;
}

#app {
  text-align: center;
}
</style>
