// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.12/esri/copyright.txt for details.
//>>built
define("esri/tasks/StatisticDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(a,b,c,d){a=a(null,{declaredClass:"esri.tasks.StatisticDefinition",toJson:function(){return{statisticType:this.statisticType,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount}}});c("extend-esri")&&b.setObject("tasks.StatisticDefinition",a,d);return a});