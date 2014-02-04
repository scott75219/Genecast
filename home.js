// Now can do stuff
//

// Home screen of app
//

function truncate(string,len,showEllipsis){
	if (string.length > len)
		if (showEllipsis == false) return string.substring(0,len);
		else return string.substring(0,len) +'...';
   else
      return string;
};

function polyphenNumeric(pred){
	switch(pred.toLowerCase()){
		case 'benign': return '1';
		case 'possibly damaging': return '2';
		case 'probably damaging': return '3';
		case 'unknown': return 'unk';
		default: return '-';
	};
}

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
	// $('#homemenu').show();
	$('#biomuta-table').freezeHeader();
	// Initialize input buttons
	
	
	// biomuta global variables
	var biomutaresults = [];
	var bookmark = 0;
	
	
	$(".defaultText").focus(function(srcc) {
        if ($(this).val() == $(this)[0].title) {
            $(this).removeClass("defaultTextActive");
            $(this).val("");
        }
    });
    
    $(".defaultText").blur(function() {
        if ($(this).val() == "") {
            $(this).addClass("defaultTextActive");
            $(this).val($(this)[0].title);
        }
    });
    
    $(".defaultText").blur();
    
	// Page event listeners
	$("div[data-role=page]").bind("pagebeforeshow", function (e, data) {
    	$.mobile.silentScroll(0);
    	$.mobile.changePage.defaults.transition = 'slide';
    	
	});
	
	// Tab event listeners
	$("a[data-role=tab]").each(function () {
    	var anchor = $(this);
    	anchor.bind("click", function () {
        	$.mobile.changePage(anchor.attr("href"), {
            	transition: "none",
            	changeHash: false
        	});
        return false;
    	});
	});
	
	// UI event listeners
	$("#hivelogo-backbtn").click(function() {
		home();
		
		return false;
 	});
 	
 	// menu buttons
	// BIOMUTA
	function populateBiomutaTable () {
		// Load only 25 results at a time
		
		var paging = 50;
		$('btn_biomuta_loadmore').text('Load next 50 results');
		for(var i = bookmark; i < bookmark+paging && i < biomutaresults.length; i++) { 
			// Text manipulations to fit data into table
			var pmid = biomutaresults[i]['PMID'].split(";")[0];
			var pmidlink = 'http://www.ncbi.nlm.nih.gov/pubmed/?term='+ biomutaresults[i]['PMID'];
			//var polyphen   = polyphenNumeric(biomutaresults[i]['Polyphen_Pred']);
			//var cancerType = truncate(biomutaresults[i]['Cancer_Type'],5,true);
			//var sourceType = truncate(biomutaresults[i]['Source'],5,true);
			var polyphen   = biomutaresults[i]['Polyphen_Pred'];
			var cancerType = biomutaresults[i]['Cancer_Type'];
			var sourceType = biomutaresults[i]['Source'];
			
			// print out table row
			$('#biomuta-table tbody').append('<tr> \
				<td><a href="#biomuta-detail" >' + biomutaresults[i]['Position_A'] + '</a></td> \
				<td>' + biomutaresults[i]['Ref_A'] + '</td> \
				<td>' + biomutaresults[i]['Var_A'] + '</td> \
				<td>' + polyphen + '</td> \
				<td>' + pmid + '</td> \
				<td>' + cancerType + '</td> \
				<td>' + sourceType + '</td> \
				</tr>');
		}
		
		bookmark = bookmark + paging;
		
		if(bookmark <= biomutaresults.length  ) { $('#div_loadmore').show(); }
		else { $('#div_loadmore').hide(); }
	}
	
	$(document).on('click', '#btn_biomuta_loadmore', function(e){
		populateBiomutaTable();	
		
	});
	
	$(document).on('click', '#btn_biomuta_sbt', function(e){
		var querygene = $('#txt_biomuta').val().toUpperCase();
		$('#div_loadmore').hide();
		$("#biomuta-table").hide();
		$('#biomuta-header-table tbody').html('');
		bookmark = 0;
		var dataurl = "http://doitwithsass.com/jamal/genes/";
		console.log("eclipse :: requesting " + dataurl + "MUC16");

	    $.getJSON(dataurl + querygene, null, function(data) {
	    	biomutaresults = data;
			//console.log("eclipse :: " + data.length + " elements. JSON: " + JSON.stringify(data[0]) + ", GeneName: " + data[0]['Gene_Name']);
		   
		   data = data.sort(function(a, b) {
		        return (parseInt(a['Position_A'],10) > parseInt(b['Position_A'],10)) ? 1 : ((parseInt(a['Position_A'],10) < parseInt(b['Position_A'],10)) ? -1 : 0);
		    });			
			
			  
			$('#biomuta-table tbody').html('');
	
			// Print out results
			$("#results-msg").html('<h2>' + biomutaresults.length + ' results found for ' + querygene + '.</h2>');

			if(biomutaresults.length > 0) { 
				$('#biomuta-header-table tbody').html(
					'<tr><td>Gene:</td><td>'      + biomutaresults[0]['Gene_Name'] + '</td></tr>\
				 	<tr><td>UniProtKB:</td><td><a href="http://www.uniprot.org/uniprot/?query=accession:' + biomutaresults[0]['UniProt_AC'] + '">' +  biomutaresults[0]['UniProt_AC'] + '</td></tr>\
				 	<tr><td>RefSeq:</td><td>'    + biomutaresults[0]['Accession'] + '</td></tr>'
				);
				$('#biomuta-table tbody').html(''); 
				populateBiomutaTable();  
				$("#biomuta-table").show();
			};
			
			// When click on a row show full detail page
		    $('#biomuta-table tbody').on('click', 'tr', function() {
		        var href = $(this).find("a").attr("href");
		        if(href) {  
		        	var idx = $(this).parent().children().index($(this));
		        	//alert(idx);
		        	$.mobile.navigate( href );
					$('#biomuta-detail-table tbody').html(
						'<tr><td>Gene:</td><td>'      + biomutaresults[idx]['Gene_Name'] + '</td></tr> \
					 	<tr><td>UniProtKB:</td><td><a href="http://www.uniprot.org/uniprot/?query=accession:' + biomutaresults[idx]['UniProt_AC'] + '">' +  biomutaresults[idx]['UniProt_AC'] + '</td></tr>\
					 	<tr><td>RefSeq:</td><td>'    + biomutaresults[idx]['Accession'] + '</td></tr> \
					 	<tr><td>SNV Position:</td><td>'    + biomutaresults[idx]['Genome_Position'] + '</td></tr> \
					 	<tr><td>Pos(N):</td><td>'    + biomutaresults[idx]['Position_N'] + '</td></tr> \
					 	<tr><td>Ref(N):</td><td>'    + biomutaresults[idx]['Ref_N'] + '</td></tr> \
					 	<tr><td>Var(N):</td><td>'    + biomutaresults[idx]['Var_N'] + '</td></tr> \
					 	<tr><td>Pos(A):</td><td>'    + biomutaresults[idx]['Position_A'] + '</td></tr> \
					 	<tr><td>Ref(A):</td><td>'    + biomutaresults[idx]['Ref_A'] + '</td></tr> \
					 	<tr><td>Var(A):</td><td>'    + biomutaresults[idx]['Var_A'] + '</td></tr> \
					 	<tr><td>Polyphen Pred.:</td><td>'    + biomutaresults[idx]['Polyphen_Pred'] + '</td></tr> \
					 	<tr><td>PMID:</td><td>'    + biomutaresults[idx]['PMID'] + '</td></tr> \
					 	<tr><td>Cancer Type:</td><td>'    + biomutaresults[idx]['Cancer_Type'] + '</td></tr> \
					 	<tr><td>Source:</td><td>'    + biomutaresults[idx]['Source'] + '</td></tr> \
					 	<tr><td>Status:</td><td>'    + biomutaresults[idx]['Status'] + '</td></tr>'				 	
					);
					
					// change to biomuta-detail page

	        	};	
		    });
			
			$('#biomuta-results').show();

		});

	});
	
	// END -- BIOMUTA

		
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


