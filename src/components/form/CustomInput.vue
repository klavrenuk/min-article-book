<template>
    <div class="custom_input"
         v-click-outside="onClickOutside"
    >
        <label class="custom_input-label"
               :class="{'active': isActiveLabel}"
               @click="onFocus()"
        >
            {{ label }}
        </label>
        <input class="input custom_input-input"
               :class="{'active': isActiveLabel}"
               ref="RefInput"
               v-model="value"
               @input="onChangeValue()"
               @click="onClickInput()"
               @blur="toggleView()"
               v-on:keyup.esc="onEsc($event)"
        />
    </div>
</template>

<script>
    export default {
        name: "CustomInput",

        props: {
            label: {
                type: String,
                required: true
            },
            onChange: {
                type: Function,
                required: true
            },
            defaultValue: {
                type: String,
                required: false,
                default: null
            }
        },

        data() {
            return {
                value: null,
                isActiveLabel: false
            }
        },

        methods: {
            onChangeValue() {
                this.onChange(this.value);

                if(this.value !== null) {
                    this.isActiveLabel = true;
                }
            },

            onFocus() {
                this.$refs.RefInput.focus();
                this.isActiveLabel = true;
            },

            onClickOutside() {
                this.toggleView();
            },

            onClickInput() {
                this.isActiveLabel = true;
            },

            toggleView() {
                if(!this.value || (this.value && !this.value.trim())) this.isActiveLabel = false;
                else this.isActiveLabel = true;
            },

            onEsc(event) {
                event.target.blur();
                this.toggleView();
            }
        },

        mounted() {
            this.value = this.defaultValue;
            this.toggleView();
        }
    }
</script>

<style lang="less" scoped>
    .custom_input {
        position: relative;

        &-label {
            position: absolute;
            top: 17px;
            left: 1rem;
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

            &.active {
                padding: 17px 1rem 6px
            }
        }
    }
</style>