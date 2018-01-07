<template>
    <div class="ui-page page-home">
        <ui-header :title="title || page.title"></ui-header>
        <main class="page-body">
            <slot></slot>
        </main>
        <ui-footer></ui-footer>
        <ui-drawer :open="open" :docked="docked" @close="toggle()">
            <ui-list @itemClick="docked ? '' : toggle()">
                <ui-list-item title="个人资料">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="相册">
                    <ui-icon value="photo" slot="left"/>
                </ui-list-item>
                <ui-list-item title="收藏">
                    <ui-icon value="collections" slot="left"/>
                </ui-list-item>
                <ui-list-item title="表情">
                    <ui-icon value="tag_faces" slot="left"/>
                </ui-list-item>
                <ui-list-item title="表情">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="钱包">
                    <ui-icon value="chat_bubble" slot="left"/>
                </ui-list-item>
                <ui-list-item title="设置" to="/settings">
                    <ui-icon value="chat_bubble" slot="left"/>
                    <ui-badge content="new" slot="after" secondary />
                </ui-list-item>
            </ui-list>
        </ui-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style lang="scss" scoped>

    .ui-page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .page-body {
        min-height: 500px;
    }
    .admin-container {
        padding: 16px;
    }
</style>
