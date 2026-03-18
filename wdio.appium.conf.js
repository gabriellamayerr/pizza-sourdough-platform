exports.config = {
  runner: 'local',
  specs: ['./features/mobile/**/*.feature'],
  services: ['appium'],
  framework: 'cucumber',
  capabilities: [{
    platformName: 'Android',
    platformVersion: '11',
    deviceName: 'emulator-5554',
    automationName: 'UiAutomator2',
  }],
  cucumberOpts: { require: ['./features/step-definitions/**/*.js'] }
};
