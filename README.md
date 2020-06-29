# Pizza by Alfredo

#### JS Object Constructor and Object Prototype Exercise for Epicodus, 6.19.2020

#### By Jeff Kim

## Description

Yes, we all know about Alfredo's Pizza Kitchen. We _all_ know that "there’s a very big difference between these two pizza places. Both in quality of ingredients, and overall taste." Well, we are **NOT** Alfredo's Pizza Kitchen, we are Pizza by Alfredo and we deliver! Please place your order using our wonderful new website and we will be happy serve you a reasonable amount of pretty good pizza.

**Please note**: We no longer accept coupons.

This site uses JavaScript object constructors and object prototypes to store information about a user's pizza order, display that information as the user proceeds through their order, and updates the price of their order accordingly. Users can choose pickup or delivery - which will prompt them to enter their address to complete their order.

## Specs

1. Users should be able to create a new pizza order on the site
Sample Input: User enters their name
Sample Output: A new pizza object is created

2. Users should be able to choose a size for their pizza order
Sample Input: User selects a radio option for their desired pizza size
Sample Output: The appropriate size is assigned to the pizza object and the base price is displayed

3. Users should be able to choose toppings for their pizza
Sample Input: User chooses "pepperoni" and "mushrooms" using check boxes
Sample Output: Toppings are assigned to the pizza object and the displayed price is updated

4. Users should be able to choose whether they want to have their pizza delivered or if they want to pick up their order
Sample Input: Click a radio button for "Delivery"
Sample Output: Text field is displayed that allows the user to input their address

5. Users should be able to submit their order and see that their pizza is on the way
Sample Input: Click "Submit Order" button
Sample Output: Pizza tracker area is displayed that shows the user that their pizza is being delivered to their address

6. Users should see their price calculated for their final order based on a formula where:
* Size price: Small - $7, medium - $9, large - $11, x-large - $13
* Toppings price: Meats - $0.50, veggies - $0.25, others - $0.35
* Receive method: Pickup - $0, delivery - $3

## Setup/Installation Requirements

To use this site:

1. Open your preferred browser.
2. Navigate to https://jkbutserious.github.io/pizza-parlor.
3. Enter your name and click the **Next** button.
4. Choose your preferred pizza size using the drop-down menu and click the **Next** button.
5. Choose any toppings you would like to add to your pizza by clicking the check box next to your desired toppings. When you have selected all toppings, click the **Next** button.
6. Choose whether you want your order to be for **Pickup** or **Delivery** using the radio buttons. If you want to order Delivery, enter your address in the text field.
7. Click **Submit Order**.


You will receive output in the form of a range of numbers and strings.

To contribute to this project:

1. Open your preferred browser.
2. Navigate to https://github.com/jkbutserious/pizza-parlor.
3. Log into or sign up for your GitHub account.
4. Click the **Fork** button to copy the repository and all source code.
5. From your forked repository, you can download or clone the repository, by clicking the **Clone or download** button.
  * To clone the repository in GitHub Desktop, click the **Open in Desktop** option
  * To download the repository, click the **Download ZIP** option, save the archive to your computer, and extract it to the folder of your choice
6. Use your preferred code editor to edit index.html, styles.css, and/or scripts.js. **Note**: the following files are inclusions from popular code libraries and should not be edited:
  * bootstrap.css
  * bootstrap.css.map
  * jquery-3.5.1.js
7. Save any changes you make in your code editor and use your preferred git solution to commit your changes.
8. Push your changes to your forked repository.

## Known Bugs

**Initial Release**
* Divs overlap on smaller screens
* Toppings are pushed to object value arrays multiple times when moving back and forth through the order form

## Support and contact details

To report any issues with this page or to contribute to this project, contact Jeff Kim at kim2jy@hotmail.com.

## Technologies Used

This page was created using the following technologies:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

### License

Copyright © 2020 Jeffrey Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.