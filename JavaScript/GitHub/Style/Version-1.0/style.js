var STYLE = {
 addStyle: function(style){ addStyleTag(style); },
 addDrop: function(id,text){ addDropDown(id,text); },
 addDItem: function(id,text){ addDropItem(id,text); }
};
function addStyleTag(style){
 document.getElementsByTagName("HEAD")[0].innerHTML += '<style>body{font-family:'+style+'}</style>';
}
function addDropDown(id,text){
 var content = '<div class="dropdown" id=';content += id;content += '><p class="dropbtn">';content += text;content += '</p><div class="dropContent" id="c';content += id;content += '"></div></div>';
 document.getElementsByTagName("BODY")[0].innerHTML += content;
 var style = '.dropbtn{background-color:#FFFFFF;color:#00FFFF;padding:16px;font-size:16px;border:none;cursor:pointer; }';
 style += '.dropContent{display:none;}';
 style += '.dropdown{position:relative;display:inline-block;}';
 style += '.dropdown:hover .dropContent{display:block;}';
 document.getElementsByTagName("STYLE")[0].innerHTML += style;
}
function addDropItem(id,text){
 var content = '<a href="#">';content += text;content += '</a>';
 document.getElementById("c"+id).innerHTML += content;
}
