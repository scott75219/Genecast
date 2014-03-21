// Home screen of app
//

// GLOBAL ERROR MESSAGES
window.error_msg =
{
	ERROR_MSG_INVALID_GENE: '<p><strong>* Please enter a valid HUGO gene symbol.</strong></p>',
	ERROR_MSG_NO_CONN_SUBMIT: '<p><strong>* Error: No Internet detected. Make sure there is a connection before submitting.</strong></p>',
	ERROR_MSG_PARSING: '<p><strong>* PARSING ERROR! Please try another gene.</strong></p>'
};
   
// Check connectivity
function checkInternetConn(errormsg_container){
		$.ajax({url: "http://hive.biochemistry.gwu.edu",
	        type: "HEAD",
	        timeout:4000,
	        statusCode: {
	            200: function (response) {
	            	$(errormsg_container).hide();
	            }, 
	            400: function (response) {
	                alert('Unable to connect to server. Check Internet connection and try again. (Code 400)');
	                $(errormsg_container).show();
					$(errormsg_container).html(window.error_msg.ERROR_MSG_NO_CONN_SUBMIT);
	            },
	            404: function (response) {
	                alert('Unable to connect to server. Server may be down temporarily. (Code 404)');
	                $(errormsg_container).show();
					$(errormsg_container).html(window.error_msg.ERROR_MSG_NO_CONN_SUBMIT);
	            },
	            0: function (response) {
	                alert('Unable to connect to server. Check Internet connection and try again. (Code 0)');
	                $(errormsg_container).show();
					$(errormsg_container).html(window.error_msg.ERROR_MSG_NO_CONN_SUBMIT);
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
	var stat = status == 'SM' ? 'Small-Scale Study' : 'Large-Scale Study';
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
	//document.addEventListener('menubutton',doMenu,false);
	
	var img_logoonly = "resources/icons/hive_logo.png";
	var img_logoback = "resources/icons/hive_logo-backbutton.png";
	//$('#hivelogo-backbtn').attr("src",img_logoonly);
    $('#reconnoiter-screen').hide();
	$('#queryCriteriaArea').hide();
	$('#queryResultsArea').hide();
	$('#textarea_gene_set').val('');
	$('#select_gene_set option:first').attr('selected','selected');
	console.log('eclipse :: Internet: ' + checkInternetConn());
	checkInternetConn('#biomuta-invalid-msg');
	
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

	// UI event listeners
	$("#hivelogo-backbtn").on("touchend", function() {
    	$('#biomuta-results').show();
		$.mobile.navigate('#biomuta');
	});

	document.addEventListener("backbutton", onBackKeyDown,true);
	
	function onBackKeyDown(){
    	if(biomutaresults.length>0) { $('#biomuta-results').show(); }
		history.go(-1);
    	navigator.app.backHistory();
	}
 	
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
 	
	// BIOMUTA
	
	// generate biomuta graph
	function generateBiomutaGraph(charttype) {
		// categorize frequencies per cancer type
		var frequencies = [];
		var freq = {};
		
		// organize data into javascript object
		$.each(biomutaresults, function(indx, obj){
			var cancertype = obj['Cancer_Type'].match(/\[[A-Za-z0-9]+\]/)[0].replace('[', '').replace(']', '');
			if(cancertype == 'OTHERS' && obj['Cancer_Type'].match(/^[Cc]ancer(.*)/) == null) {
				//console.log('eclipse :: cancer? ' + obj['Cancer_Type'] + ' - ' + obj['Cancer_Type'].match(/^[Cc]ancer(.*)/));
				cancertype = truncate(obj['Cancer_Type'].substr(0,obj['Cancer_Type'].indexOf(' ')),8,false);
				/*if(obj['Cancer_Type'] == 'Unknown Cancer Type [OTHERS]') { cancertype = 'Unk.'; }
				if else (obj['Cancer_Type'] == 'Cancer[OTHERS]' || obj['Cancer_Type'] == 'Cancer [OTHERS]')
				else {cancertype = truncate(obj['Cancer_Type'],7,true); }*/
			}
			//console.log(obj['Gene_Name'] + " " + obj['Cancer_Type']);
			if(!(cancertype in freq)) {freq[cancertype] = 1; }
			else {freq[cancertype]++; }
		});
  	
		for (var key in freq) {
	 		if (freq.hasOwnProperty(key)) {
	    		//console.log(key + " -> " + freq[key]);
	    		frequencies.push({'Cancer Type': key, 'Frequency': freq[key]});
	  		}
		}
		//console.log('eclipse :: frequencies length is ' + frequencies.length);
		

		if(charttype == 1) {
			/*****
			 *  
			 * Below d3js bar chart code template from http://d3-generator.com
			 *
			* *****/
			// clear chart area and add header
			$('#biomuta-chart').html('<h3 style="text-align: center;">Frequency of Cancer Types</h3>');
			// render chart
			var data = frequencies;
			var valueLabelWidth = 40; // space reserved for value labels (right)
			var barHeight = 15; // height of one bar
			var barLabelWidth = 50; // space reserved for bar labels
			var barLabelPadding = 5; // padding between bar and bar labels (left)
			var gridLabelHeight = 18; // space reserved for gridline labels
			var gridChartOffset = 3; // space between start of grid and first bar
			var maxBarWidth = $(window).width()- (barLabelWidth*2); // width of the bar with the max value
			// accessor functions 
			var barLabel = function(d) { return d['Cancer Type']; };
			var barValue = function(d) { return parseFloat(d['Frequency']); };
			window.onorientationchange = function() { setTimeout(functionName, 0); var maxBarWidth = $(window).width()- (barLabelWidth*2); redraw();};

			// sorting
			var sortedData = data.sort(function(a, b) {
			 return d3.descending(barValue(a), barValue(b));
			}); 
			
			// scales
			var yScale = d3.scale.ordinal().domain(d3.range(0, sortedData.length)).rangeBands([0, sortedData.length * barHeight]);
			var y = function(d, i) { return yScale(i); };
			var yText = function(d, i) { return y(d, i) + yScale.rangeBand() / 2; };
			var x = d3.scale.linear().domain([0, d3.max(sortedData, barValue)]).range([0, maxBarWidth]);
			// svg container element
			var chart = d3.select('#biomuta-chart').append("svg")
			  .attr('width', maxBarWidth + barLabelWidth + valueLabelWidth)
			  .attr('height', gridLabelHeight + gridChartOffset + sortedData.length * barHeight);
			// grid line labels
			var gridContainer = chart.append('g')
			  .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')'); 
			gridContainer.selectAll("text").data(x.ticks(5)).enter().append("text")
			  .attr("x", x)
			  .attr("dy", -3)
			  .attr("font-size", ".75em")
			  .attr("text-anchor", "middle")
			  .text(String);
			// vertical grid lines
			gridContainer.selectAll("line").data(x.ticks(5)).enter().append("line")
			  .attr("x1", x)
			  .attr("x2", x)
			  .attr("y1", 0)
			  .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
			  .style("stroke", "#ccc");
			// bar labels
			var labelsContainer = chart.append('g')
			  .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
			labelsContainer.selectAll('text').data(sortedData).enter().append('text')
			  .attr('y', yText)
			  .attr('stroke', 'none')
			  .attr('fill', 'black')
			  .attr("font-size", ".75em")
			  .attr("dy", ".35em") // vertical-align: middle
			  .attr('text-anchor', 'end')
			  .text(barLabel);
			// bars
			var barsContainer = chart.append('g')
			  .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
			barsContainer.selectAll("rect").data(sortedData).enter().append("rect")
			  .attr('y', y)
			  .attr('height', yScale.rangeBand())
			  .attr('width', function(d) { return x(barValue(d)); })
			  .attr('stroke', 'white')
			  .attr('fill', 'steelblue');
			// bar value labels
			barsContainer.selectAll("text").data(sortedData).enter().append("text")
			  .attr("x", function(d) { return x(barValue(d)); })
			  .attr("y", yText)
			  .attr("dx", 3) // padding-left
			  .attr("dy", ".35em") // vertical-align: middle		  
			  .attr("font-size", ".75em")
			  .attr("text-anchor", "start") // text-align: right
			  .attr("fill", "black")
			  .attr("stroke", "none")
			  .text(function(d) { return d3.round(barValue(d), 2); });
			// start line
			barsContainer.append("line")
			  .attr("y1", -gridChartOffset)
			  .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
			  .style("stroke", "#000");
		}
	}
	
	// generate biomuta table
	function populateBiomutaTable () {
		// Load only 25 results at a time
		
		var paging = 50;
		$('btn_biomuta_loadmore').text('Load next 50 results');
		for(var i = bookmark; i < bookmark+paging && i < biomutaresults.length; i++) { 
			// Text manipulations to fit data into table
			var pmid = biomutaresults[i]['PMID'].split(";")[0];// AMIR
			var pmidlink = 'http://www.ncbi.nlm.nih.gov/pubmed/?term='+ pmid;
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

	// When click on a row show full detail page
    $('#biomuta-table tbody').on('click', 'tr', function() {
    	$.mobile.loading( 'show', { text: "Loading. Please wait...", textVisible: true, theme: "c"});
    	$('#biomuta-results').hide();
        var href = $(this).find("a").attr("href");
        if(href) {  
        	var idx = $(this).parent().children().index($(this));
        	$.mobile.navigate( href );
        	// Convert status to a symbol and description (Silver, Gold)
        	var statussymbol = statusConvert(biomutaresults[idx]['Status']);
        	
        	// Determine Accession link:
        	var acTitle = "Other AC:";
        	var accessionlink;
			if(biomutaresults[idx]['Accession'].indexOf('ENST')>=0){accessionlink='<a href="http://useast.ensembl.org/Homo_sapiens/Transcript/Transcript?t='+biomutaresults[idx]['Accession']+'">'+ biomutaresults[idx]['Accession'] + '</a>';}
	        else if(biomutaresults[idx]['Accession'].indexOf('XM_')>=0 || biomutaresults[idx]['Accession'].indexOf('NM_')>=0 || biomutaresults[idx]['Accession'].indexOf('AC_')>=0) {
	        	acTitle = "RefSeq AC:";
	        	accessionlink='<a href="http://www.ncbi.nlm.nih.gov/nuccore/'+biomutaresults[idx]['Accession']+'">'+biomutaresults[idx]['Accession']+'</a>'; 
	        	}
	        else if(biomutaresults[idx]['Accession'].indexOf('VAR')>=0){accessionlink='<a href="http://web.expasy.org/variant_pages/'+biomutaresults[idx]['Accession']+'.html">'+biomutaresults[idx]['Accession']+'</a>';}
	        else {accessionlink='<a href="http://www.ncbi.nlm.nih.gov/gene/?term='.biomutaresults[idx]['Accession']+'">';}
			
			// SNV position link
			var snvlink = biomutaresults[idx]['Genome_Position'].indexOf(':')>=0 ? '<a href="http://genome.ucsc.edu/cgi-bin/hgTracks?org=human&position='+biomutaresults[idx]['Genome_Position']+'">'+biomutaresults[idx]['Genome_Position']+'</a>' : biomutaresults[idx]['Genome_Position'];

			// PMID link
			var pmid = biomutaresults[idx]['PMID'].split(";")[0];
			var pmidlink = pmid!='-' ? '<a href="http://www.ncbi.nlm.nih.gov/pubmed/?term='+ pmid+'">'+pmid+'</a>' : pmid; 
			
			// PolyPhen color code
			var polyphen   = polyphenConvert(biomutaresults[idx]['Polyphen_Pred'],'colors');
			
			$('#biomuta-detail-table tbody').html(
				'<tr><td>Gene:</td><td>'     + biomutaresults[idx]['Gene_Name '] + '</td></tr> \
			 	<tr><td>UniProtKB:</td><td><a href="http://www.uniprot.org/blast/?about=' + biomutaresults[idx]['UniProt AC'] + '">' +  biomutaresults[idx]['UniProt AC'] + '</a></td></tr>\
			 	<tr><td>' + acTitle + '</td><td>'    + accessionlink + '</td></tr> \
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
			 	<tr><td>Status:</td><td id="td-status">'    + statussymbol + '</td></tr>'				 	
			);
			// change to biomuta-detail page
    	};	
    	$.mobile.loading("hide");
    });
		    
	
	$(document).on('click', '#btn_biomuta_sbt', function(e){

			
		// Loading data notification
		$.mobile.loading( 'show', { text: "Loading. Please wait...", textVisible: true, theme: "c"});
		var querygene = $('#txt_biomuta').val().trim().toUpperCase();
		//$('#div_loadmore').hide();
    	$('#biomuta-results').hide();
		$("#results-msg").html('');
		//$("#biomuta-table").hide();
		$('#biomuta-header-table tbody').html('');
		$('#biomuta-table tbody').html('');

		bookmark = 0;
		var dataurl = "http://hive.biochemistry.gwu.edu/tools/biomuta/json.php?gene=";
		console.log('eclipse: fetching ' + dataurl + querygene);
		checkInternetConn('#biomuta-invalid-msg');

	    $.getJSON(dataurl + querygene, null, function(data) {

	    	console.log('eclipse: data returned');
	    	biomutaresults = data;
	    	if (biomutaresults.length == 0) {
	    		$('#biomuta-invalid-msg').show();
	    		$('#biomuta-invalid-msg').html(window.error_msg.ERROR_MSG_INVALID_GENE);
	    		$.mobile.loading("hide"); 
	    		return; 
	    	}	   
		   	data = data.sort(function(a, b) {
		        return (parseInt(a['Position_A'],10) > parseInt(b['Position_A'],10)) ? 1 : ((parseInt(a['Position_A'],10) < parseInt(b['Position_A'],10)) ? -1 : 0);
		    });			
			  	
			// Print out results
			$("#results-msg").html('<h2>' + biomutaresults.length + ' results found for ' + querygene + '.</h2>');

			if(biomutaresults.length > 0) { 
				$('#biomuta-invalid-msg').hide(); 
				$('#biomuta-header-table tbody').html(
					//'<tr><td>Gene:</td><td>'      + biomutaresults[0]['Gene_Name'] + '</td>\
				 	'<tr><td><b>UniProtKB:<b/></td><td><a href="http://www.uniprot.org/uniprot/?query=accession:' + biomutaresults[0]['UniProt AC'] + '">' +  biomutaresults[0]['UniProt AC'] + '</td>\
				 	<td><b>RefSeq:</b></td><td>'    + biomutaresults[0]['Accession'] + '</td></tr>'
				);
				$('#biomuta-table tbody').html(''); 
				populateBiomutaTable();  
				$("#biomuta-table").show();
				
				// Construct graph. 
				// 1 = cancer type frequency bar graph 
				generateBiomutaGraph(1);
			};
			
			$('#biomuta-results').show();
			$.mobile.loading("hide");
		})
		.error(function(jqXHR, textStatus, errorThrown) {
        	console.log("Error! " + textStatus);
        	console.log("Incoming Text: " + jqXHR.responseText);
			// UNTIL AMIR FIXES BAD JSON	if(!$('#biomuta-invalid-msg').is(":visible")) { $('#biomuta-invalid-msg').html('<br/>'+ window.error_msg.ERROR_MSG_PARSING); }
        	if(!$('#biomuta-invalid-msg').is(":visible")) { $('#biomuta-invalid-msg').html('<br/>' + window.error_msg.ERROR_MSG_INVALID_GENE); }
        	$('#biomuta-invalid-msg').show();
			$.mobile.loading("hide");
    	}); // end ajax query
	});
	
	// END -- BIOMUTA
		
	console.log("eclipse :: end home()");
}


function onDeviceReady() {
	console.log('eclipse :: device is ready');
	// Options menu
    var onAbout = function() {
        console.log("eclipse:: clicked About menu option");
		$.mobile.navigate('#about');
    };

    var onUpdate = function() {
        console.log("eclipse:: clicked Update menu option");
        window.open('https://hive.biochemistry.gwu.edu/tools/HiveGenecast/HIVEGenecast.apk','_system');
        //alert("No new update available.");
    };

    var optionsmenu = new OptionsMenu({
        id: "optionsmenu",
        items: [ 
            [ {
                label: "About",
                image: "resources/images/drawable-hdpi/ic_dialog_info.png",
                action: onAbout
            }, 
            {
                label: "HIVE Apps",
                image: "resources/images/drawable-hdpi/stat_sys_upload_anim0.png",
                action: onUpdate
            } ]
        ]
    });

	// Check Internet connection availability
	// then go to home screen
	home();
}


function doMenu() {
	alert('hit menu3');	
}

// Wait for device API libraries to load
//
function onLoad() {
	console.log('eclipse:: onLoad called');
    document.addEventListener("deviceready", onDeviceReady, false);
}



