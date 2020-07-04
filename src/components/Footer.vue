<template>
  <div class="footer">    
    &copy;{{ footer }}
    <br />
    <a class="btn-info" :href="link">Jovane</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - Conversor Vue criado e desenvolvido por ",
      link: "https://jcgsr.github.io/",
      dataAtual: ""
    };
  },  
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1rem;
  background-color: aqua;
  color: rgb(62, 42, 134);
}

a:link {
  text-decoration: none;
}


</style>
