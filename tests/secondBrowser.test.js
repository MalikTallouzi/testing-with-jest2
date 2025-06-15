const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
});

test('Pushing a value updates the displayed top of stack', async () => {
    const pushButton = await driver.findElement(By.id('push'));
    await pushButton.click();

    const alert = await driver.switchTo().alert();
    await alert.sendKeys('Jest-I-Test');
    await alert.accept();

    const topOfStack = await driver.wait(
        until.elementTextContains(driver.findElement(By.id('top_of_stack')), 'Jest-I-Test'),
        defaultTimeout
    );

    const text = await topOfStack.getText();
    expect(text).toBe('Jest-I-Test');
});