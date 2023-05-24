<template>
    <div class="custom_select">
        <button class="custom_select-button_top btn btn-empty"
                type="button"
                @click="toggleView"
        >
            <label class="button_top-label" v-if="selectedItem">Label</label>
            <span class="button_top-text">
                {{ selectedItem ? selectedItem : settings.label }}
            </span>
            <i class="button_top-icon" />
        </button>

        <ul class="custom_select-list" v-if="isShowOptions">
            <li class="custom_select-list-item"
                v-for="(option,index) in options"
                :key="`${option}-${index}`"
                @click="onSelect(option)"
            >
                <button class="custom_select-list-item-btn btn btn-empty">{{ option }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CustomSelect",

        props: {
            settings: {
                type: Object,
                required: true
            },
            onSelected: {
                type: Function,
                required: false
            }
        },

        data() {
            return {
                isShowOptions: false,
                selectedItem: null,
                options: [
                    'item#1', 'item#2'
                ]
            }
        },

        methods: {
            toggleView() {
                this.isShowOptions = !this.isShowOptions;
            },

            onSelect(value) {
                this.selectedItem = value;
                this.toggleView();

                if(this.onSelected) {
                    this.onSelected(this.settings.key, value);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @paddingSide: 1rem;

    .custom_select {
        position: relative;
        width: 100%;

        &-button_top {
            position: relative;
            width: 100%;
            height: 46px;
            text-align: left;
            padding: 0 @paddingSide;
            border-radius: 4px;
            border: 1px solid #BFC3D5;

            & .button_top-label {
                position: absolute;
                top: 5px;
                left: @paddingSide;
                width: 100%;
                color: #A0A6BF;
                font-size: 11px;
            }

            & .button_top-text {
                color: #A0A6BF;
                font-size: 14px;
            }

            & .button_top-icon {
                position: absolute;
                top: 10px;
                right: 11px;
                width: 24px;
                height: 24px;
                background: url('/public/images/select-arrow.svg') center center no-repeat;
            }
        }

        &-list {
            position: absolute;
            top: 101%;
            left: 0;
            width: 100%;
            padding: 8px 9px;
            border-radius: 5px;
            z-index: 8;
            box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.07);
            background: #fff;

            &-item {
                &-btn {
                    width: 100%;
                    padding: 6px 8px;
                    color: #4D5163;
                    font-size: 14px;
                    line-height: 22px;
                    text-align: left;
                    cursor: pointer;
                }

                &:hover, &:active, &.active {
                    & .custom_select-list-item-btn {
                        background: rgba(48, 52, 70, 0.03);
                    }
                }
            }
        }
    }
</style>