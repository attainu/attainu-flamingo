## Mini Flipkart
Create a `signup` page with the below fields and relevant validations 
        - first name 
        - last name 
        - email 
        - mobile 

Create a `login` page using which the user can login

Create a `profile` page using which the user can update the below fields, disable the email update 
    - `first name`
    - `last name`
    - `mobile`

Create a form to add the product details with the below fields (All the fields are mandatory except last 2 checkboxes & discount)
    - category 
    - name 
    - description
    - image 
    - highilights (major details of the product)
        - initially display one text box to add one highilight
        - Create a + button, on click of this button new input field should be aaded to the form)
        - User should be able to add as many highilights as he/she wants
    - price 
    - discount (% of discount) 
    - Deal of the day (checkbox) 
    - Top Selection (checkbox) 
        - `Validations`
            - Follow the general validations 
            - The product should be only either in `deals of the day`/`top selection`. It shouldn't be there in both  

Header
    - Follow the screenshot to design the header 
    - No action required on search, only design 
    - `My Account` should be a drop-down with the below values 
        - `Profile`
            - On click, take the user to display/update the user information
        - `Logout` 
            - On click, logout the user from the application 
    - `More` should be replaced with `Add Product` and open a page to add the product information 
    - `Cart` is required but no actions on click 
        - Initially this will be normal, but there will be a counter coming when the user is adding the products to cart 

Home Page 
    - There will be 2 sections 
        - Deals of the day 
            - There should be a timer running just besides the header (timer for 1hr)
            - This section will display the products with a page size of `5` which are marked as `Deal of the day` 
            - You should initially display only 5 products 
            - On click of next, you should get next 5 products which are marked as `Deal of the day`
            - On click of prev, you should get prev 5 products which are marked as `Deal of the day`
            - There should be a button `view all` which will open another page and display all the products which are marked as `Deal of the day`
            - Use `Javascript` for `pagination`
            - `For design follow the screenshots given but information as below`
                - Display the image 
                - Discounted Price
                - Original Price (strike off this price and make the color as grey)
                    - If there is no discount, it should directly show the original price  
                    - Put the discounted price & original price in the same line 
                - Category
            - On click of the product, it should redirect to `product page` 
        - Top Selection
            - Follow the same guidelines as `Deals of the day` section
            - Timer is not required 

Product Page 
    - Follow the screenshot given as reference 
    - Replace `highilights` section with specificatoins of the product 
    - `ADD TO CART/GO TO CART` & `BUY NOW` buttons should be there. 
    - On click of `ADD TO CART` button text should change to `GO TO CART` & No. of items in the cart should be increated by 1 (Follow the design as the one in the top right corner in the header)
    - No action required on click of `BUY NOW`
    - Ignore all the irrelevant details from the screenshot 

General Instructions 
    - Protect all the routes (Only logged in users should be able to access)
    - Follow the design as per the screenshots given 
    - Use Bootstrap for the design 