var STYLE = {
 addStyle: function(style){ addStyleTag(style); },
 addDrop: function(id,text){ addDropDown(id,text); }
};
function addStyleTag(style){
 document.getElementsByTagName("HEAD")[0].innerHTML += '<style>body{font-family:'+style+'</style>';
}
function addDropDown(id,text){
 var content = '<div class="dropdown" id=';content += id;content += '><p class="dropbtn">';content += text;content += '</p><div class="dropContent"></div></div>';
 document.getElementsByTagName("BODY")[0].innerHTML += content;
}
