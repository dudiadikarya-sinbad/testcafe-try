import { Selector } from 'testcafe'

fixture('testcafe try')
    .page `https://www.google.com`

test('Test 1st Try', async t => {
    const inputSearch = Selector('input[name="q"]')
    await t
        .typeText(inputSearch, 'TestCafe')
        .click('input[name="btnK"]')
        .expect(inputSearch.value).contains('TestCafe', 'Success')

});