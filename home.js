// Now can do stuff
//

// Home screen of app
//

// Check connectivity
function checkInternetConn(){
		$.ajax({url: "http://doitwithsass.com/jamal",
	        type: "HEAD",
	        timeout:3000,
	        statusCode: {
	            200: function (response) {
	                return true;
	            },
	            400: function (response) {
	                alert('Unable to connect to server. Check Internet connection and try again.');
					 return false;	
	            },
	            404: function (response) {
	                alert('Unable to connect to server. Server may be down temporarily.');
	            	 return false;	
	            },
	            0: function (response) {
	                alert('Unable to connect to server. Check Internet connection and try again.');
	                onLoad();
	               	return false;	
	            }              
	        }
	 });
}

function truncate(string,len,showEllipsis){
	if (string.length > len)
		if (showEllipsis == false) return string.substring(0,len);
		else return string.substring(0,len) +'...';
   else
      return string;
};

// Takes the status description and replaces with the appropriate symbol image
function statusConvert(status) {
	var stat = status == 'Silver' ? '<img src="resources/images/Silver.png" height="30px" width="30px"/> ' : '<img src="resources/images/gold.png" height="30px" width="30px"/> ';
	console.log("eclipse :: detail status: " + stat);
	return stat;  	
}


// To save space convert the Polyphen-2 code to either number or color symbols
// Possible values: benign, possibly damaging, or probably damaging
function polyphenConvert(pred, mode){

	var colorcode = 'white';
	var numbrsymbol = '-';
	
	switch(pred.toLowerCase()){
		case 'benign': numbrsymbol = '1'; colorcode = 'green'; break;
		case 'possibly damaging': numbrsymbol = '2'; colorcode = 'yellow'; break;
		case 'probably damaging': numbrsymbol = '3'; colorcode = 'red'; break;
		case 'unknown': numbrsymbol = 'unk'; colorcode = 'grey'; break;
		default: return '<span style="margin-left: 3px;">-</span>';
	}
	
	var colorsymbol = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect fill="' + colorcode + '" width="100%" height="100%" stroke="blue" fill-opacity="0.5" stroke-opacity="0.8"/></svg>';
	return mode == 'colors' ? colorsymbol : numbrsymbol;
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
			var polyphen   = polyphenConvert(biomutaresults[i]['Polyphen_Pred'],'colors');
			//var cancerType = truncate(biomutaresults[i]['Cancer_Type'],5,true);
			var sourceType = truncate(biomutaresults[i]['Source'],8,true);
			//var cancerType = biomutaresults[i]['Cancer_Type'];
			var cancerType = biomutaresults[i]['Cancer_Type'].match(/\[[A-Za-z0-9]+\]/)[0].replace('[', '').replace(']', '');
			//var polyphen   = biomutaresults[i]['Polyphen_Pred'];
			//var sourceType = biomutaresults[i]['Source'];
			
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
		if(checkInternetConn() == false) { return 0;}
		
		// Loading data notification
		$.mobile.loading( 'show', { text: "Loading. Please wait...", textVisible: true, theme: "c"});
		var querygene = $('#txt_biomuta').val().trim().toUpperCase();
		$('#div_loadmore').hide();
    	$('#biomuta-results').hide();
		$("#results-msg").html('');
		$("#biomuta-table").hide();
		$('#biomuta-header-table tbody').html('');
		$('#biomuta-table tbody').html('');

		bookmark = 0;
		var dataurl = "http://doitwithsass.com/jamal/genes/";

	    $.getJSON(dataurl + querygene, null, function(data) {

	    	biomutaresults = data;
	    	console.log('eclipse :: datalength: ' + biomutaresults.length);
	    	if(biomutaresults.length == 0) { $('#biomuta-invalid-msg').show(); $.mobile.loading("hide"); return; }	   
		   	data = data.sort(function(a, b) {
		        return (parseInt(a['Position_A'],10) > parseInt(b['Position_A'],10)) ? 1 : ((parseInt(a['Position_A'],10) < parseInt(b['Position_A'],10)) ? -1 : 0);
		    });			
			
			  	
			// Print out results
			$("#results-msg").html('<h2>' + biomutaresults.length + ' results found for ' + querygene + '.</h2>');

			if(biomutaresults.length > 0) { 
				$('#biomuta-invalid-msg').hide(); 
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
		    	$.mobile.loading( 'show', { text: "Loading. Please wait...", textVisible: true, theme: "c"});
		    	$('#biomuta-results').hide();
		        var href = $(this).find("a").attr("href");
		        if(href) {  
		        	var idx = $(this).parent().children().index($(this));
		        	//alert(idx);
		        	$.mobile.navigate( href );
		        	// Convert status to a symbol and description (Silver, Gold)
		        	var statussymbol = statusConvert(biomutaresults[idx]['Status']);
		        	
		        	// Determine Accession link:
		        	var accessionlink;
        			if(biomutaresults[idx]['Accession'].indexOf('ENST')>=0){accessionlink='<a href="http://useast.ensembl.org/Homo_sapiens/Transcript/Transcript?t='+biomutaresults[idx]['Accession']+'">'+ biomutaresults[idx]['Accession'] + '</a>';}
			        else if(biomutaresults[idx]['Accession'].indexOf('XM')>=0){accessionlink='<a href="http://www.ncbi.nlm.nih.gov/nuccore/'+biomutaresults[idx]['Accession']+'">'+biomutaresults[idx]['Accession']+'</a>';}
			        else if(biomutaresults[idx]['Accession'].indexOf('NM')>=0){accessionlink='<a href="http://www.ncbi.nlm.nih.gov/nuccore/'+biomutaresults[idx]['Accession']+'">'+biomutaresults[idx]['Accession']+'</a>';}
			        else if(biomutaresults[idx]['Accession'].indexOf('VAR')>=0){accessionlink='<a href="http://web.expasy.org/variant_pages/'+biomutaresults[idx]['Accession']+'.html">'+biomutaresults[idx]['Accession']+'</a>';}
			        else {accessionlink='<a href="http://www.ncbi.nlm.nih.gov/gene/?term='.biomutaresults[idx]['Accession']+'">';}
					
					// SNV position link
					var snvlink = biomutaresults[idx]['Genome_Position'].indexOf(':')>=0 ? '<a href="http://genome.ucsc.edu/cgi-bin/hgTracks?org=human&position='+biomutaresults[idx]['Genome_Position']+'">'+biomutaresults[idx]['Genome_Position']+'</a>' : biomutaresults[idx]['Genome_Position'];

					// PMID link
					var pmidlink = biomutaresults[idx]['PMID']!='-' ? '<a href="http://www.ncbi.nlm.nih.gov/pubmed/?term='+ biomutaresults[idx]['PMID']+'">'+biomutaresults[idx]['PMID']+'</a>' : biomutaresults[idx]['PMID']; 
					
					// PolyPhen color code
					var polyphen   = polyphenConvert(biomutaresults[idx]['Polyphen_Pred'],'colors');
					
					$('#biomuta-detail-table tbody').html(
						'<tr><td>Gene:</td><td>'     + biomutaresults[idx]['Gene_Name'] + '</td></tr> \
					 	<tr><td>UniProtKB:</td><td><a href="http://www.uniprot.org/blast/?about=' + biomutaresults[idx]['UniProt_AC'] + '">' +  biomutaresults[idx]['UniProt_AC'] + '</a></td></tr>\
					 	<tr><td>RefSeq:</td><td>'    + accessionlink + '</td></tr> \
					 	<tr><td>SNV Position:</td><td>'    + snvlink + '</td></tr> \
					 	<tr><td>Pos(N):</td><td>'    + biomutaresults[idx]['Position_N'] + '</td></tr> \
					 	<tr><td>Ref(N):</td><td>'    + biomutaresults[idx]['Ref_N'] + '</td></tr> \
					 	<tr><td>Var(N):</td><td>'    + biomutaresults[idx]['Var_N'] + '</td></tr> \
					 	<tr><td>Pos(A):</td><td>'    + biomutaresults[idx]['Position_A'] + '</td></tr> \
					 	<tr><td>Ref(A):</td><td>'    + biomutaresults[idx]['Ref_A'] + '</td></tr> \
					 	<tr><td>Var(A):</td><td>'    + biomutaresults[idx]['Var_A'] + '</td></tr> \
					 	<tr><td>Polyphen Pred.:</td><td>' + polyphen + ' ' + biomutaresults[idx]['Polyphen_Pred'] + '</td></tr> \
					 	<tr><td>PMID:</td><td>'    + pmidlink + '</td></tr> \
					 	<tr><td>Cancer Type:</td><td>'    + biomutaresults[idx]['Cancer_Type'] + '</td></tr> \
					 	<tr><td>Source:</td><td>'    + biomutaresults[idx]['Source'] + '</td></tr> \
					 	<tr><td>Status:</td><td>'    + statussymbol + '</td></tr>'				 	
					);
					// change to biomuta-detail page
	        	};	
	        	$.mobile.loading("hide");

		    });
			
			$('#biomuta-results').show();
			$.mobile.loading("hide");
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
		// Check Internet connection availability
    	if(checkInternetConn() == true) { home(); }
    }, false);

}


