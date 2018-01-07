<template>
    <ui-page title="云设开放平台">
        <ui-content-block class="doc-article">
            <button @click="login">开始授权</button>
            <h1>开发者中心</h1>
            <h2>API（v1）</h2>
            <p>ESchool对所有的开发者开放。</p>
            <h2>文档</h2>
            <ul>
                <li></li>
            </ul>
            <div>
                <a href="/oauth/authorize?client_id=1&redirect_uri=http://iask.sina.com.cn/help/standard&response_type=code&state=123&scope=info,list"
                   target="_blank">开始授权</a>
                <a href="http://localhost:1030/oauth/access_token?client_id=1&grant_type=authorization_code&code=123" target="_blank">获取access_code</a>
                <a href="http://localhost:1030/oauth/refresh_token?client_id=1&grant_type=refresh_token&refresh_token=456&"
                   target="_blank">刷新access_code</a>
            </div>
        </ui-content-block>
    </ui-page>
</template>

<script>
    import oauth from '@/util/oauth'

    export default {
        data () {
            return {
                developer: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                console.log(oauth.getOauthUrl())

                let userId = this.$storage.get('user').id
                this.$http.get(`/users/${userId}/developer`)
                        .then(response => {
                                    let data = response.data
                                    if (data.code === 0) {
                                        this.developer = data.data
                                    }
                                },
                                response => {
                                    console.log(response)
                                })
            },
            login() {
                let url = oauth.getOauthUrl()
                location.href = url
            },
            register() {
                this.$router.push('/developers/add')
            }
        }
    }
</script>

<style scoped>
    .doc-article {
        max-width: 750px;
    }
</style>
