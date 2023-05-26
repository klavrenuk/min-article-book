<template>
    <div class="modal modal_default">
        <div class="modal-container" v-if="isShowContent"
             v-click-outside="onClickOutside"
        >
            <div class="modal_default-header">
                <h2 class="modal_default-header-title">
                    {{ modal.title }}
                </h2>
            </div>

            <div class="modal_default-body" v-if="modal.content">
                <component :is="modal.content" :data="modal" />
            </div>

            <div class="modal_default-footer">
                <button class="btn btn-primary modal_default-footer-btn"
                        @click="onSave"
                >
                    Сохранить
                </button>
                <button class="btn modal_default-footer-btn"
                        @click="onCancel"
                >
                    Отмена
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters } from 'vuex'
    import {addEvent} from '@/middleware/events';

    export default {
        name: "ModalDefault",

        data() {
            return {
                isShowContent: false,
                modal: {}
            }
        },

        computed: {
            ...mapGetters([
                'modalDefault'
            ])
        },

        methods: {
            ...mapActions([
                'closeModalDefault'
            ]),

            onClickOutside() {
                this.closeModalDefault();
            },

            onSave() {
                if(this.modal.save) {
                    this.modal.save();
                }
            },

            onCancel() {
                this.closeModalDefault();
            }
        },

        mounted() {
            if(this.modalDefault) {
                this.modal = this.modalDefault;
            }

            setTimeout(() => {
                this.isShowContent = true;
            }, 0);

            addEvent(this.closeModalDefault);
        }
    }
</script>

<style lang="less" scoped>
    @footerBtnGap: 24px;
    @footerHeight: 84px;

    .modal_default {
        & .modal-container {
            padding: 32px 0 calc(@footerHeight + 20px) 0;
            height: calc(100vh - 110px);
            overflow-y: hidden;
        }

        &-header,
        &-body {
            padding: 0 32px;
        }

        &-header {
            &-title {
                margin: 0 0 1rem;
                font-size: 20px;
                line-height: 28px;
                font-weight: 600;
            }
        }

        &-body {
            height: 100%;
            padding-bottom: 1rem;
            box-sizing: border-box;
            overflow-y: auto;
        }

        &-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 84px;
            padding: 1rem 32px;
            border-top: 1px solid #BFC3D5;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            gap: @footerBtnGap;
            background: #fff;

            &-btn {
                height: 44px;
                padding: 0 1rem;
                text-align: center;
                width: calc(50% - (@footerBtnGap / 2));
            }
        }
    }
</style>