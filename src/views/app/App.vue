<template>
    <ui-me-page name="app" :page="{title: '应用管理'}">
        <ui-breadcrumb class="breadcrumb">
            <ui-breadcrumb-item href="/admin">首页</ui-breadcrumb-item>
            <ui-breadcrumb-item href="/admin/apps">应用管理</ui-breadcrumb-item>
            <ui-breadcrumb-item>应用</ui-breadcrumb-item>
        </ui-breadcrumb>
        <ui-table clas="table" multiSelectable enableSelectAll ref="table">
            <ui-thead>
                <ui-tr>
                    <ui-th>ID</ui-th>
                    <ui-th>名称</ui-th>
                    <ui-th>描述</ui-th>
                    <ui-th>操作</ui-th>
                </ui-tr>
            </ui-thead>
            <ui-tbody>
                <ui-tr v-for="app in apps" :key="app.id">
                    <ui-td>{{ app.id }}</ui-td>
                    <ui-td>{{ app.name }}</ui-td>
                    <ui-td>{{ app.description }}</ui-td>
                    <ui-td>
                        <button @click="view(app)">查看</button>
                        <button @click="remove(app)">删除</button>
                    </ui-td>
                </ui-tr>
            </ui-tbody>
        </ui-table>
    </ui-me-page>
</template>

<script>
    export default {
        data () {
            return {
                total: 50,
                current: 1,
                apps: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            handleClick (newIndex) {
            },
            init() {
                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/apps`)
                    .then(response => {
                        let data = response.data
                        this.apps = data
                    },
                    response => {
                        console.log(response)
                    })
            },
            view(user) {
                this.$router.push('/admin/apps/' + user.id)
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
