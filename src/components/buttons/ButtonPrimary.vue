<template>
    <button class="btn btn-primary"
            @click="onClick()"
    >
        <div class="btn-primary-container">
            <span class="btn-primary-text">
            <slot></slot>
        </span>
            <img src="/images1/plus.svg"
                 alt="Plus"
                 class="btn-primary-plus"
            />
        </div>
    </button>
</template>

<script>
    export default {
        name: "ButtonPrimary",
        props: {
            onClick: {
                type: Function,
                required: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .btn-primary {
        padding: 11px 21px 11px 1rem;

        &-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-plus {
            margin-left: 13px;
        }
    }
</style>