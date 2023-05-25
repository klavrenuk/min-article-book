<template>
    <div class="global_loader">
        <i class="global_loader-icon" />
    </div>
</template>

<script>
    export default {
        name: "LoaderGlobal"
    }
</script>

<style lang="less" scoped>
    .global_loader {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            height: 48px;
            width: 48px;
            background: url('/public/images/loader.svg') center center no-repeat;
            animation-name: rotation;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;

            @keyframes rotation {
                0% {
                    transform:rotate(0deg);
                }
                100% {
                    transform:rotate(360deg);
                }
            }
        }
    }
</style>