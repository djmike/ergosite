
function isDefined(property) {
  return (typeof property != 'undefined');
}

var flashVersion = 0;
function getFlashVersion() {

	return 8;

   var latestFlashVersion = 8;
   var agent = navigator.userAgent.toLowerCase(); 

   if (agent.indexOf("mac") != -1) {
      flashVersion = 8;
      return flashVersion;
   }
   
   if (agent.indexOf("mozilla/3") != -1 && agent.indexOf("msie") == -1) {
      flashVersion = 0;
   }
   
   if (navigator.plugins != null && navigator.plugins.length > 0) {
      var flashPlugin = navigator.plugins['Shockwave Flash'];
      if (typeof flashPlugin == 'object') { 
         for (var i = latestFlashVersion; i >= 3; i--) {
            if (flashPlugin.description.indexOf(i + '.') != -1) {
               flashVersion = i;
               break;
            }
         }
      }
   }

   else if (agent.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && agent.indexOf("win")!=-1 && agent.indexOf("16bit")==-1) {
      var doc = '<scr' + 'ipt language="VBScript"\> \n';
      doc += 'On Error Resume Next \n';
      doc += 'Dim obFlash \n';
      doc += 'For i = ' + latestFlashVersion + ' To 3 Step -1 \n';
      doc += '   Set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash." & i) \n';
      doc += '   If IsObject(obFlash) Then \n';
      doc += '      flashVersion = i \n';
      doc += '      Exit For \n';
      doc += '   End If \n';
      doc += 'Next \n';
      doc += '</scr' + 'ipt\> \n';
      document.write(doc);
   }
      
   else if (agent.indexOf("webtv/2.5") != -1) flashVersion = 3;

   else if (agent.indexOf("webtv") != -1) flashVersion = 2;

   else {
      //flashVersion = flashVersion_DONTKNOW;
      flashVersion = 8;
   }

   return flashVersion;
}

flashVersion_DONTKNOW = -1;

