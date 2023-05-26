<template>
    <div class="custom_select" v-click-outside="onClickOutside">
        <button class="custom_select-button_top btn btn-empty"
                type="button"
                @click="toggleView"
                v-on:keyup.esc="onEsc()"
        >
            <label class="button_top-label"
                   :class="{'active': selectedItem }"
                   v-if="!settings.isHideLabel"
            >{{ settings.label }}</label>

            <span class="button_top-text" v-if="type === 'default'">
                {{ selectedItem && !settings.isShowOnlyLabel ? selectedItem : '' }}
            </span>
            <i class="button_top-icon" />
        </button>

        <ul class="custom_select-list" v-if="isShowOptions">
            <li class="custom_select-list-item"
                v-for="(option,index) in listOptions"
                :key="`${option}-${index}`"
                @click="onSelect(option)"
            >
                <button class="custom_select-list-item-btn btn btn-empty"
                        :class="{'active': isActiveOption(option.id)}"
                >
                    {{ option.name }}
                </button>
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
            },
            listOptions: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: false,
                default: 'default'
            },
            selectedDefault: {
                type: Array,
                required: false
            }
        },

        data() {
            return {
                isShowOptions: false,
                selectedItem: null,
                selectedList: [],
                selectedListIds: []
            }
        },

        methods: {
            onEsc() {
                this.isShowOptions = false;
            },

            onClickOutside() {
                this.isShowOptions = false;
            },

            toggleView() {
                this.isShowOptions = !this.isShowOptions;
            },

            isActiveOption(id) {
                const index = this.selectedListIds.indexOf(id);
                return index > -1
            },

            onSelect(item) {
                this.toggleView();

                this.selectedItem = item.name;

                if(this.onSelected) {
                    this.onSelected(
                        this.settings.key,
                        item
                    );
                }
            }
        },

        mounted() {
            if(Array.isArray(this.selectedDefault)) {
                this.selectedList = this.selectedDefault.slice();
                this.selectedListIds = this.selectedDefault.map((item) => {
                    return item.id;
                });
            }

            if(this.settings && this.settings.selectedItem) {
                this.selectedItem = this.settings.selectedItem;
            }
        }
    }
</script>

<style lang="less" scoped>
    @paddingSide: 1rem;

    .custom_select {
        &-button_top {
            position: relative;
            width: 100%;
            height: 46px;
            text-align: left;
            padding: 20px @paddingSide 6px !important;
            border-radius: 4px;
            border: 1px solid #BFC3D5;

            & .button_top-label {
                position: absolute;
                top: 17px;
                left: @paddingSide;
                width: 100%;
                color: #A0A6BF;
                font-size: 14px;

                &.active {
                    top: 5px;
                    font-size: 11px;
                }
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
    }
</style>