<template>
    <div class="select_with_search custom_select"
         v-click-outside="onClickOutside"
    >
        <div class="select_with_search-header">
            <label class="select_with_search-header-label"
                   :class="{'active': searchStr || isShowOptions}"
                   @click="showOptions"
            >{{ settings.label }}</label>
            <input class="select_with_search-header-input input"
                   v-model.lazy="searchStr"
                   v-debounce="delay"
                   @click="showOptions()"
                   @input="showOptions()"
                   v-on:keyup.esc="onEsc($event)"
            />
        </div>
        <ul class="select_with_search-list custom_select-list"
            v-if="isShowOptions"
        >
            <li class="custom_select-list-item">
                <button class="custom_select-list-item-btn btn-empty"
                        type="button"
                        v-for="option in filteredOptions"
                        :key="option.id"
                        @click="onSelectedOption(option)"
                >
                    {{ option.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { directive } from 'v-debounce';

    export default {
        name: "SelectWithSearch",

        props: {
            settings: {
                type: Object,
                required: false
            },
            options: {
                type: Array,
                required: true
            },
            onSelect: {
                type: Function,
                required: false
            }
        },

        directives: {
            debounce: directive
        },

        data() {
            return {
                isShowOptions: false,
                searchStr: null,
                delay: 600,
                filteredOptions: []
            }
        },

        watch: {
            searchStr(str) {
                this.filterOptions(str);
            },
            options() {
                this.filteredOptions = this.options.slice();
            }
        },

        methods: {
            onEsc(event) {
                event.target.blur();
                this.isShowOptions = false;
            },

            onSelectedOption(option) {
                this.searchStr = null;
                this.onSelect(this.settings.key, option);
                this.isShowOptions = false;
            },

            showOptions() {
                this.isShowOptions = true;
            },

            onClickOutside() {
                this.isShowOptions = false;
            },

            filterOptions(str) {
                if(str) {
                    this.filteredOptions = this.options.filter((option) => {
                        if(option.name.toLowerCase().search(str.toLowerCase()) > -1) {
                            return option;
                        }
                    })
                } else {
                    this.filteredOptions = this.options.slice();
                }
            }
        },

        mounted() {
            this.filteredOptions = this.options.slice();
        }
    }
</script>

<style lang="less" scoped>
    @inputPaddingLeft: 12px;
    @inputPaddingRight: 1rem;

    .select_with_search {
        &-header {
            position: relative;

            &-label {
                position: absolute;
                top: 17px;
                left: @inputPaddingLeft;
                color: #A0A6BF;
                font-size: 14px;
                line-height: 14px;
                text-align: left;
                cursor: text;

                &.active {
                    top: 5px;
                    font-size: 11px;
                }
            }

            &-input {
                padding: 17px @inputPaddingRight 6px @inputPaddingLeft;
                border: 1px solid #BFC3D5;
                width: 100%;
                color: #303446;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
</style>