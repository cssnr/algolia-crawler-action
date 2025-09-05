const core = require('@actions/core')
const axios = require('axios')

;(async () => {
    try {
        // Inputs
        const crawlerId = core.getInput('crawler_id', { required: true })
        console.log('crawlerId:', crawlerId)
        const crawlerUserIid = core.getInput('crawler_user_id', { required: true })
        console.log('crawlerUserIid:', crawlerUserIid)
        const crawlerApiKey = core.getInput('crawler_api_key', { required: true })
        console.log('crawlerApiKey:', crawlerApiKey)

        // Options
        const url = `https://crawler.algolia.com/api/1/crawlers/${crawlerId}/reindex`
        console.log('url:', url)
        const auth = { crawlerUserIid, crawlerApiKey }
        console.log('auth:', auth)

        // Request
        const config = { url, method: 'POST', auth }
        console.log('config:', config)
        const response = await axios.request(config)
        // console.log('response:', response)
        // console.log('response.request._headers:', response.request._headers)
        // console.log('response.headers:', response.headers)
        console.log('response.status:', response.status)
        console.log('response.data:', response.data)

        // Outputs
        core.setOutput('status', response.status)
        core.setOutput('task_id', response.data?.taskId ?? '')

        core.info(`\u001b[32;1mFinished Success`)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
