<template>
    <button type="button" class="wc-btn wc-btn__primary" v-if="!href">
      <slot/>
    </button>
    <a :href="href" class="wc-btn wc-btn__primary" :target="target" v-else>
      <slot/>
    </a>
</template>

<script lang="ts">
  import theme from "_theme";
  export default {
    props: {
      type: String,
      href: String,
      color: String,
      background: String,
      target: String,
    },

    name: "Button",

    data(){
      return{
        theme
      }
    }
  };
</script>

<style lang="stylus">

  .wc-btn{
    width: auto;

    text-decoration: none;

    border-radius: 5px;
    background-color: v-bind('background ? background : theme.colors.button_background');
    color: v-bind(color ? color : 'theme.colors.text');

    align-items: center;
    border-width: 0;
    display: flex;
    gap: 10px;
    justify-content: center;
    letter-spacing: .5px;
    padding: .5em 1em;
    line-height: inherit;
    font-size: 15px;
    text-align: center;
  }

</style>