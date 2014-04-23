// Home screen of app
//

// GLOBAL ERROR MESSAGES
window.error_msg =
{
	ERROR_MSG_INVALID_GENE: '<p><strong>* Please enter a valid HUGO gene symbol.</strong></p>',
	ERROR_MSG_NO_INTERNET_CONN: '<p><strong>* Error: No Internet detected. Make sure there is a connection before submitting.</strong></p>',
	ERROR_MSG_PARSING: '<p><strong>* PARSING ERROR! Please try another gene.</strong></p>'
};

window.defaults =
{	
	OFFLINE_BIOMUTA_CACHE_MUC16: '[{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085640-9085640","Position_N":"6379","Ref_N":"G","Var_N":"A","Position_A":"2059","Ref_A":"L","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"22072542","Cancer_Type":"Glioblastoma multiforme [GBM]","Source":"COSMIC","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090784-9090784","Position_N":"1235","Ref_N":"C","Var_N":"T","Position_A":"344","Ref_A":"R","Var_A":"K","Polyphen_Pred":"benign","PMID":"22072542","Cancer_Type":"Glioblastoma multiforme [GBM]","Source":"COSMIC","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088017","Position_N":"4002","Ref_N":"T","Var_N":"C","Position_A":"1266","Ref_A":"K","Var_A":"N","Polyphen_Pred":"benign","PMID":"21046495","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"Manual","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9080462","Position_N":"9773","Ref_N":"C","Var_N":"G","Position_A":"3190","Ref_A":"S","Var_A":"T","Polyphen_Pred":"-","PMID":"21046495","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"Manual","Status":"SM"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9010665-9010665","Position_N":"39200","Ref_N":"G","Var_N":"A","Position_A":"13000","Ref_A":"S","Var_A":"F","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9012836-9012836","Position_N":"38812","Ref_N":"C","Var_N":"A","Position_A":"12871","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9021163-9021163","Position_N":"37364","Ref_N":"A","Var_N":"T","Position_A":"12388","Ref_A":"L","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"22722839","Cancer_Type":"Prostate adenocarcinoma [PRAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9027557-9027557","Position_N":"36791","Ref_N":"G","Var_N":"C","Position_A":"12197","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9028379-9028379","Position_N":"36617","Ref_N":"G","Var_N":"T","Position_A":"12139","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9038404-9038404","Position_N":"36319","Ref_N":"G","Var_N":"A","Position_A":"12040","Ref_A":"R","Var_A":"W","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9047888-9047888","Position_N":"33947","Ref_N":"G","Var_N":"A","Position_A":"11249","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9047942-9047942","Position_N":"33893","Ref_N":"C","Var_N":"A","Position_A":"11231","Ref_A":"S","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048545-9048545","Position_N":"33290","Ref_N":"G","Var_N":"C","Position_A":"11030","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048647-9048647","Position_N":"33188","Ref_N":"G","Var_N":"C","Position_A":"10996","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048809-9048809","Position_N":"33026","Ref_N":"G","Var_N":"C","Position_A":"10942","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9049298-9049298","Position_N":"32537","Ref_N":"G","Var_N":"A","Position_A":"10779","Ref_A":"S","Var_A":"L","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9056830-9056830","Position_N":"30820","Ref_N":"A","Var_N":"G","Position_A":"10207","Ref_A":"S","Var_A":"P","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9057306-9057306","Position_N":"30344","Ref_N":"G","Var_N":"A","Position_A":"10048","Ref_A":"S","Var_A":"F","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058707-9058707","Position_N":"28943","Ref_N":"G","Var_N":"T","Position_A":"9581","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058785-9058785","Position_N":"28865","Ref_N":"G","Var_N":"A","Position_A":"9555","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058926-9058926","Position_N":"28724","Ref_N":"G","Var_N":"A","Position_A":"9508","Ref_A":"T","Var_A":"M","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058986-9058986","Position_N":"28664","Ref_N":"G","Var_N":"A","Position_A":"9488","Ref_A":"T","Var_A":"I","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9060888-9060888","Position_N":"26762","Ref_N":"G","Var_N":"T","Position_A":"8854","Ref_A":"P","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9062160-9062160","Position_N":"25490","Ref_N":"G","Var_N":"C","Position_A":"8430","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22722201","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9065719-9065719","Position_N":"21931","Ref_N":"A","Var_N":"G","Position_A":"7244","Ref_A":"S","Var_A":"P","Polyphen_Pred":"probably damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9066967-9066967","Position_N":"20683","Ref_N":"T","Var_N":"G","Position_A":"6828","Ref_A":"T","Var_A":"P","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9068226-9068226","Position_N":"19424","Ref_N":"C","Var_N":"G","Position_A":"6408","Ref_A":"S","Var_A":"T","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9069010-9069010","Position_N":"18640","Ref_N":"G","Var_N":"T","Position_A":"6147","Ref_A":"P","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9071670-9071670","Position_N":"15980","Ref_N":"G","Var_N":"T","Position_A":"5260","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072277-9072277","Position_N":"15373","Ref_N":"A","Var_N":"T","Position_A":"5058","Ref_A":"S","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22975805","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072640-9072640","Position_N":"15010","Ref_N":"T","Var_N":"C","Position_A":"4937","Ref_A":"S","Var_A":"G","Polyphen_Pred":"possibly damaging","PMID":"23415222","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072835-9072835","Position_N":"14815","Ref_N":"T","Var_N":"C","Position_A":"4872","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9073435-9073435","Position_N":"14215","Ref_N":"G","Var_N":"A","Position_A":"4672","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9073806-9073806","Position_N":"13844","Ref_N":"G","Var_N":"C","Position_A":"4548","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9075177-9075177","Position_N":"12473","Ref_N":"C","Var_N":"A","Position_A":"4091","Ref_A":"G","Var_A":"V","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9075788-9075788","Position_N":"11862","Ref_N":"C","Var_N":"A","Position_A":"3886","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9076729-9076729","Position_N":"10921","Ref_N":"G","Var_N":"A","Position_A":"3573","Ref_A":"R","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083033-9083033","Position_N":"8986","Ref_N":"A","Var_N":"G","Position_A":"2928","Ref_A":"S","Var_A":"P","Polyphen_Pred":"possibly damaging","PMID":"21796119","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083248-9083248","Position_N":"8771","Ref_N":"T","Var_N":"C","Position_A":"2856","Ref_A":"E","Var_A":"G","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083342-9083342","Position_N":"8677","Ref_N":"C","Var_N":"G","Position_A":"2825","Ref_A":"E","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083470-9083470","Position_N":"8549","Ref_N":"C","Var_N":"G","Position_A":"2782","Ref_A":"R","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22158541","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083513-9083513","Position_N":"8506","Ref_N":"A","Var_N":"G","Position_A":"2768","Ref_A":"S","Var_A":"P","Polyphen_Pred":"possibly damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083578-9083578","Position_N":"8441","Ref_N":"A","Var_N":"T","Position_A":"2746","Ref_A":"V","Var_A":"E","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083587-9083587","Position_N":"8432","Ref_N":"G","Var_N":"A","Position_A":"2743","Ref_A":"S","Var_A":"L","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083660-9083660","Position_N":"8359","Ref_N":"C","Var_N":"A","Position_A":"2719","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083662-9083662","Position_N":"8357","Ref_N":"G","Var_N":"C","Position_A":"2718","Ref_A":"T","Var_A":"R","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083847-9083847","Position_N":"8172","Ref_N":"C","Var_N":"A","Position_A":"2656","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083978-9083978","Position_N":"8041","Ref_N":"C","Var_N":"T","Position_A":"2613","Ref_A":"V","Var_A":"I","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084122-9084122","Position_N":"7897","Ref_N":"T","Var_N":"C","Position_A":"2565","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084176-9084176","Position_N":"7843","Ref_N":"A","Var_N":"G","Position_A":"2547","Ref_A":"S","Var_A":"P","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084340-9084340","Position_N":"7679","Ref_N":"C","Var_N":"T","Position_A":"2492","Ref_A":"S","Var_A":"N","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084497-9084497","Position_N":"7522","Ref_N":"C","Var_N":"A","Position_A":"2440","Ref_A":"G","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084514-9084514","Position_N":"7505","Ref_N":"G","Var_N":"C","Position_A":"2434","Ref_A":"T","Var_A":"S","Polyphen_Pred":"benign","PMID":"22610119","Cancer_Type":"Prostate adenocarcinoma [PRAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084535-9084535","Position_N":"7484","Ref_N":"G","Var_N":"A","Position_A":"2427","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084542-9084542","Position_N":"7477","Ref_N":"C","Var_N":"T","Position_A":"2425","Ref_A":"A","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084571-9084571","Position_N":"7448","Ref_N":"A","Var_N":"C","Position_A":"2415","Ref_A":"V","Var_A":"G","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084582-9084582","Position_N":"7437","Ref_N":"A","Var_N":"T","Position_A":"2411","Ref_A":"D","Var_A":"E","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084646-9084646","Position_N":"7373","Ref_N":"G","Var_N":"A","Position_A":"2390","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084778-9084778","Position_N":"7241","Ref_N":"T","Var_N":"G","Position_A":"2346","Ref_A":"E","Var_A":"A","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084790-9084790","Position_N":"7229","Ref_N":"G","Var_N":"A","Position_A":"2342","Ref_A":"S","Var_A":"L","Polyphen_Pred":"possibly damaging","PMID":"22722201","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085055-9085055","Position_N":"6964","Ref_N":"G","Var_N":"A","Position_A":"2254","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085057-9085057","Position_N":"6962","Ref_N":"G","Var_N":"A","Position_A":"2253","Ref_A":"S","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085132-9085132","Position_N":"6887","Ref_N":"C","Var_N":"A","Position_A":"2228","Ref_A":"G","Var_A":"V","Polyphen_Pred":"probably damaging","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085144-9085144","Position_N":"6875","Ref_N":"G","Var_N":"C","Position_A":"2224","Ref_A":"A","Var_A":"G","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085145-9085145","Position_N":"6874","Ref_N":"C","Var_N":"T","Position_A":"2224","Ref_A":"A","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085240-9085240","Position_N":"6779","Ref_N":"A","Var_N":"C","Position_A":"2192","Ref_A":"V","Var_A":"G","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085385-9085385","Position_N":"6634","Ref_N":"C","Var_N":"A","Position_A":"2144","Ref_A":"V","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085411-9085411","Position_N":"6608","Ref_N":"G","Var_N":"T","Position_A":"2135","Ref_A":"P","Var_A":"H","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085449-9085449","Position_N":"6570","Ref_N":"G","Var_N":"T","Position_A":"2122","Ref_A":"N","Var_A":"K","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085583-9085583","Position_N":"6436","Ref_N":"A","Var_N":"C","Position_A":"2078","Ref_A":"S","Var_A":"A","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085615-9085615","Position_N":"6404","Ref_N":"G","Var_N":"A","Position_A":"2067","Ref_A":"T","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085705-9085705","Position_N":"6314","Ref_N":"G","Var_N":"A","Position_A":"2037","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085769-9085769","Position_N":"6250","Ref_N":"G","Var_N":"C","Position_A":"2016","Ref_A":"H","Var_A":"D","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085910-9085910","Position_N":"6109","Ref_N":"G","Var_N":"T","Position_A":"1969","Ref_A":"P","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086016-9086016","Position_N":"6003","Ref_N":"G","Var_N":"T","Position_A":"1933","Ref_A":"S","Var_A":"R","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086293-9086293","Position_N":"5726","Ref_N":"G","Var_N":"A","Position_A":"1841","Ref_A":"T","Var_A":"I","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086600-9086600","Position_N":"5419","Ref_N":"A","Var_N":"T","Position_A":"1739","Ref_A":"Y","Var_A":"N","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086609-9086609","Position_N":"5410","Ref_N":"C","Var_N":"A","Position_A":"1736","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086617-9086617","Position_N":"5402","Ref_N":"G","Var_N":"T","Position_A":"1733","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"possibly damaging","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086662-9086662","Position_N":"5357","Ref_N":"C","Var_N":"T","Position_A":"1718","Ref_A":"G","Var_A":"E","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086710-9086710","Position_N":"5309","Ref_N":"G","Var_N":"A","Position_A":"1702","Ref_A":"S","Var_A":"F","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086714-9086714","Position_N":"5305","Ref_N":"A","Var_N":"G","Position_A":"1701","Ref_A":"S","Var_A":"P","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086722-9086722","Position_N":"5297","Ref_N":"C","Var_N":"T","Position_A":"1698","Ref_A":"G","Var_A":"E","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086728-9086728","Position_N":"5291","Ref_N":"G","Var_N":"C","Position_A":"1696","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086996-9086996","Position_N":"5023","Ref_N":"A","Var_N":"C","Position_A":"1607","Ref_A":"W","Var_A":"G","Polyphen_Pred":"benign","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087351-9087351","Position_N":"4668","Ref_N":"A","Var_N":"C","Position_A":"1488","Ref_A":"I","Var_A":"M","Polyphen_Pred":"probably damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087395-9087395","Position_N":"4624","Ref_N":"G","Var_N":"T","Position_A":"1474","Ref_A":"L","Var_A":"I","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087444-9087444","Position_N":"4575","Ref_N":"C","Var_N":"A","Position_A":"1457","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087538-9087538","Position_N":"4481","Ref_N":"G","Var_N":"C","Position_A":"1426","Ref_A":"T","Var_A":"S","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087663-9087663","Position_N":"4356","Ref_N":"C","Var_N":"A","Position_A":"1384","Ref_A":"W","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087787-9087787","Position_N":"4232","Ref_N":"G","Var_N":"C","Position_A":"1343","Ref_A":"S","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088039-9088039","Position_N":"3980","Ref_N":"G","Var_N":"A","Position_A":"1259","Ref_A":"S","Var_A":"L","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088138-9088138","Position_N":"3881","Ref_N":"G","Var_N":"T","Position_A":"1226","Ref_A":"A","Var_A":"D","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088160-9088160","Position_N":"3859","Ref_N":"G","Var_N":"A","Position_A":"1219","Ref_A":"P","Var_A":"S","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088205-9088205","Position_N":"3814","Ref_N":"T","Var_N":"G","Position_A":"1204","Ref_A":"S","Var_A":"R","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088280-9088280","Position_N":"3739","Ref_N":"T","Var_N":"C","Position_A":"1179","Ref_A":"S","Var_A":"G","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088324-9088324","Position_N":"3695","Ref_N":"T","Var_N":"G","Position_A":"1164","Ref_A":"K","Var_A":"T","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088388-9088388","Position_N":"3631","Ref_N":"G","Var_N":"A","Position_A":"1143","Ref_A":"P","Var_A":"S","Polyphen_Pred":"possibly damaging","PMID":"22622578","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088559-9088559","Position_N":"3460","Ref_N":"G","Var_N":"A","Position_A":"1086","Ref_A":"Q","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088600-9088600","Position_N":"3419","Ref_N":"G","Var_N":"A","Position_A":"1072","Ref_A":"T","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088652-9088652","Position_N":"3367","Ref_N":"T","Var_N":"G","Position_A":"1055","Ref_A":"S","Var_A":"R","Polyphen_Pred":"possibly damaging","PMID":"21796119","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088690-9088690","Position_N":"3329","Ref_N":"A","Var_N":"T","Position_A":"1042","Ref_A":"I","Var_A":"N","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088708-9088708","Position_N":"3311","Ref_N":"G","Var_N":"A","Position_A":"1036","Ref_A":"A","Var_A":"V","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088784-9088784","Position_N":"3235","Ref_N":"C","Var_N":"T","Position_A":"1011","Ref_A":"A","Var_A":"T","Polyphen_Pred":"possibly damaging","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088963-9088963","Position_N":"3056","Ref_N":"G","Var_N":"T","Position_A":"951","Ref_A":"T","Var_A":"N","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089101-9089101","Position_N":"2918","Ref_N":"G","Var_N":"T","Position_A":"905","Ref_A":"P","Var_A":"H","Polyphen_Pred":"probably damaging","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089305-9089305","Position_N":"2714","Ref_N":"G","Var_N":"T","Position_A":"837","Ref_A":"T","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089373-9089373","Position_N":"2646","Ref_N":"C","Var_N":"A","Position_A":"814","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089378-9089378","Position_N":"2641","Ref_N":"C","Var_N":"T","Position_A":"813","Ref_A":"A","Var_A":"T","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089398-9089398","Position_N":"2621","Ref_N":"A","Var_N":"G","Position_A":"806","Ref_A":"V","Var_A":"A","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089417-9089417","Position_N":"2602","Ref_N":"C","Var_N":"T","Position_A":"800","Ref_A":"E","Var_A":"K","Polyphen_Pred":"benign","PMID":"23415222","Cancer_Type":"Lymphoid Neoplasm Diffuse Large B-cell Lymphom [DLBC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089509-9089509","Position_N":"2510","Ref_N":"A","Var_N":"T","Position_A":"769","Ref_A":"V","Var_A":"D","Polyphen_Pred":"benign","PMID":"21720365","Cancer_Type":"Ovarian serous cystadenocarcinoma [OV]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089597-9089597","Position_N":"2422","Ref_N":"T","Var_N":"C","Position_A":"740","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089652-9089652","Position_N":"2367","Ref_N":"G","Var_N":"T","Position_A":"721","Ref_A":"S","Var_A":"R","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089676-9089676","Position_N":"2343","Ref_N":"G","Var_N":"T","Position_A":"713","Ref_A":"D","Var_A":"E","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089728-9089728","Position_N":"2291","Ref_N":"A","Var_N":"T","Position_A":"696","Ref_A":"L","Var_A":"Q","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089783-9089783","Position_N":"2236","Ref_N":"C","Var_N":"A","Position_A":"678","Ref_A":"V","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089788-9089788","Position_N":"2231","Ref_N":"G","Var_N":"T","Position_A":"676","Ref_A":"S","Var_A":"Y","Polyphen_Pred":"probably damaging","PMID":"22810696","Cancer_Type":"Rectum adenocarcinoma [READ]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089816-9089816","Position_N":"2203","Ref_N":"C","Var_N":"A","Position_A":"667","Ref_A":"G","Var_A":"W","Polyphen_Pred":"probably damaging","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9089884-9089884","Position_N":"2135","Ref_N":"G","Var_N":"A","Position_A":"644","Ref_A":"T","Var_A":"M","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090013-9090013","Position_N":"2006","Ref_N":"T","Var_N":"C","Position_A":"601","Ref_A":"H","Var_A":"R","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090063-9090063","Position_N":"1956","Ref_N":"T","Var_N":"A","Position_A":"584","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22941189","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090108-9090108","Position_N":"1911","Ref_N":"G","Var_N":"T","Position_A":"569","Ref_A":"F","Var_A":"L","Polyphen_Pred":"benign","PMID":"22722201","Cancer_Type":"Unknown Cancer Type [OTHERS]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090225-9090225","Position_N":"1794","Ref_N":"T","Var_N":"G","Position_A":"530","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090558-9090558","Position_N":"1461","Ref_N":"G","Var_N":"T","Position_A":"419","Ref_A":"N","Var_A":"K","Polyphen_Pred":"benign","PMID":"21798893","Cancer_Type":"Head and Neck squamous cell carcinoma [HNSC]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090651-9090651","Position_N":"1368","Ref_N":"T","Var_N":"A","Position_A":"388","Ref_A":"E","Var_A":"D","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090741-9090741","Position_N":"1278","Ref_N":"C","Var_N":"A","Position_A":"358","Ref_A":"K","Var_A":"N","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090794-9090794","Position_N":"1225","Ref_N":"C","Var_N":"A","Position_A":"341","Ref_A":"E","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090902-9090902","Position_N":"1117","Ref_N":"T","Var_N":"A","Position_A":"305","Ref_A":"S","Var_A":"C","Polyphen_Pred":"probably damaging","PMID":"23525077","Cancer_Type":"Esophageal carcinoma [ESCA]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090928-9090928","Position_N":"1091","Ref_N":"G","Var_N":"A","Position_A":"296","Ref_A":"S","Var_A":"L","Polyphen_Pred":"possibly damaging","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090970-9090970","Position_N":"1049","Ref_N":"G","Var_N":"A","Position_A":"282","Ref_A":"A","Var_A":"V","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090997-9090997","Position_N":"1022","Ref_N":"G","Var_N":"A","Position_A":"273","Ref_A":"A","Var_A":"V","Polyphen_Pred":"benign","PMID":"22770943","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091031-9091031","Position_N":"988","Ref_N":"C","Var_N":"A","Position_A":"262","Ref_A":"G","Var_A":"*","Polyphen_Pred":"-","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091073-9091073","Position_N":"946","Ref_N":"A","Var_N":"T","Position_A":"248","Ref_A":"S","Var_A":"T","Polyphen_Pred":"benign","PMID":"22810696","Cancer_Type":"Colon adenocarcinoma [COAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091259-9091259","Position_N":"760","Ref_N":"G","Var_N":"A","Position_A":"186","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091388-9091388","Position_N":"631","Ref_N":"C","Var_N":"T","Position_A":"143","Ref_A":"E","Var_A":"K","Polyphen_Pred":"benign","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091441-9091441","Position_N":"578","Ref_N":"C","Var_N":"A","Position_A":"125","Ref_A":"G","Var_A":"V","Polyphen_Pred":"benign","PMID":"22980975","Cancer_Type":"Lung adenocarcinoma [LUAD]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091483-9091483","Position_N":"536","Ref_N":"C","Var_N":"T","Position_A":"111","Ref_A":"G","Var_A":"E","Polyphen_Pred":"probably damaging","PMID":"22622578","Cancer_Type":"Skin Cutaneous Melanoma [SKCM]","Source":"COSMIC","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9048788-9048788","Position_N":"33047","Ref_N":"G","Var_N":"T","Position_A":"10949","Ref_A":"T","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9056982-9056982","Position_N":"30668","Ref_N":"G","Var_N":"A","Position_A":"10156","Ref_A":"T","Var_A":"I","Polyphen_Pred":"probably damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9058942-9058942","Position_N":"28708","Ref_N":"C","Var_N":"T","Position_A":"9503","Ref_A":"A","Var_A":"T","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9065203-9065203","Position_N":"22447","Ref_N":"T","Var_N":"C","Position_A":"7416","Ref_A":"S","Var_A":"G","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9066874-9066874","Position_N":"20776","Ref_N":"G","Var_N":"T","Position_A":"6859","Ref_A":"P","Var_A":"T","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9068364-9068364","Position_N":"19286","Ref_N":"G","Var_N":"A","Position_A":"6362","Ref_A":"T","Var_A":"I","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9072975-9072975","Position_N":"14675","Ref_N":"G","Var_N":"A","Position_A":"4825","Ref_A":"T","Var_A":"M","Polyphen_Pred":"probably damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9076728-9076728","Position_N":"10922","Ref_N":"C","Var_N":"T","Position_A":"3573","Ref_A":"R","Var_A":"H","Polyphen_Pred":"probably damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083174-9083174","Position_N":"8845","Ref_N":"G","Var_N":"A","Position_A":"2881","Ref_A":"P","Var_A":"S","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083457-9083457","Position_N":"8562","Ref_N":"C","Var_N":"T","Position_A":"2786","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083751-9083751","Position_N":"8268","Ref_N":"C","Var_N":"T","Position_A":"2688","Ref_A":"M","Var_A":"I","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9083791-9083791","Position_N":"8228","Ref_N":"G","Var_N":"A","Position_A":"2675","Ref_A":"S","Var_A":"L","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9084010-9084010","Position_N":"8009","Ref_N":"G","Var_N":"T","Position_A":"2602","Ref_A":"T","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085004-9085004","Position_N":"7015","Ref_N":"T","Var_N":"C","Position_A":"2271","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9085643-9085643","Position_N":"6376","Ref_N":"A","Var_N":"G","Position_A":"2058","Ref_A":"S","Var_A":"P","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086145-9086145","Position_N":"5874","Ref_N":"G","Var_N":"C","Position_A":"1890","Ref_A":"N","Var_A":"K","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9086318-9086318","Position_N":"5701","Ref_N":"G","Var_N":"A","Position_A":"1833","Ref_A":"L","Var_A":"F","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087615-9087615","Position_N":"4404","Ref_N":"T","Var_N":"A","Position_A":"1400","Ref_A":"K","Var_A":"N","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9087758-9087758","Position_N":"4261","Ref_N":"G","Var_N":"A","Position_A":"1353","Ref_A":"H","Var_A":"Y","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088017-9088017","Position_N":"4002","Ref_N":"T","Var_N":"G","Position_A":"1266","Ref_A":"K","Var_A":"N","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088330-9088330","Position_N":"3689","Ref_N":"G","Var_N":"A","Position_A":"1162","Ref_A":"T","Var_A":"I","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9088772-9088772","Position_N":"3247","Ref_N":"T","Var_N":"C","Position_A":"1015","Ref_A":"R","Var_A":"G","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090182-9090182","Position_N":"1837","Ref_N":"T","Var_N":"C","Position_A":"545","Ref_A":"T","Var_A":"A","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090496-9090496","Position_N":"1523","Ref_N":"A","Var_N":"G","Position_A":"440","Ref_A":"L","Var_A":"P","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9090784-9090784","Position_N":"1235","Ref_N":"C","Var_N":"T","Position_A":"344","Ref_A":"R","Var_A":"K","Polyphen_Pred":"benign","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"},{"UniProt AC":"Q8WXI7","UniProt ID ":"MUC16_HUMAN","Gene_Name ":"MUC16","Accession":"NM_024690.2","Genome_Position":"chr19:9091579-9091579","Position_N":"440","Ref_N":"A","Var_N":"G","Position_A":"79","Ref_A":"L","Var_A":"S","Polyphen_Pred":"possibly damaging","PMID":"24467687","Cancer_Type":"Breast invasive carcinoma [BRCA]","Source":"CSR-TCGA","Status":"LG"}]',
	OFFLINE_BIOEXPRESS_CACHE_MUC16: '[{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"6.65386593493499","p_value":"0.000277564233299667","Significant":"yes","regulated":"Up","Cancer_type":"UCEC","Sample_ID":"TCGA-BK-A0CB","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"60.0","Freq_Down_per":"40.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"5.91806580960425","p_value":"7.2568253289927e-06","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-49-6745","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-10.1307247371686","p_value":"0.000321378471283665","Significant":"yes","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6934","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"Inf","p_value":"8.64871733551172e-05","Significant":"yes","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A20R","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.5665721294713","p_value":"5.55468261914417e-05","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-44-6777","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"6.81916653193201","p_value":"9.82781792545247e-06","Significant":"yes","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6956","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-6.03646417991564","p_value":"0.000597153297370895","Significant":"yes","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7434","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-8.69538332836314","p_value":"2.70686999831097e-06","Significant":"yes","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7424","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"4.76783909791863","p_value":"5.3848775050467e-05","Significant":"yes","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7250","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-5.08930384141499","p_value":"0.000115984349950192","Significant":"yes","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7437","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.27102436713133","p_value":"0.000843682442969583","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6985","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"10.2321043711595","p_value":"3.34071163498843e-09","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-49-6743","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-5.67321717556852","p_value":"9.4489336314989e-05","Significant":"yes","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-44-6776","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"11.569636425581","p_value":"6.9885847258297e-08","Significant":"yes","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CW-6087","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.58320027717026","p_value":"1.10017024291509e-06","Significant":"yes","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-44-6148","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"10.771249244497","p_value":"2.97800079013809e-07","Significant":"yes","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-CU-A0YR","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"6.0394130053222","p_value":"1.02611598696095e-06","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-49-6742","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-7.03196722433757","p_value":"7.04093234556505e-06","Significant":"yes","regulated":"Down","Cancer_type":"BRCA","Sample_ID":"TCGA-E9-A1N5","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"33.3333333333","Freq_Down_per":"66.6666666667"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"7.68299079924119","p_value":"1.84245685908254e-09","Significant":"yes","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7242","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"7.31744114720866","p_value":"5.84302131057142e-07","Significant":"yes","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A20U","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"6.48013640564321","p_value":"1.81750181264334e-07","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-44-6147","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"6.16982390631527","p_value":"2.64705178739278e-07","Significant":"yes","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6970","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"5.1492413712674","p_value":"3.31573088864918e-05","Significant":"yes","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5472","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"Inf","p_value":"5.23794004583601e-05","Significant":"yes","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6961","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.481926087975217","p_value":"0.907276751228518","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CZ-5984","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.19117288056138","p_value":"0.56577615990054","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6936","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.79663824249429","p_value":"0.0248448865169881","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6982","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.94867192596036","p_value":"0.608776043811504","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5711","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.4330199146363","p_value":"0.496797218010445","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7252","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.877362455750479","p_value":"1","Significant":"no","regulated":"Up","Cancer_type":"LIHC","Sample_ID":"TCGA-DD-A119","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"80.0","Freq_Down_per":"20.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.13543866342116","p_value":"1","Significant":"no","regulated":"Up","Cancer_type":"LIHC","Sample_ID":"TCGA-BC-A10Q","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"80.0","Freq_Down_per":"20.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"5.46940480675663","p_value":"0.0395527975136673","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-90-6837","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.964823417698515","p_value":"0.418756498189583","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7177","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.39269789756462","p_value":"0.193662204924751","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7255","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.402586768871734","p_value":"0.756826072942936","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6935","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.70889108386185","p_value":"0.041270475669555","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7423","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-4.0893442248142","p_value":"0.00648347893018359","Significant":"no","regulated":"Down","Cancer_type":"UCEC","Sample_ID":"TCGA-AX-A1CI","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"60.0","Freq_Down_per":"40.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.65303340212215","p_value":"0.454057280016756","Significant":"no","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A2LB","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.6577310668849","p_value":"0.694767725574695","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B8-5549","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.73470112475956","p_value":"0.0592239688113909","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-34-7107","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.2327563269854","p_value":"0.386475512445991","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-33-6737","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.41368478601971","p_value":"0.687328739574449","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CZ-5982","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.02905399135613","p_value":"0.471105359656866","Significant":"no","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A2LA","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.82019616801246","p_value":"0.431827227827741","Significant":"no","regulated":"Up","Cancer_type":"LIHC","Sample_ID":"TCGA-BC-A10R","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"80.0","Freq_Down_per":"20.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"Inf","p_value":"0.155796606175693","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CZ-5985","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.457709028347525","p_value":"0.711243656837132","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5489","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.415480342864805","p_value":"0.733332237994281","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-50-5935","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.901711838225831","p_value":"1","Significant":"no","regulated":"Up","Cancer_type":"LIHC","Sample_ID":"TCGA-DD-A1EC","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"80.0","Freq_Down_per":"20.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.50469379339009","p_value":"0.210236725926331","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5483","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.48182363335866","p_value":"0.731497272445343","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CZ-5988","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-Inf","p_value":"0.317764449482113","Significant":"no","regulated":"Down","Cancer_type":"KIRC","Sample_ID":"TCGA-CW-5591","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"4.06289267257997","p_value":"0.0121348360828977","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-44-5645","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.1633013619676","p_value":"0.481909103797453","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5471","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"Inf","p_value":"0.857866819697315","Significant":"no","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A20N","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.16042636911037","p_value":"0.824862853571546","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CZ-5987","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.43916824644211","p_value":"0.796553434942909","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7103","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.78654603268306","p_value":"0.154138447662231","Significant":"no","regulated":"Up","Cancer_type":"BRCA","Sample_ID":"TCGA-E9-A1NF","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"33.3333333333","Freq_Down_per":"66.6666666667"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.90773115256594","p_value":"0.0850782720830651","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5482","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"4.85520819197621","p_value":"0.157375742646163","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CJ-5677","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.95809111975736","p_value":"0.623270036751629","Significant":"no","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A20Q","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.872872686963364","p_value":"0.924951742673416","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CZ-5986","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.68252841135526","p_value":"0.129987806265745","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-43-6771","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.846967475807699","p_value":"0.520633351508892","Significant":"no","regulated":"Up","Cancer_type":"UCEC","Sample_ID":"TCGA-AX-A1CF","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"60.0","Freq_Down_per":"40.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.23728385291587","p_value":"0.600296415654521","Significant":"no","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6969","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"5.54016454283185","p_value":"0.0435027713748453","Significant":"no","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-CU-A0YN","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.0227319860957563","p_value":"1","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B2-5636","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.65886235338879","p_value":"0.408480166569818","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7245","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.08159935843657","p_value":"0.446056707686837","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CW-6090","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.18279830084117","p_value":"0.202083729614152","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7183","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.40152265017815","p_value":"0.088838191127222","Significant":"no","regulated":"Down","Cancer_type":"BLCA","Sample_ID":"TCGA-GD-A2C5","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.24191822450869","p_value":"0.346740958446849","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CJ-6030","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-4.81456893145834","p_value":"0.00139092449593994","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6962","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.10895667344943","p_value":"0.547259433091123","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5691","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.01886806663123","p_value":"0.193416946573234","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5712","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.48362414604809","p_value":"0.666734851114488","Significant":"no","regulated":"Down","Cancer_type":"KIRC","Sample_ID":"TCGA-CJ-5689","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.16262761293341","p_value":"0.32688665270564","Significant":"no","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-91-6836","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.24026120061584","p_value":"0.862822526491471","Significant":"no","regulated":"Down","Cancer_type":"LIHC","Sample_ID":"TCGA-DD-A1EH","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"80.0","Freq_Down_per":"20.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.586908676291541","p_value":"0.682464568490855","Significant":"no","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-49-4512","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.979985995394797","p_value":"0.635030539328412","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7416","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-5.06971602686173","p_value":"0.00138323558486107","Significant":"no","regulated":"Down","Cancer_type":"BRCA","Sample_ID":"TCGA-BH-A203","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"33.3333333333","Freq_Down_per":"66.6666666667"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.35189996643289","p_value":"0.100279682997969","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7238","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.217193917078653","p_value":"0.914459057554055","Significant":"no","regulated":"Down","Cancer_type":"BLCA","Sample_ID":"TCGA-BT-A20W","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.90597078640957","p_value":"0.152571030249976","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-43-6143","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.62056576325351","p_value":"0.519767309149346","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5690","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.0797222245318781","p_value":"0.968408860648313","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-44-6778","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.8447570400728","p_value":"0.466301181187627","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5705","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.78005088158849","p_value":"0.0127369456819427","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7178","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.69537267947723","p_value":"0.0887124948279848","Significant":"no","regulated":"Down","Cancer_type":"BRCA","Sample_ID":"TCGA-E9-A1R7","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"33.3333333333","Freq_Down_per":"66.6666666667"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.239472687317935","p_value":"0.767256283452804","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7101","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.28627090996158","p_value":"0.30026710832524","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7235","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.37766516501557","p_value":"0.0661293080049937","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6971","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.888042275245786","p_value":"0.701441475443465","Significant":"no","regulated":"Down","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5696","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.893085726686402","p_value":"0.540003446679253","Significant":"no","regulated":"Up","Cancer_type":"BRCA","Sample_ID":"TCGA-BH-A1FJ","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"33.3333333333","Freq_Down_per":"66.6666666667"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.65817014247632","p_value":"0.0637980125076761","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-91-6835","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.86056779104244","p_value":"0.409955429187064","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7091","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.39228122184177","p_value":"0.548837608048489","Significant":"no","regulated":"Down","Cancer_type":"KIRC","Sample_ID":"TCGA-B8-5552","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.94495159709906","p_value":"0.286759629475765","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7432","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.73935100516729","p_value":"0.397000590808145","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CW-6088","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.769099764513923","p_value":"0.723065952023349","Significant":"no","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-44-6146","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.605256970037346","p_value":"0.744281902467988","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-22-4593","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.193953275293148","p_value":"0.949656678055376","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-50-5932","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"Inf","p_value":"0.017153446122441","Significant":"no","regulated":"Up","Cancer_type":"BLCA","Sample_ID":"TCGA-BL-A13J","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"81.8181818182","Freq_Down_per":"18.1818181818"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.74438290962428","p_value":"0.10937170908447","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-43-6647","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.8471751038926","p_value":"0.42867235492582","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-4700","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.498297794439957","p_value":"0.692893945936194","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7261","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"Inf","p_value":"0.00604047051815244","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-B0-5706","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.09808158460063","p_value":"0.0889010213384532","Significant":"no","regulated":"Down","Cancer_type":"BRCA","Sample_ID":"TCGA-E9-A1N9","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"33.3333333333","Freq_Down_per":"66.6666666667"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-0.850126822519846","p_value":"0.462189880004788","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-43-6773","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.55245386379718","p_value":"0.555612603509621","Significant":"no","regulated":"Up","Cancer_type":"KIRC","Sample_ID":"TCGA-CW-5580","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"84.0","Freq_Down_per":"16.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"8.05511182052193","p_value":"0.0021865237714607","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-50-5931","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"4.90442722980364","p_value":"0.105721294279408","Significant":"no","regulated":"Up","Cancer_type":"UCEC","Sample_ID":"TCGA-BK-A13C","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"60.0","Freq_Down_per":"40.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.76288795378302","p_value":"0.0390145059703714","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6933","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"3.35382700025615","p_value":"0.0589557710521104","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5478","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-4.44434652131886","p_value":"0.00296833509498169","Significant":"no","regulated":"Down","Cancer_type":"LUAD","Sample_ID":"TCGA-91-6829","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.05641415704433","p_value":"0.49505066979995","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-6960","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"0.699092061123416","p_value":"0.673551593614671","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7406","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"1.4209409111819","p_value":"0.397343105855178","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6984","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.00004105716016","p_value":"0.140788621183315","Significant":"no","regulated":"Down","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7097","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-1.43772170849701","p_value":"0.353200466131521","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-60-2709","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-2.1256138862833","p_value":"0.149662788633747","Significant":"no","regulated":"Down","Cancer_type":"UCEC","Sample_ID":"TCGA-AX-A1CK","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"60.0","Freq_Down_per":"40.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.74639251571725","p_value":"0.0209512783486035","Significant":"no","regulated":"Up","Cancer_type":"HNSC","Sample_ID":"TCGA-CV-7438","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"41.935483871","Freq_Down_per":"58.064516129"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"2.06732237726999","p_value":"0.267324955903181","Significant":"no","regulated":"Up","Cancer_type":"LUAD","Sample_ID":"TCGA-55-6968","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"72.0","Freq_Down_per":"28.0"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"-3.03728637830348","p_value":"0.134303606226573","Significant":"no","regulated":"Down","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5481","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"},{"UniProtKB_AC":"B5ME49","RefSeq ":"NP_078966.2","Gene ":"MUC16","log2FoldChange":"4.61646495530532","p_value":"0.0694233855471753","Significant":"no","regulated":"Up","Cancer_type":"LUSC","Sample_ID":"TCGA-22-5491","Data_Source":"TCGA-RNAseq","PMID":"-","Freq_up_per":"47.0588235294","Freq_Down_per":"52.9411764706"}]',
	ONLINE: true,
	BIOMUTA_DATA_URL: "https://hive.biochemistry.gwu.edu/tools/biomuta/json.php?gene=",
	BIOEXPRESS_DATA_URL: "https://hive.biochemistry.gwu.edu/tools/bioexpress/json.php?gene=",
	RESULTS_PAGING_SIZE: 50
};   

