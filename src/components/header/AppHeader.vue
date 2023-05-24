<template>
    <header class="app_header">
        <div class="app_header-container">
            <div class="app_header-left">
                <button class="app_header-left-btn btn btn-primary">
                    Создать категорию
                </button>
            </div>

            <div class="app_header-search">
                <SearchCategories />
            </div>
        </div>
    </header>
</template>

<script>
    import SearchCategories from "@/components/search/SearchCategories";

    export default {
        name: "AppHeader",
        components: {
            SearchCategories
        }
    }
</script>

<style lang="less" scoped>
    @widthLeftBlock: 242px;

    .app_header {
        margin-bottom: 48px;
        padding-top: 32px;

        &-container {
            display: flex;
        }

        &-left {
            width: @widthLeftBlock;
        }

        &-search {
            width: calc(100% - @widthLeftBlock);
        }
    }
</style>