<template>
    <div class="ui-page page-home">
        <div class="ui-page-content">
            <ui-admin-header :title="page.title" :backable="backable"></ui-admin-header>
            <main class="page-body">
                <div class="admin-container">
                    <ui-breadcrumb class="breadcrumb" v-if="page.breadcrumb">
                        <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
                        <ui-breadcrumb-item :href="item.to" v-for="item in page.breadcrumb">{{ item.title }}</ui-breadcrumb-item>
                    </ui-breadcrumb>
                    <slot></slot>
                </div>
            </main>
            <ui-admin-footer></ui-admin-footer>
        </div>
        <ui-drawer :open="true" :docked="true">
            <ui-appbar title="开放平台">
            </ui-appbar>
            <ui-list>
                <ui-list-item title="个人中心" to="/me">
                    <ui-icon slot="left" value="inbox"/>
                </ui-list-item>
                <ui-list-item title="账户" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="基本资料" to="/account/profile" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="安全设置" to="/account/secure" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
                <ui-list-item title="工具" toggleNested>
                    <ui-icon slot="left" value="inbox"/>
                    <ui-list-item title="TODO" href="http://todo.yunser.com" target="_blank" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="备忘" href="http://note.yunser.com" target="_blank" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                    <ui-list-item title="文件" href="http://file.yunser.com" target="_blank" slot="nested">
                        <ui-icon slot="left" value="grade"/>
                    </ui-list-item>
                </ui-list-item>
            </ui-list>
        </ui-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            page: {
                type: Object,
                default: {
                    title: '云设'
                }
            },
            backable: {
                type: Boolean,
                default: false
            },
            breadcrumb: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
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
    .ui-page-content {
        position: absolute;
        left: 256px;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
    }
    .admin-container {
        padding: 16px;
    }
</style>
