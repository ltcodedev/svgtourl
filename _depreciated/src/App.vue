<template>
  <Header/>
  <SvgEncoder/>
</template>

<script>
  import Header from "./layout/Header.vue";
  import SvgEncoder from "./pages/SvgEncoder.vue"
  import theme from '_theme';

  
  export default {
    name: "App",
    data(){
      return {
        theme
      }
    },
    components: {
      Header,
      SvgEncoder
    }
  };
</script>

<style lang="stylus">
  body{
    font-family: -apple-system,"system-ui",Segoe UI,roboto,helvetica,arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
</style>