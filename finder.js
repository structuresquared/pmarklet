function hiddenContent (idName, content){
  var i = "<div style=\"display:none\"> <div id=\"" + idName + "\">" + content + "</div></div>";
  return i;
}

$(document).ready(function(){
  // Finds images and puts them in an array
  var aUrl = [];
  $('img').each( function() {
    var imgwidth = this.width;
    var imgheight = this.height;

    if (imgwidth + imgheight > 600) {
      var i = $(this).attr("src");
      //adds to array 
      aUrl.push(i);
    }
  });
  var imgHTML = [];
  for (var i = 0; i < aUrl.length; i++) {
    var imgStart = "<img src=\"";
    var imgEnd = "\"/>";
    var imgHt = imgStart + aUrl[i] + imgEnd ;
    imgHTML.push([imgHt, aUrl[i]]);
  } 
  console.log(imgHTML);
    // Creates Lightbox
  $('body').append("<a class=\"inline\" href=\"#inline_content\">Fire it!</a>");
  var content = hiddenContent("inline_content", imgHTML.join()); 
  $('body').append(content);
  $('a.inline').colorbox(({inline: true}));

 });
