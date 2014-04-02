// Home screen of app
//

// GLOBAL ERROR MESSAGES
window.error_msg =
{
	ERROR_MSG_INVALID_GENE: '<p><strong>* Please enter a valid HUGO gene symbol.</strong></p>',
	ERROR_MSG_NO_CONN_SUBMIT: '<p><strong>* Error: No Internet detected. Make sure there is a connection before submitting.</strong></p>',
	ERROR_MSG_PARSING: '<p><strong>* PARSING ERROR! Please try another gene.</strong></p>'
};

window.defaults =
{	
	OFFLINE_CACHE_MUC16: '[{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085640-9085640","Position_N":"6379","Ref_N":"G","Var_N":"A","Position_A":"2059","Ref_A":"L","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"22072542","Cancer_Type":"Glioblastoma multiforme [GBM]","Source":"COSMIC","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090784-9090784","Position_N":"1235","Ref_N":"C","Var_N":"T","Position_A":"344","Ref_A":"R","Var_A":"K","Polyphen_Pred":"benign","PMID":"22072542","Cancer_Type":"Glioblastoma multiforme [GBM]","Source":"COSMIC","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088017","Position_N":"4002","Ref_N":"T","Var_N":"C","Position_A":"1266","Ref_A":"K","Var_A":"N","Polyphen_Pred":"benign","PMID":"21046495","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"Manual","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9080462","Position_N":"9773","Ref_N":"C","Var_N":"G","Position_A":"3190","Ref_A":"S","Var_A":"T","Polyphen_Pred":"-","PMID":"21046495","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"Manual","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9010665-9010665","Position_N":"39200","Ref_N":"G","Var_N":"A","Position_A":"13000","Ref_A":"S","Var_A":"F","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9012836-9012836","Position_N":"38812","Ref_N":"C","Var_N":"A","Position_A":"12871","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9021163-9021163","Position_N":"37364","Ref_N":"A","Var_N":"T","Position_A":"12388","Ref_A":"L","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"22722839","Cancer_Type":"Prostate adenocarcinoma [PRAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9027557-9027557","Position_N":"36791","Ref_N":"G","Var_N":"C","Position_A":"12197","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9028379-9028379","Position_N":"36617","Ref_N":"G","Var_N":"T","Position_A":"12139","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9038404-9038404","Position_N":"36319","Ref_N":"G","Var_N":"A","Position_A":"12040","Ref_A":"R","Var_A":"W","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9047888-9047888","Position_N":"33947","Ref_N":"G","Var_N":"A","Position_A":"11249","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9047942-9047942","Position_N":"33893","Ref_N":"C","Var_N":"A","Position_A":"11231","Ref_A":"S","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048545-9048545","Position_N":"33290","Ref_N":"G","Var_N":"C","Position_A":"11030","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048647-9048647","Position_N":"33188","Ref_N":"G","Var_N":"C","Position_A":"10996","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048809-9048809","Position_N":"33026","Ref_N":"G","Var_N":"C","Position_A":"10942","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9049298-9049298","Position_N":"32537","Ref_N":"G","Var_N":"A","Position_A":"10779","Ref_A":"S","Var_A":"L","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9056830-9056830","Position_N":"30820","Ref_N":"A","Var_N":"G","Position_A":"10207","Ref_A":"S","Var_A":"P","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9057306-9057306","Position_N":"30344","Ref_N":"G","Var_N":"A","Position_A":"10048","Ref_A":"S","Var_A":"F","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058707-9058707","Position_N":"28943","Ref_N":"G","Var_N":"T","Position_A":"9581","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058785-9058785","Position_N":"28865","Ref_N":"G","Var_N":"A","Position_A":"9555","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058926-9058926","Position_N":"28724","Ref_N":"G","Var_N":"A","Position_A":"9508","Ref_A":"T","Var_A":"M","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058986-9058986","Position_N":"28664","Ref_N":"G","Var_N":"A","Position_A":"9488","Ref_A":"T","Var_A":"I","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9060888-9060888","Position_N":"26762","Ref_N":"G","Var_N":"T","Position_A":"8854","Ref_A":"P","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9062160-9062160","Position_N":"25490","Ref_N":"G","Var_N":"C","Position_A":"8430","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22722201","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9065719-9065719","Position_N":"21931","Ref_N":"A","Var_N":"G","Position_A":"7244","Ref_A":"S","Var_A":"P","Polyphen_Pred":"probably damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9066967-9066967","Position_N":"20683","Ref_N":"T","Var_N":"G","Position_A":"6828","Ref_A":"T","Var_A":"P","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9068226-9068226","Position_N":"19424","Ref_N":"C","Var_N":"G","Position_A":"6408","Ref_A":"S","Var_A":"T","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9069010-9069010","Position_N":"18640","Ref_N":"G","Var_N":"T","Position_A":"6147","Ref_A":"P","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9071670-9071670","Position_N":"15980","Ref_N":"G","Var_N":"T","Position_A":"5260","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072277-9072277","Position_N":"15373","Ref_N":"A","Var_N":"T","Position_A":"5058","Ref_A":"S","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22975805","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072640-9072640","Position_N":"15010","Ref_N":"T","Var_N":"C","Position_A":"4937","Ref_A":"S","Var_A":"G","Polyphen_Pred":"possibly damaging","PMID":"23415222","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072835-9072835","Position_N":"14815","Ref_N":"T","Var_N":"C","Position_A":"4872","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9073435-9073435","Position_N":"14215","Ref_N":"G","Var_N":"A","Position_A":"4672","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9073806-9073806","Position_N":"13844","Ref_N":"G","Var_N":"C","Position_A":"4548","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9075177-9075177","Position_N":"12473","Ref_N":"C","Var_N":"A","Position_A":"4091","Ref_A":"G","Var_A":"V","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9075788-9075788","Position_N":"11862","Ref_N":"C","Var_N":"A","Position_A":"3886","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9076729-9076729","Position_N":"10921","Ref_N":"G","Var_N":"A","Position_A":"3573","Ref_A":"R","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083033-9083033","Position_N":"8986","Ref_N":"A","Var_N":"G","Position_A":"2928","Ref_A":"S","Var_A":"P","Polyphen_Pred":"possibly damaging","PMID":"21796119","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083248-9083248","Position_N":"8771","Ref_N":"T","Var_N":"C","Position_A":"2856","Ref_A":"E","Var_A":"G","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083342-9083342","Position_N":"8677","Ref_N":"C","Var_N":"G","Position_A":"2825","Ref_A":"E","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083470-9083470","Position_N":"8549","Ref_N":"C","Var_N":"G","Position_A":"2782","Ref_A":"R","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22158541","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083513-9083513","Position_N":"8506","Ref_N":"A","Var_N":"G","Position_A":"2768","Ref_A":"S","Var_A":"P","Polyphen_Pred":"possibly damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083578-9083578","Position_N":"8441","Ref_N":"A","Var_N":"T","Position_A":"2746","Ref_A":"V","Var_A":"E","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083587-9083587","Position_N":"8432","Ref_N":"G","Var_N":"A","Position_A":"2743","Ref_A":"S","Var_A":"L","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083660-9083660","Position_N":"8359","Ref_N":"C","Var_N":"A","Position_A":"2719","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083662-9083662","Position_N":"8357","Ref_N":"G","Var_N":"C","Position_A":"2718","Ref_A":"T","Var_A":"R","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083847-9083847","Position_N":"8172","Ref_N":"C","Var_N":"A","Position_A":"2656","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083978-9083978","Position_N":"8041","Ref_N":"C","Var_N":"T","Position_A":"2613","Ref_A":"V","Var_A":"I","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084122-9084122","Position_N":"7897","Ref_N":"T","Var_N":"C","Position_A":"2565","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084176-9084176","Position_N":"7843","Ref_N":"A","Var_N":"G","Position_A":"2547","Ref_A":"S","Var_A":"P","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084340-9084340","Position_N":"7679","Ref_N":"C","Var_N":"T","Position_A":"2492","Ref_A":"S","Var_A":"N","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084497-9084497","Position_N":"7522","Ref_N":"C","Var_N":"A","Position_A":"2440","Ref_A":"G","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084514-9084514","Position_N":"7505","Ref_N":"G","Var_N":"C","Position_A":"2434","Ref_A":"T","Var_A":"S","Polyphen_Pred":"benign","PMID":"22610119","Cancer_Type":"Prostate adenocarcinoma [PRAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084535-9084535","Position_N":"7484","Ref_N":"G","Var_N":"A","Position_A":"2427","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084542-9084542","Position_N":"7477","Ref_N":"C","Var_N":"T","Position_A":"2425","Ref_A":"A","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084571-9084571","Position_N":"7448","Ref_N":"A","Var_N":"C","Position_A":"2415","Ref_A":"V","Var_A":"G","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084582-9084582","Position_N":"7437","Ref_N":"A","Var_N":"T","Position_A":"2411","Ref_A":"D","Var_A":"E","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084646-9084646","Position_N":"7373","Ref_N":"G","Var_N":"A","Position_A":"2390","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084778-9084778","Position_N":"7241","Ref_N":"T","Var_N":"G","Position_A":"2346","Ref_A":"E","Var_A":"A","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084790-9084790","Position_N":"7229","Ref_N":"G","Var_N":"A","Position_A":"2342","Ref_A":"S","Var_A":"L","Polyphen_Pred":"possibly damaging","PMID":"22722201","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085055-9085055","Position_N":"6964","Ref_N":"G","Var_N":"A","Position_A":"2254","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085057-9085057","Position_N":"6962","Ref_N":"G","Var_N":"A","Position_A":"2253","Ref_A":"S","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085132-9085132","Position_N":"6887","Ref_N":"C","Var_N":"A","Position_A":"2228","Ref_A":"G","Var_A":"V","Polyphen_Pred":"probably damaging","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085144-9085144","Position_N":"6875","Ref_N":"G","Var_N":"C","Position_A":"2224","Ref_A":"A","Var_A":"G","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085145-9085145","Position_N":"6874","Ref_N":"C","Var_N":"T","Position_A":"2224","Ref_A":"A","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085240-9085240","Position_N":"6779","Ref_N":"A","Var_N":"C","Position_A":"2192","Ref_A":"V","Var_A":"G","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085385-9085385","Position_N":"6634","Ref_N":"C","Var_N":"A","Position_A":"2144","Ref_A":"V","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085411-9085411","Position_N":"6608","Ref_N":"G","Var_N":"T","Position_A":"2135","Ref_A":"P","Var_A":"H","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085449-9085449","Position_N":"6570","Ref_N":"G","Var_N":"T","Position_A":"2122","Ref_A":"N","Var_A":"K","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085583-9085583","Position_N":"6436","Ref_N":"A","Var_N":"C","Position_A":"2078","Ref_A":"S","Var_A":"A","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085615-9085615","Position_N":"6404","Ref_N":"G","Var_N":"A","Position_A":"2067","Ref_A":"T","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085705-9085705","Position_N":"6314","Ref_N":"G","Var_N":"A","Position_A":"2037","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085769-9085769","Position_N":"6250","Ref_N":"G","Var_N":"C","Position_A":"2016","Ref_A":"H","Var_A":"D","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085910-9085910","Position_N":"6109","Ref_N":"G","Var_N":"T","Position_A":"1969","Ref_A":"P","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086016-9086016","Position_N":"6003","Ref_N":"G","Var_N":"T","Position_A":"1933","Ref_A":"S","Var_A":"R","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086293-9086293","Position_N":"5726","Ref_N":"G","Var_N":"A","Position_A":"1841","Ref_A":"T","Var_A":"I","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086600-9086600","Position_N":"5419","Ref_N":"A","Var_N":"T","Position_A":"1739","Ref_A":"Y","Var_A":"N","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086609-9086609","Position_N":"5410","Ref_N":"C","Var_N":"A","Position_A":"1736","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086617-9086617","Position_N":"5402","Ref_N":"G","Var_N":"T","Position_A":"1733","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"possibly damaging","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086662-9086662","Position_N":"5357","Ref_N":"C","Var_N":"T","Position_A":"1718","Ref_A":"G","Var_A":"E","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086710-9086710","Position_N":"5309","Ref_N":"G","Var_N":"A","Position_A":"1702","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086714-9086714","Position_N":"5305","Ref_N":"A","Var_N":"G","Position_A":"1701","Ref_A":"S","Var_A":"P","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086722-9086722","Position_N":"5297","Ref_N":"C","Var_N":"T","Position_A":"1698","Ref_A":"G","Var_A":"E","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086728-9086728","Position_N":"5291","Ref_N":"G","Var_N":"C","Position_A":"1696","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086996-9086996","Position_N":"5023","Ref_N":"A","Var_N":"C","Position_A":"1607","Ref_A":"W","Var_A":"G","Polyphen_Pred":"benign","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087351-9087351","Position_N":"4668","Ref_N":"A","Var_N":"C","Position_A":"1488","Ref_A":"I","Var_A":"M","Polyphen_Pred":"probably damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087395-9087395","Position_N":"4624","Ref_N":"G","Var_N":"T","Position_A":"1474","Ref_A":"L","Var_A":"I","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087444-9087444","Position_N":"4575","Ref_N":"C","Var_N":"A","Position_A":"1457","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087538-9087538","Position_N":"4481","Ref_N":"G","Var_N":"C","Position_A":"1426","Ref_A":"T","Var_A":"S","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087663-9087663","Position_N":"4356","Ref_N":"C","Var_N":"A","Position_A":"1384","Ref_A":"W","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087787-9087787","Position_N":"4232","Ref_N":"G","Var_N":"C","Position_A":"1343","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088039-9088039","Position_N":"3980","Ref_N":"G","Var_N":"A","Position_A":"1259","Ref_A":"S","Var_A":"L","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088138-9088138","Position_N":"3881","Ref_N":"G","Var_N":"T","Position_A":"1226","Ref_A":"A","Var_A":"D","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088160-9088160","Position_N":"3859","Ref_N":"G","Var_N":"A","Position_A":"1219","Ref_A":"P","Var_A":"S","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088205-9088205","Position_N":"3814","Ref_N":"T","Var_N":"G","Position_A":"1204","Ref_A":"S","Var_A":"R","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088280-9088280","Position_N":"3739","Ref_N":"T","Var_N":"C","Position_A":"1179","Ref_A":"S","Var_A":"G","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088324-9088324","Position_N":"3695","Ref_N":"T","Var_N":"G","Position_A":"1164","Ref_A":"K","Var_A":"T","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088388-9088388","Position_N":"3631","Ref_N":"G","Var_N":"A","Position_A":"1143","Ref_A":"P","Var_A":"S","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088559-9088559","Position_N":"3460","Ref_N":"G","Var_N":"A","Position_A":"1086","Ref_A":"Q","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088600-9088600","Position_N":"3419","Ref_N":"G","Var_N":"A","Position_A":"1072","Ref_A":"T","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088652-9088652","Position_N":"3367","Ref_N":"T","Var_N":"G","Position_A":"1055","Ref_A":"S","Var_A":"R","Polyphen_Pred":"possibly damaging","PMID":"21796119","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088690-9088690","Position_N":"3329","Ref_N":"A","Var_N":"T","Position_A":"1042","Ref_A":"I","Var_A":"N","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088708-9088708","Position_N":"3311","Ref_N":"G","Var_N":"A","Position_A":"1036","Ref_A":"A","Var_A":"V","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088784-9088784","Position_N":"3235","Ref_N":"C","Var_N":"T","Position_A":"1011","Ref_A":"A","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088963-9088963","Position_N":"3056","Ref_N":"G","Var_N":"T","Position_A":"951","Ref_A":"T","Var_A":"N","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089101-9089101","Position_N":"2918","Ref_N":"G","Var_N":"T","Position_A":"905","Ref_A":"P","Var_A":"H","Polyphen_Pred":"probably damaging","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089305-9089305","Position_N":"2714","Ref_N":"G","Var_N":"T","Position_A":"837","Ref_A":"T","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089373-9089373","Position_N":"2646","Ref_N":"C","Var_N":"A","Position_A":"814","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089378-9089378","Position_N":"2641","Ref_N":"C","Var_N":"T","Position_A":"813","Ref_A":"A","Var_A":"T","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089398-9089398","Position_N":"2621","Ref_N":"A","Var_N":"G","Position_A":"806","Ref_A":"V","Var_A":"A","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089417-9089417","Position_N":"2602","Ref_N":"C","Var_N":"T","Position_A":"800","Ref_A":"E","Var_A":"K","Polyphen_Pred":"benign","PMID":"23415222","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089509-9089509","Position_N":"2510","Ref_N":"A","Var_N":"T","Position_A":"769","Ref_A":"V","Var_A":"D","Polyphen_Pred":"benign","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089597-9089597","Position_N":"2422","Ref_N":"T","Var_N":"C","Position_A":"740","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089652-9089652","Position_N":"2367","Ref_N":"G","Var_N":"T","Position_A":"721","Ref_A":"S","Var_A":"R","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089676-9089676","Position_N":"2343","Ref_N":"G","Var_N":"T","Position_A":"713","Ref_A":"D","Var_A":"E","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089728-9089728","Position_N":"2291","Ref_N":"A","Var_N":"T","Position_A":"696","Ref_A":"L","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089783-9089783","Position_N":"2236","Ref_N":"C","Var_N":"A","Position_A":"678","Ref_A":"V","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089788-9089788","Position_N":"2231","Ref_N":"G","Var_N":"T","Position_A":"676","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089816-9089816","Position_N":"2203","Ref_N":"C","Var_N":"A","Position_A":"667","Ref_A":"G","Var_A":"W","Polyphen_Pred":"probably damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089884-9089884","Position_N":"2135","Ref_N":"G","Var_N":"A","Position_A":"644","Ref_A":"T","Var_A":"M","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090013-9090013","Position_N":"2006","Ref_N":"T","Var_N":"C","Position_A":"601","Ref_A":"H","Var_A":"R","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090063-9090063","Position_N":"1956","Ref_N":"T","Var_N":"A","Position_A":"584","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090108-9090108","Position_N":"1911","Ref_N":"G","Var_N":"T","Position_A":"569","Ref_A":"F","Var_A":"L","Polyphen_Pred":"benign","PMID":"22722201","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090225-9090225","Position_N":"1794","Ref_N":"T","Var_N":"G","Position_A":"530","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090558-9090558","Position_N":"1461","Ref_N":"G","Var_N":"T","Position_A":"419","Ref_A":"N","Var_A":"K","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090651-9090651","Position_N":"1368","Ref_N":"T","Var_N":"A","Position_A":"388","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090741-9090741","Position_N":"1278","Ref_N":"C","Var_N":"A","Position_A":"358","Ref_A":"K","Var_A":"N","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090794-9090794","Position_N":"1225","Ref_N":"C","Var_N":"A","Position_A":"341","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090902-9090902","Position_N":"1117","Ref_N":"T","Var_N":"A","Position_A":"305","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090928-9090928","Position_N":"1091","Ref_N":"G","Var_N":"A","Position_A":"296","Ref_A":"S","Var_A":"L","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090970-9090970","Position_N":"1049","Ref_N":"G","Var_N":"A","Position_A":"282","Ref_A":"A","Var_A":"V","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090997-9090997","Position_N":"1022","Ref_N":"G","Var_N":"A","Position_A":"273","Ref_A":"A","Var_A":"V","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091031-9091031","Position_N":"988","Ref_N":"C","Var_N":"A","Position_A":"262","Ref_A":"G","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091073-9091073","Position_N":"946","Ref_N":"A","Var_N":"T","Position_A":"248","Ref_A":"S","Var_A":"T","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091259-9091259","Position_N":"760","Ref_N":"G","Var_N":"A","Position_A":"186","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091388-9091388","Position_N":"631","Ref_N":"C","Var_N":"T","Position_A":"143","Ref_A":"E","Var_A":"K","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091441-9091441","Position_N":"578","Ref_N":"C","Var_N":"A","Position_A":"125","Ref_A":"G","Var_A":"V","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091483-9091483","Position_N":"536","Ref_N":"C","Var_N":"T","Position_A":"111","Ref_A":"G","Var_A":"E","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048788-9048788","Position_N":"33047","Ref_N":"G","Var_N":"T","Position_A":"10949","Ref_A":"T","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9056982-9056982","Position_N":"30668","Ref_N":"G","Var_N":"A","Position_A":"10156","Ref_A":"T","Var_A":"I","Polyphen_Pred":"probably damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058942-9058942","Position_N":"28708","Ref_N":"C","Var_N":"T","Position_A":"9503","Ref_A":"A","Var_A":"T","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9065203-9065203","Position_N":"22447","Ref_N":"T","Var_N":"C","Position_A":"7416","Ref_A":"S","Var_A":"G","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9066874-9066874","Position_N":"20776","Ref_N":"G","Var_N":"T","Position_A":"6859","Ref_A":"P","Var_A":"T","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9068364-9068364","Position_N":"19286","Ref_N":"G","Var_N":"A","Position_A":"6362","Ref_A":"T","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072975-9072975","Position_N":"14675","Ref_N":"G","Var_N":"A","Position_A":"4825","Ref_A":"T","Var_A":"M","Polyphen_Pred":"probably damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9076728-9076728","Position_N":"10922","Ref_N":"C","Var_N":"T","Position_A":"3573","Ref_A":"R","Var_A":"H","Polyphen_Pred":"probably damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083174-9083174","Position_N":"8845","Ref_N":"G","Var_N":"A","Position_A":"2881","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083457-9083457","Position_N":"8562","Ref_N":"C","Var_N":"T","Position_A":"2786","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083751-9083751","Position_N":"8268","Ref_N":"C","Var_N":"T","Position_A":"2688","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083791-9083791","Position_N":"8228","Ref_N":"G","Var_N":"A","Position_A":"2675","Ref_A":"S","Var_A":"L","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084010-9084010","Position_N":"8009","Ref_N":"G","Var_N":"T","Position_A":"2602","Ref_A":"T","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085004-9085004","Position_N":"7015","Ref_N":"T","Var_N":"C","Position_A":"2271","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085643-9085643","Position_N":"6376","Ref_N":"A","Var_N":"G","Position_A":"2058","Ref_A":"S","Var_A":"P","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086145-9086145","Position_N":"5874","Ref_N":"G","Var_N":"C","Position_A":"1890","Ref_A":"N","Var_A":"K","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086318-9086318","Position_N":"5701","Ref_N":"G","Var_N":"A","Position_A":"1833","Ref_A":"L","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087615-9087615","Position_N":"4404","Ref_N":"T","Var_N":"A","Position_A":"1400","Ref_A":"K","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087758-9087758","Position_N":"4261","Ref_N":"G","Var_N":"A","Position_A":"1353","Ref_A":"H","Var_A":"Y","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088017-9088017","Position_N":"4002","Ref_N":"T","Var_N":"G","Position_A":"1266","Ref_A":"K","Var_A":"N","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088330-9088330","Position_N":"3689","Ref_N":"G","Var_N":"A","Position_A":"1162","Ref_A":"T","Var_A":"I","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088772-9088772","Position_N":"3247","Ref_N":"T","Var_N":"C","Position_A":"1015","Ref_A":"R","Var_A":"G","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090182-9090182","Position_N":"1837","Ref_N":"T","Var_N":"C","Position_A":"545","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090496-9090496","Position_N":"1523","Ref_N":"A","Var_N":"G","Position_A":"440","Ref_A":"L","Var_A":"P","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090784-9090784","Position_N":"1235","Ref_N":"C","Var_N":"T","Position_A":"344","Ref_A":"R","Var_A":"K","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091579-9091579","Position_N":"440","Ref_N":"A","Var_N":"G","Position_A":"79","Ref_A":"L","Var_A":"S","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"}]'
};   

