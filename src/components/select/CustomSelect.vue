<template>
    <div class="custom_select">
        <button class="custom_select-button_top btn btn-empty"
                type="button"
                @click="toggleView"
        >
            <label class="button_top-label" v-if="selectedItem">Label</label>

            <RowSelectedItems v-if="type === 'multi'"
                              :list="selectedList"
            />

            <span class="button_top-text" v-if="type === 'default'">
                {{ selectedItem ? selectedItem : settings.label }}
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
    import RowSelectedItems from "@/components/select/RowSelectedItems";

    export default {
        name: "CustomSelect",

        components: {
            RowSelectedItems
        },

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
            toggleView() {
                this.isShowOptions = !this.isShowOptions;
            },

            isActiveOption(id) {
                const index = this.selectedListIds.indexOf(id);
                return index > -1
            },

            onSelect(item) {
                this.toggleView();

                if(this.type === 'multi') {
                    const index = this.selectedListIds.indexOf(item.id);

                    if(index > -1) {
                        this.selectedList.splice(index, 1);
                        this.selectedListIds.splice(index, 1);

                    } else {
                        this.selectedList.push(item);
                        this.selectedListIds.push(item.id);
                    }

                } else {
                    this.selectedItem = item.name;
                }

                if(this.onSelected) {
                    this.onSelected(
                        this.settings.key,
                        this.type === 'multi' ? this.selectedList : item
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


                console.log('selectedListIds', this.selectedListIds);
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
            height: 126px;
            overflow-y: auto;
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

                    &:hover, &:active, &.active {
                        background: rgba(48, 52, 70, 0.03);
                    }
                }
            }
        }
    }
</style>