// Check online connectivity
function checkConnection() {
    return navigator.connection.type == Connection.NONE ? false : true;
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
	var numsymbol = '-';
	
	switch(pred.toLowerCase()){
		case 'benign': numsymbol = '1'; colorcode = 'green'; break;
		case 'possibly damaging': numsymbol = '2'; colorcode = 'yellow'; break;
		case 'probably damaging': numsymbol = '3'; colorcode = 'red'; break;
		case 'unknown': numsymbol = 'unk'; colorcode = 'grey'; break;
		default: return '<span style="margin-left: 3px;">-</span>';
	}
	
	var colorsymbol = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect fill="' + colorcode + '" width="100%" height="100%" stroke="blue" fill-opacity="0.5" stroke-opacity="0.8"/></svg>';
	return mode == 'colors' ? colorsymbol : numsymbol;
}

	
// Load specific reusable variables and elements for each page
function loadPageElements(pageid, pageelem, url, sort_element, header_key1, header_key2, graph_type) {
	return {
		id: pageid,
		dataurl: url,
		sort_elem: sort_element,
		result_header_key1: header_key1,
		result_header_key2: header_key2,
		default_graph: graph_type,
		
		invalid_msgs: $(pageid + ' .invalid-msgs'),
		input_field: $(pageid + ' .queryInputField'),
		submit_btn: $(pageid + ' .btn-submit'),
		results_area: $(pageid + ' .results-container'),
		results_msgs: $(pageid + ' .results-msgs'),
		results_header: $(pageid + ' .header-table'),
		results_header_tbody: $(pageid + ' .header-table tbody'),
		results_table: $(pageid + ' .results-table'),
		results_table_tbody: $(pageid + ' .results-table tbody'),
		loadmore_btn: $(pageid + ' .btn-loadmore'),
		debug_area: $(pageid + ' .debug-area')
	};
}