// Check online connectivity
function checkInternetConn(){
	//console.log('eclipse :: checkInternetConn() networkState = ' + navigator.connection.type);
	alert('checking connection....');
	var networkState = navigator.connection.type; 
	alert('net state: ' + networkState);
	
	setTimeout(function() {
		networkState = navigator.connection.type;
		if (networkState == 0)
		{ alert('network state is false');
			return false;
		} 
	
	}, 750);
	alert('network state is true');
	
	return true;
}

function truncate(string,len,showEllipsis){
	if (string.length > len)
		if (showEllipsis == false) return string.substring(0,len);
		else return string.substring(0,len) + '...';
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
    	$('#biomuta-invalid-msg').hide();
		$("#results-msg").html('');
		//$("#biomuta-table").hide();
		$('#biomuta-header-table tbody').html('');
		$('#biomuta-table tbody').html('');

		bookmark = 0;
		var dataurl = "http://hive.biochemistry.gwu.edu/tools/biomuta/json.php?gene=";
		console.log('eclipse :: fetching ' + dataurl + querygene);
		
		// process the JSON results
		function processResults(temp, demo)
		{
		/*	biomutaresults = temp;
	    	if (biomutaresults.length == 0) {
	    		$('#biomuta-invalid-msg').show();
	    		$('#biomuta-invalid-msg').html(window.error_msg.ERROR_MSG_INVALID_GENE);
	    		$.mobile.loading("hide"); 
	    		return; 
	    	}	   
	    	
		   	temp = temp.sort(function(a, b) {
		        return (parseInt(a['Position_A'],10) > parseInt(b['Position_A'],10)) ? 1 : ((parseInt(a['Position_A'],10) < parseInt(b['Position_A'],10)) ? -1 : 0);
		    });			
			  	
			// Print out results
			$("#results-msg").html('<h2>' + biomutaresults.length + ' results found for ' + querygene + '.</h2>');

			if(biomutaresults.length > 0) { 
				$('#biomuta-header-table tbody').html(
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
			*/		
		} // end processResults()
		
		// For demo purposes, still show cached results for MUC16 if no Internet available
		alert('checking internets...');
		var online = checkInternetConn();
		alert(online);
		console.log('eclipse :: online = ' + online);
		if( !online && querygene == 'MUC16') { 			 
			console.log('eclipse :: No Internet and Gene = MUC16. Using cached results for MUC16.');
			$('#biomuta-invalid-msg').show();
			$('#biomuta-invalid-msg').html('<p><strong>Demo: No Internet connection detected. Using cached MUC16 results.</strong></p>');
			processResults(jQuery.parseJSON(window.defaults.OFFLINE_CACHE_MUC16), 'demo'); 
		}
		else if (!online) {
			$('#biomuta-invalid-msg').show();
			$('#biomuta-invalid-msg').html(window.error_msg.ERROR_MSG_NO_CONN_SUBMIT);
		}
		// retrieve results from server
		else {
			alert('trying data call');
		    $.ajax({ 
		    	type: "GET",
		    	timeout: 4000,
		    	url: dataurl + querygene,
		    	success: function(data) {
		    		console.log('eclipse:: data returned');
		    		alert('data returned!');
		    	//biomutaresults = data;
		    	//processResults(data);
					},
				error: function(data) { alert(data); }
				});
			/*.error(function(jqXHR, textStatus, errorThrown) {
	        	console.log("Error! " + textStatus);
	        	console.log("Incoming Text: ." + jqXHR.responseText + ".");
				if(!$('#biomuta-invalid-msg').is(":visible")) { $('#biomuta-invalid-msg').html('<br/>'+ window.error_msg.ERROR_MSG_PARSING); }
	        	//if(!$('#biomuta-invalid-msg').is(":visible")) { $('#biomuta-invalid-msg').html('<br/>' + window.error_msg.ERROR_MSG_INVALID_GENE); }
	        	$('#biomuta-invalid-msg').show(); 
	    	})*/; // end ajax query
   		}
   		$.mobile.loading("hide");
	});
	
	// END -- BIOMUTA
		
	console.log("eclipse :: end home()");
}


function onDeviceReady() {
	console.log('eclipse :: device is ready');
	// fire if phone is offline
	//document.addEventListener("offline", function () { alert('No Internet connection detected. MUC16 is cached.');}, false);
	
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



