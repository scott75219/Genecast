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
	$('#textarea_gene_set').val('');
	$("#select_gene_set option:first").attr('selected','selected');
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
 			$("#select_gene_set option:first").attr('selected','selected');
 			$('#select_gene_set').selectmenu('refresh', true);
 			$('#textarea_gene_set').val('');
 		});
 		
		// Event handler to add gene to text area when Add button clicked
 		$(document).on('change', '#select_gene_set', function(e){
 			event.preventDefault();
 			//$('#textarea_gene_set').val();
 			//$('#textarea_gene_set').val($('#textarea_gene_set').val() + ' ' + window.metaDataJson.gene_sets[$('#select_gene_set option:selected').val()].gene_list);
			$('#textarea_gene_set').val($('#textarea_gene_set').val() + ' ' + $('#select_gene_set option:selected').val());

 		});

		// Event handler to run query when submit button clicked
 		$(document).on('click', '#btn_gene_set_sbt', function(e){
 			var gene_list = $('#textarea_gene_set').val().split(/[ ,]+/).filter(function(v){return v!=='';}).join(',');
			$('#resultsArea').html('<p>Loading results...</p><div id="cchistogram"> </div>');
 			// do query
 			var apiURL = 'http://www.cbioportal.org/public-portal/crosscancerquery.json?';
 			var parameters = "gene_list=" + gene_list + "&data_priority=1";
 			$.ajax( {
				type:'get', //Could be 'get' depending on your needs
		 		url: apiURL + parameters,
		  		dataType: 'text',
		  		success:function(data) {
					$('#resultsArea').append("<h3>Cross-cancer Alteration Summary for " + gene_list.split(/[ ,]+/).join(', ') + "</h3><br />" + data);
		  		},
		  		error: function(jqXHR, textStatus, errorThrown) {
		  			console.log('eclipse :: ajax error');
		  			processCBioResults(textStatus + ' ' + errorThrown);
		  		}
			});
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


