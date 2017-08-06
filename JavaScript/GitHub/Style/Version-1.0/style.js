var STYLE = {
 addStyle: function(){ addStyleTag(); },
 addDrop: function(id,text){ addDropDown(id,text); }
};
function addStyleTag(){
 document.getElementsByTagName("HEAD")[0].innerHTML += '<style></style>';
 window.alert("Style  has been added");
}
function addDropDown(id,text){
 var content = '<div class="dropdown" id=';content += id;content += '><p class="dropbtn">';content += text;content += '</p><div class="dropContent"></div></div>';
 document.getElementsByTagName("BODY")[0].innerHTML += content;
}
