/*
 * Copyright (c) 2013 Memorial Sloan-Kettering Cancer Center.
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

function crosscancer(input) {
	// TODO 3d Visualizer should be initialized before document get ready
	// ...due to incompatible Jmol initialization behavior
	var _mut3dVis = null;
	//_mut3dVis = new Mutation3dVis("crossCancer3dView", {});
	//_mut3dVis.init();

	// Prepare eveything only if the page is ready to load

		console.log('eclipse :: in crosscancer()');
        // Some semi-global utilities
        // Here are some options that we will use in this view
        /*
        function Study (studyId, typeOfCancer, mutationProfile, cnaProfile, caseSetId, caseSetLength, alterations, genes ) {
        	this.studyId = studyId;
        	this.typeOfCancer = typeOfCancer;
        	this.mutationProfile = mutationProfile;
        	this.cnaProfile = cnaProfile;
        	this.caseSetId = caseSetId;
        	this.caseSetLength = caseSetLength;
        	this.alterations = alterations;
        	this.genes = genes;
        }
        */
        var width = 600;
        var height = 300;
        var paddingLeft = 5;
        var paddingRight = 5;
        var paddingTop = 60;
        var histBottom = 200;
        var fontFamily = "sans-serif";
        var animationDuration = 800;

        var defaultQTipOptions = {
            content: {
                text: "Default qtip text"
            },
            hide: {
                fixed: true,
                delay: 250,
                event: 'mouseout'
            },
            show: {
                event: 'mouseover'
            },
            style: {
                classes: 'qtip-light qtip-rounded qtip-shadow cc-study-tip cc-ui-tooltip'
            },
            position: {
                my:'bottom left', at:'top center'
            }
        };

        var getStudyAbbr = function(study, metaData) {
            var tokens = study.studyId.split("_", 2);
            var firstPart = metaData.short_names[study.typeOfCancer];
            var secondPart = " (" + tokens[1].toLocaleUpperCase().replace("_") + ")";

            return firstPart + secondPart;
        };

        var calculateFrequency = function(d, i, type) {
            return d.alterations[type]/ d.caseSetLength;
        };

        var filterAndSortData = function(histDataOrg) {
            var histData = [];
            _.each(histDataOrg, function(study) {
        //        var showStudy = $("#histogram-remove-study-" + study.studyId).is(":checked");
              //  if(!study.skipped && showStudy)
              
                    histData.push(study);
            });

          //  switch($("#histogram-sort-by").val()) {
         //       case "alteration":
                    // Sort by total number of frequency
                    histData.sort(function(a, b) {
                         return calculateFrequency(b, 0, "all") - calculateFrequency(a, 1, "all");
                    });
          //          break;
         //       case "name":
           //         break; // keep the order
         //   }

            return histData;
        };

        var fixFloat = function(number, digit) {
            var multiplier = Math.pow( 10, digit );
            return Math.round( number * multiplier ) / multiplier;
        };


        /* Models */
        var Study = Backbone.Model.extend({
            defaults: {
                studyId: "",
                caseSetId: "",
                genes: "",
                skipped: false,
                alterations: {
                    mutation: 0,
                    cnaUp: 0,
                    cnaDown: 0,
                    other: 0,
                    all: 0
                }
            }
        });

        var Studies = Backbone.Collection.extend({
            model: Study,
            url: "http://www.cbioportal.org/public-portal/crosscancerquery.json",
            defaults: {
                gene_list: "",
                data_priority: 0
            },

            initialize: function(options) {
                options = _.extend(this.defaults, options);
                this.url += "?gene_list=" + options.gene_list + "&data_priority=" + options.data_priority;

                return this;
            }
        });
        
        /* Views */


console.log("eclipse :: right before render_");
                var priority = 1;
                if(priority == 2) {
                    $("#cc-mutations-link").parent().hide();
                } else {
                    $("#cc-mutations-link").parent().show();
                }

                var genes = "BRCA1,BRCA2";
                var orgQuery = "BRCA1,BRCA2";



