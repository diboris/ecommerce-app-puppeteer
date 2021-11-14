# Checkout Flow

## Test cases

### ID: 01

**Title:** A user can subscribe to the Application UI Icon Pack by paying 20 pounds monthly

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page
- A user is logged in

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £20/mo' button | A user is redirected to the 'Subscribe to Application UI Icon Pack 20 pounds per month' page <br /> The email address is prefilled in the email input |
| 2 | Enter the card details and click the 'Subscribe' button | The '3D Secure Test Payment Page' pop up is displayed |
| 3 | Click the 'Complete authentication' button | A user is redirected to the 'Your purchase is ready to be downloaded' <br /> The info with his order number is displayed <br />The license key is displayed |
| 4 | Click the 'Download' button | The 'IconPack.zip' file is downloaded |

### ID: 02

**Title:** A user can buy the Application UI Icon Pack for 200 pounds

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page
- A user is logged in

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | A user is redirected to the 'Application UI Icon Pack £220.00' page. <br /> The email address is prefilled in the email input |
| 2 | Enter the card details and click the 'Pay £220' button | The '3D Secure Test Payment Page' pop up is displayed |
| 3 | Click the 'Complete authentication' button | A user is redirected to the 'Your purchase is ready to be downloaded'. <br /> The info with his order number is displayed.<br /> The license key is displayed. |
| 4 | Click the 'Download' button | The 'IconPack.zip' file is downloaded |- done

### ID: 03

**Title:** A user can decline any purchase while paying

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page
- A user is logged in

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | A user is redirected to the 'Application UI Icon Pack £220.00' page <br /> The email address is prefilled in the email input |
| 2 | Enter the card details and click the 'Pay £220' button | The '3D Secure Test Payment Page' pop up is displayed |
| 3 | Click the 'Fail authentication' button | A user stays on the payment page<br /> The 'We are unable to authenticate your payment method. <br />  Please choose a different payment method and try again' message is displayed <br /> The transaction is declined |

### ID: 04

**Title:** A user can not buy the Application UI Icon Pack with invalid card details

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page
- A user is logged in

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000008260003178`
- Card CVC: `555`
- Card expiration date: `09/23`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | A user is redirected to the 'Application UI Icon Pack £220.00' page.<br /> The email address is prefilled in the email input |
| 2 | Enter the card details and click the 'Pay £220' button | The '3D Secure Test Payment Page' pop up is displayed |
| 3 | Click the 'Complete authentication'' button | A user stays on the payment page.<br /> The 'Your card has been declined message is displayed.<br /> The transaction is declined.<br /> The 'Card information' input field highlighted red |

### ID: 05

**Title:** A user can not buy the 'Application UI Icon Pack' without card's details

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page
- A user is logged in

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | A user is redirected to the 'Application UI Icon Pack £220.00' page. <br /> The email address is prefilled in the email input |
| 2 | Click the 'Pay £220' button | The inputs and fields such as the 'Card information', 'Name on card' are highlighted red with the 'Required' error. |

### ID: 06

**Title:** A user can not buy the 'Application UI Icon Pack' while offline

**Precondition:**

- A user is logged in to the https://qa-challenge-tabeo.vercel.app/ page
- A user is on the 'Application UI Icon Pack £220.00' page

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Enter the card details and click the 'Pay £220' button | The 'Pay £220' button becomes the 'Processing' button
| 2 | Go offline | The 'We are experiencing connection issues. You have not been charged. Please check your internet connection and try again' message is displayed. <br /> A user is not charged. <br /> The purchase didn't happen. |

### ID: 07

**Title:** A user can not buy the 'Application UI Icon Pack' for 220£ when not logged in

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The 'Sign in to your account' pop up is displayed

### ID: 08

**Title:** A user can not subscribe to the 'Application UI Icon Pack' for 20£ per month when not logged in

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £20/mo' button | The 'Sign in to your account' pop up is displayed

### ID: 09

**Title:** A user can save his info via the 'Save my info for secure 1-click checkout' functionality

**Precondition** :

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`
- Phone number: `0612345678`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Enter the card details | The card details are entered |
| 3 | Check the 'Save my info for secure 1-click checkout' checkbox and enter your number | The checkbox is checked. <br /> The number is entered |
| 4 | Click the 'Pay' button and complete the payment | The payment is completed |
| 5 | Sing out from the platform | A user is signed out |
| 6 | Sing in again and click the 'Pay £220' button | The 'Use your saved information' pop up is displayed. <br /> Sms code is sent to the number that he provided before. <br /> All payment info is displayed after entering the sms code |

### ID: 10

**Title:** A user can view the info about the 'Link with Stripe' payment

**Precondition:**

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`
- Phone number: `0612345678`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Enter the card details | The card details are entered |
| 3 | Check the 'Save my info for secure 1-click checkout' checkbox | The checkbox is checked |
| 4 | Click the 'More info' link | The 'Popcorn uses Link with Stripe to securely save your payment information' pop up with info is displayed |

### ID: 11

**Title:** The number in the 'Save my info for secure 1-click checkout' is saved when unchecking the checkbox

**Precondition:**

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`
- Phone number: `0612345678`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Enter the card details | The card details are entered |
| 3 | Check the 'Save my info for secure 1-click checkout' checkbox and enter the number | The checkbox is checked. <br /> The number is entered |
| 4 | Uncheck the 'Save my info for secure 1-click checkout' checkbox | The number input disappeared |
| 5 | Check the 'Save my info for secure 1-click checkout' checkbox | The previously entered number is displayed |

### ID: 12

**Title:** A use can not save invalid number in the 1 click checkout

**Precondition:**

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Country or region: `The Netherlands`
- Name on card: `Qa Tabeo`
- Card number: `4000002760003184`
- Card CVC: `555`
- Card expiration date: `09/23`
- Phone number: `1010101010`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Enter the card details | The card details are entered |
| 3 | Check the 'Save my info for secure 1-click checkout' checkbox and enter the number | The checkbox is checked. <br /> The number is entered. <br /> The 'Your phone number is invalid' error message is displayed |

### ID: 13

**Title:** A user can read Global Privacy Policy

**Precondition:**

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Click the 'Powered by Stripe' link in the bottom of the page | The 'Global Privacy Policy — Worldwide' page is opened |

### ID: 14

**Title:** A user can read Terms

**Precondition:**

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Click the 'Terms' link in the bottom of the page | The 'Stripe Checkout User Terms of Service — Netherlands' page is opened |

### ID: 15

**Title:** A user can read Privacy Policy

**Precondition:**

- A user is logged in
- A user is on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Pay £220' button | The payment page is opened |
| 2 | Click the Privacy link in the bottom of the page | The 'Global Privacy Policy — Worldwide' page is opened |
