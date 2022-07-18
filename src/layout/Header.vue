<template>
  <div class="header_page">
    <div class="header_page-container">
      <div class="logo_area">
        <img :src="logo_url" width="150" alt="Web Colmeia" />
      </div>
      <div class="header_page-right">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" @click="openMenu">Encode SVG</a></li>
            <li><a href="#" @click="openMenu">Encode Image</a></li>
            <li><a href="#" @click="openMenu">About</a></li>
          </ul>
        </nav>
        <Pbutton type="button" label="Store" @click="open_link('https://webcolmeia.com.br')" icon="pi pi-shopping-cart"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swal from "sweetalert2";
import theme from "_theme";
import images_url from "_assets/images_url";
import Button from "_components/Button";

export default {
  name: "Header",
  components: {
    Button,
  },

  data() {
    return {
      logo_url: images_url.logo.replaceAll('%23ffcc4d', '%23ffc864'),
      theme
    };
  },

  methods: {
    openMenu(e) {
      e.preventDefault();
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
      });

      Toast.fire({
        icon: "error",
        title:
          "Sorry, this option is not available at the moment. Please wait until they become available."
      });
    },

    open_link(link){
      window.open(link, "_blank");
    }
  }
};
</script>

<style lang="stylus" scoped>
.p-button{
  background-color: v-bind('theme.colors.primary');
  color: v-bind('theme.colors.text');

  &:enabled:hover,  &:enabled:focus, &:enabled:active{
    background-color: v-bind('theme.colors.primary_hover');
  }
}
.header_page {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 20px;
  background: v-bind('theme.colors.background');
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  &-container {
    width: 100%;
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      margin-right: 30px;

      ul {
        display: flex;
        padding 0;
        margin: 0;

        li {
          display: flex;
          font-weight: 400;
          font-size: 15px;

          a {
            text-decoration: none;
            color: v-bind('theme.colors.text_light');

            &:hover {
              color: v-bind('theme.colors.primary');
            }
          }

          & + li {
            margin-left: 30px;
          }
        }
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>