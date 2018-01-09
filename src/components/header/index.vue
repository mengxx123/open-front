<template>
    <header class="page-header">
        <div class="container">
            <ui-appbar :title="title" style="box-shadow: none">
                <ui-flat-button label="调试" slot="right" to="/debug" v-if="user && user.id === '1'" />
                <ui-flat-button label="首页" slot="right" to="/" />
                <ui-flat-button label="文档" slot="right" to="/doc" />
                <ui-flat-button label="支持" slot="right" to="/support" />
                <ui-flat-button label="API" slot="right" href="http://doc.api.yunser.com/" target="_blank" />
                <ui-flat-button label="我的应用" slot="right" to="/me/apps" v-if="user" />
                <ui-flat-button label="登录" slot="right" @click="loginOss" v-if="!user" style="margin-right: 16px" />
                <ui-raised-button label="注册" @click="register" v-if="!user" slot="right"/>
            </ui-appbar>
        </div>
    </header>
</template>

<script>
    import oss from '@/util/oss'

    export default {
        data() {
            return {
                user: null
            }
        },
        props: {
            title: {
                type: String,
                default: '云设开放平台'
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                if (this.$storage.get('accessToken')) {
                    this.user = this.$storage.get('user')
                }
            },
            loginOss() {
                location.href = oss.getOauthUrl()
            },
            register() {
                location.href = 'https://yunser.com/register'
            }
        }
    }
</script>
