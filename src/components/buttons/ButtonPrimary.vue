<template>
    <button class="btn btn-primary">
        <div class="btn-primary-container">
            <span class="btn-primary-text">
            <slot></slot>
        </span>
            <img src="/images/plus.svg"
                 alt="Plus"
                 class="btn-primary-plus"
            />
        </div>
    </button>
</template>

<script>
    export default {
        name: "ButtonPrimary"
    }
</script>

<style lang="less" scoped>
    .btn-primary {
        padding: 11px 21px;

        &-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-plus {

        }
    }
</style>