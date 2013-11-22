// Now can do stuff
//

// Get data from cBio Portal REST api
//
function getCBio(parameters) {
	console.log('eclipse :: inside getCBio()');
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
			$('#queryResult').append(cBioResults);
  		},
  		error: function(jqXHR, textStatus, errorThrown) {
  			$('#queryResultsArea').append('<br/>Error: ' + textStatus + ' ' + errorThrown);
  			console.log('eclipse :: ajax error');
  		}
	});
	console.log('eclipse :: cBioResults: ' + cBioResults);
	
	console.log('eclipse :: end getCBio()');
	return cBioResults; 
}

// Interface for Get Profile Data
//'getProfileData
function getProfileData() {
	console.log('eclipse :: inside getProfileData()');

	
	$('#queryCriteriaArea').append(
		'<p>Fill in fields below with valid cBio Get Profile Data query. (error checking not yet implemented).</p>' +
		'<div class="controls">' +
		'<label>Case Set ID: </label><br/>' +
  		'<input type="text" name="case_set_idTextBox" id="case_set_idTextBox" value="" ><br/>' +
  		'</div>'
	);
	
	$('#queryCriteriaArea').append(
		'<div class="controls">' +
		'<label>Genetic Profile ID: </label><br/>' +
  		'<input type="text" name="genetic_profile_idTextBox" id="genetic_profile_idTextBox" value="" ><br/>' +
  		'</div>'
	);
	
	$('#queryCriteriaArea').append(
		'<div class="controls">' +
		'<label>Gene List (comma separated.): </label><br/>' +
  		'<input type="text" name="gene_listTextBox" id="gene_listTextBox" value="" ><br/>' +
  		'</div>'
	);

	$('#queryCriteriaArea').append(
		'<div class="controls">' +
		'<input type="button" value="Get Profile Data" id="getGetProfileDataButton"> ' +
		'<input type="button" value="Clear" id="clearGetProfileDataButton"><br/>' +
  		'</div>'
	);
	
	$('#queryResultsArea').append(
		'<div class="controls">' +
		'<input type="button" value="Go Back" id="returnToStartButton"><br/>' +
		'</div>'
	)
	.hide();

	// Clear the text boxes
	$("#clearGetProfileDataButton").click(function() {
		$(':text').val('');
	});
	
	// Action for click Get Profile Data button
	$("#getGetProfileDataButton").click(function() {
		
		console.log($("#case_set_idTextBox").val() + " " + $("#genetic_profile_idTextBox").val() + " " + $("#gene_listTextBox").val());
		
		// Button to go back to start screen

		$('#queryCriteriaArea').hide('slow');
		$('#queryResultsArea').show();
		
		var getCBioResult = getCBio('cmd=getProfileData' +
			'&case_set_id=' + $("#case_set_idTextBox").val() +
			'&genetic_profile_id=' + $("#genetic_profile_idTextBox").val() +
			'&gene_list=' + $("#gene_listTextBox").val());
		
		$("#returnToStartButton").click(function() {
			$('#queryCriteriaArea').show();
			$('#queryResultsArea').hide('slow');
			$('#queryResult').val('');
			
			return false;
		});

		return false;
	});
	
	console.log('eclipse :: end getProfileData()');
	return true;
}

// Home screen of app
//
function home() {
	console.log("eclipse :: inside home()");
	$('#queryCriteriaArea').val('');
	$('#queryResultsArea').val('');
	
	$('#queryCriteriaArea').append(
		'Choose operation: ' +
		'<select name="selectCBioCommand" id="selectCBioCommand" tabindex="1">\
			<option value="">-- Select country --</option>\
			<optgroup label="North America">\
				<option value="1">USA</option>\
				<option value="9">Canada</option>\
			</optgroup>\
			<optgroup label="Europe">\
				<option value="2">France</option>\
				<option value="3">Spain</option>\
				<option value="6">Bulgaria</option>\
				<option value="7" disabled="disabled">Greece</option>\
				<option value="8">Italy</option>\
			</optgroup>\
			<optgroup label="Asia" disabled="disabled">\
				<option value="5">Japan</option>\
				<option value="11">China</option>\
			</optgroup>\
			<option value="4">Brazil</option>\
			<option value="10">South Africa</option>\
		</select>'	
	);

	$(function () {
		$("#selectCBioCommand").selectbox();
	});

	// go to Get Profile Data screen
	var getProfileDataResult = getProfileData();
		
	console.log("eclipse :: end home()");
}


// device APIs are available
//
function onDeviceReady() {
    // Now safe to use device APIs
    console.log('eclipse :: inside onDeviceReady()');
    home();
    console.log('eclipse :: end onDeviceReady()');
    
}

// Wait for device API libraries to load
//
function onLoad(){
/*    console.log('eclipse :: onLoad');

    console.log('eclipse :: waiting on deviceready...');
  */  
  	$('p').css({ 'color': 'blue'});
    document.addEventListener('deviceready', onDeviceReady(), false);
    /*console.log('eclipse :: end onLoad');*/

}


