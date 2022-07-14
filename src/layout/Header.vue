<template>
  <div class="header_page">
    <div class="header_page-container">
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#" @click="openMenu">Encode SVG</a></li>
                <li><a href="#" @click="openMenu">Encode Image</a></li>
                <li><a href="#" @click="openMenu">About</a></li>
            </ul>
        </nav>
    </div>
  </div>
</template>

<script>
    import Swal from 'sweetalert2';

    export default {
        name: 'Header',

        methods: {
            openMenu(e){
                e.preventDefault();
                const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'error',
                    title: 'Sorry, this option is not available at the moment. Please wait until they become available.'
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .header_page{
        width: 100%;
        height: 70px;
        background: #333;
        display: flex;
        align-items: center;
        justify-content: center;

        &-container{
            width: 100%;
            max-width: 1300px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            nav{
                ul{
                    display: flex;

                    li{
                        display: flex;

                        & + li{
                            margin-left: 10px;
                        }
                    }
                }
            }
        }

    }
</style>