//console.log("eclipse :: after study constr " + genes + " " + studies.gene_list);



    function loadMutationData(input) {
    	console.log('eclipse :: in loadMutationData()');
	    //  Get Portal JSON Meta Data via JQuery AJAX
	    var url = "http://www.cbioportal.org/public-portal/crosscancerquery.json";
	    url += "?gene_list=" + input.g + "&data_priority=" + input.d;
	    console.log('eclipse :: fetching ' + url);
	    // reads in JSON as json[].{studyId, typeOfCancer, mutationProfile,...}
	    jQuery.getJSON(url,function(json){
	    	console.log('eclipse :: got the json');
	        //  Store JSON Data in global variable for later use
	        window.metaDataJson = json;
	        //console.log('eclipse :: json: ' + JSON.stringify(json));
	        
	        
	        $.each(json, function(k,v) { console.log('eclipse :: json output: ' + k + ' ' + v);});
	        //  Add Meta Data to current page
	       // addMetaDataToPage();

// HISTORGRAM

						window.studies = json;

                       var metaData = window.metaDataJson; 
                            var histDataOrg = window.studies;

                            var histData = filterAndSortData(histDataOrg);

							

                            var hiddenStudies = _.reduce(histDataOrg, function(seed, study) {
                                if(study.skipped) {
                                    seed.push(study);
                                }
                                return seed;
                            }, []);
console.log('eclipse :: histData.length: ' + + histData.length);
                            var studyLocIncrements = (width - (paddingLeft + paddingRight)) / histData.length;
                            var studyWidth = studyLocIncrements * .75;
                            var verticalCirclePadding = 20;
                            // Data type radius
                            var circleDTR = studyWidth / 4;
                            // Tumor type radius
                            var circleTTR = Math.min(studyWidth, 20) / 2;

                            var color = function(cType) {
                            	console.log('eclipse :: metaData.cancer_colors[cType]: ' + metaData.cancer_colors[cType]);
                                return metaData.cancer_colors[cType];
                            };

                            var key = function(d) {
                            	console.log('eclipse :: d.studyId: ' + d.studyId);
                                return d.studyId;
                            };

                            var yScale = d3.scale.linear()
                                .domain([
                                0,
                                Math.min(
                                    1.0,
                                    parseFloat(d3.max(histData, function (d, i) {
                                        return fixFloat(calculateFrequency(d, i, "all"), 1);
                                    })) + .05
                                )
                            ])
                            .range([histBottom-paddingTop, 0]);

                            // Empty the content
                            $("#cchistogram").html("");

                            // and initialize the histogram
                            var histogram = d3.select("#cchistogram")
                                .append("svg")
                                .attr("width", width)
                                .attr("height", height);

                            // define Y axis
                            var yAxis = d3.svg.axis()
                                .scale(yScale)
                                .orient("left");

                            var otherBarGroup = histogram.append("g");
                            otherBarGroup.selectAll("rect")
                                .data(histData, key)
                                .enter()
                                .append("rect")
                                .attr("fill", "#aaaaaa")
                                .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                .attr("y", function(d, i) { return yScale(calculateFrequency(d, i, "other")) + paddingTop; })
                                .attr("width", studyWidth)
                                .attr("height", function(d, i) {
                                    return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other"));
                                })
                                .style("stroke", "white")
                                .style("stroke-width", "1")
                                .attr("class", function(d, i) { return d.studyId + " alt-other"; })
                            ;

                            var mutBarGroup = histogram.append("g");
                            mutBarGroup.selectAll("rect")
                                .data(histData, key)
                                .enter()
                                .append("rect")
                                .attr("fill", "green")
                                .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                .attr("y", function(d, i) {
                                    return yScale(calculateFrequency(d, i, "mutation"))
                                        - ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other")))
                                        + paddingTop;
                                })
                                .attr("width", studyWidth)
                                .attr("height", function(d, i) {
                                    return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "mutation"));

                                })
                                .style("stroke", "white")
                                .style("stroke-width", "1")
                                .attr("class", function(d, i) { return d.studyId + " alt-mut"; })
                            ;

                            var cnadownBarGroup = histogram.append("g");
                            cnadownBarGroup.selectAll("rect")
                                .data(histData, key)
                                .enter()
                                .append("rect")
                                .attr("fill", "blue")
                                .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                .attr("y", function(d, i) {
                                    return yScale(calculateFrequency(d, i, "cnaDown"))
                                        - (
                                            ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "mutation")))
                                            + ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other")))
                                        )
                                        + paddingTop;
                                })
                                .attr("width", studyWidth)
                                .attr("height", function(d, i) {
                                    return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "cnaDown"));
                                })
                                .style("stroke", "white")
                                .style("stroke-width", "1")
                                .attr("class", function(d, i) { return d.studyId + " alt-cnadown"; })
                            ;

                            var cnaupBarGroup = histogram.append("g");
                            cnaupBarGroup.selectAll("rect")
                                .data(histData, key)
                                .enter()
                                .append("rect")
                                .attr("fill", "red")
                                .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                .attr("y", function(d, i) {
                                    return yScale(calculateFrequency(d, i, "cnaUp"))
                                        - (
                                            ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "mutation")))
                                            + ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other")))
                                            + ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "cnaDown")))
                                        )
                                        + paddingTop;
                                })
                                .attr("width", studyWidth)
                                .attr("height", function(d, i) {
                                    return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "cnaUp"));
                                })
                                .style("stroke", "white")
                                .style("stroke-width", "1")
                                .attr("class", function(d, i) { return d.studyId + " alt-cnaup"; })
                            ;

                            var infoBarGroup = histogram.append("g");
                            infoBarGroup.selectAll("rect")
                                .data(histData, key)
                                .enter()
                                .append("rect")
                                .attr("fill", "#aaaaaa")
                                .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                .attr("y", function(d, i) { return yScale(calculateFrequency(d, i, "all")) + paddingTop; })
                                .attr("width", studyWidth)
                                .attr("height", function(d, i) {
                                    return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "all"));
                                })
                                .style("opacity",0)
                                .style("stroke", "white")
                                .style("cursor", "pointer")
                                .style("stroke-width", "1")
                                .attr("class", function(d, i) { return d.studyId + " alt-info"; })
                                .each(function(d, i) {
                                    var container = $("<div></div>");
                                    (new StudyToolTipView({
                                        el: container,
                                        model: {
                                            study: d,
                                            metaData: metaData,
                                            genes: orgQuery
                                        }
                                    })).render();

                                    var qOpts = _.extend(defaultQTipOptions, {
                                        content: container.html()
                                    });
                                    $(this).qtip(qOpts);

                                    $(this).click(function(e) {
                                        e.preventDefault();

                                        var sLink = _.template($("#study-link-tmpl").html(), {
                                            study: d,
                                            genes: orgQuery
                                        });

                                        window.open($(sLink).attr("href"), "_blank");
                                    });
                                });


                            var annotations = histogram.append("g");
                            annotations.selectAll("text")
                                .data(["Cancer type", "Mutation data", "CNA data"])
                                .enter()
                                .append("text")
                                .attr("y", function(d, i) { return histBottom + verticalCirclePadding*(i+1) + 3; })
                                .attr("x", function(d, i) { return paddingLeft - 10; })
                                .text(function(d, i) { return d; })
                                .attr("text-anchor", "end")
                                .attr("font-family", fontFamily)
                                .attr("font-weight", "bold")
                                .attr("font-size", "10px")
                            ;

                            // This is for cancer type
                            var cancerTypes = histogram.append("g");
                            cancerTypes.selectAll("circle")
                                .data(histData, key)
                                .enter()
                                .append("circle")
                                .attr("fill", function(d, i) {
                                    return color(metaData.cancer_studies[d.studyId].type_of_cancer);
                                })
                                .attr("cx", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth/2; } )
                                .attr("cy", function(d, i) { return histBottom + verticalCirclePadding; })
                                .attr("r", circleTTR)
                                .attr("class", function(d, i) { return d.studyId + " annotation-type"; })
                                .style("stroke", "lightgray")
                                .style("stroke-width", "1")
                                .each(function(d, i) {
                                    var qOpts = _.extend(defaultQTipOptions, {
                                        content: metaData.type_of_cancers[metaData.cancer_studies[d.studyId].type_of_cancer]
                                    });
                                    $(this).qtip(qOpts);
                                });

                            var mutGroups = histogram.append("g");
                            // This is for mutation data availability
                            mutGroups.selectAll("text")
                                .data(histData, key)
                                .enter()
                                .append("text")
                                .attr("x", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth/2; } )
                                .attr("y", function() { return histBottom + verticalCirclePadding*2 + circleDTR/2; })
                                .text(function(d, i) {
                                    return metaData.cancer_studies[d.studyId].has_mutation_data ? "+" : "-";
                                })
                                .attr("text-anchor", "middle")
                                .attr("font-weight", "bold")
                                .attr("font-size", "10px")
                                .attr("class", function(d, i) { return d.studyId + " annotation-mut"; })
                                .each(function(d, i) {
                                    var qOpts = _.extend(defaultQTipOptions, {
                                        content: metaData.cancer_studies[d.studyId].has_mutation_data
                                            ? "Mutation data available"
                                            : "Mutation data not available"
                                    });
                                    $(this).qtip(qOpts);
                                });


                            // This is for CNA data availability
                            var cnaGroups = histogram.append("g");
                            cnaGroups.selectAll("text")
                                .data(histData, key)
                                .enter()
                                .append("text")
                                .attr("x", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth/2; } )
                                .attr("y", function() { return histBottom + verticalCirclePadding*3 + circleDTR/2; })
                                .text(function(d, i) {
                                    return metaData.cancer_studies[d.studyId].has_cna_data ? "+" : "-";
                                })
                                .attr("text-anchor", "middle")
                                .attr("font-weight", "bold")
                                .attr("font-size", "10px")
                                .attr("class", function(d, i) { return d.studyId + " annotation-cna"; })
                                .each(function(d) {
                                    var qOpts = _.extend(defaultQTipOptions, {
                                        content: metaData.cancer_studies[d.studyId].has_cna_data
                                            ? "CNA data available"
                                            : "CNA data not available"
                                    });
                                    $(this).qtip(qOpts);
                                });


                            var abbrGroups = histogram.append("g");
                            abbrGroups.selectAll("text")
                                .data(histData, key)
                                .enter()
                                .append("text")
                                .text(function(d, i) {
                                    return getStudyAbbr(d, metaData);
                                })
                                .attr("font-family", fontFamily)
                                .attr("font-size", function() { return Math.min((studyWidth * .65), 12) + "px"; })
                                .attr("x", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth*.5; })
                                .attr("y", function() { return histBottom + verticalCirclePadding*4; })
                                .attr("text-anchor", "end")
                                .attr("transform", function(d, i) {
                                    var xLoc = paddingLeft + i*studyLocIncrements + studyWidth*.5;
                                    var yLoc = histBottom + verticalCirclePadding*4;
                                    return "rotate(-60, " + xLoc + ", " + yLoc +  ")";
                                })
                                .attr("class", function(d, i) { return d.studyId + " annotation-abbr"; })
                                .each(function(d, i) {
                                    var qOpts = _.extend(defaultQTipOptions, {
                                        content: metaData.cancer_studies[d.studyId].name
                                    });
                                    $(this).qtip(qOpts);
                                })
                            ;

                            var yAxisEl = histogram.append("g")
                                .attr("class", "axis")
                                .attr("transform", "translate(" + (paddingLeft-10) + ", " + paddingTop + ")")
                                .call(yAxis);

                            // Define where the label should appear
                            var labelCorX = 15;
                            var labelCorY = paddingTop + (histBottom/2);

                            // Add axis label
                            histogram.append("g")
                                .selectAll("text")
                                .data(["Alteration frequency"])
                                .enter()
                                .append("text")
                                .text(function(d, i) { return d; })
                                .attr("font-family", fontFamily)
                                .attr("font-size", "13px")
                                .attr("x", labelCorX)
                                .attr("y", labelCorY)
                                .attr("transform", "rotate(-90, " + labelCorX + ", " + labelCorY +")")
                            ;

                            var mutLegend = { label: "Mutation", color: "green"};
                            var delLegend = { label: "Deletion", color: "blue"};
                            var ampLegend = { label: "Amplification", color: "red"};
                            var multpLegend = { label: "Multiple alterations", color: "#aaaaaa" };

                            var legendData = [];
                            switch(priority * 1) {
                                case 0:
                                    legendData.push(mutLegend);
                                    legendData.push(delLegend);
                                    legendData.push(ampLegend);
                                    legendData.push(multpLegend);
                                    break;
                                case 1:
                                    legendData.push(mutLegend);
                                    break;
                                case 2:
                                    legendData.push(delLegend);
                                    legendData.push(ampLegend);
                                    legendData.push(multpLegend);
                                    break;
                            }

                            var legendWidth = 125;
                            var numOfLegends = legendData.length;
                            var legBegPoint = (width-paddingLeft-paddingRight-(numOfLegends*legendWidth))/2;
                            // Now add the legends
                            var legend = histogram.append("g");
                            legend.selectAll("rect")
                                .data(legendData)
                                .enter()
                                .append("rect")
                                .attr('x', function(d, i) { return legBegPoint + i*legendWidth + 10; })
                                .attr('y', height-20)
                                .attr('width', 19)
                                .attr('height', 19)
                                .style('fill', function(d) { return d.color; })
                            ;
                            legend.selectAll("text")
                                .data(legendData)
                                .enter()
                                .append("text")
                                .attr('x', function(d, i) { return legBegPoint + i*legendWidth + 35; })
                                .attr('y', height-5)
                                .text(function(d, i) { return d.label; })
                                .attr("font-family", fontFamily)
                                .attr("font-size", "15px")
                            ;

                            // Give some style
                            yAxisEl.selectAll("path, line")
                                .attr("fill", "none")
                                .attr("stroke", "black")
                                .attr("shape-rendering", "crispEdges");

                            // d3 formating TODO!
                            yAxisEl.selectAll("text")
                                .attr("font-family", fontFamily)
                                .attr("font-size", "11px")
                                .each(function(d, i) {
                                    $(this).text(fixFloat($(this).text() * 100, 1) + "%" );
                                });

                            var genes = _.last(histData).genes;
                            var numOfGenes = genes.length;
                            var numOfStudies = histData.length;

                            (new CCTitleView({
                               model: {
                                   numOfStudies: numOfStudies,
                                   numOfGenes: numOfGenes,
                                   genes: genes.join(', ')
                               }
                            })).render();

                            var redrawHistogram = function() {
                                histData = filterAndSortData(histDataOrg);

                                studyLocIncrements = (width - (paddingLeft + paddingRight)) / histData.length;
                                studyWidth = studyLocIncrements * .75;
                                // Data type radius
                                circleDTR = studyWidth / 4;
                                // Tumor type radius
                                circleTTR = Math.min(studyWidth, 20) / 2;

                                var stacked = $("#histogram-show-colors").is(":checked");
                                var outX = width + 1000;

                                yScale
                                    .domain([
                                    0,
                                    Math.min(
                                        1.0,
                                        parseFloat(d3.max(histData, function (d, i) {
                                            return fixFloat(calculateFrequency(d, i, "all"), 1);
                                        })) + .05
                                    )
                                ])
                                .range([histBottom-paddingTop, 0]);

                                yAxisEl
                                    .transition()
                                    .duration(animationDuration)
                                    .call(yAxis);
                                // Give some style
                                yAxisEl.selectAll("path, line")
                                    .attr("fill", "none")
                                    .attr("stroke", "black")
                                    .attr("shape-rendering", "crispEdges");
                                yAxisEl.selectAll("text")
                                    .attr("font-family", fontFamily)
                                    .attr("font-size", "11px")
                                    .each(function(d, i) {
                                        $(this).text(fixFloat($(this).text() * 100, 1) + "%" );
                                    });

                                var obg = otherBarGroup.selectAll("rect").data(histData, key);
                                obg.exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                obg.transition()
                                    .duration(animationDuration)
                                    .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                    .attr("y", function(d, i) { return yScale(calculateFrequency(d, i, "other")) + paddingTop; })
                                    .attr("width", studyWidth)
                                    .attr("height", function(d, i) {
                                        return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other"));
                                    })
                                ;

                                var mbg = mutBarGroup.selectAll("rect").data(histData, key);
                                mbg.exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                mbg.transition()
                                    .duration(animationDuration)
                                    .attr("fill", "green")
                                    .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                    .attr("y", function(d, i) {
                                        return yScale(calculateFrequency(d, i, "mutation"))
                                            - ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other")))
                                            + paddingTop;
                                    })
                                    .attr("width", studyWidth)
                                    .attr("height", function(d, i) {
                                        return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "mutation"));

                                    })
                                ;

                                var cdbg = cnadownBarGroup.selectAll("rect").data(histData, key);
                                cdbg
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                cdbg
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("fill", "blue")
                                    .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                    .attr("y", function(d, i) {
                                        return yScale(calculateFrequency(d, i, "cnaDown"))
                                            - (
                                            ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "mutation")))
                                                + ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other")))
                                            )
                                            + paddingTop;
                                    })
                                    .attr("width", studyWidth)
                                    .attr("height", function(d, i) {
                                        return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "cnaDown"));
                                    })
                                ;

                                var cubp = cnaupBarGroup.selectAll("rect").data(histData, key);
                                cubp
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                cubp
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                    .attr("y", function(d, i) {
                                        return yScale(calculateFrequency(d, i, "cnaUp"))
                                            - (
                                            ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "mutation")))
                                                + ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "other")))
                                                + ((histBottom-paddingTop) - yScale(calculateFrequency(d, i, "cnaDown")))
                                            )
                                            + paddingTop;
                                    })
                                    .attr("width", studyWidth)
                                    .attr("height", function(d, i) {
                                        return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "cnaUp"));
                                    })
                                ;

                                var ibg = infoBarGroup.selectAll("rect").data(histData, key);
                                ibg
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                ibg
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", function(d, i) { return paddingLeft + i * studyLocIncrements; } )
                                    .attr("y", function(d, i) { return yScale(calculateFrequency(d, i, "all")) + paddingTop; })
                                    .attr("width", studyWidth)
                                    .attr("height", function(d, i) {
                                        return (histBottom-paddingTop) - yScale(calculateFrequency(d, i, "all"));
                                    })
                                    .style("opacity", stacked ? 0 : 1)
                                ;

                                var ct = cancerTypes.selectAll("circle").data(histData, key);
                                ct
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("cx", outX)
                                ;
                                ct
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("cx", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth/2; } )
                                    .attr("cy", function(d, i) { return histBottom + verticalCirclePadding; })
                                    .attr("r", circleTTR)
                                ;

                                var mg = mutGroups.selectAll("text").data(histData, key);
                                mg
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                mg
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth/2; } )
                                ;

                                var cg = cnaGroups.selectAll("text").data(histData, key);
                                cg
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                ;
                                cg
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth/2; } )
                                ;

                                var ag = abbrGroups.selectAll("text").data(histData, key);
                                ag
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .attr("x", outX)
                                    .attr("transform", function(d, i) {
                                        var xLoc = paddingLeft + i*studyLocIncrements + studyWidth*.75;
                                        var yLoc = histBottom + verticalCirclePadding*4;
                                        return "rotate(-60, " + xLoc + ", " + yLoc +  ")";
                                    })
                                ;
                                ag
                                    .transition()
                                    .duration(animationDuration)
                                    .text(function(d, i) {
                                        return getStudyAbbr(d, metaData);
                                    })
                                    .attr("font-size", function() { return Math.min((studyWidth * .65), 12) + "px"; })
                                    .attr("x", function(d, i) { return paddingLeft + i*studyLocIncrements + studyWidth*.5; })
                                    .attr("transform", function(d, i) {
                                        var xLoc = paddingLeft + i*studyLocIncrements + studyWidth*.5;
                                        var yLoc = histBottom + verticalCirclePadding*4;
                                        return "rotate(-60, " + xLoc + ", " + yLoc +  ")";
                                    })
                                ;

                                legend
                                    .transition()
                                    .duration(animationDuration)
                                    .style("opacity", stacked ? 1 : 0)
                                ;
                            }; // end of redraw

                            $("#histogram-show-colors, #histogram-sort-by, #cancerbycancer-controls input")
                                .change(function() {
                                    redrawHistogram();
                                    return true;
                               })
                            ;

                            $("#cc-select-all").click(function(e) {
                                $("#histogram-remove-notaltered").prop("checked", false);
                                e.preventDefault();
                                $("#cancerbycancer-controls input").each(function(idx, el) {
                                    $(el).prop("checked", true);
                                });
                                redrawHistogram();
                            });

                            $("#cc-select-none").click(function(e) {
                                $("#histogram-remove-notaltered").prop("checked", false);
                                e.preventDefault();
                                $("#cancerbycancer-controls input").each(function(idx, el) {
                                    $(el).prop("checked", false);
                                });
                                redrawHistogram();
                            });


                            $("#histogram-remove-notaltered").change(function() {
                                var checked = $(this).is(":checked");
                                $("#cancerbycancer-controls input").each(function(idx, el) {
                                    var altered = $(el).data("altered");

                                    if(checked && !altered) {
                                        $(el).prop("checked", false);
                                    } else if(!checked && !altered) {
                                        $(el).prop("checked", true);
                                    }
                                });

                                redrawHistogram();
                            });

                            // Let's load the mutation details as well
                            var servletParams = {
                                data_priority: priority
                            };
                            var servletName = "http://www.cbioportal.org/public-portal/crosscancermutation.json";
                            // init mutation data proxy with the data servlet config
                            var proxy = new MutationDataProxy(genes.join(" "));
                            proxy.initWithoutData(servletName, servletParams);
                            // init default mutation details view
                            var model = {
                                mutationProxy: proxy,
                                sampleArray: [],
                                diagramOpts: {
                                    showStats: true
                                },
	                            tableOpts: {
		                            columnVisibility: {
			                            // TODO "excludeIfHidden" instead?
			                            "cancer study": "visible"
		                            }
	                            }
                            };  //END HISTOGRAM


	    });
	}
	console.log('eclipse :: start loadMutationData()');
	loadMutationData(input);

}


