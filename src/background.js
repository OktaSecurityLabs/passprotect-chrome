/**
 * This function runs whenever our injected extension code sends a message.
 *
 * It will essentially do one of two things: change the extension icon to a big
 * exclamation mark (as a visual indicator that a bad email/password has been
 * entered) or use the default icon.
 *
 * It just adds a tiny bit of visual flair to the extension.
 */
chrome.runtime.onMessage.addListener(function(req, sender, resp) {
  if (req.enableAlert) {
    return chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
      chrome.pageAction.setIcon({
        tabId: tabs[0].id,
        path: "images/exclamation.png"
      });
    });
  }

  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    chrome.pageAction.setIcon({
      tabId: tabs[0].id,
      path: "images/icon-128.png"
    });
  });
});
