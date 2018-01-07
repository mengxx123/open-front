<template>
    <header class="page-header">
        <ui-appbar :title="title">
                <ui-icon-button icon="menu" slot="left" v-if="!backable"/>
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" v-if="backable" />
                <!--<ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)" />-->
                <!--<ui-flat-button label="expand_more" slot="right"/>-->
                <ui-flat-button label="首页" slot="right" to="/" />
                <ui-bar-menu slot="right" label="工单">
                    <ui-menu>
                        <ui-menu-item title="我的工单"/>
                        <ui-menu-item title="提交工单"/>
                    </ui-menu>
                </ui-bar-menu>
                <ui-bar-menu slot="right" :label="user.name">
                    <ul class="user-menu-list">
                        <li class="item">
                            <router-link class="link" to="/account/profile">
                                <ui-icon class="icon" value="home"></ui-icon>
                                <div class="title">基本资料</div>
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/">
                                <ui-icon class="icon" value="home"></ui-icon>
                                <div class="title">安全设置</div>
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/">
                                <ui-icon class="icon" value="home"></ui-icon>
                                <div class="title">会员权益</div>
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" to="/">
                                <ui-icon class="icon" value="home"></ui-icon>
                                <div class="title">会员权益</div>
                            </router-link>
                        </li>
                    </ul>
                    <ui-raised-button class="login-out" label="退出管理控制台" fullWidth @click="loginout"/>
                </ui-bar-menu>
            </ui-appbar>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                user: null
            }
        },
        props: {
            title: {
                type: String,
                default: '云设云盘'
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.user = this.$storage.get('user')
        },
        methods: {
            loginout() {
                // TODO 请求
                this.$storage.set('accessToken', null)
                this.$storage.set('user', null)
                this.isLogin = false
                this.user = null
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    $hoverBg: rgba(0, 0, 0, .1);

    .user-menu-list {
        display: flex;
        width: 300px;
        padding: 16px;
        .item {
            width: 80px;
            padding: 8px 8px;
            text-align: center;
            &:hover {
                background-color: $hoverBg;
                /*background-color: #f1f1f1;*/
            }
        }
        .link {
            display: block;
            width: 100%;
            height: 100%;
            color: inherit;
        }
        .icon {
            color: #999;
        }
        .title {
            font-size: 12px;
        }
    }
    .login-out {
        &:hover {
            background-color: $hoverBg;
        }
    }
</style>
