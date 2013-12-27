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
	var inputElems = new Array();
	
	$('#topNav').show();	
	$('#queryCriteriaArea').show();


  	// set up input text boxes for each cBio command type
	switch(command) {
		case 'getTypesOfCancer':
			// no parameters
			break;

  		case 'getCancerStudies':
  			// no parameters
  			break;
  		case 'getGeneticProfiles':
  			inputElems.push(
  				{label: 'Cancer Study ID', id: 'cancer_study_id'});	
  			break;
		case 'getCaseLists': 
  			inputElems.push(
  				{label: 'Cancer Study ID', id: 'cancer_study_id'});	
  			break;
		case 'getProfileData': 
		  	inputElems.push(
		  		{label: 'Case Set ID', id: 'case_set_id'}, 
		  		{label: 'Genetic Profile ID', id: 'genetic_profile_id'},
		  		{label: 'Gene List', id: 'gene_list'});
	  		break;
		case 'getMutationData': 
		  	inputElems.push(
		  		{label: 'Genetic Profile ID', id: 'genetic_profile_id'},
		  		{label: 'Case Set ID', id: 'case_set_id'}, 
		  		{label: 'Gene List', id: 'gene_list'});
	  		break;
		case 'getClinicalData': 
		  	inputElems.push(
		  		{label: 'Case Set ID', id: 'case_set_id'});
	  		break;
		case 'getProteinArrayInfo': 
		  	inputElems.push(
		  		{label: 'Cancer Study ID', id: 'cancer_study_id'},
		  		{label: 'Protein Array Type', id: 'protein_array_type'}, 
		  		{label: 'Gene List', id: 'gene_list'});
	  		break;		
		case 'getProteinArrayData': 
		  	inputElems.push(
		  		{label: 'Case Set ID', id: 'case_set_id'}, 
		  		{label: 'Array Info?', id: 'array_info'});
	  		break;
	}
	
	
	inputForm = '<div class="controls"><div id="parameterGroup">';
	$.each(inputElems,function(index, val){
		inputForm = inputForm +
			'<label>' + val.label + ': </label>' +
			'<input type="text" name="' + val.id + '" id="' + val.id + '" value="" /><br/>';
	});
	
	inputForm = inputForm + '</div></div>';
	
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
			parameters = parameters + '&' + $(this).attr('id') + '=' + $(this).val();
		});
		
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

