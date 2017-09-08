# Axe Headless Chrome API
Runs axe on a page in [puppeteer](https://github.com/GoogleChrome/puppeteer), a headless chrome browser.

```bash
$ git clone https://github.com/schne324/axe-headless-chrome-api.git
$ cd axe-headless-chrome-api
$ npm i
$ node app
```

```bash
$ curl localhost:3000?url=https://github.com
```

## API
### `?url=http://example.com`
The url of the page to run axe on (accepts any valid url)
