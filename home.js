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


function home(data) {
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
			var pmid = biomutaresults[i][12].split(/;/)[0];
			var pmidlink = 'http://www.ncbi.nlm.nih.gov/pubmed/?term='+ pmid;
			var cancerType = truncate(biomutaresults[i][13],6,true);
			var polyphen   = truncate(biomutaresults[i][11],8,false);
			
			$('#biomuta-table tbody').append('<tr> \
				<!--<th scope="row"><a href="http://www.uniprot.org/uniprot/?query=accession:' + biomutaresults[i][0] + '">' + 
				biomutaresults[i][0] + '</a></th>--> \
				<td>' + biomutaresults[i][8] + '</a></td> \
				<td>' + biomutaresults[i][9] + '</td> \
				<td>' + biomutaresults[i][10] + '</td> \
				<td>' + polyphen + '</td> \
				<td>' + '<a href="' + pmidlink + '">' + pmid + '</a></td> \
				<td>' + cancerType + '</td> \
				<td>' + biomutaresults[i][14] + '</td> \
				</tr>');
		}
		
		bookmark = bookmark + paging;
		
		if(bookmark <= biomutaresults.length  ) { $('#div_loadmore').show(); }
	}
	
	$(document).on('click', '#btn_biomuta_loadmore', function(e){
		populateBiomutaTable();	
		
	});
	
	$(document).on('click', '#btn_biomuta_sbt', function(e){
		var querygene = $('#txt_biomuta').val().toUpperCase();
		$('#div_loadmore').hide();
		$("#biomuta-table").hide();
		biomutaresults = [];
		bookmark = 0;
		$('#biomuta-table tbody').html('');
		// load preloaded data
		//console.log("eclipse :: length: " + data.length);
		var foundflag = false;
		for(var i = 0; i < data.length; i++) { 
			if (data[i][2] == querygene) {
				foundflag = true;
				biomutaresults.push(data[i]);
			}
		}

		// Print out results
		$("#results-msg").html('<h2>' + biomutaresults.length + ' results found for ' + querygene + '.</h2>');
		$('#biomuta-header-table tbody').append(
			'<tr><td>Gene:</td><td>'      + biomutaresults[1][2] + '<td></tr>\
			 <tr><td>UniProtKB:</td><td>' + biomutaresults[1][0] + '<td></tr>\
			 <tr><td>RefSeq:</td><td>'    + biomutaresults[1][4] + '<td></tr>'
			);
		if(biomutaresults.length > 0) { populateBiomutaTable(); $('biomuta-table').show();  $("#biomuta-table").show();}
	
		$('#biomuta-results').show();
	});
	
	// END -- BIOMUTA

		
	console.log("eclipse :: end home()");
}

// Wait for device API libraries to load
//
function onLoad(){
    document.addEventListener('deviceready', function(){
	    console.log('eclipse :: device is ready');
		
		// Temporary load of hardcoded data
	    var dataurl = "resources/data/BioMuta-short.csv";
	    var genehash = {};
	    var lines = [];
		/*$.ajax({
	        type: "GET",
	        url: dataurl,
	        dataType: "text",
	        success: function(data) {*/
	     $.get(dataurl, function(data) {
	        	console.log("opened file");
				var allTextLines = data.split(/\r\n|\n/);
			    var headers = allTextLines[0].split(',');
			    var genecnt = 0;
			    console.log(lines.length);
				var oldGene = '';
			    for (var i=1; i<allTextLines.length; i++) {
			    	
			        var data = allTextLines[i].split(',');
			        lines.push(data);
			       
			    }		
			    //console.log("eclipse :: " + Object.keys(genehash));
			    console.log("eclipse :: " + lines.length);

			    console.log("file read in");
			//}
     	});
     	
    	home(lines);
    }, false);
}


