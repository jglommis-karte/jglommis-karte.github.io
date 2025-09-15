ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([996661.046479, 6022326.378811, 1006788.045501, 6027619.730102]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BaseMap2024_ExportTif_150_modifiziert_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BaseMap2024_ExportTif_150_modifiziert<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BaseMap2024_ExportTif_150_modifiziert_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [998979.150096, 6022739.199681, 1004167.529493, 6026866.832589]
        })
    });
var format_HJStaende2025_2 = new ol.format.GeoJSON();
var features_HJStaende2025_2 = format_HJStaende2025_2.readFeatures(json_HJStaende2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HJStaende2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HJStaende2025_2.addFeatures(features_HJStaende2025_2);
var lyr_HJStaende2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HJStaende2025_2, 
                style: style_HJStaende2025_2,
                popuplayertitle: 'HJStaende2025',
                interactive: true,
                title: '<img src="styles/legend/HJStaende2025_2.png" /> HJStaende2025'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BaseMap2024_ExportTif_150_modifiziert_1.setVisible(true);lyr_HJStaende2025_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BaseMap2024_ExportTif_150_modifiziert_1,lyr_HJStaende2025_2];
lyr_HJStaende2025_2.set('fieldAliases', {'fid': 'fid', 'nr': 'nr', 'hund': 'hund', 'kommentar': 'kommentar', 'kugel': 'kugel', 'update': 'update', });
lyr_HJStaende2025_2.set('fieldImages', {'fid': 'TextEdit', 'nr': 'TextEdit', 'hund': 'CheckBox', 'kommentar': 'TextEdit', 'kugel': 'CheckBox', 'update': 'DateTime', });
lyr_HJStaende2025_2.set('fieldLabels', {'fid': 'hidden field', 'nr': 'header label - visible with data', 'hund': 'inline label - always visible', 'kommentar': 'inline label - always visible', 'kugel': 'inline label - always visible', 'update': 'no label', });
lyr_HJStaende2025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});