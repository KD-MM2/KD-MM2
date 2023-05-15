var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=Base64._utf8_encode(r);C<r.length;)a=(t=r.charCodeAt(C++))>>2,h=(3&t)<<4|(e=r.charCodeAt(C++))>>4,n=(15&e)<<2|(o=r.charCodeAt(C++))>>6,c=63&o,isNaN(e)?n=c=64:isNaN(o)&&(c=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return d},decode:function(r){var t,e,o,a,h,n,c="",d=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<r.length;)t=this._keyStr.indexOf(r.charAt(d++))<<2|(a=this._keyStr.indexOf(r.charAt(d++)))>>4,e=(15&a)<<4|(h=this._keyStr.indexOf(r.charAt(d++)))>>2,o=(3&h)<<6|(n=this._keyStr.indexOf(r.charAt(d++))),c+=String.fromCharCode(t),64!=h&&(c+=String.fromCharCode(e)),64!=n&&(c+=String.fromCharCode(o));return c=Base64._utf8_decode(c)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};
function generateUUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(x){const n=16*Math.random()|0;return("x"===x?n:3&n|8).toString(16).toUpperCase()}))}

var uuidVal = generateUUID();

let obj = JSON.parse($response.body);
let dv = Base64.decode(obj.result.v);
let dvobj = JSON.parse(dv);

for (let i = 0; i < dvobj.mainCharacterDatas.length; i++) {
  console.log("-> Char index:", i); 
  console.log("--> bannedReason:", dvobj.mainCharacterDatas[i].banData.bannedReason);
  console.log("--> enableBanLocal:", mainCharacterDatas[i].banData.enableBanLocal);
  console.log("--> bypassCheckData:", dvobj.mainCharacterDatas[i].bypassCheckData);
  console.log("--> old UUID:", dvobj.mainCharacterDatas[i].deviceIdWhenCreateCharacter);
  dvobj.mainCharacterDatas[i].banData.bannedReason = "";
  dvobj.mainCharacterDatas[i].banData.enableBanLocal = false;
  dvobj.mainCharacterDatas[i].bypassCheckData = true;
  dvobj.mainCharacterDatas[i].deviceIdWhenCreateCharacter = uuidVal;
  console.log("---> Edited");
  console.log("----> new bannedReason:", dvobj.mainCharacterDatas[i].banData.bannedReason);
  console.log("----> new enableBanLocal:", mainCharacterDatas[i].banData.enableBanLocal);
  console.log("----> new bypassCheckData:", dvobj.mainCharacterDatas[i].bypassCheckData);
  console.log("----> new UUID:", dvobj.mainCharacterDatas[i].deviceIdWhenCreateCharacter);
  console.log("");
}

obj.result.v = Base64.encode(JSON.stringify(dvobj));
$done({body: JSON.stringify(obj)});
  
