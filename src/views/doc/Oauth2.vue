<template>
    <ui-page title="Oauth 2.0">
        <ui-content-block class="doc-article">
            <h1>开发者中心</h1>
            <h2>API（v1）</h2>
            <p>ESchool对所有的开发者开放。</p>
            <h2>文档</h2>d
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
