let config = {
    domain: 'http://localhost:8082',
    clientId: '1',
    redirectUri: 'http://localhost:8080/oauth/callback'
}

let oauth = {
    getOauthUrl() {
        return `${config.domain}/oauth/authorize?client_id=${config.clientId}&redirect_uri=${config.redirectUri}&response_type=code&state=123&scope=info,list`
    }
}

export default oauth
