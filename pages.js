// Now can do stuff
//

// Get data from cBio Portal REST api
//
function getCBioData(parameters) {
	console.log('eclipse :: inside getCBioData()');
	var apiURL = 'http://www.cbioportal.org/public-portal/webservice.do?';
	var cBioResults = '';

	console.log('eclipse :: ' + apiURL + parameters);
	
	// Call the cBio RESTful API
	$.ajax( {
		type:'get', //Could be 'get' depending on your needs
 		url: apiURL + parameters,
  		dataType: 'text',
  		success:function(data) {
			cBioResults = data;
			processCBioResults(cBioResults);
  		},
  		error: function(jqXHR, textStatus, errorThrown) {
  			console.log('eclipse :: ajax error');
  			processCBioResults(textStatus + ' ' + errorThrown);
  		}
	});
	

	
	console.log('eclipse :: end getCBioData()');
	return cBioResults; 
}

// Parse the results from a call
//
function processCBioResults(cBioResults){
	$('#queryResult').html('Results:<br/>' + cBioResults);
}


// Portal to the cBio query screens
//
function doCBioQuery(command){
	console.log("eclipse :: inside doCBioQuey()");
	
	var parameters = '';
	var inputForm;
	var parameterList;
	
	$('#topNav').show();	
	$('#queryCriteriaArea').show();


  	// set up input text boxes for each cBio command type
	switch(command) {
		case 'getProfileData': inputForm = 
			'<div class="controls">\
				<div id="parameterGroup">\
					<label>Case Set ID: </label><br/>\
			  		<input type="text" name="case_set_idTextBox" id="case_set_idTextBox" value="" /><br/>\
					<label>Genetic Profile ID: </label><br/>\
			  		<input type="text" name="genetic_profile_idTextBox" id="genetic_profile_idTextBox" value="" /><br/>\
					<label>Gene List (comma separated): </label><br/>\
			  		<input type="text" name="gene_listTextBox" id="gene_listTextBox" value="" /><br/>\
		  		</div>\
	  		</div>';
	  		parameterList = ['&case_set_id=','&genetic_profile_id=','&gene_list='];
	  		break;
	}

	$('#queryCriteriaArea').html(
		'<div class="controls">\
			<input type="button" value="Submit" id="submitCBioQueryButton">\
			<input type="button" value="Clear" id="clearCBioQueryButton"><br/>\
  		</div>' +
  		inputForm);	

 	// Action to submit query
	$("#submitCBioQueryButton").click(function() {
		
		// Button to go back to start screen
		$('#queryCriteriaArea').hide('slow');
		$('#queryResultsArea').show();
		
		
		$('#parameterGroup input').each(function(index){
			parameters = parameters + parameterList.shift() + $(this).val();
		});
		console.log('eclipse :: paramters: ' + parameters);
		
		// Query the cBio database
		getCBioData('cmd=' + command + parameters);
		return false;
	});
	
	// Action to Clear the text boxes
	$("#clearCBioQueryButton").click(function() {
		$('#queryCriteriaArea :text').val('');
	});
	
	console.log("eclipse :: end doCBioQuey()");
}

// Home screen of app
//
function home() {
	console.log("eclipse :: inside home()");
	
	$('#topNav').hide();
	
	$('#queryCriteriaArea').hide();
	$('#queryResultsArea').hide();

	// UI event listeners
	$("#goBackButton").click(function() {
		home();
		
		return false;
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


