import * as core from '@actions/core'
import axios from 'axios'

async function main() {
    const version: string = process.env.GITHUB_ACTION_REF
        ? `\u001b[35;1m${process.env.GITHUB_ACTION_REF}`
        : '\u001b[33;1mSource'
    core.info(`Algolia Crawler Action - ${version}`)

    // Inputs
    const inputs = {
        crawlerId: core.getInput('crawler_id', { required: true }),
        crawlerUserId: core.getInput('crawler_user_id', { required: true }),
        crawlerApiKey: core.getInput('crawler_api_key', { required: true }),
    } as const
    console.log('inputs:', inputs)

    // Options
    const url = `https://crawler.algolia.com/api/1/crawlers/${inputs.crawlerId}/reindex`
    // console.log('url:', url)
    const auth = { username: inputs.crawlerUserId, password: inputs.crawlerApiKey }
    // console.log('auth:', auth)

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
}

try {
    await main()
} catch (e) {
    console.log(e)
    if (e instanceof Error) core.setFailed(e.message)
}
