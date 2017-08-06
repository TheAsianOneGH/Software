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
 var style = '.dropbtn{background-color:#FFFFFF;color:#00FFFF;padding:16px;font-size:16px;border:none;cursor:pointer; }';
 document.getElementsByTagName("STYLE")[0].innerHTML += style;
}
