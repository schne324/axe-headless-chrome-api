'use strict';

const puppeteer = require('puppeteer');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

require('koa-qs')(app);

router.get('/', async ctx => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(ctx.query.url || 'https://google.com');
  // add axe to page
  await page.addScriptTag('https://unpkg.com/axe-core');
  // run axe on the page
  const results = await page.evaluate(async () => {
    return await axe.run();
  });

  browser.close();

  ctx.body = results;
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
