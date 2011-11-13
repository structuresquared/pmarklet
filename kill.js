var isEnabled = true;
console.log("isEnabled status " + isEnabled);
console.log( chrome.extension.getURL("kill.css"));
if (isEnabled === true) {
  $(document).ready(function(){
    $('contentArea').append('<br />News feed disabled by Feed Frack.');
    $('head').append('<link type="text/css" rel="stylesheet" href="chrome.extension.getURL("kill.css")">');
  });
}; 
