# Secure Store Policies

## Description
Secure Store Policies is a JavaScript class that provides a set of security policies for web stores. This class aims to enhance the security of online stores by implementing measures to prevent unauthorized actions and protect sensitive data.

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
To use the YouCan Secure Store Policies class in your store, by adding the call to the cdn :

   ```html
   <script src="https://cdn.jsdelivr.net/gh/MrAbdelaziz/Secure-Store-Policies/StorePolicies.js"></script>
   ```
next add the following JavaScript code to create an instance of the StorePolicies class and activate the security policies:

```javascript
<script>
  const options = {
      enableSubmitPolicy: true,           // Enable submit policy
      submitTimes: 2,                     // Number of times a user can submit the form in a day
      enableRightClickPolicy: true,       // Enable right-click policy
      enableInspectPolicy: true,          // Enable inspect element policy
      enableCopyPolicy: true,             // Enable copy policy
      enableDragPolicy: true,             // Enable drag policy
      enableSelectPolicy: true,           // Enable select policy
      enablePrintPolicy: true,            // Enable print policy
      enableSavePolicy: true,             // Enable save policy
      enableViewSourcePolicy: true,       // Enable view source policy
      enableScreenshotPolicy: true,       // Enable screenshot policy
      enableDevToolsPolicy: true,         // Enable developer tools policy
      enableF12Policy: true,              // Enable F12 policy
      enableCtrlShiftIPolicy: true,       // Enable Ctrl+Shift+I policy
      enableConsolePolicy: true,          // Enable console policy
      enableReferralRedirectPolicy: true  // Enable Referral policy
  };

  const storePolicies = new StorePolicies(options);
  storePolicies.init();
</script>
   
   ```

6. Save the changes.

## Contributions
Contributions to the Secure Store Policies project are welcome. If you encounter any issues, have suggestions for improvements, or would like to contribute new features, please open an issue or submit a pull request on the GitHub repository.

## License
Secure Store Policies is open source and available under the MIT License. Feel free to use, modify, and distribute this class for your own projects.

## Credits
Secure Store Policies is developed and maintained by MrAbdelaziz. You can find the repository for this project on GitHub.
