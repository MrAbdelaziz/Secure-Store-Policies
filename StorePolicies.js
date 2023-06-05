class StorePolicies {
  constructor(options = {}) {

    this.secu = `
    [[[[[[[[[[[[[[[  Security  ]]]]]]]]]]]]]]]
    [:::::[ Coded BY MrAbdelaziz   ]:::::]
    [:::::[ github.com/MrAbdelaziz ]:::::]
    [[[[[[[[[[[[[[[  Security  ]]]]]]]]]]]]]]]
    `;


    // Policies for the store
    this.enableSubmitPolicy = options.enableSubmitPolicy || false;
    this.submitTimes = options.submitTimes || 2;
    this.enableConsolePolicy = options.enableConsolePolicy || false;
    this.enableRightClickPolicy = options.enableRightClickPolicy || false;
    this.enableInspectPolicy = options.enableInspectPolicy || false;
    this.enableCopyPolicy = options.enableCopyPolicy || false;
    this.enableDragPolicy = options.enableDragPolicy || false;
    this.enableSelectPolicy = options.enableSelectPolicy || false;
    this.enablePrintPolicy = options.enablePrintPolicy || false;
    this.enableSavePolicy = options.enableSavePolicy || false;
    this.enableViewSourcePolicy = options.enableViewSourcePolicy || false;
    this.enableScreenshotPolicy = options.enableScreenshotPolicy || false;
    this.enableDevToolsPolicy = options.enableDevToolsPolicy || false;
    this.enableF12Policy = options.enableF12Policy || false;
    this.enableCtrlShiftIPolicy = options.enableCtrlShiftIPolicy || false;
    this.enableReferralRedirectPolicy = options.enableReferralRedirectPolicy || false;

    // Bind the event listeners to the class context
    this.checkConsole = this.checkConsole.bind(this);
    this.disableRightClick = this.disableRightClick.bind(this);
    this.disableInspectElement = this.disableInspectElement.bind(this);
    this.disableCopy = this.disableCopy.bind(this);
    this.disableDrag = this.disableDrag.bind(this);
    this.disableSelect = this.disableSelect.bind(this);
    this.disablePrint = this.disablePrint.bind(this);
    this.disableSave = this.disableSave.bind(this);
    this.disableViewSource = this.disableViewSource.bind(this);
    this.disableScreenshot = this.disableScreenshot.bind(this);
    this.disableDevTools = this.disableDevTools.bind(this);
    this.disableF12 = this.disableF12.bind(this);
    this.disableCtrlShiftI = this.disableCtrlShiftI.bind(this);
    this.getCookie = this.getCookie.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.updateVisitCount = this.updateVisitCount.bind(this);
    this.redirectIfNotReferred = this.redirectIfNotReferred.bind(this);
  }



  checkConsole() {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 100) {
      window.Dotshop = null;
      window.location.href = 'about:blank';
    }
  }

  disableRightClick() {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }

  disableInspectElement() {
    document.onkeydown = function (e) {
      if (event.keyCode == 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
      }
    }

    document.addEventListener('contextmenu', e => e.preventDefault());
  }

  disableCopy() {
    document.addEventListener('copy', function (e) {
      e.preventDefault();
      return false;
    });
  }

  disableDrag() {
    document.ondragstart = function () {
      return false;
    }
  }

  disableSelect() {
    document.onselectstart = function () {
      return false;
    }
  }

  disablePrint() {
    window.onbeforeprint = function () {
      return false;
    }
  }

  disableSave() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key == 's') {
        event.preventDefault();
      }
    });
  }

  disableViewSource() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key == 'u') {
        event.preventDefault();
      }
    });
  }

  disableScreenshot() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key == 'p') {
        event.preventDefault();
      }
    });
  }

  disableDevTools() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key == 'i') {
        event.preventDefault();
      }
    });
  }

  disableF12() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key == 'f12') {
        event.preventDefault();
      }
    });
  }

  disableCtrlShiftI() {
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.shiftKey && event.key == 'i') {
        event.preventDefault();
      }
    });
  }

  getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=');
      if (cookiePair[0].trim() === name) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
  }

  canSubmit() {
    const today = new Date().toISOString().split('T')[0];
    const visitCount = parseInt(this.getCookie('visitCount') || '0');
    const lastVisitDate = this.getCookie('lastVisitDate');

    if (lastVisitDate === today && visitCount >= this.submitTimes) {
      alert('You have already submitted the form twice today. Please try again tomorrow.');

      const addtocart = document.querySelectorAll('.add-to-cart-section');
      addtocart.forEach(cart => {
        cart.remove();
      });

      return false;
    }

    return true;
  }

  updateVisitCount() {
    const today = new Date().toISOString().split('T')[0];
    const visitCount = parseInt(this.getCookie('visitCount') || '0');

    if (this.getCookie('lastVisitDate') !== today) {
      this.setCookie('visitCount', '1', 1);
    } else {
      this.setCookie('visitCount', (visitCount + 1).toString(), 1);
    }

    this.setCookie('lastVisitDate', today, 1);
  }

  redirectIfNotReferred() {
    if (!this.enableReferralRedirectPolicy) {
      return;
    }

    const referrer = document.referrer;
    const currentLocation = window.location.host;

    if (referrer && !referrer.includes(currentLocation)) {
              window.location.href = 'about:blank'; // Replace '/redirect-page' with your desired redirect URL
    }
  }


  init() {

    if (this.enableConsolePolicy) {
      setInterval(this.checkConsole, 1000);
    }

    if (this.enableSubmitPolicy) {
      if (window.location.pathname === '/checkout/thankyou') {
        this.updateVisitCount();
      }

      this.canSubmit()
    }

    if (this.enableRightClickPolicy) {
      this.disableRightClick();
    }

    if (this.enableInspectPolicy) {
      this.disableInspectElement();
    }

    if (this.enableCopyPolicy) {
      this.disableCopy();
    }

    if (this.enableDragPolicy) {
      this.disableDrag();
    }

    if (this.enableSelectPolicy) {
      this.disableSelect();
    }

    if (this.enablePrintPolicy) {
      this.disablePrint();
    }

    if (this.enableSavePolicy) {
      this.disableSave();
    }

    if (this.enableViewSourcePolicy) {
      this.disableViewSource();
    }

    if (this.enableScreenshotPolicy) {
      this.disableScreenshot();
    }

    if (this.enableDevToolsPolicy) {
      this.disableDevTools();
    }

    if (this.enableF12Policy) {
      this.disableF12();
    }

    if (this.enableCtrlShiftIPolicy) {
      this.disableCtrlShiftI();
    }

    if (this.enableReferralRedirectPolicy) {
      this.redirectIfNotReferred();
    }
  }
}
