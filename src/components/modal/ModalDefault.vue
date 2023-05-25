<template>
    <div class="modal modal_default">
        <div class="modal-container" v-if="isShowContent">
            <div class="modal_default-header">
                <h2 class="modal_default-header-title">
                    {{ modal.title }}
                </h2>
            </div>

            <div class="modal_default-body" v-if="modal.content">
                <component :is="modal.content" />
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


            onSave() {
                console.log('save');
                if(this.modal.save) {
                    console.log('inner');
                    this.modal.save();
                }
            },

            onCancel() {
                console.log('cancel');
                this.closeModalDefault();
            }
        },

        mounted() {
            if(this.modalDefault) {
                this.modal = this.modalDefault;
            }

            console.log('modal', this.modal)

            setTimeout(() => {
                this.isShowContent = true;
            }, 0);
        }
    }
</script>

<style lang="less" scoped>
    @footerBtnGap: 24px;
    @footerHeight: 84px;

    .modal_default {
        & .modal-container {
            padding: 32px 32px calc(@footerHeight + 20px) 32px;
            height: calc(100vh - 110px);
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

            &-btn {
                height: 44px;
                padding: 0 1rem;
                text-align: center;
                width: calc(50% - (@footerBtnGap / 2));
            }
        }
    }
</style>