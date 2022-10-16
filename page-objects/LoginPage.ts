import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {
    // Define Selector
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordinput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator

    // Init selectors using constructor
    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordinput = page.locator('#user_password')
        this.submitButton = page.locator('text=Sign in')
        this.errorMessage = page.locator('.alert-error')

    }

    async login(username: string, password: string){
        await this.usernameInput.type(username);
        await this.passwordinput.type(password);
        await this.submitButton.click();
    }

    async assertErrorMessage(){
        await expect(this.errorMessage).toContainText('Login and/or password are wrong')
    }

}