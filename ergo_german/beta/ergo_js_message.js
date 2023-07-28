
function insertMenu()
{
	document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash/cabs/swflash.cab#version=4,0,0,0" ID=movie WIDTH=850 HEIGHT=160>');
	document.write('<PARAM NAME=movie VALUE="ergo_menu_1.swf">');
	document.write('<PARAM NAME=loop VALUE=false>');
	document.write('<PARAM NAME=quality VALUE=high>');
	document.write('<PARAM NAME=menu VALUE=false>');
	document.write('<PARAM NAME=bgcolor VALUE=#000000>');
	document.write('<EMBED SRC="ergo_menu_1.swf"');
	document.write(' swLiveConnect="false" ID=movie WIDTH=850 HEIGHT=160');
	document.write(' LOOP=false QUALITY=high MENU=false BGCOLOR=#000000');
	document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
	document.write('</EMBED>');
	document.write('</OBJECT>');
}

function insertMenu2()
{
	document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash/cabs/swflash.cab#version=4,0,0,0" ID=movie WIDTH=850 HEIGHT=160>');
	document.write('<PARAM NAME=movie VALUE="ergo_menu_2.swf">');
	document.write('<PARAM NAME=loop VALUE=false>');
	document.write('<PARAM NAME=quality VALUE=high>');
	document.write('<PARAM NAME=menu VALUE=false>');
	document.write('<PARAM NAME=bgcolor VALUE=#000000>');
	document.write('<EMBED SRC="ergo_menu_2.swf"');
	document.write(' swLiveConnect="false" ID=movie WIDTH=850 HEIGHT=160');
	document.write(' LOOP=false QUALITY=high MENU=false BGCOLOR=#000000');
	document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
	document.write('</EMBED>');
	document.write('</OBJECT>');
}


function insertNoirBlanc()
{
		if (hasFlash5){
			with(document){
				writeln('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash/cabs/swflash.cab#version=4,0,0,0" ID=movie WIDTH=219 HEIGHT=88>');
				writeln('<PARAM NAME=movie VALUE="ergo_noirblanc_1.swf">');
				writeln('<PARAM NAME=loop VALUE=true>');
				writeln('<PARAM NAME=quality VALUE=high>');
				writeln('<PARAM NAME=menu VALUE=false>');
				writeln('<PARAM NAME=bgcolor VALUE=#000000>');
				writeln('<EMBED SRC="ergo_noirblanc_1.swf"');
				writeln(' swLiveConnect="false" ID=movie WIDTH=219 HEIGHT=88');
				writeln(' LOOP=true QUALITY=high MENU=false BGCOLOR=#000000');
				writeln(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
				writeln('</EMBED></OBJECT>');
			}
		}
}


function insertMontage() {
		if (hasFlash5){
			with(document){
				writeln('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash/cabs/swflash.cab#version=4,0,0,0" ID=movie WIDTH=1014 HEIGHT=352>');
				writeln('<PARAM NAME=movie VALUE="ergo_montage_1.swf">');
				writeln('<PARAM NAME=loop VALUE=false>');
				writeln('<PARAM NAME=quality VALUE=high>');
				writeln('<PARAM NAME=menu VALUE=false>');
				writeln('<PARAM NAME=bgcolor VALUE=#000000>');
				writeln('<EMBED SRC="ergo_montage_1.swf"');
				writeln(' swLiveConnect="false" ID=movie WIDTH=1014 HEIGHT=352');
				writeln(' LOOP=false QUALITY=high MENU=false BGCOLOR=#000000');
				writeln(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
				writeln('</EMBED></OBJECT>');
				}
			}
}



/*
var message="All Rights Reserved\nCharles Fox (2005)";

function click(e) 
	{
	if (document.all) 
		{
		if (event.button == 2) 
			{
			alert(message);
			return false;
			}
		}
	if (document.layers) 
		{
		if (e.which == 3) 
			{
			alert(message);
			return false;
			}
		}
	}
if (document.layers) 
	{
	document.captureEvents(Event.MOUSEDOWN);
	}
document.onmousedown=click;
*/