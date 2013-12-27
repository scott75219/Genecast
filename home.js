// Now can do stuff
//

// Home screen of app
//
function home() {
	console.log("eclipse :: inside home()");
	
	$('#topNav').hide();
	$('.homemenu-buttons').show();
    $('#cBioCommandSelect').hide();
	$('#queryCriteriaArea').hide();
	$('#queryResultsArea').hide();

	// UI event listeners
	$("#goBackButton").click(function() {
		home();
		
		return false;
 	});
 	
 	// menu buttons
 	$(document).on('click', '#reconnoiter-button', function(e){
 		$('.homemenu-buttons').hide();
        $('#cBioCommandSelect').show();
        
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


