import { $ } from "@wdio/globals";

class ProductsPage {
  async getAllProducts() {
    return $(
      'android=new UiSelector().className("android.view.ViewGroup").instance(27)'
    );
  }
}

export default new ProductsPage();
