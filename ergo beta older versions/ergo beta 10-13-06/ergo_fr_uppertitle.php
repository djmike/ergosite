<html>
<head>

<title>Ergo Guitars by Charles Fox</title>

<meta name="content-language" content="en-us">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="robots" content="index,follow,imageindex">

<script language="JavaScript" type="text/JavaScript">
<!--
if (top.location == self.location) {
self.location.replace ("index.htm") }
// -->
</script>

<script src="ergo_js_message.js" language="JavaScript" type="text/Javascript">
</script>

<script language="javascript" type="text/javascript" src="ergo_js_flash_detect.js">
	<!--
	function getFlashVersion() { return null; };
	//-->
</script>

<script language="javascript" type="text/javascript">
	<!--
	var flashVersion = getFlashVersion();
	if (flashVersion < 5) {
		location.replace("ergo_upgrade.htm");
	}
	else
		hasFlash5 = 1;
	//-->
</script>

<script language="javascript" type="text/javascript">
	<!--
	var isIE = 0;
	var agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("msie") != -1)
		{
		isIE = 1;
		}
	//-->
</script>

<style>
<?
	// adjust the postion of "ergo" if in safari...
	if(strpos($_SERVER['HTTP_USER_AGENT'],"Safari")!=false) {
		// if Safari... 
		print "H1 {position:absolute;top:13;left:25}\n";
	} else {
		print "H1 {position:absolute;top:29;left:25}\n";
	}
?>
H2 {position:absolute;top:15;left:770}
H3 {position:absolute;top:1;left:770}
</style>

</head>

<body bgcolor="#000000" topmargin=0 leftmargin=0 marginheight=0 marginwidth=0>

<H1>
<img src="ergo_image_uppertitle.gif" width=178 height=88 border=0 vspace=0>
</H1>

<script language="JavaScript" type="text/JavaScript">
		<!--
		if (isIE){
			with(document){
				writeln('<H2>');
				}
			}
		else {
			with(document){
				writeln('<H3>');
				}
			}
		//-->
		</script>

<script type="text/javascript">insertNoirBlanc();</script>

<script language="JavaScript" type="text/JavaScript">
		<!--
		if (isIE){
			with(document){
				writeln('</H2>');
				}
			}
		else {
			with(document){
				writeln('</H3>');
				}
			}
		//-->
		</script>

 
<? 
	// was trying out different players for different browsers..  IE was giving us problems there for a while..
	if(strpos($_SERVER['HTTP_USER_AGENT'],"MSIE")!=false) {
		//print '<iframe name="hiddeniframe" style="width:0px;height:0px" frameborder="0"><object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95"> <param name="FileName" value="music_files/all.mp3"><param name="uiMode" value="invisible"/><param name="playCount" value="100"/></object></iframe>';
		//print '<embed src="music_files/all.mp3" width="0" height="0" autostart="true" name="mysound" />';
		print "<script type='text/javascript'>insertSound();</script>";
	} else {
		//print '<object data="music_files/all.mp3" src="music_files/all.mp3" type="audio/basic" LOOP="TRUE">';
		//print '<embed src="music_files/all.mp3" width="0" height="0" autostart="true" name="mysound" />';
		//print '<BGSOUND src="music_files/all.mp3" width="0" height="0" autostart="true" name="mysound" />';
 ?>
<object id="mp3player" type="application/x-shockwave-flash" data="player.swf" width="0" height="0" style="vertical-align: bottom;">
<!-- MP3 Flash player. Credits, license, contact & examples: http://pyg.keonox.com/flashmp3player/ -->
<param name="type" value="application/x-shockwave-flash" />
<param name="codebase" value="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" />
<param name="movie" value="player.swf" />
<param name="FlashVars" value="file=music_files/all.mp3" />
</object>
<?
 
	}
?>	

</body>
</html>
