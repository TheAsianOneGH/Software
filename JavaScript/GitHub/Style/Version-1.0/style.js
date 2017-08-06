var STYLE = {
 addStyle: function(style){ addStyleTag(style); },
 addDrop: function(id,text){ addDropDown(id,text); },
 addDItem: function(id,text){ addDropItem("c"+id,text); },
 itemAct: function(id,num,text){ addItemAction("ac"+id,num,text); }
};
function addStyleTag(style){
 document.getElementsByTagName("HEAD")[0].innerHTML += '<style>body{font-family:'+style+'}</style>';
}
function addDropDown(id,text){
 var content = '<div class="dropdown" id=';content += id;content += '><h2 class="dropbtn">';content += text;content += '</h2><div class="dropContent" id="c';content += id;content += '"></div></div>';
 document.getElementsByTagName("BODY")[0].innerHTML += content;
 var style = '.dropbtn{background-color:#FFFFFF;color:#00FFFF;padding:16px;border:none;cursor:pointer; }';
 style += '.dropContent{background-color:#EEEEEE;display:none;}';
 style += '.dropContent h3{display:block;color:#FFFFFF;padding:12px 16px;text-decoration:none;}';
 style += '.dropdown{position:relative;display:inline-block;}';
 style += '.dropdown:hover .dropContent{display:block;}';
 document.getElementsByTagName("STYLE")[0].innerHTML += style;
}
function addDropItem(id,text){
 var content = '<h3 id="a';content += id;content += '">';content += text;content += '</h3>';
 document.getElementById(id).innerHTML += content;
}
function addItemAction(id,act,text){
 if(act=="1"){
  document.getElementById(id).addEventListener("click", function(){window.location = text;});
 }else{
  if(act=="2"){
   document.getElementById(id).addEventListener("click", function(){setTimeout(1000,text);});
  }
 }
}
