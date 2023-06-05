# YouCan Secure Store Policies

## Description
YouCan Secure Store Policies is a JavaScript class that provides a set of security policies for web stores created on the YouCan platform. This class aims to enhance the security of online stores by implementing measures to prevent unauthorized actions and protect sensitive data.

## Features
- Disable submission after a certain number of times
- Prevent console usage
- Disable right-click functionality
- Prevent inspecting elements
- Disable copying
- Disable dragging
- Disable text selection
- Disable printing
- Disable saving
- Disable viewing page source
- Disable taking screenshots
- Disable developer tools
- Disable F12 key
- Disable Ctrl+Shift+I
- Referral redirection (When Ads OFF)

## Getting Started
To use the YouCan Secure Store Policies class in your YouCan store, follow these steps:

1. Add the `store-policies.js` file to your project.
2. Import the class in your main JavaScript file: `import StorePolicies from './store-policies.js';`
3. Create an instance of the `StorePolicies` class and customize the security policies as needed:
```javascript
   const options = {
     enableSubmitPolicy: true,
     submitTimes: 2,
     enableConsolePolicy: true,
     enableRightClickPolicy: true,
     enableInspectPolicy: true,
     enableCopyPolicy: true,
     enableDragPolicy: true,
     enableSelectPolicy: true,
     enablePrintPolicy: true,
     enableSavePolicy: true,
     enableViewSourcePolicy: true,
     enableScreenshotPolicy: true,
     enableDevToolsPolicy: true,
     enableF12Policy: true,
     enableCtrlShiftIPolicy: true,
     enableReferralRedirectPolicy: true
   };

   const storePolicies = new StorePolicies(options);
   
   ```
4. Call the init() method to activate the security policies:

```javascript
      storePolicies.init();
```
6. Deploy your YouCan store with the enhanced security measures provided by YouCan Secure Store Policies.

## Contributions
Contributions to the YouCan Secure Store Policies project are welcome. If you encounter any issues, have suggestions for improvements, or would like to contribute new features, please open an issue or submit a pull request on the GitHub repository.

## License
YouCan Secure Store Policies is open source and available under the MIT License. Feel free to use, modify, and distribute this class for your own projects.

## Credits
YouCan Secure Store Policies is developed and maintained by MrAbdelaziz. You can find the repository for this project on GitHub.

## Contact
For any inquiries or questions, you can reach out to MrAbdelaziz via GitHub or visit github.com/MrAbdelaziz.
