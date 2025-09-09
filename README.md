# Automation Testing Assessment on Saucedemo

Here is an Automation Testing task in UI level. The main focus is system testing process in an e-commerce platform.

## Recuirments

Before setting this porject, Please ensure this tools in your computer

- **Node.js** v22.17.1
- **npm** v10.9.2
- **Google Chrome** (latest version)

### Verify Installations

Run the following commands to check required dependencies are installed or not:

```bash
node -v   # Verify Node.js 
npm -v    # Verify npm
```

# Install & Setup

### 1. Install npm

```bash
npm install
```
### Install Playwright

```
npm init playwright@latest
npx playwright install
npm install @playwright/test
npm install -D @playwright/test@latest
```

### Running Test

### Run All test

```bash
npx playwright test
```

### Run HTML report

```bash
npx playwright show-report
```

### Run Single Test

```bash
npx playwright test tests/login.spec.js --project=chromium
npx playwright test tests/checkout.spec.js --project=chromium --reporter=html

```

Clone the project

```bash
    git clone https://github.com/sabbircse3/saucelab-playwright-tests.git 
```