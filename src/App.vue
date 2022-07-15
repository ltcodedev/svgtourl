<template>
  <Header/>
  <SvgEncoder/>
</template>

<script>
  import Header from "./layout/Header.vue";
  import SvgEncoder from "./pages/SvgEncoder.vue"
  
  export default {
    name: "App",
    components: {
      Header,
      SvgEncoder
    }
  };
</script>

<style lang="stylus">

</style>