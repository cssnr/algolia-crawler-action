[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/algolia-crawler-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/algolia-crawler-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/algolia-crawler-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/algolia-crawler-action/tags)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/algolia-crawler-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/algolia-crawler-action/releases/latest)
[![Release](https://img.shields.io/github/actions/workflow/status/cssnr/algolia-crawler-action/release.yaml?logo=github&label=release)](https://github.com/cssnr/algolia-crawler-action/actions/workflows/release.yaml)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/algolia-crawler-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/algolia-crawler-action/actions/workflows/lint.yaml)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/algolia-crawler-action?logo=github&label=updated)](https://github.com/cssnr/algolia-crawler-action/graphs/commit-activity)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/algolia-crawler-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/algolia-crawler-action)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/algolia-crawler-action?logo=htmx)](https://github.com/cssnr/algolia-crawler-action)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/algolia-crawler-action?style=flat&logo=github)](https://github.com/cssnr/algolia-crawler-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/algolia-crawler-action?style=flat&logo=github)](https://github.com/cssnr/algolia-crawler-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Algolia Crawler Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

Easily run the Algolia Crawler after a deployment. Works for free accounts including DocSearch.
Only requires your Crawler Credentials; Crawler ID, Crawler User ID, and Crawler API Key.

This uses the Algolia API to [Start a crawl](https://www.algolia.com/doc/rest-api/crawler/#tag/actions/operation/startReindex).

An alternative to this action is to use a simple [web-request-action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#examples).

```yaml
- name: 'Algolia Crawler'
  uses: cssnr/algolia-crawler-action@v1
  with:
    crawler_id: ${{ secrets.CRAWLER_ID }}
    crawler_user_id: ${{ secrets.CRAWLER_USER_ID }}
    crawler_api_key: ${{ secrets.CRAWLER_API_KEY }}
```

Make sure to review the [Inputs](#inputs) and checkout more [Examples](#examples).

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/algolia-crawler-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/algolia-crawler-action/issues) if you find any bugs.

## Inputs

| Input           | Short&nbsp;Description&nbsp;of&nbsp;Input             |
| :-------------- | :---------------------------------------------------- |
| crawler_id      | Crawlers > Your Cralwer > Settings > `Crawler ID`     |
| crawler_user_id | Data Sources > Crawler > Settings > `Crawler User Id` |
| crawler_api_key | Data Sources > Crawler > Settings > `Crawler API Key` |

Note, these are found in Algolia Dashboard under: `Data Sources` > `Crawler`

### Crawler ID

To find your `crawler_id` you need to select your named crawler from the Crawlers list,
then under the `CONFIGURATION` heading, click on `Settings`. From there you can copy your `Crawler ID`.

### Crawler User Id / Crawler API Key

To find these do not select a crawler from the `Cralwers` tab, instead click on the `Settings` tab.
From there you can copy both the `Crawler User Id` and `Crawler API Key`.

These are usually the same across your account if you have multiple crawlers. The only variable is the `Cralwer ID`.

## Outputs

| Output  | Description               |
| :------ | :------------------------ |
| status  | API Response Status Code  |
| task_id | Resulting Crawler Task ID |

```yaml
- name: 'Algolia Crawler'
  uses: cssnr/algolia-crawler-action@v1
  id: crawler
  with:
    crawler_id: ${{ secrets.CRAWLER_ID }}
    crawler_user_id: ${{ secrets.CRAWLER_USER_ID }}
    crawler_api_key: ${{ secrets.CRAWLER_API_KEY }}

- name: 'Echo Output'
  run: |
    echo "Status Code: ${{ steps.crawler.outputs.status }}"
    echo "Task ID: ${{ steps.crawler.outputs.task_id }}"
```

## Examples

💡 _Click on an example heading to expand or collapse the example._

<details><summary>GitHub Pages - VitePress</summary>

```yaml
name: 'Pages'

on:
  push:
    branches:
      - 'master'
    paths:
      - 'docs/**'
      - '.vitepress/**'
      - 'package.json'
      - '.github/workflows/pages.yaml'
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    name: 'Build'
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: 'Checkout'
        uses: actions/checkout@v5
        with:
          fetch-depth: 0

      - name: 'Setup Node 22'
        uses: actions/setup-node@v5
        with:
          node-version: 22
          cache: npm

      - name: 'Configure Pages'
        uses: actions/configure-pages@v5

      - name: 'Install Dependencies'
        run: |
          npm ci

      - name: 'Run Build'
        run: |
          npm run build

      - name: 'Upload Pages Artifact'
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    name: 'Deploy'
    runs-on: ubuntu-latest
    timeout-minutes: 5
    needs: build

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: 'Deploy Pages'
        id: deployment
        uses: actions/deploy-pages@v4

  post:
    name: 'Post-Deploy'
    runs-on: ubuntu-latest
    timeout-minutes: 5
    needs: deploy

    steps:
      - name: 'Algolia Crawler'
        uses: cssnr/algolia-crawler-action@v1
        with:
          crawler_id: ${{ secrets.CRAWLER_ID }}
          crawler_user_id: ${{ secrets.CRAWLER_USER_ID }}
          crawler_api_key: ${{ secrets.CRAWLER_API_KEY }}
```

</details>

## Tags

The following rolling [tags](https://github.com/cssnr/algolia-crawler-action/tags) are maintained.

| Tag                                                                                                                                                                                                                                 | Example  | Target   | Bugs | Feat. | Description                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- | :--: | :---: | :-------------------------------------------------------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/algolia-crawler-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=limegreen)](https://github.com/cssnr/algolia-crawler-action/releases/latest)     | `vN`     | `vN.x.x` |  ✅  |  ✅   | Includes new features but is always backwards compatible. |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/algolia-crawler-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=yellowgreen)](https://github.com/cssnr/algolia-crawler-action/releases/latest) | `vN.N`   | `vN.N.x` |  ✅  |  ❌   | Only receives bug fixes. This is the most stable tag.     |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/algolia-crawler-action?style=for-the-badge&label=%20&color=orange)](https://github.com/cssnr/algolia-crawler-action/releases/latest)                               | `vN.N.N` | `vN.N.N` |  ❌  |  ❌   | Not a rolling tag. **Not** recommended.                   |

You can view the release notes for each version on the [releases](https://github.com/cssnr/algolia-crawler-action/releases) page.

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/algolia-crawler-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/algolia-crawler-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/algolia-crawler-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Web%20Request%20Action)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
