const {Builder, By, until, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

chromeOptions = new chrome.Options();
chromeOptions.addArguments('--start-maximized');

async function siteHandler(){
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  await driver.get('https://www.handler.by');
  await driver.findElement(By.xpath("//*[contains(text(),'Получить консультацию')]")).click();
  var query = driver.wait(until.elementLocated(By.css('input[name=form_text_27]')));
  await query.sendKeys('Злой Тестировщик');
  await driver.findElement(By.css('input[name=form_text_28]')).sendKeys('123456789');
  await driver.findElement(By.name('web_form_submit')).click();
  await driver.sleep(3000);
  await driver.findElement(By.className('close jqmClose')).click();
  await driver.findElement(By.className('top-btn inline-search-show twosmallfont')).click();
  await driver.sleep(3000);
  var query = driver.wait(until.elementLocated(By.css('#title-search-input')));
  await query.sendKeys('фурнитура', Key.ENTER);
}
siteHandler()
