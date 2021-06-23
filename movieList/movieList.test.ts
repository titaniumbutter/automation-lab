import { Builder, Capabilities, By } from "selenium-webdriver"
const { test } = require('@jest/globals')
import { afterAll, beforeAll } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add a movie to a list', async () => {

    let searchBar = await driver.findElement(By.name('q'));

    await searchBar.sendKeys('Tarzan\n');

    await searchBar.sendKeys('Taken\n')

    await driver.sleep(1000);

    await driver.findElement(By.xpath('(//button[contains (text(),"x")])')).click();
    await driver.findElement(By.xpath('(//button[contains (text(),"x")])')).click();

    await driver.sleep(4000);

    searchBar = await driver.findElement(By.name('q'));

    await searchBar.sendKeys('monsters inc\n');

    await driver.findElement(By.xpath('//span[contains (@class, "n")]')).click();

    await driver.sleep(3000);

})