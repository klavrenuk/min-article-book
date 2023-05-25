<template>
    <div class="list_options" v-click-outside="onClickOutside">
        <ul>
            <li class="list_options-item"
                v-for="option in options"
                :key="option.key"
            >
                <button class="list_options-item-btn"
                        @click="onSelectOption(option.key)"
                >
                    {{ option.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListOptions",

        props: {
            options: {
                type: Array,
                required: true
            },
            onSelectOption: {
                type: Function,
                required: true
            },
            toggleViewOptions: {
                type: Function,
                required: false
            }
        },

        methods: {
            onClickOutside() {
                if(this.toggleViewOptions) {
                    this.toggleViewOptions();
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .list_options {
        position: absolute;
        top: 100%;
        right: 0;
        padding: 8px 17px;
        border-radius: 5px;
        z-index: 8;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.07);
        background: #fff;

        &-item {
            margin-bottom: 4px;

            &:last-child {
                margin-bottom: 0;
            }

            &-btn {
                width: 100%;
                padding: 6px 8px;
                border-radius: 5px;
                border: none;
                color: #4D5163;
                font-size: 14px;
                text-align: left;
                background: #fff;

                &:hover, &:active {
                    background: rgba(48, 52, 70, 0.03);
                }
            }
        }
    }
</style>