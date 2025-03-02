import { test, expect } from "@playwright/test";

// 🧑‍🏫 Add your e2e tests here

test("should navigate to index page and have correct title", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The page should contain a title element with the text "TODO 📃"
  await expect(page.title()).resolves.toMatch("TODO 📃");
});


test("should ensure the TODO list is empty", async ({
  page,
}) => {
  // Go to the index page
  await page.goto("/");
  // Construct a counter and count list items
  await expect(page.locator("li")).toHaveCount(0);

});


test("should add a new item to the TODO list", async ({ page }) => {
  // Go to the index page
  await page.goto("/");

  // Locate the input field and type a new TODO item
  await page.fill("input", "Test Item"); // Update the selector as needed

  // Click the "Add" button
  await page.click("button[type='submit']"); // Update the selector as needed

  // Verify that the new TODO item appears in the list
  await expect(page.locator("li")).toContainText("Test Item");
});


test("should add a second TODO item to the list", async ({ page }) => {
  // Go to the index page
  await page.goto("/");

  // Locate the input field and type a new TODO item
  await page.fill("input", "Test Item2");

  // Click the "Add" button
  await page.click("button[type='submit']");

  // Verify that the new TODO item appears in the list
  await expect(page.locator("li")).toContainText("Test Item2");
  
  // Verify that there are two TODO items
  await expect(page.locator("li")).toHaveCount(2);

});



