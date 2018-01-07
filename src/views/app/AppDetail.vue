<template>
    <ui-admin-page name="app" :page="{title: '应用管理'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/apps">应用管理</ui-breadcrumb-item>
            <ui-breadcrumb-item>应用详情</ui-breadcrumb-item>
        </ui-breadcrumb>
        <div v-if="app">
            {{ app.name }}
        </div>
    </ui-admin-page>
</template>

<script>
    export default {
        data () {
            return {
                app: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                let appId = this.$route.params.id
                this.$http.get('/apps/' + appId)
                    .then(response => {
                        let data = response.data
                        this.app = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            remove(app) {
                this.$http.delete('/apps/' + app.id)
                    .then(response => {
                        let data = response.data
                        console.log(data)
                        for (let i = 0; i < this.apps.length; i++) {
                            if (this.apps[i].id === app.id) {
                                this.apps.splice(i, 1)
                                break
                            }
                        }
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-body {
        padding: 20px;
        .breadcrumb {
            margin-bottom: 20px;
        }
        .table {

        }
    }
</style>
