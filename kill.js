var isEnabled = true;
console.log("isEnabled status " + isEnabled);
if (isEnabled === true) {
  $(document).ready(function(){
    $('contentArea').append('<br />News feed disabled by Feed Frack.');
  });

}; 
