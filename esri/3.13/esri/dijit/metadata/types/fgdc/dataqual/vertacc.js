// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/dataqual/templates/vertacc.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\tdata-dojo-props\x3d"target:\'vertacc\',minOccurs:0,\r\n\t\t\tlabel:\'${i18nFgdc.dataqual.vertacc.caption}\'"\x3e\r\n\t\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'vertaccr\',\r\n\t\t\t\tlabel:\'${i18nFgdc.dataqual.vertacc.vertaccr}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'qvertpa\',minOccurs:0,maxOccurs:\'unbounded\',\r\n\t\t\t\tlabel:\'${i18nFgdc.dataqual.vertacc.qvertpa.caption}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\tdata-dojo-props\x3d"target:\'vertaccv\',\r\n\t\t\t\t\t\tlabel:\'${i18nFgdc.dataqual.vertacc.qvertpa.vertaccv}\'"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\tdata-dojo-props\x3d"target:\'vertacce\',\r\n\t\t\t\t\t\tlabel:\'${i18nFgdc.dataqual.vertacc.qvertpa.vertacce}\'"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/dataqual/vertacc","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputNumber ../../../form/InputTextArea dojo/text!./templates/vertacc.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.dataqual.vertacc",a,f);return a});