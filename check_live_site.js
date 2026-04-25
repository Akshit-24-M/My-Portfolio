import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  try {
    await page.goto('https://Akshit-24-M.github.io/My-Portfolio/', { waitUntil: 'networkidle2', timeout: 30000 });
    console.log('Page loaded');
    await new Promise(r => setTimeout(r, 5000)); // wait extra 5 seconds
  } catch (e) {
    console.error('Error navigating:', e);
  }

  await browser.close();
})();
