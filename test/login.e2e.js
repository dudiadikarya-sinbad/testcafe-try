import page from '../page/login_page.js'
import element from '../element/login_element.js'

const tc = require('../test_case/tc_login.js')
const env = require('dotenv').config();

const sscURL = process.env.BASE_URL_STG;
const trsUsername = process.env.TRS_USERNAME;
const trsPassword = process.env.TRS_PASSWORD;

fixture(`${tc.testCase.describe}`)
    .page(sscURL);

    test(`@test ${tc.testCase.positive.successLogin}`, async t => {
        await page.loginSupplier(trsUsername,trsPassword)
    });