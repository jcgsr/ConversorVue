<template>
<div class="knockout animate__animated animate__bounce">
   <a :href="link"><h1>Conversor Vue</h1></a> 
</div>
</template>

<script>
export default {  
  data() {
    return {
      link: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  }
};
</script>

<style scoped>
.knockout h1{
  background: url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) -80px -80px;
  color: red;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;   
  text-align: center;  
}

.knockout a:link {
  text-decoration: none;
}

</style>
