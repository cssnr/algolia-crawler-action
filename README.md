[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/algolia-crawler-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/algolia-crawler-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/algolia-crawler-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/algolia-crawler-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/algolia-crawler-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/algolia-crawler-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/algolia-crawler-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/cssnr/algolia-crawler-action/blob/master/src/index.js)
[![Action Run Using](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fcssnr%2Falgolia-crawler-action%2Frefs%2Fheads%2Fmaster%2Faction.yml&query=%24.runs.using&logo=githubactions&logoColor=white&label=runs)](https://github.com/cssnr/algolia-crawler-action/blob/master/action.yml)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/algolia-crawler-action/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/algolia-crawler-action/actions/workflows/release.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/algolia-crawler-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/algolia-crawler-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_algolia-crawler-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_algolia-crawler-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/algolia-crawler-action?logo=github&label=updated)](https://github.com/cssnr/algolia-crawler-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/algolia-crawler-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/algolia-crawler-action)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/algolia-crawler-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/algolia-crawler-action?logo=htmx)](https://github.com/cssnr/algolia-crawler-action/blob/master/src)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/algolia-crawler-action?logo=github)](https://github.com/cssnr/algolia-crawler-action/graphs/contributors)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/algolia-crawler-action?style=flat&logo=github)](https://github.com/cssnr/algolia-crawler-action/forks)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/algolia-crawler-action?logo=github)](https://github.com/cssnr/algolia-crawler-action/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/algolia-crawler-action?style=flat&logo=github)](https://github.com/cssnr/algolia-crawler-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Algolia Crawler Action

<a title="Algolia Crawler Action" href="https://actions.cssnr.com/" target="_blank">
<img alt="Algolia Crawler Action" align="right" width="128" height="auto" src="https://raw.githubusercontent.com/cssnr/algolia-crawler-action/refs/heads/master/.github/assets/logo.svg"></a>

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

Easily run the Algolia Crawler after a deployment. Works for free accounts including DocSearch.
Only requires your Crawler Credentials; Crawler ID, Crawler User ID, and Crawler API Key.

This uses the Algolia API to [Start a crawl](https://www.algolia.com/doc/rest-api/crawler/#tag/actions/operation/startReindex).

```yaml
- name: 'Algolia Crawler'
  uses: cssnr/algolia-crawler-action@v2
  with:
    crawler_id: ${{ secrets.CRAWLER_ID }}
    crawler_user_id: ${{ secrets.CRAWLER_USER_ID }}
    crawler_api_key: ${{ secrets.CRAWLER_API_KEY }}
```

Make sure to review the [Inputs](#inputs) and checkout more [Examples](#examples).

This is an extremely simple action, for more details see [src/index.js](src/index.js).

An alternative to this action is to use a simple [web-request-action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#examples).

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

| Output  | Description              |
| :------ | :----------------------- |
| status  | API Response Status Code |
| task_id | Algolia Crawler Task ID  |

```yaml
- name: 'Algolia Crawler'
  uses: cssnr/algolia-crawler-action@v2
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
        uses: cssnr/algolia-crawler-action@v2
        with:
          crawler_id: ${{ secrets.CRAWLER_ID }}
          crawler_user_id: ${{ secrets.CRAWLER_USER_ID }}
          crawler_api_key: ${{ secrets.CRAWLER_API_KEY }}
```

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/algolia-crawler-action/network/dependents

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
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Algolia%20Crawler%20Action)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

[![Actions Tools](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions/actions-tools.png)](https://actions-tools.cssnr.com/)

Additionally, you can support other [GitHub Actions](https://actions.cssnr.com/) I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/create-files-action](https://github.com/cssnr/create-files-action?tab=readme-ov-file#readme) - Create various files from templates.
- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [javascript-action](https://github.com/smashedr/javascript-action?tab=readme-ov-file#readme) - JavaScript
- [typescript-action](https://github.com/smashedr/typescript-action?tab=readme-ov-file#readme) - TypeScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Dockerfile Python
- [test-action-uv](https://github.com/smashedr/test-action-uv?tab=readme-ov-file#readme) - Dockerfile Python UV
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image Python

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
