const { ToolsQAPracticeFormsPage } = require('./ToolsQAPracticeFormsPage.');

exports.ToolsQAFormsPage = class ToolsQAFormsPage {

    /**
     * @param page {import('playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.formsLink = page.locator('text=Practice Form');
    }

    async openPracForms() {
        await this.formsLink.first().click();
        return new ToolsQAPracticeFormsPage(this.page);
    }
}

