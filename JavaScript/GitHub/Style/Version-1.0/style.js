var STYLE = {
 addStyle: function(){ addStyleTag(); }
};
function addStyleTag(){
 document.getElementsByTagName("HEAD")[0].innerHTML += '<style></style>';
 window.alert("Style  has been added");
}
