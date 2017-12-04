$(document).ready(function() {
var flavors = ['vanilla', 'chocolate', 'mint chocolate chip', 'moose tracks', 'strawberry'];
flavors.forEach(function(flavor) {
$("#result").append("<li>I like " + flavor + " ice cream </li>");
  });
});
