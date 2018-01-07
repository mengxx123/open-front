<template>
    <div class="page page-home">
        <header class="page-header">
            <ui-appbar title="开发者平台">
                <ui-icon-button icon="arrow_back_ios" slot="left" @click="$router.go(-1)"/>
            </ui-appbar>
        </header>
        <main class="page-body">

            <div v-if="developer">
                <router-link to="/admin/develop">进入管理平台</router-link>
            </div>
            <div v-else>
                <button @click="register">成为开发者</button>
            </div>

            <ui-content-block>
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
                <p><a href="/api/users/1?access_token=" target="_blank">授权结果测试</a></p>
                <h2>开发文档</h2>
                本平台采用OAuth2.0
                <h2>用户授权并获取code</h2>
                <p>
                    授权回调域名配置规范为全域名并且不带http，比如需要网页授权的域名 为：www.qq.com，配置以后此域名下面的页面http://www.qq.com/music.html 、 http://www.qq.com/login.html 都可以进行OAuth2.0鉴权。但http://pay.qq.com 、 http://music.qq.com 、 http://qq.com无法进行OAuth2.0鉴权。</p>
                <p>
                    示例：http://localhost:8080/eschool/oauth/authorize?client_id=2&redirect_uri=http://iask.sina.com.cn/help/standard&response_type=code&state=999&scope=info,list</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th class="column-param">参数</th>
                        <th class="column-require">必须</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>appid</td>
                        <td>是</td>
                        <td>公众号的唯一标识</td>
                    </tr>
                    <tr>
                        <td>redirect_uri</td>
                        <td>是</td>
                        <td>授权后重定向的回调链接地址</td>
                    </tr>
                    <tr>
                        <td>response_type</td>
                        <td>是</td>
                        <td>返回类型，请填写code</td>
                    </tr>
                    <tr>
                        <td>scope</td>
                        <td>是</td>
                        <td>
                            应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
                        </td>
                    </tr>
                    <tr>
                        <td>state</td>
                        <td>否</td>
                        <td>重定向后会带上state参数，开发者可以填写任意参数值</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <hr>
                <h2>使用code换取access_token</h2>
                <p>
                    https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th class="column-param">参数</th>
                        <th class="column-require">必须</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>appid</td>
                        <td>是</td>
                        <td>公众号的唯一标识</td>
                    </tr>
                    <tr>
                        <td>secret</td>
                        <td>是</td>
                        <td>公众号的appsecret</td>
                    </tr>
                    <tr>
                        <td>code</td>
                        <td>是</td>
                        <td>填写第一步获取的code参数</td>
                    </tr>
                    <tr>
                        <td>grant_type</td>
                        <td>是</td>
                        <td>填写为authorization_code</td>
                    </tr>

                    </tbody>
                </table>
                <p>得到如下json数据
                <pre><code>{
	"access_token": "OezXcEiiBSKSxW0eoy-lIeAsR0GmYd1awCffdHgb4fhS",
	"expires_in": 7200,
	"refresh_token": "OezXcEiiBSKSxW0eoy-lIeAsR0GmYd1awCffdHgb4fhS",
	"openid": "oLVPpjqs9BhvzwPj5A-vTYAX3GLc",
	"scope": "snsapi_userinfo,"
}</code></pre>
                <p>json各字段解析：</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th class="column-param">参数</th>
                        <th>描述</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>access_token</td>
                        <td>网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同</td>
                    </tr>
                    <tr>
                        <td>expires_in</td>
                        <td>access_token接口调用凭证超时时间，单位（秒）</td>
                    </tr>
                    <tr>
                        <td>refresh_token</td>
                        <td>用户刷新access_token</td>
                    </tr>
                    <tr>
                        <td>openid</td>
                        <td>用户唯一标识，请注意，在未关注公众号时，用户访问公众号的网页，也会产生一个用户和公众号唯一的OpenID</td>
                    </tr>
                    <tr>
                        <td>scope</td>
                        <td>用户授权的作用域，使用逗号（,）分隔</td>
                    </tr>
                    </tbody>
                </table>
                <h3>刷新access_token</h3>
                <p>
                    https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=APPID&grant_type=refresh_token&refresh_token=REFRESH_TOKEN</p>
                <table class="table">
                    <thead>
                    <tr>
                        <th class="column-param">参数</th>
                        <th class="column-require">必须</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>appid</td>
                        <td>是</td>
                        <td>公众号的唯一标识</td>
                    </tr>
                    <tr>
                        <td>grant_type</td>
                        <td>是</td>
                        <td>填写为refresh_token</td>
                    </tr>
                    <tr>
                        <td>refresh_token</td>
                        <td>是</td>
                        <td>填写通过access_token获取到的refresh_token参数</td>
                    </tr>
                    <p>在浏览器中执行得到前面同样格式的json数据</p>

                    </tbody>
                </table>
                <h2>使用access_token获取用户信息</h2>
                <P>https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID</P>
                <table class="table">
                    <thead>
                    <tr>
                        <th class="column-param">参数</th>
                        <th class="column-require">必须</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>access_token</td>
                        <td>是</td>
                        <td>网页授权接口调用凭证,注意：此access_token与基础支持的access_token不同</td>
                    </tr>
                    <tr>
                        <td>openid</td>
                        <td>是</td>
                        <td>用户的唯一标识</td>
                    </tr>
                    <tr>
                        <td>refresh_token</td>
                        <td>是</td>
                        <td>填写通过access_token获取到的refresh_token参数</td>
                    </tr>


                    </tbody>
                </table>
                <p>在浏览器中执行得到前面同样格式的json数据</p>
                <p>{
                    "openid": "oLVPpjqs9BhvzwPj5A-vTYAX3GLc",
                    "nickname": "方倍",
                    "sex": 1,
                    "language": "zh_CN",
                    "city": "Shenzhen",
                    "province": "Guangdong",
                    "country": "CN",
                    "headimgurl": "http://wx.qlogo.cn/mmopen/utpKYf69VAbCRDRlbUsPsdQN38DoibCkrU6SAMCSNx558eTaLVM8PyM6jlEGzOrH67hyZibIZPXu4BK1XNWzSXB3Cs4qpBBg18/0",
                    "privilege": []}</p>
                <h2>附录</h2>
                <h3>权限</h3>
                <table>
                    <thead>
                    <tr>
                        <th class="column-param">参数</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>get_user_info</td>
                        <td>获取用户信息</td>
                    </tr>
                    <tr>
                        <td>add_topic</td>
                        <td>发表帖子</td>
                    </tr>
                    </tbody>
                </table>
                <p>

                    add_one_blog
                    add_album
                    upload_pic
                    list_album
                    add_share
                    check_page_fans
                    add_t,
                    add_pic_t,
                    del_t,
                    get_repost_list,
                    get_info,
                    get_other_info,
                    get_fanslist,
                    get_idollist,
                    add_idol,
                    del_ido,
                    get_tenpay_addr
                    read
                    follow_app_official_microblog</p>

                <div>
                    <p>回调地址：</p>
                    <div><span>www.example.com/<input type="text"></span></div>
                </div>
        </ui-content-block>

    </main>
    </div>
</template>

<script>
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
            register() {
                this.$router.push('/developers/add')
            }
        }
    }
</script>

<style scoped>
</style>
