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
	$("#hivelogo-backbtn").click(function() {
		home();
		
		return false;
 	});
 	
 	// menu buttons
 	$(document).on('click', '#reconnoiter-button', function(e){
 		$('#hivelogo-backbtn').attr("src",img_logoback);
 		$('#homemenu').hide();
 		
 		loadMetaData();
 		// Event handler to reset input form when Reset button clicked
 		$(document).on('click', '#btn_gene_set_rst', function(e){
 			event.preventDefault();
 			$("#select_genes")[0].selectedIndex = 0;
 			$("#select_genes option:first").attr('selected','selected');
 			$('#select_genes').selectmenu('refresh', true);
 			$('#textarea_gene_set').val('');
 		});
 		
		// Event handler to add gene to text area when Add button clicked
 		$(document).on('click', '#btn_gene_set_add', function(e){
 			event.preventDefault();
 			$('#textarea_gene_set').val();
 			$('#textarea_gene_set').val($('#textarea_gene_set').val() + ' ' + $('#select_genes option:selected').val());
 		});
 		 		
        $('#reconnoiter-screen').show();

		// Event handler to add gene to text area when Add button clicked
 		$(document).on('click', '#btn_gene_set_sbt', function(e){
 			event.preventDefault();
 			// do query
 		});
 		 		
        $('#reconnoiter-screen').show();        
    });
    
    /*
	$('#cBioCommandSelect').change(function(){
		console.log('eclipse :: cBioCommandSelect selection = ' + $('#cBioCommandSelect option:selected').val());
		doCBioQuery($('#cBioCommandSelect option:selected').val());
	});
	*/
		
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


