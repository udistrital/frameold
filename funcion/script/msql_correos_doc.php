<?PHP
//LLAMADO DE est_adm_correos_doc.php, doc_adm_correos_doc.php
$Qry_EmDoc = "SELECT DISTINCT(DOC_NOMBRE||' '||DOC_APELLIDO),DOC_EMAIL,DOC_NRO_IDEN
		FROM ACDOCENTE,ACCARGA,ACASPERI
		WHERE APE_ANO = CAR_APE_ANO
		AND APE_PER = CAR_APE_PER
		AND CAR_CRA_COD = $carrera
		AND CAR_ESTADO = 'A'
		AND APE_ESTADO = 'A'
		AND DOC_NRO_IDEN = CAR_DOC_NRO_IDEN
		AND DOC_EMAIL IS NOT NULL
		AND DOC_ESTADO = 'A'";

?>