import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        # Original Report
        await page.goto("file:///Users/pallavinitinkochar/Downloads/hedge-fund-mas/final_pod_assignment.html")
        await page.pdf(path="final_pod_assignment.pdf", format="A4", print_background=True)
        
        # Part B Report
        await page.goto("file:///Users/pallavinitinkochar/Downloads/hedge-fund-mas/performance_projection.html")
        await page.pdf(path="performance_projection.pdf", format="A4", print_background=True)
        
        await browser.close()

asyncio.run(run())
