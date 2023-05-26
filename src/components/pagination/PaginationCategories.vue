<template>
    <div class="pagination">
        <button class="pagination-btn_arrow pagination-btn_arrow--left btn btn-empty"
                @click="prev()"
        ></button>
        <div class="pagination-numbers">
            <button
                    v-for="page in renderNumbersPages()"
                    :key="page"
                    class="pagination-numbers-btn"
                    :class="{'active': activePage  === page}"
                    :disabled="page === null"
                    @click="onShowPage(page)"
            >{{ page === null ? '...' : page + 1 }}</button>
        </div>
        <button class="pagination-btn_arrow pagination-btn_arrow--right btn btn-empty"
                @click="next()"
        ></button>
    </div>
</template>

<script>
    export default {
        name: "PaginationCategories",

        props: {
            countCategories: {
                type: Number,
                required: true
            },
            onChange: {
                type: Function,
                required: true
            }
        },

        data() {
            return {
                activePage: 0,
                lastPage: 1,
            }
        },

        methods: {
            next() {
                if(this.lastPage > this.activePage + 1) {
                    this.activePage++;
                    this.onChangeState();
                }
            },

            prev() {
                if(this.activePage > 0) {
                    this.activePage--;
                    this.onChangeState();
                }
            },

            onShowPage(page) {
                this.activePage = page;
                this.onChangeState();
            },

            onChangeState() {
                const start = this.activePage * 3;
                this.onChange(start, start + 3);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },

            renderNumbersPages() {
                const numbers = [];
                let start = 0, end = 1;

                if(this.activePage > 2) start = this.activePage - 2;

                if(this.activePage + 4 > this.lastPage) {
                    end = this.lastPage;

                } else {
                    switch (this.activePage) {
                        case 0:
                            end = this.activePage + 4;
                            break;

                        case 1:
                        case 2:
                            end = 4;
                            break;

                        default:
                            end = this.activePage + 2;
                    }
                }

                for(let i = start; i < end; i++) numbers.push(i);

                if(end < this.lastPage) {
                    numbers.push(null);
                    numbers.push(this.lastPage - 1);
                }

                return numbers;
            }
        },

        mounted() {
            if(this.countCategories > 0) {
                this.lastPage = Math.ceil(this.countCategories / 3);
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        padding-top: 6px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        &-btn_arrow {
            width: 5px;
            height: 9px;
            background: url('/public/images/pagination-arrow.svg') center center no-repeat;

            &:hover, &:active {
                background: url('/public/images/pagination-arrow-effect.svg') center center no-repeat;
            }

            &:focus {
                background: url('/public/images/pagination-arrow.svg') center center no-repeat;
            }

            &--right {
                transform: rotate(180deg);
            }
        }

        &-numbers {
            margin: 0 7px;

            &-btn {
                margin-right: 10px;
                padding: 6px 14px;
                border-radius: 5px;
                border: none;
                font-weight: 600;
                font-size: 14px;
                color: #303446;
                background: none;

                &:hover, &:active, &.active {
                    background: rgba(48, 52, 70, 0.07);
                }
            }
        }
    }
</style>