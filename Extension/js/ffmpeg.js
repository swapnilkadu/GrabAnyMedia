/*

	--> ( it )

		Crea uno script per ffmpeg
	
	--> ( en )
	
		Fork and translate, please ...
		
	--> ...
	
*/



( function(){
		
	var myfile = document.createElement( "input" );
	myfile.setAttribute( "type", "file" );
	myfile.setAttribute( "hidden", "" );
	myfile.setAttribute( "multiple", "" );
	
	myfile.addEventListener( "change", function( evt ){
		
		var files = evt.target.files;
		
		var output 	 = [],
			filename = "GrabAnyMedia.mp4",
			batname	 = "GrabAnyMedia.bat";

		for( var i = 0, f; f = files[ i ]; i++ ){
			
			// prevent vulnerable injection in filename	
			if( f.name.match( /(\"|\')/gi ) ){
				
				alert( chrome.i18n.getMessage( "xshell1" ) );
				myfile.parentNode.removeChild( myfile );
				return false;
				
			}
			
			output.push( f.name );

		}
		
		if( output.length < 1 ){
		
			myfile.parentNode.removeChild( myfile );
			return false;
		
		}
		
		var cmdline = "ffmpeg -i \"concat:" + output.join( "|" ) + "\" -c copy \"" + filename + "\"";
		
		var launcher = document.createElement( "a" );
		launcher.setAttribute( "download", batname );
		launcher.setAttribute( "href", "data:application/octet-stream;charset=utf-8," + encodeURIComponent( cmdline ) );
		
		document.body.appendChild( launcher );
		
		launcher.click();
		
		myfile.parentNode.removeChild( myfile );
		launcher.parentNode.removeChild( launcher );
		
	}, false );
		
	document.body.appendChild( myfile );
	
	myfile.click();
	
} )();















