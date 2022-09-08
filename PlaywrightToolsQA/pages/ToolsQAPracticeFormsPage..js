exports.ToolsQAPracticeFormsPage = class ToolsQAPracticeFormsPage {

    /**
     * @param page {import('playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.maleBtn = page.locator("xpath=//label[text()='Male']");
        this.femaleBtn = page.locator("xpath=//label[text()='Female']");
        this.otherBtn = page.locator("xpath=//label[text()='Other']");
        this.phoneNr = page.locator('#userNumber');
        this.submitBtn = page.locator('#submit');
    }

    async setGender(gender) {
        if (gender.toLowerCase() == "male") {
            await this.maleBtn.check();
        }
        if (gender.toLowerCase() == "female") {
            await this.femaleBtn.check();
        }
        if (gender.toLowerCase() == "other") {
            await this.otherBtn.check();
        }
    }

    async fillInForm(givenFirstName, givenLastName,gender, phoneNbr) {
        await this.firstName.fill(givenFirstName);
        await this.lastName.fill(givenLastName);
        this.setGender(gender);
        await this.phoneNr.fill(phoneNbr);
    }
    

    async submit() {
        await this.submitBtn.click();
    }
}




