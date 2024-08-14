const SHEET_NAME_CHECKIN = 'IN';
const SHEET_NAME_CHECKOUT = 'OUT';
const SHEET_NAME_ACTIVITY = 'ACTIVITIES';

function onCheckinScan(text) {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(SHEET_NAME_CHECKIN).appendRow([new Date(), text]);
}

function onCheckoutScan(text) {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(SHEET_NAME_CHECKOUT).appendRow([new Date(), text]);
}

function onCheckActivityScan(qrData, activity) { 
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_ACTIVITY);
  sheet.appendRow([new Date(), qrData, activity]);
}



function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  template.deployURL = ScriptApp.getService().getUrl();
  const htmlOutput = template.evaluate();
  return htmlOutput;
}

function doPost(e) {
  if (e.parameter.checkin) {
    const template = HtmlService.createTemplateFromFile('index');
    template.deployURL = ScriptApp.getService().getUrl();
    const htmlOutput = template.evaluate();
    return htmlOutput;
  }

  if (e.parameter.checkout) {
    const template = HtmlService.createTemplateFromFile('out');
    template.deployURL = ScriptApp.getService().getUrl();
    const htmlOutput = template.evaluate();
    return htmlOutput;
  }
  
  if (e.parameter.submit) {
    const template = HtmlService.createTemplateFromFile('activity');
    template.deployURL = ScriptApp.getService().getUrl();
    const htmlOutput = template.evaluate();
    return htmlOutput;
  }
}
