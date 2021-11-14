# Login Flow

## Test cases

### ID: 01

**Title:** Signing up via MagicLink with an existing email

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Email address: `qatabeotest@gmail.com`
- Password for email: `pmc3;uysSV\&gt;HfJ6`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Sign in' button | The 'Sign in to your account' pop up is opened |
| 2 | Fill in the email address in the 'Email address' input | The email is entered |
| 3 | Click the 'Sign in with email' button | The 'Check your email' pop up is displayed |
| 4 | Click the 'Sign in' button from the email | The 'Application UI Icon Pack' page is opened. <br /> A user is logged in. <br /> User's email is displayed in the right corner of the page. |

### ID: 02

**Title:** Signing up via MagicLink with non existing email

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Email address: `INVALID_EMAILgmail.com`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Sign in' button | The 'Sign in to your account' pop up is opened |
| 2 | Fill in the email address in the 'Email address' input | The email is entered |
| 3 | Click the 'Sign in with email' button | The 'Please enter a valid email address' error message appears |

### ID: 03

**Title:** Signing up via MagicLink from a different device

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Email address: `qatabeotest@gmail.com`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Sign in' button | The 'Sign in to your account' pop up is opened |
| 2 | Fill in the email address in the 'Email address' input | The email is entered |
| 3 | Click the 'Sign in with email' button | The 'Please enter a valid email address' error message appears |
| 4 | Click the 'Sign in' button from the email from your phone | A user is redirected to the 'Application UI Icon Pack' page. <br /> A user is logged in. <br /> User's email is displayed in the right corner of the page. |

### ID: 04

**Title:** Signing up via MagicLink wth an expired link

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page

**Data to enter:**

- Email address: `qatabeotest@gmail.com`
- Password for email: `pmc3;uysSV\&gt;HfJ6`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Sign in' button | The 'Sign in to your account' pop up is opened |
| 2 | Fill in the email address in the 'Email address' input | The email is entered |
| 3 | Click the 'Sign in with email' button | The 'Check your email' pop up is displayed |
| 4 | Click the 'Sign in' button from the email after 10mins (clarify) | The 'Link has expired' error message is displayed.<br /> A user is not logged in. |

### ID: 05

**Title:** A user can sign out when logged in via MagicLink

**Precondition:**

- A user is logged in via MagicLink and on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the user icon in the right corner of the page | The 'Sign out' option menu is displayed |
| 2 | Click the 'Sign out' | The user's email address is no longer visible in the right corner of the page.<br /> The 'Sing in' link is displayed

### ID: 06

**Title:** A user is logged out after 15 min (clarify the time)

**Precondition:**

- A user is logged in via MagicLink and on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Do nothing for 15 mins | A user is logged out automatically after 15 min |

### ID: 07

**Title:** Signing up via Google Auth

**Precondition:**

- A user is on the https://qa-challenge-tabeo.vercel.app/ page
- A user has a Google account

**Data to enter:**

- Google account: `qatabeotest@gmail.com`
- Google account password: `pmc3;uysSV\&gt;HfJ6`

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the 'Sign in' button | The 'Sign in to your account' pop up is opened |
| 2 | Click the 'Sign in with Google' button | The 'Choose an account' page is opened |
| 3 | Enter the Google account details and login | A user is logged in. <br /> User's email is displayed in the right corner of the page. |

### ID: 08

**Title:** A user can sign out when logged in via Google Auth

**Precondition:**

- A user is logged in via Google Auth and on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Click the user icon in the right corner of the page | The 'Sign out' option menu is displayed |
| 2 | Click the 'Sign out' | The user's email address is no longer visible in the right corner of the page. <br /> The 'Sing in' link is displayed

### ID: 09

**Title:** A user is logged out after 15 min (clarify the time)

**Precondition:**

- A user is logged in via Google Auth and on the https://qa-challenge-tabeo.vercel.app/ page

| # | **Step description** | **Expected result** |
| --- | --- | --- |
| 1 | Do nothing for 15 mins | A user is logged out automatically after 15 min |
