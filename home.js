// Now can do stuff
//

// Home screen of app
//
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
	
	$(document).on('click', '#btn_biomuta_sbt', function(e){
		var querygene = $('#txt_biomuta').val().toUpperCase();
		$('#debug-area').html('<p style="color: red;">Debug: Using preloaded static demo data.</p>');
		
		// load preloaded data
		console.log("eclipse :: length: " + data.length);
		var resultscnt = 0; 
		
		for(var i = 0; i < data.length; i++) { 
			if (data[i][1] == querygene) { 
				resultscnt++;
				
				console.log("eclipse :: hit " + i  + " gene: " + data[i][1]);
	 			$('#biomuta-table tbody').append('<tr> \
								<th scope="row"><a href="http://www.uniprot.org/uniprot/?query=accession:' + data[i][0] + '">' + data[i][0] + '</a></th> \
								<td>' + data[i][1] + '</a></td> \
								<td>' + data[i][2] + '</td> \
								<td>?</td> \
								<td>' + data[i][5] + '</td> \
								<td>' + data[i][6] + '</td> \
								<td>' + data[i][7] + '</td> \
							</tr>');
				}
			}
		$("#results-msg").html('<div style="clear: both;"><p style="font-size: 0.65em; color: #6c6c6c;">Tip: Rotate screen \
		horizontally for best viewing.</p></div>  \
		<h2>' + resultscnt + ' results found for ' + data[i][1] + '.</h2>');

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
	    var genehash = {};
	    var lines = [];
		$.ajax({
	        type: "GET",
	        url: "resources/data/BioMuta-short.csv",
	        dataType: "text",
	        success: function(data) {
	        	console.log("opened file");
				var allTextLines = data.split(/\r\n|\n/);
			    var headers = allTextLines[0].split(',');
			    var genecnt = 0;
			    console.log(lines.length);
				var oldGene = '';
			    for (var i=1; i<allTextLines.length; i++) {
			    	
			        var data = allTextLines[i].split(',');
			        lines.push(data);
			        
			        /*
			        if(gene != oldGene) {
			        	if(oldGene != '') {  // skip initial empty line
			        		if(oldGene in genehash){ genehash[oldGene][i] = push(lines); }
			        		else { genehash[oldGene] = lines; } 
			        	}	
			        	
			        }

			        oldGene = gene;
			        */
			       
			    }		
			    //console.log("eclipse :: " + Object.keys(genehash));
			    console.log("eclipse :: " + lines.length);

			    console.log("file read in");
			}
     	});
     	
    	home(lines);
    }, false);
}


