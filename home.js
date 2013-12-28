// Now can do stuff
//

// Home screen of app
//
function home() {
	console.log("eclipse :: inside home()");
	var img_logoonly = "resources/icons/hive_logo.png";
	var img_logoback = "resources/icons/hive_logo-backbutton.png";
	$('#hivelogo-backbtn').attr("src",img_logoonly);
    $('#reconnoiter-screen').hide();
	$('#queryCriteriaArea').hide();
	$('#queryResultsArea').hide();
	$('#homemenu').show();
	// UI event listeners
	$("#goBackButton").click(function() {
		home();
		
		return false;
 	});
 	
 	// menu buttons
 	$(document).on('click', '#reconnoiter-button', function(e){
 		$('#hivelogo-backbtn').attr("src",img_logoback);
 		$('#homemenu').hide();
        $('#reconnoiter-screen').show();
        
    });
    
	$('#cBioCommandSelect').change(function(){
		console.log('eclipse :: cBioCommandSelect selection = ' + $('#cBioCommandSelect option:selected').val());
		doCBioQuery($('#cBioCommandSelect option:selected').val());
	});
		
	console.log("eclipse :: end home()");
}

// Wait for device API libraries to load
//
function onLoad(){
    document.addEventListener('deviceready', function(){
	    console.log('eclipse :: device is ready');
    	home();
    }, false);
}


