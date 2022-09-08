import { ToolsQAFormsPage } from "./pages/ToolsQAFormsPage";
import { ToolsQAPracticeFormsPage } from "./pages/ToolsQAPracticeFormsPage.";

const { test } = require('@playwright/test');
const { ToolsQAHomePage } = require('./pages/ToolsQAHomePage');

test('Should go to the Practice Form page, fill in details and submit them' , async({ page }) => {
    const homePage = new ToolsQAHomePage(page);
    await homePage.goto();
    await homePage.openForms();
    const formsPage = new ToolsQAFormsPage(page);
    await formsPage.openPracForms();
    const pracForm = new ToolsQAPracticeFormsPage(page);
    
    await pracForm.fillInForm("Test", "Persoon", "Male", "0123456789");
    await pracForm.submit();
    });