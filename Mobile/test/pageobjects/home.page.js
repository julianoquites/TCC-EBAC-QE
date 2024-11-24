import { $ } from "@wdio/globals";

class HomePage {
  async openMenu(menu) {
    await $(`[accessibility-id*="${menu}"]`).click();
  }
  async openAllProducts() {
    await $('[accessibility-id*="Search Products"]').click();
  }
  async backFunction() {
    await browser.back();
  }
}

export default new HomePage();
