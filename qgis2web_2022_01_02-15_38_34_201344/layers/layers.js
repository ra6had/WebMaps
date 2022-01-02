var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_6MinuteDriveTime_1 = new ol.format.GeoJSON();
var features_6MinuteDriveTime_1 = format_6MinuteDriveTime_1.readFeatures(json_6MinuteDriveTime_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6MinuteDriveTime_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6MinuteDriveTime_1.addFeatures(features_6MinuteDriveTime_1);
var lyr_6MinuteDriveTime_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6MinuteDriveTime_1, 
                style: style_6MinuteDriveTime_1,
                interactive: false,
                title: '<img src="styles/legend/6MinuteDriveTime_1.png" /> 6 Minute Drive Time'
            });
var format_Health_2 = new ol.format.GeoJSON();
var features_Health_2 = format_Health_2.readFeatures(json_Health_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Health_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Health_2.addFeatures(features_Health_2);
var lyr_Health_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Health_2, 
                style: style_Health_2,
                interactive: true,
                title: '<img src="styles/legend/Health_2.png" /> Health'
            });

lyr_EsriDarkGray_0.setVisible(true);lyr_6MinuteDriveTime_1.setVisible(true);lyr_Health_2.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_6MinuteDriveTime_1,lyr_Health_2];
lyr_6MinuteDriveTime_1.set('fieldAliases', {'id': 'id', 'provider': 'provider', 'mode': 'mode', 'value': 'value', 'units': 'units', 'lat': 'lat', 'lon': 'lon', 'params': 'params', });
lyr_Health_2.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', 'SUBTYPE EN': 'SUBTYPE EN', 'BLOCK': 'BLOCK', });
lyr_6MinuteDriveTime_1.set('fieldImages', {'id': 'Range', 'provider': 'TextEdit', 'mode': 'TextEdit', 'value': 'Range', 'units': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'params': 'TextEdit', });
lyr_Health_2.set('fieldImages', {'ID': 'Hidden', 'NAME': 'TextEdit', 'SUBTYPE EN': 'TextEdit', 'BLOCK': 'TextEdit', });
lyr_6MinuteDriveTime_1.set('fieldLabels', {'id': 'no label', 'provider': 'no label', 'mode': 'no label', 'value': 'no label', 'units': 'no label', 'lat': 'no label', 'lon': 'no label', 'params': 'no label', });
lyr_Health_2.set('fieldLabels', {'NAME': 'inline label', 'SUBTYPE EN': 'inline label', 'BLOCK': 'inline label', });
lyr_Health_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});