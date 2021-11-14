# QA Challenge Tabeo

## Test cases

Tests are described in Markdown format and located in [test-cases](test-cases) folder.

List of test cases that were automated:

### Checkout Flow

| Name | Automated | Notes |
| --- | --- | --- |
| [A user can subscribe to the Application UI Icon Pack by paying 20 pounds monthly](test-cases/checkout-flow.md#ID%3A%2001) | :white_check_mark: |  |
| [A user can buy the Application UI Icon Pack for 200 pounds](test-cases/checkout-flow.md#ID%3A%2002) | :white_check_mark: |  |
| [A user can decline any purchase while paying](test-cases/checkout-flow.md#ID%3A%2003) | :white_check_mark: |  |
| [A user can not buy the Application UI Icon Pack with invalid card details](test-cases/checkout-flow.md#ID%3A%2004) | :white_check_mark: |  |
| [A user can not buy the 'Application UI Icon Pack' without card's details](test-cases/checkout-flow.md#ID%3A%2005) | :white_check_mark: |  |
| [A user can not buy the 'Application UI Icon Pack' while offline](test-cases/checkout-flow.md#ID%3A%2006) | :white_check_mark: |  |
| [A user can not buy the 'Application UI Icon Pack' for 220£ when not logged in](test-cases/checkout-flow.md#ID%3A%2007) | :white_check_mark: |  |
| [A user can not subscribe to the 'Application UI Icon Pack' for 20£ per month when not logged in](test-cases/checkout-flow.md#ID%3A%2008) | :white_check_mark: |  |
| [A user can save his info via the 'Save my info for secure 1-click checkout' functionality](test-cases/checkout-flow.md#ID%3A%2009) | :x: | mock SMS |
| [A user can view the info about the 'Link with Stripe' payment](test-cases/checkout-flow.md#ID%3A%2010) |  :x: |  |
| [The number in the 'Save my info for secure 1-click checkout' is saved when unchecking the checkbox](test-cases/checkout-flow.md#ID%3A%2011) |  :x:  | mock SMS |
| [A use can not save invalid number in the 1 click checkout](test-cases/checkout-flow.md#ID%3A%2012) | :x:  | mock SMS |
| [A user can read Global Privacy Policy](test-cases/checkout-flow.md#ID%3A%2013) | :white_check_mark: |  |
| [A user can read Terms](test-cases/checkout-flow.md#ID%3A%2014) | :white_check_mark: |  |
| [A user can read Privacy Policy](test-cases/checkout-flow.md#ID%3A%2015) |:white_check_mark: |  |

### Customer Engagement Flow

| Name | Automated | Notes |
| --- | --- | --- |
| [A user can read the Customer reviews section](test-cases/customer-engagement-flow.md#ID%3A%2001) | :white_check_mark: |  |
| [A user can read the FAQ section](test-cases/customer-engagement-flow.md#ID%3A%2002) | :white_check_mark: |  |
| [A user can read the License section](test-cases/customer-engagement-flow.md#ID%3A%2003) | :white_check_mark: |  |
| [A user can access the social media profiles of the Application](test-cases/customer-engagement-flow.md#ID%3A%2004) | :x: | bug  |
| [A user can read full license](test-cases/customer-engagement-flow.md#ID%3A%2005) |  :x: | bug |

### Login Flow

| Name | Automated | Notes |
| --- | --- | --- |
| [Signing up via MagicLink with an existing email](test-cases/login-flow.md#ID%3A%2001) | :white_check_mark: |  |
| [Signing up via MagicLink with non existing email](test-cases/login-flow.md#ID%3A%2002) | :x: | bug |
| [Signing up via MagicLink from a different device](test-cases/login-flow.md#ID%3A%2003) |  :x: | need implementation details |
| [Signing up via MagicLink wth an expired link](test-cases/login-flow.md#ID%3A%2004) | :x: | need implementation details |
| [A user can sign out when logged in via MagicLink](test-cases/login-flow.md#ID%3A%2005) | :white_check_mark: |  |
| [A user is logged out after 15 min](test-cases/login-flow.md#ID%3A%2006) | :x: | need implementation details |
| [Signing up via Google Auth](test-cases/login-flow.md#ID%3A%2007) | :x: | bug |
| [A user can sign out when logged in via Google Auth](test-cases/login-flow.md#ID%3A%2008) | :x: | bug |
| [A user is logged out after 15 min](test-cases/login-flow.md#ID%3A%2009) | :x: | need implementation details |

### Notes

1. Several bugs were discovered during the testing process. All are described in [Github Issues](https://github.com/diboris/qa-assessment-tabeo/issues)

## Automation

Tests are implemented using [Puppeteer](https://pptr.dev/) framework and located in [test](test) folder.

### Run

```shell
npm install
npm test
```

Headless mode:

```shell
npm install
HEADLESS=true npm test
```

### Notes

1. Although it is not common to test third-party applications, here the stripe checkout part is tested just in case.
2. Cypress was not chosen because it cannot handle interaction with multiple domains within a single test. Corresponding
   entry in docs: https://docs.cypress.io/guides/guides/web-security#Limitations
3. [MailSlurp](https://www.mailslurp.com/) is used to MagicLink SignIn process (replace [API key](jest.config.js) in
   case inboxes limitation is reached)
