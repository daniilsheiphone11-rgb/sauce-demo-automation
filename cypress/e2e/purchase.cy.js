import LoginPage from "../pages/LoginPage.cy";
import ProductsPage from "../pages/ProductsPage.cy";
import CheckoutPage from "../pages/CheckoutPage.cy";
import CartPage from "../pages/CartPage.cy";

describe("SauceDemo", () => {
 it("User can buy Sauce Labs Backpack", () => {
 cy.visit("https://www.saucedemo.com/");

 LoginPage.login( 
  "standard_user",
  "secret_sauce"
);

ProductsPage.ProductPage();

CheckoutPage.CheckoutPage(
  "User",
  "User",
  "000000"
)

CartPage.Cart();



 
});
});

