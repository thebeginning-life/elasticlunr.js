describe('Gatsby', () => {
    beforeAll(async () => {
      await page.goto('http://localhost:9000');
    });
    it('should have a search input', async () => {
      let searchBoxes = await page.$$('input.search');
      expect(searchBoxes.length).toBe(1);
    });
    it('Provides the correct suggestions', async () => {
      let liCount = (await page.$$('li')).length;
      await page.focus('input.search');
      await page.keyboard.type('foobar');
      let liCount2 = (await page.$$('li')).length;
      expect(liCount2-liCount).toBe(0);
      await page.$eval('input.search', el => el.value = '');
      await page.focus('input.search');
      await page.keyboard.type('second');
      let liCount3 = (await page.$$('li')).length;
      expect(liCount3-liCount).toBe(1);
      await page.click('li > a');  
      await page.waitForNavigation({waitUntil: 'load'});
      expect(page.url()).toBe('http://localhost:9000/my-second-post/');
    })
  });