// Initialize BioMuta page
function biomuta() {
	//console.log('Initializing: ' + $.mobile.activePage.attr('id'));

	// ********** Page Variables
	// load specific reusable variables and elements for this page
	var querygene;
	var results;
	var pagediv = '#biomuta'; 
	var sortkey = 'Position_A';
	var headerkey1 = { name: 'UniProt', jsonkey: 'UniProt AC' };
	var headerkey2 = { name: 'RefSeq', jsonkey: 'RefSeq AC' };
	var page = loadPageElements(pagediv, $(pagediv), window.defaults.BIOMUTA_DATA_URL, sortkey, headerkey1.jsonkey, headerkey2.jsonkey, 0);


	
	// ********** Page functions

	(page.results_table).freezeHeader();
	
	// Fetch the data and pass to appropriate window
	function fetchData() {
		// For demo purposes, still show cached results for MUC16 if no Internet available
		var online = checkConnection();
		if( online == false && querygene == 'MUC16') { 			 
			console.log('eclipse :: No Internet and Gene = MUC16. Using cached results for MUC16.');
			page.invalid_msgs.show();
			page.invalid_msgs.html('<p style="color: blue;"><strong>DEMO Mode: No Internet detected. Displaying cached results.</strong></p>');
			results = jQuery.parseJSON(window.defaults.OFFLINE_BIOMUTA_CACHE_MUC16);
			processData(); 
		}
		else if (online == false) {
			page.invalid_msgs.show();
			page.invalid_msgs.html(window.error_msg.ERROR_MSG_NO_INTERNET_CONN);
			$.mobile.loading("hide");
		}
		// retrieve results from server
		else {
		    $.ajax({ 
		    	type: "GET",
		    	timeout: 6000,
		    	dataType: "json",
		    	url: page.dataurl + querygene,
		    	success: function(data) {
		    		console.log('eclipse:: data returned');
		    		results = data;
		    		processData();
					},
				error: function (xhr, ajaxOptions, thrownError) {
					console.log('eclipse :: data error: ' + data);
					page.invalid_msgs.show();
					page.invalid_msgs.html(window.error_msg.ERROR_MSG_PARSING);
					$.mobile.loading("hide");
					}
			});
		}
	}

	// Parse the results and output to the appropriate page
	function processData() {
		console.log('eclipse :: ' + results.length + ' results returned for ' + querygene);
		if (results.length == 0) {
			page.invalid_msgs.html(window.error_msg.ERROR_MSG_INVALID_GENE);
			page.invalid_msgs.show();
		}
			   
		if(results.length > 0) { 	
			// sort the results
		   	var temp = results.sort(function(a, b) {
		        return (parseInt(a[page.sort_elem],10) > parseInt(b[page.sort_elem],10)) ? 1 : ((parseInt(a[page.sort_elem],10) < parseInt(b[page.sort_elem],10)) ? -1 : 0);
		    });	
			results = temp;

			page.results_msgs.html('<h2>' + results.length + ' results found for ' + querygene + '.</h2>');
			page.results_header_tbody.html(
			 	'<tr><td><b>' + headerkey1.name + ':<b/></td><td>' + results[0][headerkey1.jsonkey] + '</td>\
			 	     <td><b>' + headerkey2.name + ':</b></td><td>' + results[0][headerkey1.jsonkey] + '</td></tr>'
			);
			displayResults();
		};
	}	
	
	// Display the results to the user -- for Bioexpress
	function displayResults() {
		generateBiomutaGraph(1);
		
		var paging = window.defaults.RESULTS_PAGING_SIZE;
		var bookmark = page.results_table_tbody.find('tr').length;
		
		// Load a few results at a time based on 'paging' variable
		for(var i = bookmark; i < bookmark+paging && i < results.length; i++) { 
			// Text manipulations to fit data into table
			var pmid = results[i]['PMID'].split(";")[0];// AMIR
			var pmidlink = 'http://www.ncbi.nlm.nih.gov/pubmed/?term='+ pmid;
			var polyphen   = polyphenConvert(results[i]['Polyphen_Pred'],'colors');
			var sourceType = truncate(results[i]['Source'],8,true);
			var cancerType = results[i]['Cancer_Type'].match(/\[[A-Za-z0-9]+\]/)[0].replace('[', '').replace(']', '');
			
			// print out table row
			page.results_table_tbody.append('<tr> \
				<td><a href="#biomuta-detail" >' + results[i]['Position_A'] + '</a></td> \
				<td>' + results[i]['Ref_A'] + '</td> \
				<td>' + results[i]['Var_A'] + '</td> \
				<td>' + polyphen + '</td> \
				<td>' + pmid + '</td> \
				<td>' + cancerType + '</td> \
				<td>' + sourceType + '</td> \
				</tr>');
		}
		
		if(bookmark+paging <= results.length  ) { page.loadmore_btn.show(); }
		else { page.loadmore_btn.hide(); }
		
		page.results_table.show();
		page.results_area.show();
		$.mobile.loading("hide");	
	}	
	
	function showDetails() {
		var href = $(this).find("a").attr("href");
        if(href) {  
        	var idx = $(this).parent().children().index($(this));

			// Convert status to a symbol and description (Silver, Gold)
        	var statussymbol = statusConvert(results[idx]['Status']);
        	
        	// Determine Accession link:
        	var acTitle = "Other AC:";
        	var accessionlink;
			if(results[idx]['Accession'].indexOf('ENST')>=0){accessionlink='<a href="http://useast.ensembl.org/Homo_sapiens/Transcript/Transcript?t='+results[idx]['Accession']+'" rel="external" target="_blank">'+ results[idx]['Accession'] + '</a>';}
	        else if(results[idx]['Accession'].indexOf('XM_')>=0 || results[idx]['Accession'].indexOf('NM_')>=0 || results[idx]['Accession'].indexOf('AC_')>=0) {
	        	acTitle = "RefSeq AC:";
	        	accessionlink='<a href="http://www.ncbi.nlm.nih.gov/nuccore/'+results[idx]['Accession']+'" rel="external" target="_blank">'+results[idx]['Accession']+'</a>'; 
	        	}
	        else if(results[idx]['Accession'].indexOf('VAR')>=0){accessionlink='<a href="http://web.expasy.org/variant_pages/'+results[idx]['Accession']+'.html" rel="external" target="_blank">'+results[idx]['Accession']+'</a>';}
	        else {accessionlink='<a href="http://www.ncbi.nlm.nih.gov/gene/?term='.results[idx]['Accession']+'" rel="external" target="_blank">';}
			// SNV position link
			var snvlink = results[idx]['Genome_Position'].indexOf(':') >= 0 ? '<a href="http://genome.ucsc.edu/cgi-bin/hgTracks?org=human&position='+results[idx]['Genome_Position']+'" rel="external" target="_blank">'+results[idx]['Genome_Position']+'</a>' : results[idx]['Genome_Position'];
			// PMID link
			var pmid = results[idx]['PMID'].split(";")[0];
			var pmidlink = pmid!='-' ? '<a href="http://www.ncbi.nlm.nih.gov/pubmed/?term='+ pmid+'" rel="external" target="_blank">'+pmid+'</a>' : pmid; 
			// PolyPhen color code
			var polyphen   = polyphenConvert(results[idx]['Polyphen_Pred'],'colors');
			
			$(page.id + '-detail .detail-table tbody').html(
				'<tr><td>Gene:</td><td>'     + results[idx]['Gene_Name '] + '</td></tr> \
			 	<tr><td>UniProtKB:</td><td><a href="http://www.uniprot.org/blast/?about=' + results[idx]['UniProt AC'] + '" rel="external" target="_blank">' +  results[idx]['UniProt AC'] + '</a></td></tr>\
			 	<tr><td>' + acTitle + '</td><td>'    + accessionlink + '</td></tr> \
			 	<tr><td>SNV Position:</td><td>'    + snvlink + '</td></tr> \
			 	<tr><td>Pos(N):</td><td>'    + results[idx]['Position_N'] + '</td></tr> \
			 	<tr><td>Ref(N):</td><td>'    + results[idx]['Ref_N'] + '</td></tr> \
			 	<tr><td>Var(N):</td><td>'    + results[idx]['Var_N'] + '</td></tr> \
			 	<tr><td>Pos(A):</td><td>'    + results[idx]['Position_A'] + '</td></tr> \
			 	<tr><td>Ref(A):</td><td>'    + results[idx]['Ref_A'] + '</td></tr> \
			 	<tr><td>Var(A):</td><td>'    + results[idx]['Var_A'] + '</td></tr> \
			 	<tr><td>Polyphen Pred.:</td><td>' + polyphen + ' ' + results[idx]['Polyphen_Pred'] + '</td></tr> \
			 	<tr><td>PMID:</td><td>'    + pmidlink + '</td></tr> \
			 	<tr><td>Cancer Type:</td><td>'    + results[idx]['Cancer_Type'] + '</td></tr> \
			 	<tr><td>Source:</td><td>'    + results[idx]['Source'] + '</td></tr> \
			 	<tr><td>Status:</td><td id="td-status">'    + statussymbol + '</td></tr>'		 	
			);
			
			// Go to detail page
    		$.mobile.navigate( href );	
    	};
	}

	// generate biomuta graph
	function generateBiomutaGraph(charttype) {
		// categorize frequencies per cancer type
		var frequencies = [];
		var freq = {};
		
		// organize data into javascript object
		$.each(results, function(indx, obj){
			var cancertype = obj['Cancer_Type'].match(/\[[A-Za-z0-9]+\]/)[0].replace('[', '').replace(']', '');
			if(cancertype == 'OTHERS' && obj['Cancer_Type'].match(/^[Cc]ancer(.*)/) == null) {
				cancertype = truncate(obj['Cancer_Type'].substr(0,obj['Cancer_Type'].indexOf(' ')),8,false);
			}
			//console.log(obj['Gene_Name'] + " " + obj['Cancer_Type']);
			if(!(cancertype in freq)) {freq[cancertype] = 1; }
			else {freq[cancertype]++; }
		});
  	
		for (var key in freq) {
	 		if (freq.hasOwnProperty(key)) {
	    		frequencies.push({'Cancer Type': key, 'Frequency': freq[key]});
	  		}
		}

		if(charttype == 1) {
			/*****
			 *  
			 * Below d3js bar chart code template from http://d3-generator.com
			 *
			* *****/
			// clear chart area and add header
			$(pagediv + ' .chart').html('<h3 style="text-align: center;">Frequency of Cancer Types</h3>');
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
			var chart = d3.select(pagediv + ' .chart').append("svg")
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
	}  // end generateBiomutaGraph
	
	    
	// ********** Event listeners
	 
	$(document).on('click', pagediv + ' .btn-submit', function(e){
		// Loading data notification
		querygene = page.input_field.val().trim().toUpperCase();
    	page.results_area.hide();
    	page.invalid_msgs.hide();
		page.results_msgs.html('');
		page.results_header_tbody.html('');
		page.results_table_tbody.html('');
		$.mobile.loading( 'show', { text: "Loading. Please wait...", textVisible: true, theme: "c"});
		fetchData();
	});

	$(document).on('click', pagediv + ' .btn-loadmore', displayResults);
	
	// When click on a row show full detail page
 	page.results_table_tbody.on('click', 'tr', showDetails);    

	// END -- BIOMUTA
}

// Initialize BioExpress page
function bioexpress() {
	//console.log('Initializing2: ' + $.mobile.activePage.attr('id'));
	
	// ********** Page Variables
	// load specific reusable variables and elements for this page
	var querygene;
	var results;
	var pagediv = '#bioexpress'; 
	var sortkey = 'log2FoldChange';
	var headerkey1 = { name: 'UniProt', jsonkey: 'UniProtKB_AC' };
	var headerkey2 = { name: 'RefSeq', jsonkey: 'RefSeq ' };
	var page = loadPageElements(pagediv, $(pagediv), window.defaults.BIOEXPRESS_DATA_URL, sortkey,headerkey1.jsonkey, headerkey2.jsonkey, 0);

	
	// ********** Page functions

	(page.results_table).freezeHeader();
		
	// Add up/down arrow symbol to regulation status
	function regulatedConvert (status,full) { 
		var symbol = status.toLowerCase()== 'up' ? '<img src="resources/images/small-green_arrow_up-svg.png" width="12px" height="12px"/>' : '<img src="resources/images/small-red_arrow_down-svg.png" width="12px" height="12px"/>'; 
		return full == false ? symbol : symbol + ' ' + status;
	}
	
	// Fetch the data and pass to appropriate window
	function fetchData() {
		// For demo purposes, still show cached results for MUC16 if no Internet available
		var online = checkConnection();
		if( online == false && querygene == 'MUC16') { 			 
			console.log('eclipse :: No Internet and Gene = MUC16. Using cached results for MUC16.');
			page.invalid_msgs.show();
			page.invalid_msgs.html('<p style="color: blue;"><strong>DEMO Mode: No Internet detected. Displaying cached results.</strong></p>');
			results = jQuery.parseJSON(window.defaults.OFFLINE_BIOEXPRESS_CACHE_MUC16);
			processData(); 
		}
		else if (online == false) {
			page.invalid_msgs.show();
			page.invalid_msgs.html(window.error_msg.ERROR_MSG_NO_INTERNET_CONN);
			$.mobile.loading("hide");
		}
		// retrieve results from server
		else {
		    $.ajax({ 
		    	type: "GET",
		    	timeout: 6000,
		    	dataType: "json",
		    	url: page.dataurl + querygene,
		    	success: function(data) {
		    		console.log('eclipse:: data returned');
		    		results = data;
		    		processData();
					},
				error: function (xhr, ajaxOptions, thrownError) {
					console.log('eclipse :: data error: ' + data);
					page.invalid_msgs.show();
					page.invalid_msgs.html(window.error_msg.ERROR_MSG_PARSING);
					$.mobile.loading("hide");
					}
			});
		}
	}

	// Parse the results and output to the appropriate page
	function processData() {
		console.log('eclipse :: ' + results.length + ' results returned for ' + querygene);
		if (results.length == 0) {
			page.invalid_msgs.html(window.error_msg.ERROR_MSG_INVALID_GENE);
			page.invalid_msgs.show();
		}
			   
		if(results.length > 0) { 	
			// sort the results
		   	var temp = results.sort(function(a, b) {
		        return (parseInt(a[page.sort_elem],10) > parseInt(b[page.sort_elem],10)) ? 1 : ((parseInt(a[page.sort_elem],10) < parseInt(b[page.sort_elem],10)) ? -1 : 0);
		    });	
			results = temp;

			page.results_msgs.html('<h2>' + results.length + ' results found for ' + querygene + '.</h2>');
			page.results_header_tbody.html(
			 	'<tr><td><b>' + headerkey1.name + '<b/></td><td>' + results[0][page.result_header_key1] + '</td>\
			 	     <td><b>' + headerkey2.name + '</b></td><td>' + results[0][page.result_header_key2] + '</td></tr>'
			);
			displayResults();
		};
	}

	// Display the results to the user -- for Bioexpress
	function displayResults() {
		var paging = 50;
		var bookmark = page.results_table_tbody.find('tr').length;
				alert('in displayResults in bioexp' + bookmark + ' ' + results.length);

		// Load a few results at a time based on 'paging' variable
		for(var i = bookmark; i < bookmark+paging && i < results.length; i++) { 
			// Text manipulations to fit data into table
			var foldchange = isNaN(results[i]['log2FoldChange']) == true ? (results[i]['log2FoldChange'].toLowerCase() == '-inf' ? '- &#8734;' : '&#8734;') : parseFloat(results[i]['log2FoldChange']).toFixed(3);
			var significant = results[i]['Significant'].toLowerCase() == 'yes' ? 'Y' : 'N';
			var regulated = regulatedConvert(results[i]['regulated'], false);
			var sourceType = truncate(results[i]['Data_Source'],8,true);
			// print out table row
			page.results_table_tbody.append('<tr> \
				<td><a href="' + page.id + '-detail" >' + foldchange + '</a></td> \
				<td>' +  parseFloat(results[i]['p_value']).toFixed(3) + '</td> \
				<td>' + significant + '</td> \
				<td>' + regulated + '</td> \
				<td>' + results[i]['PMID'] + '</td> \
				<td>' + parseFloat(results[i]['Freq_up_per']).toFixed(2) + '</td> \
				<td>' + parseFloat(results[i]['Freq_Down_per']).toFixed(2) + '</td> \
				<td>' + results[i]['Cancer_type'] + '</td> \
				</tr>');
		}
		
		if(bookmark+paging <= results.length  ) { page.loadmore_btn.show(); }
		else { page.loadmore_btn.hide(); }
		page.results_table.show();
		page.results_area.show();
		$.mobile.loading("hide");	
	}

	function showDetails() {
		var href = $(this).find("a").attr("href");
        if(href) {  
        	var idx = $(this).parent().children().index($(this));
        	// Convert regulated status to symbol
        	var regulatedsymbol = regulatedConvert(results[idx]['regulated'],true);
			// PMID link
			var pmid = results[idx]['PMID'].split(";")[0];
			var pmidlink = pmid!='-' ? '<a href="http://www.ncbi.nlm.nih.gov/pubmed/?term='+ pmid+'" rel="external" target="_blank">'+pmid+'</a>' : pmid; 

			$(page.id + '-detail .detail-table tbody').html(
				'<tr><td>Gene:</td><td>'     + querygene + '</td></tr> \
			 	<tr><td>UniProtKB:</td><td><a href="http://www.uniprot.org/blast/?about=' + results[idx]['UniProtKB_AC'] + '" rel="external" target="_blank">' +  results[idx]['UniProtKB_AC']  + '</a></td></tr>\
			 	<tr><td>RefSeq</td><td>'    + results[idx]['RefSeq ']  + '</td></tr> \
			 	<tr><td>log2 Fold Change:</td><td>'    + results[idx]['log2FoldChange'] + '</td></tr> \
			 	<tr><td>p Value:</td><td>'    + results[idx]['p_value'] + '</td></tr> \
			 	<tr><td>Significant?:</td><td>'    + (results[idx]['Significant'].toLowerCase() == 'yes' ? 'Yes' : 'No') + '</td></tr> \
			 	<tr><td>Regulated:</td><td>'    + regulatedsymbol + '</td></tr> \
			 	<tr><td>Cancer Type:</td><td>'    + results[idx]['Cancer_type'] + '</td></tr> \
				<tr><td>Sample ID:</td><td>' + results[idx]['Sample_ID'] + '</td></tr> \
				<tr><td>Data Source:</td><td>' + results[idx]['Data_Source'] + '</td></tr> \
			 	<tr><td>PMID:</td><td>'    + pmidlink + '</td></tr> \
			 	<tr><td>Freq. Up%:</td><td>'    + results[idx]['Freq_up_per'] + '</td></tr> \
			 	<tr><td>Freq. Down%:</td><td>'    + results[idx]['Freq_Down_per'] + '</td></tr>'		 	
			);
			
			// Go to detail page
    		$.mobile.navigate( href );	
    	};
    }
    
	// ********** Event listeners
	 
	$(document).on('click', pagediv + ' .btn-submit', function(e){ 
		// Loading data notification
		querygene = page.input_field.val().trim().toUpperCase();
    	page.results_area.hide();
    	page.invalid_msgs.hide();
		page.results_msgs.html('');
		page.results_header_tbody.html('');
		page.results_table_tbody.html('');
		$.mobile.loading( 'show', { text: "Loading. Please wait...", textVisible: true, theme: "c"});
		fetchData();
	});

	$(document).on('click', pagediv + ' .btn-loadmore', displayResults);
	
	// When click on a row show full detail page
 	page.results_table_tbody.on('click', 'tr', showDetails);

} // END -- BIOEXPRESS

function home() {
	console.log("eclipse :: inside home()");
	
	var img_logoonly = "resources/icons/hive_logo.png";
	var img_logoback = "resources/icons/hive_logo-backbutton.png";
    $('#reconnoiter-screen').hide();
	$('#queryCriteriaArea').hide();
	$('#queryResultsArea').hide();
	
	// $('#homemenu').show();

	
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

	$(".header-back-hivelogo").on("touchend", function() {
    	history.go(-1);
	});

	$(".header-home-hivelogo").on("touchend", function() {
		$.mobile.changePage("#biomuta", {
        	transition: "none"
    	});
	});
	
	// Page event listeners
	$("div[data-role=page]").bind("pagebeforeshow", function (e, data) {
		// Highlight the appropriate navigation tab
		$(this).find('.ui-navbar a').each(function() { 
			var current = $(this); 
			var activePage = $.mobile.activePage.attr('id');
			if(activePage == 'biomuta') { 
				current.attr('href') == ('#biomuta' || '#biomuta-detail') ? current.addClass('ui-btn-active') : current.removeClass('ui-btn-active');
			}
			else if(activePage == 'bioexpress') { 
				current.attr('href') == ('#bioexpress' || '#bioexpress-detail') ? current.addClass('ui-btn-active') : current.removeClass('ui-btn-active');
			} 
			else { current.removeClass('ui-btn-active'); }
		});
		
		// Make the page transitions smooth & nice
    	$.mobile.silentScroll(0);
    	$.mobile.changePage.defaults.transition = 'slide';
    	
	});

	document.addEventListener("backbutton", function() {
		if( $.mobile.activePage.attr('id') == ('update' || 'about')) { console.log('in here'); $.mobile.changePage("#biomuta", { transition: "none"  });}
		else {	console.log('or here'); history.go(-1); } 
	},true);
	
	// Tab event listeners
	$("a[data-role=tab]").each(function () {
    	var anchor = $(this);
    	anchor.bind("click", function () {
        	$.mobile.changePage(anchor.attr("href"), {
            	transition: "none"
        	});
        return false;
    	});
	});
 	
 	// fire up the tool pages since page is active on start
 	biomuta();
 	bioexpress();
	console.log("eclipse :: end home()");
}


function onDeviceReady() {
	console.log('eclipse :: device is ready');
	
	// Options menu
    var onAbout = function() {
        console.log("eclipse:: clicked About menu option");
		$.mobile.changePage('#about',{
            	transition: 'slide'
        	});
    };

    var onUpdate = function() {
        console.log("eclipse:: clicked Update menu option");
		$.mobile.changePage('#update',{
            	transition: 'slide'
        	});
        $('#btn_update_pubcast').click(function(){window.open('https://hive.biochemistry.gwu.edu/tools/HivePubcast/HIVE_Pubcast.apk','_system');});
        $('#btn_update_genecast').click(function(){window.open('https://hive.biochemistry.gwu.edu/tools/HiveGenecast/HIVEGenecast.apk','_system');});
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

	// go to home screen
	home();
}


function doMenu() {
	//alert('hit menu3');	
}

// Wait for device API libraries to load
//
function onLoad() {
	console.log('eclipse:: onLoad called');
    document.addEventListener("deviceready", onDeviceReady, false);
}

