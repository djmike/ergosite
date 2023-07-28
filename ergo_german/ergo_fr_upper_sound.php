<html>
<head>

<title>Ergo Guitars by Charles Fox</title>

<meta name="content-language" content="en-us">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="robots" content="index,follow,imageindex">

<script language="JavaScript" type="text/JavaScript">
//<!--
//if (top.location == self.location) {
//self.location.replace ("index.htm") }

// -->
</script>

<script src="ergo_js_message.js" language="JavaScript" type="text/Javascript" >
</script>

</head>

<body bgcolor="#000000" topmargin=0 leftmargin=0 marginheight=0 marginwidth=0 >
<br>
<br>
<br>
<br>
<br>
<br>
<? 
	if(strpos($_SERVER['HTTP_USER_AGENT'],"MSIE")!=false) {
		print '<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95"> <param name="FileName" value="music_files/all.mp3"><param name="uiMode" value="none"/><param name="playCount" value="100"/></object>';
	} else {
		//print '<object data="music_files/all.mp3" src="music_files/all.mp3" type="audio/basic" LOOP="TRUE">';
		print '<embed src="music_files/all.mp3" width="0" height="0" autostart="true" name="mysound" />';
 
	}
?>	
</body>
</html>
