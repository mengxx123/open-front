<template>
    <div class="page-home">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="container container-main">
                <article>
                    <h1>云设开放平台介绍</h1>
                    <p>云设开放平台是一个专门为开发者提供服务的平台，我们为广大开发者提供便捷的服务，让更多的开发者能够快速开发一款应用，实现自己的产品。</p>
                    <p>针对开发者，我们提供了免费的网站托管，API 接口支持等服务。。。</p>
                </article>
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
            console.log(location)
        }
    }
</script>

<style scoped>
</style>
