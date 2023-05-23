<template>
    <div class="likes">
        <div class="likes-container">
            <button class="likes-container-btn btn btn-icon"></button>
            <span class="likes-container-count">{{ count }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlockLikes",
        props: {
            count: {
                type: Number,
                required: false,
                default: 0
            }
        }
    }
</script>

<style lang="less" scoped>
    .likes {
        &-container {
            display: flex;
            align-items: center;

            &-btn {
                width: 12px;
                height: 12px;
                margin-right: 6px;
                background-image: url('/public/images/like.svg');

                &:hover, &:active {
                    background-image: url('/public/images/like-effect.svg');
                }
            }

            &-count {
                color: #A0A6BF;
                font-size: 12px;
                font-weight: 500;
                line-height: 15px;
            }
        }
    }
</style>