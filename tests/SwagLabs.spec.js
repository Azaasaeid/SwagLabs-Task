 const {test, expect} = require('@playwright/test');
 const { only } = require('node:test');


 //scenario no.1 (LogIn)
 test('Login test', async ({browser})=>
 {
     const context = await  browser.newContext();
     const page = await context.newPage();
     const userName = page.locator('#user-name');
     const password = page.locator("[type='password']");
     const singIn = page.locator("#login-button");
     //navigate to URL
     await page.goto("https://www.saucedemo.com");
     console.log(await page.title());
     await userName.fill("standard_user");
     await password.fill("");
     await singIn.click();
     //when the password is blank
    console.log(await page.locator("[data-test='error']").textContent());
    await expect(page.locator("[data-test='error']")).toContainText('Epic');
    //enter the password
    await password.fill("");
    await password.fill("secret_sauce");
    await singIn.click();
    await page.waitForTimeout(1000);
 });

 //Scenario no.2 (Sorting the products)
 test('Sorting Product', async ({page})=>
    {
     const userName = page.locator('#user-name');
     const password = page.locator("[type='password']");
     const singIn = page.locator("#login-button");
     //navigate to URL
     await page.goto("https://www.saucedemo.com");
     //logIn
     await userName.fill("standard_user");
     await password.fill("secret_sauce");
     await singIn.click();
     // Wait until the products page loads
     await page.waitForSelector('.product_sort_container');
     //sort by (Z to A)
     await page.selectOption('.product_sort_container','za');
     console.log('Products sorted by price (Z to A).');
     await page.waitForTimeout(1000);
    });


 // Scenario no.3 (Add products from landing page)
 test('Add Product To Cart', async ({browser})=>
    {
     const context = await  browser.newContext();
     const page = await context.newPage();
     const userName = page.locator('#user-name');
     const password = page.locator("[type='password']");
     const singIn = page.locator("#login-button");
     const addToCartFirst = page.locator('.btn_inventory').nth(0);
     //navigate to URL
     await page.goto("https://www.saucedemo.com");
     console.log(await page.title());
     //logIn
     await userName.fill("standard_user");
     await password.fill("secret_sauce");
     await singIn.click();
     console.log(await page.title());
     await expect(page).toHaveTitle("Swag Labs");
     //add to cart
     await addToCartFirst.click();
    console.log('First products added to cart successfully.');
    await page.waitForTimeout(1000);

 });

  // Scenario no.4 (Remove product from landing page)
  test('Remove Product from Cart', async ({browser})=>
    {
     const context = await  browser.newContext();
     const page = await context.newPage();
     const userName = page.locator('#user-name');
     const password = page.locator("[type='password']");
     const singIn = page.locator("#login-button");
     const addToCartFirst = page.locator('.btn_inventory').nth(0);
     const removeFromCart = page.locator('.btn_inventory').nth(0);
     //navigate to URL
     await page.goto("https://www.saucedemo.com");
     console.log(await page.title());
     //logIn
     await userName.fill("standard_user");
     await password.fill("secret_sauce");
     await singIn.click();
     console.log(await page.title());
     await expect(page).toHaveTitle("Swag Labs");
     //add to cart
     await addToCartFirst.click();
     console.log('First products added to cart.');
     await page.waitForTimeout(500);
     //remove from cart
     await removeFromCart.click();
    console.log('First products removed from cart.');
    await page.waitForTimeout(1000);

 });


 //scenario no.5 (View cart products)
 test('View The Cart test', async ({browser})=>
    {
        const context = await  browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#user-name');
        const password = page.locator("[type='password']");
        const singIn = page.locator("#login-button");
        const addToCartFirst = page.locator('.btn_inventory').nth(0);
        const theCart = page.locator('a.shopping_cart_link');
        //navigate to URL
        await page.goto("https://www.saucedemo.com");
        console.log(await page.title());
        //login
        await userName.fill("standard_user");
        await password.fill("secret_sauce");
        await singIn.click();
        console.log(await page.title());
        await expect(page).toHaveTitle("Swag Labs");
        // add to cart
        await addToCartFirst.click();
        console.log('First products added to cart.');
        // view the cart
        await theCart.click();
        console.log('The Cart open successfully.');
        await page.waitForTimeout(1000);

   });



 //scenario no.6 (Fill Checkout form)
 test('Checkout Form test', async ({browser})=>
   {
       const context = await  browser.newContext();
       const page = await context.newPage();
       const userName = page.locator('#user-name');
       const password = page.locator("[type='password']");
       const singIn = page.locator("#login-button");
       const addToCartFirst = page.locator('.btn_inventory').nth(0);
       const theCart = page.locator('a.shopping_cart_link');
       const Checkout = page.locator("#checkout");
       const firstName = page.locator("#first-name");
       const lastName = page.locator("#last-name");
       const postalCode = page.locator("#postal-code");
       const continueToCheckOut = page.locator("#continue");
       const overView = page.locator('.title');
       const clickFinish= page.locator("#finish");
       const CompleteCheckOut = page.locator ('h2.complete-header');

       //navigate to URL
       await page.goto("https://www.saucedemo.com");
       console.log(await page.title());
       //login
       await userName.fill("standard_user");
       await password.fill("secret_sauce");
       await singIn.click();
       console.log(await page.title());
       await expect(page).toHaveTitle("Swag Labs");
       // add to cart
       await addToCartFirst.click();
       console.log('First products added to cart.');
       // Open the cart
       await theCart.click();
      console.log('The Cart open successfully.');
      //click checkout
      await Checkout.click();
      // fill the form
      await firstName.type("Azza");
      await lastName.type("Saeid");
      await postalCode.type("42536");
      // continue to CheckOut
      await continueToCheckOut.click();
      await expect(overView).toContainText("Checkout:");
      console.log('Successfully CheckOut');
      // click finish
      await clickFinish.click();
      await expect(CompleteCheckOut).toContainText("Thank you for your order!");
     console.log('Successfully Payment');
     await page.waitForTimeout(1000);
  
   });


 //scenario no.7 (Canceling checkout)
 test('Cancel Checkout test', async ({browser})=>
   {
       const context = await  browser.newContext();
       const page = await context.newPage();
       const userName = page.locator('#user-name');
       const password = page.locator("[type='password']");
       const singIn = page.locator("#login-button");
       const addToCartFirst = page.locator('.btn_inventory').nth(0);
       const theCart = page.locator('a.shopping_cart_link');
       const Checkout = page.locator("#checkout");
       const firstName = page.locator("#first-name");
       const lastName = page.locator("#last-name");
       const postalCode = page.locator("#postal-code");
       const cancelButton = page.locator("#cancel");
       const myCart= page.locator('div.title');


       //navigate to URL
       await page.goto("https://www.saucedemo.com");
       console.log(await page.title());
       //login
       await userName.fill("standard_user");
       await password.fill("secret_sauce");
       await singIn.click();
       console.log(await page.title());
       await expect(page).toHaveTitle("Swag Labs");
       // add to cart
       await addToCartFirst.click();
       console.log('First products added to cart.');
       // Open the cart
       await theCart.click();
      console.log('The Cart open successfully.');
      //click checkout
      await Checkout.click();
      // fill the form
      await firstName.type("Azza");
      await lastName.type("Saeid");
      await postalCode.type("42536");
      // cancel the CheckOut
     await cancelButton.click();
     await expect(myCart).toContainText("Your Cart");
     console.log('Your Payment is canceled');
      // click finish
     await clickFinish.click();
      await expect(CompleteCheckOut).toContainText("Your Cart");
      console.log('Successfully Payment');
     await page.waitForTimeout(1000);
  
   });


 //scenario no.8 (LogOut)
 test('LogOut test', async ({browser})=>
   {
       const context = await  browser.newContext();
       const page = await context.newPage();
       const userName = page.locator('#user-name');
       const password = page.locator("[type='password']");
       const singIn = page.locator("#login-button");
       const menu = page.locator('#react-burger-menu-btn');
       const logOut = page.locator("#logout_sidebar_link");
       //navigate to URL
       await page.goto("https://www.saucedemo.com");
       console.log(await page.title());
       //logIn
       await userName.fill("standard_user");
       await password.fill("secret_sauce");
       await singIn.click();
       console.log(await page.title());
       await expect(page).toHaveTitle("Swag Labs");
       // Open the menu to log out
       await menu.click();
       await logOut.click();
       console.log('Logged out successfully.');
       await page.waitForTimeout(1000);

   });
