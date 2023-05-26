<template>
    <div class="likes">
        <div class="likes-container">
            <button class="likes-container-btn btn btn-icon"
                    @click="increase()"
            >
                <img src="/images/like.svg"
                     alt="Иконка лайка"
                />
                <span class="count">{{ count }}</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlockLikes",
        props: {
            likes: {
                type: Number,
                required: false,
                default: 0
            }
        },

        data() {
            return {
                count: this.likes
            }
        },

        methods: {
            increase() {
                this.count++;
            }
        },
    }
</script>

<style lang="less" scoped>
    .likes {
        padding-left: 6px;
        box-sizing: border-box;

        &-container {
            display: flex;
            align-items: center;

            &-btn {
                display: flex;
                align-items: center;

                & .count {
                    position: relative;
                    top: 1px;
                    margin-left: 6px;
                    color: #A0A6BF;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 15px;
                }
            }
        }
    }
</style>