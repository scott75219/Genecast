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
	// $('#homemenu').show();
	
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
	
		$('#debug-area').html('<p>Debug: Using preloaded demo data. User submitted: ' + $('#txt_biomuta').val().toUpperCase() + '</p>');
		
		// load preloaded data
		for(var i = 0; i < 20; i++) { 
 			$('#biomuta-table tbody').append('<tr> \
							<th scope="row"><a href="http://www.uniprot.org/uniprot/?query=accession:P04083">P04083</a></th> \
							<td>ANXA1</a></td> \
							<td>241</td> \
							<td>TA</td> \
							<td>22941189</td> \
							<td>Lung adenocarcinoma [LUAD]</td> \
							<td>COSMIC</td> \
						</tr> \
						<tr> \
							<th scope="row"><a href="http://www.uniprot.org/uniprot/?query=accession:P04083">P04083</a></th> \
							<td>ANXA1</td> \
							<td>139</td> \
							<td>ED</td> \
							<td>22980975</td> \
							<td>Lung adenocarcinoma [LUAD]</td> \
							<td>COSMIC</td> \
						</tr>');
			}
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
    	home();
    }, false);
}


