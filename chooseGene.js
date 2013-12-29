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

// Grab valid HUGO gene codes and case studies from CGDS
// core of code from:
/************************************************
 * Dynamic Query Javascript, built with JQuery
 * @author Ethan Cerami, Caitlin Byrne. 
*/
/*
 * Copyright (c) 2012 Memorial Sloan-Kettering Cancer Center.
 * This library is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation; either version 2.1 of the License, or
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  The software and
 * documentation provided hereunder is on an "as is" basis, and
 * Memorial Sloan-Kettering Cancer Center
 * has no obligations to provide maintenance, support,
 * updates, enhancements or modifications.  In no event shall
 * Memorial Sloan-Kettering Cancer Center
 * be liable to any party for direct, indirect, special,
 * incidental or consequential damages, including lost profits, arising
 * out of the use of this software and its documentation, even if
 * Memorial Sloan-Kettering Cancer Center
 * has been advised of the possibility of such damage.  See
 * the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library; if not, write to the Free Software Foundation,
 * Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA.
 */
function loadMetaData(){
	//  Adds Meta Data to the Page.
	//  Tiggered at the end of successful AJAX/JSON request.
	function addMetaDataToPage() {
		

	} 
    
    function loadContent() {
	    //  Get Portal JSON Meta Data via JQuery AJAX
	    var gene_array = [];
	    jQuery.getJSON("http://www.cbioportal.org/public-portal/portal_meta_data.json",function(json){
	        //  Store JSON Data in global variable for later use
	        window.metaDataJson = json;
	        //  Add Meta Data to current page
	        json = window.metaDataJson;
	        $("#select_gene_set").append("<optgroup label='Gene Sets'>");
			jQuery.each(json.gene_sets,function(key,gene_set){
       			$("#select_gene_set").append("<option value='" + key + "'>"
                	+ gene_set.name + "</option>");
        		
        		// Add individual genes to a list
        		gene_array.push(window.metaDataJson.gene_sets[key].gene_list.split(/\s+/));
    		});  //  end for each gene set loop
    		$("#select_gene_set").append("/<optgroup>");
    		// Add individual genes to list
    		$("#select_gene_set").append("<optgroup label='Individual Genes'>");
    		gene_array.sort();
			jQuery.each(gene_array,function(index,val){
					$("#select_gene_set").append("<option value='" + val + "'>"
	                	+ val + "</option>"); 
			});
    		$("#select_gene_set").append("/<optgroup>");
	    });
	}
	
	loadContent();
	return true;
}
