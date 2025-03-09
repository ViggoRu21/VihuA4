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



// Test to ensure the TODO list is empty
test("should ensure the TODO list is empty", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("li")).toHaveCount(0);

});


// Test to add a new TODO item to the list
test("should add a new item to the TODO list", async ({ page }) => {
  await page.goto("/");

  // Locate the input field and type a new TODO item
  await page.fill("input", "Test Item 1");

  // Click the "Add" button
  await page.click("button[type='submit']");

  // Verify that there is a TODO item
  await expect(page.locator("li")).toHaveCount(1);

  // Verify that the new TODO item appears in the list
  await expect(page.locator("li").last()).toContainText("Test Item 1");

});


// Test to add a second TODO item to the list
test("should add a second TODO item to the list", async ({ page }) => {
  await page.goto("/");

  // Locate the input field and type a second TODO item
  await page.fill("input", "Test Item 2");

  // Click the "Add" button
  await page.click("button[type='submit']");

  // Verify that there are two TODO items
  await expect(page.locator("li")).toHaveCount(2);
  
  // Verify that the new TODO item appears in the list
  await expect(page.locator("li").nth(1)).toContainText("Test Item 2");

  // Click the delete button
  await page.click("button[class='text-red-500 hover:text-red-600']");

  // Click the delete button
  await page.click("button[class='text-red-500 hover:text-red-600']");

});


// Test to remove a TODO item from the list
test("should remove a TODO item", async ({ page }) => {
  await page.goto("/");

  // Add a TODO item
  await page.fill("input", "Remove Item");

  // Click the "Add" button
  await page.click("button[type='submit']");

  // Click the delete button
  await page.click("button[class='text-red-500 hover:text-red-600']");

});

