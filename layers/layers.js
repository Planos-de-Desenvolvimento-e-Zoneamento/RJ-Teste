ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([678797.839114, 7466249.801788, 699357.534289, 7478425.790874]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ImveisTombados_1 = new ol.format.GeoJSON();
var features_ImveisTombados_1 = format_ImveisTombados_1.readFeatures(json_ImveisTombados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ImveisTombados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisTombados_1.addFeatures(features_ImveisTombados_1);
var lyr_ImveisTombados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisTombados_1, 
                style: style_ImveisTombados_1,
                popuplayertitle: 'Imóveis Tombados ',
                interactive: true,
                title: '<img src="styles/legend/ImveisTombados_1.png" /> Imóveis Tombados '
            });
var format_UnidadesdeConservao_2 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_2 = format_UnidadesdeConservao_2.readFeatures(json_UnidadesdeConservao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_UnidadesdeConservao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_2.addFeatures(features_UnidadesdeConservao_2);
var lyr_UnidadesdeConservao_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_2, 
                style: style_UnidadesdeConservao_2,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_2.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_3 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_3 = format_reasUrbanaseRurais_3.readFeatures(json_reasUrbanaseRurais_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasUrbanaseRurais_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_3.addFeatures(features_reasUrbanaseRurais_3);
var lyr_reasUrbanaseRurais_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_3, 
                style: style_reasUrbanaseRurais_3,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_3.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_4 = format_FundeadourosLongoPrazo_4.readFeatures(json_FundeadourosLongoPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FundeadourosLongoPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_4.addFeatures(features_FundeadourosLongoPrazo_4);
var lyr_FundeadourosLongoPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_4, 
                style: style_FundeadourosLongoPrazo_4,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_4.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_5 = format_FundeadourosMdioPrazo_5.readFeatures(json_FundeadourosMdioPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FundeadourosMdioPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_5.addFeatures(features_FundeadourosMdioPrazo_5);
var lyr_FundeadourosMdioPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_5, 
                style: style_FundeadourosMdioPrazo_5,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_5.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_6 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_6 = format_FundeadourosCurtoPrazo_6.readFeatures(json_FundeadourosCurtoPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FundeadourosCurtoPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_6.addFeatures(features_FundeadourosCurtoPrazo_6);
var lyr_FundeadourosCurtoPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_6, 
                style: style_FundeadourosCurtoPrazo_6,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_6.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_7 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_7 = format_FundeadourosSituaoAtual_7.readFeatures(json_FundeadourosSituaoAtual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FundeadourosSituaoAtual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_7.addFeatures(features_FundeadourosSituaoAtual_7);
var lyr_FundeadourosSituaoAtual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_7, 
                style: style_FundeadourosSituaoAtual_7,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_7.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_8 = format_BaciasdeEvoluoLongoPrazo_8.readFeatures(json_BaciasdeEvoluoLongoPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BaciasdeEvoluoLongoPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_8.addFeatures(features_BaciasdeEvoluoLongoPrazo_8);
var lyr_BaciasdeEvoluoLongoPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_8, 
                style: style_BaciasdeEvoluoLongoPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_8.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_9 = format_BaciasdeEvoluoMdioPrazo_9.readFeatures(json_BaciasdeEvoluoMdioPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BaciasdeEvoluoMdioPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_9.addFeatures(features_BaciasdeEvoluoMdioPrazo_9);
var lyr_BaciasdeEvoluoMdioPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_9, 
                style: style_BaciasdeEvoluoMdioPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_9.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_10 = format_BaciasdeEvoluoCurtoPrazo_10.readFeatures(json_BaciasdeEvoluoCurtoPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_10.addFeatures(features_BaciasdeEvoluoCurtoPrazo_10);
var lyr_BaciasdeEvoluoCurtoPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_10, 
                style: style_BaciasdeEvoluoCurtoPrazo_10,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_10.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_11 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_11 = format_BaciasdeEvoluoSituaoAtual_11.readFeatures(json_BaciasdeEvoluoSituaoAtual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BaciasdeEvoluoSituaoAtual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_11.addFeatures(features_BaciasdeEvoluoSituaoAtual_11);
var lyr_BaciasdeEvoluoSituaoAtual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_11, 
                style: style_BaciasdeEvoluoSituaoAtual_11,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_11.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_12 = format_CanaisdeAcessoLongoPrazo_12.readFeatures(json_CanaisdeAcessoLongoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CanaisdeAcessoLongoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_12.addFeatures(features_CanaisdeAcessoLongoPrazo_12);
var lyr_CanaisdeAcessoLongoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_12, 
                style: style_CanaisdeAcessoLongoPrazo_12,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_12.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_13 = format_CanaisdeAcessoMdioPrazo_13.readFeatures(json_CanaisdeAcessoMdioPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CanaisdeAcessoMdioPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_13.addFeatures(features_CanaisdeAcessoMdioPrazo_13);
var lyr_CanaisdeAcessoMdioPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_13, 
                style: style_CanaisdeAcessoMdioPrazo_13,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_13.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_14 = format_CanaisdeAcessoCurtoPrazo_14.readFeatures(json_CanaisdeAcessoCurtoPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CanaisdeAcessoCurtoPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_14.addFeatures(features_CanaisdeAcessoCurtoPrazo_14);
var lyr_CanaisdeAcessoCurtoPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_14, 
                style: style_CanaisdeAcessoCurtoPrazo_14,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_14.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_15 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_15 = format_CanaisdeAcessoSituaoAtual_15.readFeatures(json_CanaisdeAcessoSituaoAtual_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CanaisdeAcessoSituaoAtual_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_15.addFeatures(features_CanaisdeAcessoSituaoAtual_15);
var lyr_CanaisdeAcessoSituaoAtual_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_15, 
                style: style_CanaisdeAcessoSituaoAtual_15,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_15.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosDutoviriosExternos_16 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_16 = format_AcessosDutoviriosExternos_16.readFeatures(json_AcessosDutoviriosExternos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosDutoviriosExternos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_16.addFeatures(features_AcessosDutoviriosExternos_16);
var lyr_AcessosDutoviriosExternos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_16, 
                style: style_AcessosDutoviriosExternos_16,
                popuplayertitle: 'Acessos Dutoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_16.png" /> Acessos Dutoviários Externos '
            });
var format_AcessosFerroviriosInternosLongoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_17 = format_AcessosFerroviriosInternosLongoPrazo_17.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_17.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_17);
var lyr_AcessosFerroviriosInternosLongoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_17, 
                style: style_AcessosFerroviriosInternosLongoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_17.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_18 = format_AcessosFerroviriosInternosMdioPrazo_18.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_18.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_18);
var lyr_AcessosFerroviriosInternosMdioPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_18, 
                style: style_AcessosFerroviriosInternosMdioPrazo_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_18.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_19 = format_AcessosFerroviriosInternosCurtoPrazo_19.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_19.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_19);
var lyr_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_19, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_19,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_19.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_20 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_20 = format_AcessosFerroviriosInternosSituaoAtual_20.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_20.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_20);
var lyr_AcessosFerroviriosInternosSituaoAtual_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_20, 
                style: style_AcessosFerroviriosInternosSituaoAtual_20,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_20.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_21 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_21 = format_AcessosFerroviriosExternos_21.readFeatures(json_AcessosFerroviriosExternos_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosFerroviriosExternos_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_21.addFeatures(features_AcessosFerroviriosExternos_21);
var lyr_AcessosFerroviriosExternos_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_21, 
                style: style_AcessosFerroviriosExternos_21,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_21.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_22 = format_AcessosRodoviriosInternosLongoPrazo_22.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_22.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_22);
var lyr_AcessosRodoviriosInternosLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_22, 
                style: style_AcessosRodoviriosInternosLongoPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_22.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_23 = format_AcessosRodoviriosInternosMdioPrazo_23.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_23.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_23);
var lyr_AcessosRodoviriosInternosMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_23, 
                style: style_AcessosRodoviriosInternosMdioPrazo_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_23.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_24 = format_AcessosRodoviriosInternosCurtoPrazo_24.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_24.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_24);
var lyr_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_24, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_24,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_24.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_25 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_25 = format_AcessosRodoviriosInternosSituaoAtual_25.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_25.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_25);
var lyr_AcessosRodoviriosInternosSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_25, 
                style: style_AcessosRodoviriosInternosSituaoAtual_25,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_25.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_26 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_26 = format_AcessosRodoviriosExternos_26.readFeatures(json_AcessosRodoviriosExternos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcessosRodoviriosExternos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_26.addFeatures(features_AcessosRodoviriosExternos_26);
var lyr_AcessosRodoviriosExternos_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_26, 
                style: style_AcessosRodoviriosExternos_26,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_26.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_27 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_27 = format_reaseInstalaesAlfandegadas_27.readFeatures(json_reaseInstalaesAlfandegadas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaseInstalaesAlfandegadas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_27.addFeatures(features_reaseInstalaesAlfandegadas_27);
var lyr_reaseInstalaesAlfandegadas_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_27, 
                style: style_reaseInstalaesAlfandegadas_27,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_27.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_36 = format_reasNoAfetassOperaesPorturiasLongoPrazo_36.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_36);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_36, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_36.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_37 = format_reasNoAfetassOperaesPorturiasMdioPrazo_37.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_37);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_37, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_37,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_37.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_38.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_38);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_38, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_38,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_38.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_39 = format_reasNoAfetassOperaesPorturiasSituaoAtual_39.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_39);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_39, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_39,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_39.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_40 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_40 = format_AcostagemLongoPrazo_40.readFeatures(json_AcostagemLongoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcostagemLongoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_40.addFeatures(features_AcostagemLongoPrazo_40);
var lyr_AcostagemLongoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_40, 
                style: style_AcostagemLongoPrazo_40,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_40.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_41 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_41 = format_AcostagemMdioPrazo_41.readFeatures(json_AcostagemMdioPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcostagemMdioPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_41.addFeatures(features_AcostagemMdioPrazo_41);
var lyr_AcostagemMdioPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_41, 
                style: style_AcostagemMdioPrazo_41,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_41.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_42 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_42 = format_AcostagemCurtoPrazo_42.readFeatures(json_AcostagemCurtoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcostagemCurtoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_42.addFeatures(features_AcostagemCurtoPrazo_42);
var lyr_AcostagemCurtoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_42, 
                style: style_AcostagemCurtoPrazo_42,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_42.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_43 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_43 = format_AcostagemSituaoAtual_43.readFeatures(json_AcostagemSituaoAtual_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AcostagemSituaoAtual_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_43.addFeatures(features_AcostagemSituaoAtual_43);
var lyr_AcostagemSituaoAtual_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_43, 
                style: style_AcostagemSituaoAtual_43,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_43.png" /> Acostagem - Situação Atual '
            });
var format_TerminaisdePassageirosLongoPrazo_44 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosLongoPrazo_44 = format_TerminaisdePassageirosLongoPrazo_44.readFeatures(json_TerminaisdePassageirosLongoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerminaisdePassageirosLongoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosLongoPrazo_44.addFeatures(features_TerminaisdePassageirosLongoPrazo_44);
var lyr_TerminaisdePassageirosLongoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosLongoPrazo_44, 
                style: style_TerminaisdePassageirosLongoPrazo_44,
                popuplayertitle: 'Terminais de Passageiros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosLongoPrazo_44.png" /> Terminais de Passageiros - Longo Prazo '
            });
var format_TerminaisdePassageirosMdioPrazo_45 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosMdioPrazo_45 = format_TerminaisdePassageirosMdioPrazo_45.readFeatures(json_TerminaisdePassageirosMdioPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerminaisdePassageirosMdioPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosMdioPrazo_45.addFeatures(features_TerminaisdePassageirosMdioPrazo_45);
var lyr_TerminaisdePassageirosMdioPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosMdioPrazo_45, 
                style: style_TerminaisdePassageirosMdioPrazo_45,
                popuplayertitle: 'Terminais de Passageiros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosMdioPrazo_45.png" /> Terminais de Passageiros - Médio Prazo '
            });
var format_TerminaisdePassageirosCurtoPrazo_46 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosCurtoPrazo_46 = format_TerminaisdePassageirosCurtoPrazo_46.readFeatures(json_TerminaisdePassageirosCurtoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerminaisdePassageirosCurtoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosCurtoPrazo_46.addFeatures(features_TerminaisdePassageirosCurtoPrazo_46);
var lyr_TerminaisdePassageirosCurtoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosCurtoPrazo_46, 
                style: style_TerminaisdePassageirosCurtoPrazo_46,
                popuplayertitle: 'Terminais de Passageiros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosCurtoPrazo_46.png" /> Terminais de Passageiros - Curto Prazo '
            });
var format_TerminaisdePassageirosSituaoAtual_47 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosSituaoAtual_47 = format_TerminaisdePassageirosSituaoAtual_47.readFeatures(json_TerminaisdePassageirosSituaoAtual_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_TerminaisdePassageirosSituaoAtual_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosSituaoAtual_47.addFeatures(features_TerminaisdePassageirosSituaoAtual_47);
var lyr_TerminaisdePassageirosSituaoAtual_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosSituaoAtual_47, 
                style: style_TerminaisdePassageirosSituaoAtual_47,
                popuplayertitle: 'Terminais de Passageiros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosSituaoAtual_47.png" /> Terminais de Passageiros - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_48 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_48 = format_ArmazenagemLongoPrazo_48.readFeatures(json_ArmazenagemLongoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArmazenagemLongoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_48.addFeatures(features_ArmazenagemLongoPrazo_48);
var lyr_ArmazenagemLongoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_48, 
                style: style_ArmazenagemLongoPrazo_48,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_48.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_49 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_49 = format_ArmazenagemMdioPrazo_49.readFeatures(json_ArmazenagemMdioPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArmazenagemMdioPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_49.addFeatures(features_ArmazenagemMdioPrazo_49);
var lyr_ArmazenagemMdioPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_49, 
                style: style_ArmazenagemMdioPrazo_49,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_49.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_50 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_50 = format_ArmazenagemCurtoPrazo_50.readFeatures(json_ArmazenagemCurtoPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArmazenagemCurtoPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_50.addFeatures(features_ArmazenagemCurtoPrazo_50);
var lyr_ArmazenagemCurtoPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_50, 
                style: style_ArmazenagemCurtoPrazo_50,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_50.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_51 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_51 = format_ArmazenagemSituaoAtual_51.readFeatures(json_ArmazenagemSituaoAtual_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ArmazenagemSituaoAtual_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_51.addFeatures(features_ArmazenagemSituaoAtual_51);
var lyr_ArmazenagemSituaoAtual_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_51, 
                style: style_ArmazenagemSituaoAtual_51,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_51.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_Passageiros_60 = new ol.format.GeoJSON();
var features_Passageiros_60 = format_Passageiros_60.readFeatures(json_Passageiros_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Passageiros_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_60.addFeatures(features_Passageiros_60);
var lyr_Passageiros_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_60, 
                style: style_Passageiros_60,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_60.png" /> Passageiros'
            });
var format_ProdutosSiderrgicos_61 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_61 = format_ProdutosSiderrgicos_61.readFeatures(json_ProdutosSiderrgicos_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProdutosSiderrgicos_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_61.addFeatures(features_ProdutosSiderrgicos_61);
var lyr_ProdutosSiderrgicos_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_61, 
                style: style_ProdutosSiderrgicos_61,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_61.png" /> Produtos Siderúrgicos'
            });
var format_DieselMartimoeBunker_62 = new ol.format.GeoJSON();
var features_DieselMartimoeBunker_62 = format_DieselMartimoeBunker_62.readFeatures(json_DieselMartimoeBunker_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DieselMartimoeBunker_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DieselMartimoeBunker_62.addFeatures(features_DieselMartimoeBunker_62);
var lyr_DieselMartimoeBunker_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DieselMartimoeBunker_62, 
                style: style_DieselMartimoeBunker_62,
                popuplayertitle: 'Diesel Marítimo e Bunker',
                interactive: true,
                title: '<img src="styles/legend/DieselMartimoeBunker_62.png" /> Diesel Marítimo e Bunker'
            });
var format_ApoioLogsticoOffshore_63 = new ol.format.GeoJSON();
var features_ApoioLogsticoOffshore_63 = format_ApoioLogsticoOffshore_63.readFeatures(json_ApoioLogsticoOffshore_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ApoioLogsticoOffshore_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioLogsticoOffshore_63.addFeatures(features_ApoioLogsticoOffshore_63);
var lyr_ApoioLogsticoOffshore_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioLogsticoOffshore_63, 
                style: style_ApoioLogsticoOffshore_63,
                popuplayertitle: 'Apoio Logístico Offshore',
                interactive: true,
                title: '<img src="styles/legend/ApoioLogsticoOffshore_63.png" /> Apoio Logístico Offshore'
            });
var format_Offshore_64 = new ol.format.GeoJSON();
var features_Offshore_64 = format_Offshore_64.readFeatures(json_Offshore_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Offshore_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offshore_64.addFeatures(features_Offshore_64);
var lyr_Offshore_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offshore_64, 
                style: style_Offshore_64,
                popuplayertitle: 'Offshore',
                interactive: true,
                title: '<img src="styles/legend/Offshore_64.png" /> Offshore'
            });
var format_CargaGeraleApoioOffshore_65 = new ol.format.GeoJSON();
var features_CargaGeraleApoioOffshore_65 = format_CargaGeraleApoioOffshore_65.readFeatures(json_CargaGeraleApoioOffshore_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleApoioOffshore_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleApoioOffshore_65.addFeatures(features_CargaGeraleApoioOffshore_65);
var lyr_CargaGeraleApoioOffshore_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleApoioOffshore_65, 
                style: style_CargaGeraleApoioOffshore_65,
                popuplayertitle: 'Carga Geral e Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleApoioOffshore_65.png" /> Carga Geral e Apoio Offshore'
            });
var format_CargaGeraleOffshore_66 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_66 = format_CargaGeraleOffshore_66.readFeatures(json_CargaGeraleOffshore_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleOffshore_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_66.addFeatures(features_CargaGeraleOffshore_66);
var lyr_CargaGeraleOffshore_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_66, 
                style: style_CargaGeraleOffshore_66,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_66.png" /> Carga Geral e Offshore'
            });
var format_CargaGeraleGranelSlido_67 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_67 = format_CargaGeraleGranelSlido_67.readFeatures(json_CargaGeraleGranelSlido_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleGranelSlido_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_67.addFeatures(features_CargaGeraleGranelSlido_67);
var lyr_CargaGeraleGranelSlido_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_67, 
                style: style_CargaGeraleGranelSlido_67,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_67.png" /> Carga Geral e Granel Sólido'
            });
var format_GranisLquidosCargaGeraleReparonaval_68 = new ol.format.GeoJSON();
var features_GranisLquidosCargaGeraleReparonaval_68 = format_GranisLquidosCargaGeraleReparonaval_68.readFeatures(json_GranisLquidosCargaGeraleReparonaval_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranisLquidosCargaGeraleReparonaval_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidosCargaGeraleReparonaval_68.addFeatures(features_GranisLquidosCargaGeraleReparonaval_68);
var lyr_GranisLquidosCargaGeraleReparonaval_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidosCargaGeraleReparonaval_68, 
                style: style_GranisLquidosCargaGeraleReparonaval_68,
                popuplayertitle: 'Granéis Líquidos, Carga Geral e Reparo naval',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidosCargaGeraleReparonaval_68.png" /> Granéis Líquidos, Carga Geral e Reparo naval'
            });
var format_GranisLquidos_69 = new ol.format.GeoJSON();
var features_GranisLquidos_69 = format_GranisLquidos_69.readFeatures(json_GranisLquidos_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranisLquidos_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_69.addFeatures(features_GranisLquidos_69);
var lyr_GranisLquidos_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_69, 
                style: style_GranisLquidos_69,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_69.png" /> Granéis Líquidos'
            });
var format_GranelSlido_70 = new ol.format.GeoJSON();
var features_GranelSlido_70 = format_GranelSlido_70.readFeatures(json_GranelSlido_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranelSlido_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_70.addFeatures(features_GranelSlido_70);
var lyr_GranelSlido_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_70, 
                style: style_GranelSlido_70,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_70.png" /> Granel Sólido'
            });
var format_Contineres_71 = new ol.format.GeoJSON();
var features_Contineres_71 = format_Contineres_71.readFeatures(json_Contineres_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_71.addFeatures(features_Contineres_71);
var lyr_Contineres_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_71, 
                style: style_Contineres_71,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_71.png" /> Contêineres'
            });
var format_Multiuso_72 = new ol.format.GeoJSON();
var features_Multiuso_72 = format_Multiuso_72.readFeatures(json_Multiuso_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Multiuso_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_72.addFeatures(features_Multiuso_72);
var lyr_Multiuso_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_72, 
                style: style_Multiuso_72,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_72.png" /> Multiuso'
            });
var format_Veculos_73 = new ol.format.GeoJSON();
var features_Veculos_73 = format_Veculos_73.readFeatures(json_Veculos_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Veculos_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veculos_73.addFeatures(features_Veculos_73);
var lyr_Veculos_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Veculos_73, 
                style: style_Veculos_73,
                popuplayertitle: 'Veículos',
                interactive: true,
                title: '<img src="styles/legend/Veculos_73.png" /> Veículos'
            });
var format_Trigo_74 = new ol.format.GeoJSON();
var features_Trigo_74 = format_Trigo_74.readFeatures(json_Trigo_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Trigo_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trigo_74.addFeatures(features_Trigo_74);
var lyr_Trigo_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trigo_74, 
                style: style_Trigo_74,
                popuplayertitle: 'Trigo',
                interactive: true,
                title: '<img src="styles/legend/Trigo_74.png" /> Trigo'
            });
var format_Passageiros_75 = new ol.format.GeoJSON();
var features_Passageiros_75 = format_Passageiros_75.readFeatures(json_Passageiros_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Passageiros_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_75.addFeatures(features_Passageiros_75);
var lyr_Passageiros_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_75, 
                style: style_Passageiros_75,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_75.png" /> Passageiros'
            });
var format_ProdutosSiderrgicos_76 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_76 = format_ProdutosSiderrgicos_76.readFeatures(json_ProdutosSiderrgicos_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProdutosSiderrgicos_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_76.addFeatures(features_ProdutosSiderrgicos_76);
var lyr_ProdutosSiderrgicos_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_76, 
                style: style_ProdutosSiderrgicos_76,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_76.png" /> Produtos Siderúrgicos'
            });
var format_ApoioLogsticoOffshore_77 = new ol.format.GeoJSON();
var features_ApoioLogsticoOffshore_77 = format_ApoioLogsticoOffshore_77.readFeatures(json_ApoioLogsticoOffshore_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ApoioLogsticoOffshore_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioLogsticoOffshore_77.addFeatures(features_ApoioLogsticoOffshore_77);
var lyr_ApoioLogsticoOffshore_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioLogsticoOffshore_77, 
                style: style_ApoioLogsticoOffshore_77,
                popuplayertitle: 'Apoio Logístico Offshore',
                interactive: true,
                title: '<img src="styles/legend/ApoioLogsticoOffshore_77.png" /> Apoio Logístico Offshore'
            });
var format_Offshore_78 = new ol.format.GeoJSON();
var features_Offshore_78 = format_Offshore_78.readFeatures(json_Offshore_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Offshore_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offshore_78.addFeatures(features_Offshore_78);
var lyr_Offshore_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offshore_78, 
                style: style_Offshore_78,
                popuplayertitle: 'Offshore',
                interactive: true,
                title: '<img src="styles/legend/Offshore_78.png" /> Offshore'
            });
var format_CargaGeraleGranelSlido_79 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_79 = format_CargaGeraleGranelSlido_79.readFeatures(json_CargaGeraleGranelSlido_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleGranelSlido_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_79.addFeatures(features_CargaGeraleGranelSlido_79);
var lyr_CargaGeraleGranelSlido_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_79, 
                style: style_CargaGeraleGranelSlido_79,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_79.png" /> Carga Geral e Granel Sólido'
            });
var format_CargaGeraleApoioOffshore_80 = new ol.format.GeoJSON();
var features_CargaGeraleApoioOffshore_80 = format_CargaGeraleApoioOffshore_80.readFeatures(json_CargaGeraleApoioOffshore_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleApoioOffshore_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleApoioOffshore_80.addFeatures(features_CargaGeraleApoioOffshore_80);
var lyr_CargaGeraleApoioOffshore_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleApoioOffshore_80, 
                style: style_CargaGeraleApoioOffshore_80,
                popuplayertitle: 'Carga Geral e Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleApoioOffshore_80.png" /> Carga Geral e Apoio Offshore'
            });
var format_CargaGeraleOffshore_81 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_81 = format_CargaGeraleOffshore_81.readFeatures(json_CargaGeraleOffshore_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleOffshore_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_81.addFeatures(features_CargaGeraleOffshore_81);
var lyr_CargaGeraleOffshore_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_81, 
                style: style_CargaGeraleOffshore_81,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_81.png" /> Carga Geral e Offshore'
            });
var format_GranisLquidos_82 = new ol.format.GeoJSON();
var features_GranisLquidos_82 = format_GranisLquidos_82.readFeatures(json_GranisLquidos_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranisLquidos_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_82.addFeatures(features_GranisLquidos_82);
var lyr_GranisLquidos_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_82, 
                style: style_GranisLquidos_82,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_82.png" /> Granéis Líquidos'
            });
var format_GranelSlido_83 = new ol.format.GeoJSON();
var features_GranelSlido_83 = format_GranelSlido_83.readFeatures(json_GranelSlido_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranelSlido_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_83.addFeatures(features_GranelSlido_83);
var lyr_GranelSlido_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_83, 
                style: style_GranelSlido_83,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_83.png" /> Granel Sólido'
            });
var format_Contineres_84 = new ol.format.GeoJSON();
var features_Contineres_84 = format_Contineres_84.readFeatures(json_Contineres_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_84.addFeatures(features_Contineres_84);
var lyr_Contineres_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_84, 
                style: style_Contineres_84,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_84.png" /> Contêineres'
            });
var format_Multiuso_85 = new ol.format.GeoJSON();
var features_Multiuso_85 = format_Multiuso_85.readFeatures(json_Multiuso_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Multiuso_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_85.addFeatures(features_Multiuso_85);
var lyr_Multiuso_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_85, 
                style: style_Multiuso_85,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_85.png" /> Multiuso'
            });
var format_Veculos_86 = new ol.format.GeoJSON();
var features_Veculos_86 = format_Veculos_86.readFeatures(json_Veculos_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Veculos_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veculos_86.addFeatures(features_Veculos_86);
var lyr_Veculos_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Veculos_86, 
                style: style_Veculos_86,
                popuplayertitle: 'Veículos',
                interactive: true,
                title: '<img src="styles/legend/Veculos_86.png" /> Veículos'
            });
var format_Trigo_87 = new ol.format.GeoJSON();
var features_Trigo_87 = format_Trigo_87.readFeatures(json_Trigo_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Trigo_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trigo_87.addFeatures(features_Trigo_87);
var lyr_Trigo_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trigo_87, 
                style: style_Trigo_87,
                popuplayertitle: 'Trigo',
                interactive: true,
                title: '<img src="styles/legend/Trigo_87.png" /> Trigo'
            });
var format_Passageiros_88 = new ol.format.GeoJSON();
var features_Passageiros_88 = format_Passageiros_88.readFeatures(json_Passageiros_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Passageiros_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_88.addFeatures(features_Passageiros_88);
var lyr_Passageiros_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_88, 
                style: style_Passageiros_88,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_88.png" /> Passageiros'
            });
var format_ProdutosSiderrgicos_89 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_89 = format_ProdutosSiderrgicos_89.readFeatures(json_ProdutosSiderrgicos_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProdutosSiderrgicos_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_89.addFeatures(features_ProdutosSiderrgicos_89);
var lyr_ProdutosSiderrgicos_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_89, 
                style: style_ProdutosSiderrgicos_89,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_89.png" /> Produtos Siderúrgicos'
            });
var format_ApoioLogsticoOffshore_90 = new ol.format.GeoJSON();
var features_ApoioLogsticoOffshore_90 = format_ApoioLogsticoOffshore_90.readFeatures(json_ApoioLogsticoOffshore_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ApoioLogsticoOffshore_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioLogsticoOffshore_90.addFeatures(features_ApoioLogsticoOffshore_90);
var lyr_ApoioLogsticoOffshore_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioLogsticoOffshore_90, 
                style: style_ApoioLogsticoOffshore_90,
                popuplayertitle: 'Apoio Logístico Offshore',
                interactive: true,
                title: '<img src="styles/legend/ApoioLogsticoOffshore_90.png" /> Apoio Logístico Offshore'
            });
var format_Offshore_91 = new ol.format.GeoJSON();
var features_Offshore_91 = format_Offshore_91.readFeatures(json_Offshore_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Offshore_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offshore_91.addFeatures(features_Offshore_91);
var lyr_Offshore_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offshore_91, 
                style: style_Offshore_91,
                popuplayertitle: 'Offshore',
                interactive: true,
                title: '<img src="styles/legend/Offshore_91.png" /> Offshore'
            });
var format_CargaGeraleGranelSlido_92 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_92 = format_CargaGeraleGranelSlido_92.readFeatures(json_CargaGeraleGranelSlido_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleGranelSlido_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_92.addFeatures(features_CargaGeraleGranelSlido_92);
var lyr_CargaGeraleGranelSlido_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_92, 
                style: style_CargaGeraleGranelSlido_92,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_92.png" /> Carga Geral e Granel Sólido'
            });
var format_CargaGeraleApoioOffshore_93 = new ol.format.GeoJSON();
var features_CargaGeraleApoioOffshore_93 = format_CargaGeraleApoioOffshore_93.readFeatures(json_CargaGeraleApoioOffshore_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleApoioOffshore_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleApoioOffshore_93.addFeatures(features_CargaGeraleApoioOffshore_93);
var lyr_CargaGeraleApoioOffshore_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleApoioOffshore_93, 
                style: style_CargaGeraleApoioOffshore_93,
                popuplayertitle: 'Carga Geral e Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleApoioOffshore_93.png" /> Carga Geral e Apoio Offshore'
            });
var format_CargaGeraleOffshore_94 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_94 = format_CargaGeraleOffshore_94.readFeatures(json_CargaGeraleOffshore_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleOffshore_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_94.addFeatures(features_CargaGeraleOffshore_94);
var lyr_CargaGeraleOffshore_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_94, 
                style: style_CargaGeraleOffshore_94,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_94.png" /> Carga Geral e Offshore'
            });
var format_GranisLquidos_95 = new ol.format.GeoJSON();
var features_GranisLquidos_95 = format_GranisLquidos_95.readFeatures(json_GranisLquidos_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranisLquidos_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_95.addFeatures(features_GranisLquidos_95);
var lyr_GranisLquidos_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_95, 
                style: style_GranisLquidos_95,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_95.png" /> Granéis Líquidos'
            });
var format_GranelSlido_96 = new ol.format.GeoJSON();
var features_GranelSlido_96 = format_GranelSlido_96.readFeatures(json_GranelSlido_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranelSlido_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_96.addFeatures(features_GranelSlido_96);
var lyr_GranelSlido_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_96, 
                style: style_GranelSlido_96,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_96.png" /> Granel Sólido'
            });
var format_Contineres_97 = new ol.format.GeoJSON();
var features_Contineres_97 = format_Contineres_97.readFeatures(json_Contineres_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_97.addFeatures(features_Contineres_97);
var lyr_Contineres_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_97, 
                style: style_Contineres_97,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_97.png" /> Contêineres'
            });
var format_Multiuso_98 = new ol.format.GeoJSON();
var features_Multiuso_98 = format_Multiuso_98.readFeatures(json_Multiuso_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Multiuso_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_98.addFeatures(features_Multiuso_98);
var lyr_Multiuso_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_98, 
                style: style_Multiuso_98,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_98.png" /> Multiuso'
            });
var format_Veculos_99 = new ol.format.GeoJSON();
var features_Veculos_99 = format_Veculos_99.readFeatures(json_Veculos_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Veculos_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veculos_99.addFeatures(features_Veculos_99);
var lyr_Veculos_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Veculos_99, 
                style: style_Veculos_99,
                popuplayertitle: 'Veículos',
                interactive: true,
                title: '<img src="styles/legend/Veculos_99.png" /> Veículos'
            });
var format_Trigo_100 = new ol.format.GeoJSON();
var features_Trigo_100 = format_Trigo_100.readFeatures(json_Trigo_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Trigo_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trigo_100.addFeatures(features_Trigo_100);
var lyr_Trigo_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trigo_100, 
                style: style_Trigo_100,
                popuplayertitle: 'Trigo',
                interactive: true,
                title: '<img src="styles/legend/Trigo_100.png" /> Trigo'
            });
var format_Passageiros_101 = new ol.format.GeoJSON();
var features_Passageiros_101 = format_Passageiros_101.readFeatures(json_Passageiros_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Passageiros_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_101.addFeatures(features_Passageiros_101);
var lyr_Passageiros_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_101, 
                style: style_Passageiros_101,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_101.png" /> Passageiros'
            });
var format_ProdutosSiderrgicos_102 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_102 = format_ProdutosSiderrgicos_102.readFeatures(json_ProdutosSiderrgicos_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ProdutosSiderrgicos_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_102.addFeatures(features_ProdutosSiderrgicos_102);
var lyr_ProdutosSiderrgicos_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_102, 
                style: style_ProdutosSiderrgicos_102,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_102.png" /> Produtos Siderúrgicos'
            });
var format_ApoioLogsticoOffshore_103 = new ol.format.GeoJSON();
var features_ApoioLogsticoOffshore_103 = format_ApoioLogsticoOffshore_103.readFeatures(json_ApoioLogsticoOffshore_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ApoioLogsticoOffshore_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioLogsticoOffshore_103.addFeatures(features_ApoioLogsticoOffshore_103);
var lyr_ApoioLogsticoOffshore_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioLogsticoOffshore_103, 
                style: style_ApoioLogsticoOffshore_103,
                popuplayertitle: 'Apoio Logístico Offshore',
                interactive: true,
                title: '<img src="styles/legend/ApoioLogsticoOffshore_103.png" /> Apoio Logístico Offshore'
            });
var format_Offshore_104 = new ol.format.GeoJSON();
var features_Offshore_104 = format_Offshore_104.readFeatures(json_Offshore_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Offshore_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offshore_104.addFeatures(features_Offshore_104);
var lyr_Offshore_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offshore_104, 
                style: style_Offshore_104,
                popuplayertitle: 'Offshore',
                interactive: true,
                title: '<img src="styles/legend/Offshore_104.png" /> Offshore'
            });
var format_CargaGeraleGranelSlido_105 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_105 = format_CargaGeraleGranelSlido_105.readFeatures(json_CargaGeraleGranelSlido_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleGranelSlido_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_105.addFeatures(features_CargaGeraleGranelSlido_105);
var lyr_CargaGeraleGranelSlido_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_105, 
                style: style_CargaGeraleGranelSlido_105,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_105.png" /> Carga Geral e Granel Sólido'
            });
var format_CargaGeraleOffshore_106 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_106 = format_CargaGeraleOffshore_106.readFeatures(json_CargaGeraleOffshore_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeraleOffshore_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_106.addFeatures(features_CargaGeraleOffshore_106);
var lyr_CargaGeraleOffshore_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_106, 
                style: style_CargaGeraleOffshore_106,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_106.png" /> Carga Geral e Offshore'
            });
var format_CargaGeral_107 = new ol.format.GeoJSON();
var features_CargaGeral_107 = format_CargaGeral_107.readFeatures(json_CargaGeral_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CargaGeral_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_107.addFeatures(features_CargaGeral_107);
var lyr_CargaGeral_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_107, 
                style: style_CargaGeral_107,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_107.png" /> Carga Geral'
            });
var format_GranisLquidos_108 = new ol.format.GeoJSON();
var features_GranisLquidos_108 = format_GranisLquidos_108.readFeatures(json_GranisLquidos_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranisLquidos_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_108.addFeatures(features_GranisLquidos_108);
var lyr_GranisLquidos_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_108, 
                style: style_GranisLquidos_108,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_108.png" /> Granéis Líquidos'
            });
var format_GranisSlidos_109 = new ol.format.GeoJSON();
var features_GranisSlidos_109 = format_GranisSlidos_109.readFeatures(json_GranisSlidos_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_GranisSlidos_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_109.addFeatures(features_GranisSlidos_109);
var lyr_GranisSlidos_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_109, 
                style: style_GranisSlidos_109,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_109.png" /> Granéis Sólidos'
            });
var format_Contineres_110 = new ol.format.GeoJSON();
var features_Contineres_110 = format_Contineres_110.readFeatures(json_Contineres_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Contineres_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_110.addFeatures(features_Contineres_110);
var lyr_Contineres_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_110, 
                style: style_Contineres_110,
                popuplayertitle: 'Contêineres ',
                interactive: true,
                title: '<img src="styles/legend/Contineres_110.png" /> Contêineres '
            });
var format_Multiuso_111 = new ol.format.GeoJSON();
var features_Multiuso_111 = format_Multiuso_111.readFeatures(json_Multiuso_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Multiuso_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_111.addFeatures(features_Multiuso_111);
var lyr_Multiuso_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_111, 
                style: style_Multiuso_111,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_111.png" /> Multiuso'
            });
var format_Veculos_112 = new ol.format.GeoJSON();
var features_Veculos_112 = format_Veculos_112.readFeatures(json_Veculos_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Veculos_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veculos_112.addFeatures(features_Veculos_112);
var lyr_Veculos_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Veculos_112, 
                style: style_Veculos_112,
                popuplayertitle: 'Veículos',
                interactive: true,
                title: '<img src="styles/legend/Veculos_112.png" /> Veículos'
            });
var format_Trigo_113 = new ol.format.GeoJSON();
var features_Trigo_113 = format_Trigo_113.readFeatures(json_Trigo_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Trigo_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trigo_113.addFeatures(features_Trigo_113);
var lyr_Trigo_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trigo_113, 
                style: style_Trigo_113,
                popuplayertitle: 'Trigo',
                interactive: true,
                title: '<img src="styles/legend/Trigo_113.png" /> Trigo'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_114 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_114 = format_reasAfetassOperaesPorturiasLongoPrazo_114.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_114.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_114);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_114, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_114,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_114.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_115 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_115 = format_reasAfetassOperaesPorturiasMdioPrazo_115.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_115.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_115);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_115, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_115,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_115.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_116 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_116 = format_reasAfetassOperaesPorturiasCurtoPrazo_116.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_116.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_116);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_116, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_116,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_116.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_117 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_117 = format_reasAfetassOperaesPorturiasSituaoAtual_117.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_117.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_117);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_117, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_117,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_117.png" /> Áreas Afetas às Operações Portuárias - Situação Atual'
            });
var format_PoligonaldareadoPortoOrganizadodoRioJaneiro_118 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodoRioJaneiro_118 = format_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.readFeatures(json_PoligonaldareadoPortoOrganizadodoRioJaneiro_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PoligonaldareadoPortoOrganizadodoRioJaneiro_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.addFeatures(features_PoligonaldareadoPortoOrganizadodoRioJaneiro_118);
var lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodoRioJaneiro_118, 
                style: style_PoligonaldareadoPortoOrganizadodoRioJaneiro_118,
                popuplayertitle: 'Poligonal da Área do Porto Organizado do Rio Janeiro',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodoRioJaneiro_118.png" /> Poligonal da Área do Porto Organizado do Rio Janeiro'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_114,lyr_reasAfetassOperaesPorturiasMdioPrazo_115,lyr_reasAfetassOperaesPorturiasCurtoPrazo_116,lyr_reasAfetassOperaesPorturiasSituaoAtual_117,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_Passageiros_101,lyr_ProdutosSiderrgicos_102,lyr_ApoioLogsticoOffshore_103,lyr_Offshore_104,lyr_CargaGeraleGranelSlido_105,lyr_CargaGeraleOffshore_106,lyr_CargaGeral_107,lyr_GranisLquidos_108,lyr_GranisSlidos_109,lyr_Contineres_110,lyr_Multiuso_111,lyr_Veculos_112,lyr_Trigo_113,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_88,lyr_ProdutosSiderrgicos_89,lyr_ApoioLogsticoOffshore_90,lyr_Offshore_91,lyr_CargaGeraleGranelSlido_92,lyr_CargaGeraleApoioOffshore_93,lyr_CargaGeraleOffshore_94,lyr_GranisLquidos_95,lyr_GranelSlido_96,lyr_Contineres_97,lyr_Multiuso_98,lyr_Veculos_99,lyr_Trigo_100,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_75,lyr_ProdutosSiderrgicos_76,lyr_ApoioLogsticoOffshore_77,lyr_Offshore_78,lyr_CargaGeraleGranelSlido_79,lyr_CargaGeraleApoioOffshore_80,lyr_CargaGeraleOffshore_81,lyr_GranisLquidos_82,lyr_GranelSlido_83,lyr_Contineres_84,lyr_Multiuso_85,lyr_Veculos_86,lyr_Trigo_87,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_60,lyr_ProdutosSiderrgicos_61,lyr_DieselMartimoeBunker_62,lyr_ApoioLogsticoOffshore_63,lyr_Offshore_64,lyr_CargaGeraleApoioOffshore_65,lyr_CargaGeraleOffshore_66,lyr_CargaGeraleGranelSlido_67,lyr_GranisLquidosCargaGeraleReparonaval_68,lyr_GranisLquidos_69,lyr_GranelSlido_70,lyr_Contineres_71,lyr_Multiuso_72,lyr_Veculos_73,lyr_Trigo_74,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_48,lyr_ArmazenagemMdioPrazo_49,lyr_ArmazenagemCurtoPrazo_50,lyr_ArmazenagemSituaoAtual_51,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_TerminaldePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageirosLongoPrazo_44,lyr_TerminaisdePassageirosMdioPrazo_45,lyr_TerminaisdePassageirosCurtoPrazo_46,lyr_TerminaisdePassageirosSituaoAtual_47,],
                                fold: 'open',
                                title: 'Terminal de Passageiros '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_40,lyr_AcostagemMdioPrazo_41,lyr_AcostagemCurtoPrazo_42,lyr_AcostagemSituaoAtual_43,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_27,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_26,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_22,lyr_AcessosRodoviriosInternosMdioPrazo_23,lyr_AcessosRodoviriosInternosCurtoPrazo_24,lyr_AcessosRodoviriosInternosSituaoAtual_25,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_21,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_17,lyr_AcessosFerroviriosInternosMdioPrazo_18,lyr_AcessosFerroviriosInternosCurtoPrazo_19,lyr_AcessosFerroviriosInternosSituaoAtual_20,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_16,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_12,lyr_CanaisdeAcessoMdioPrazo_13,lyr_CanaisdeAcessoCurtoPrazo_14,lyr_CanaisdeAcessoSituaoAtual_15,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_8,lyr_BaciasdeEvoluoMdioPrazo_9,lyr_BaciasdeEvoluoCurtoPrazo_10,lyr_BaciasdeEvoluoSituaoAtual_11,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_4,lyr_FundeadourosMdioPrazo_5,lyr_FundeadourosCurtoPrazo_6,lyr_FundeadourosSituaoAtual_7,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_3,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_2,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});
var group_ImveisTombados = new ol.layer.Group({
                                layers: [lyr_ImveisTombados_1,],
                                fold: 'open',
                                title: 'Imóveis Tombados '});

lyr_GoogleSatellite_0.setVisible(true);lyr_ImveisTombados_1.setVisible(false);lyr_UnidadesdeConservao_2.setVisible(false);lyr_reasUrbanaseRurais_3.setVisible(false);lyr_FundeadourosLongoPrazo_4.setVisible(false);lyr_FundeadourosMdioPrazo_5.setVisible(false);lyr_FundeadourosCurtoPrazo_6.setVisible(false);lyr_FundeadourosSituaoAtual_7.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_8.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_9.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_10.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_11.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_12.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_13.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_14.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_15.setVisible(false);lyr_AcessosDutoviriosExternos_16.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_18.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_19.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_20.setVisible(false);lyr_AcessosFerroviriosExternos_21.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_23.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_24.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_25.setVisible(false);lyr_AcessosRodoviriosExternos_26.setVisible(false);lyr_reaseInstalaesAlfandegadas_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.setVisible(false);lyr_AcostagemLongoPrazo_40.setVisible(false);lyr_AcostagemMdioPrazo_41.setVisible(false);lyr_AcostagemCurtoPrazo_42.setVisible(false);lyr_AcostagemSituaoAtual_43.setVisible(false);lyr_TerminaisdePassageirosLongoPrazo_44.setVisible(false);lyr_TerminaisdePassageirosMdioPrazo_45.setVisible(false);lyr_TerminaisdePassageirosCurtoPrazo_46.setVisible(false);lyr_TerminaisdePassageirosSituaoAtual_47.setVisible(false);lyr_ArmazenagemLongoPrazo_48.setVisible(false);lyr_ArmazenagemMdioPrazo_49.setVisible(false);lyr_ArmazenagemCurtoPrazo_50.setVisible(false);lyr_ArmazenagemSituaoAtual_51.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.setVisible(false);lyr_Passageiros_60.setVisible(false);lyr_ProdutosSiderrgicos_61.setVisible(false);lyr_DieselMartimoeBunker_62.setVisible(false);lyr_ApoioLogsticoOffshore_63.setVisible(false);lyr_Offshore_64.setVisible(false);lyr_CargaGeraleApoioOffshore_65.setVisible(false);lyr_CargaGeraleOffshore_66.setVisible(false);lyr_CargaGeraleGranelSlido_67.setVisible(false);lyr_GranisLquidosCargaGeraleReparonaval_68.setVisible(false);lyr_GranisLquidos_69.setVisible(false);lyr_GranelSlido_70.setVisible(false);lyr_Contineres_71.setVisible(false);lyr_Multiuso_72.setVisible(false);lyr_Veculos_73.setVisible(false);lyr_Trigo_74.setVisible(false);lyr_Passageiros_75.setVisible(false);lyr_ProdutosSiderrgicos_76.setVisible(false);lyr_ApoioLogsticoOffshore_77.setVisible(false);lyr_Offshore_78.setVisible(false);lyr_CargaGeraleGranelSlido_79.setVisible(false);lyr_CargaGeraleApoioOffshore_80.setVisible(false);lyr_CargaGeraleOffshore_81.setVisible(false);lyr_GranisLquidos_82.setVisible(false);lyr_GranelSlido_83.setVisible(false);lyr_Contineres_84.setVisible(false);lyr_Multiuso_85.setVisible(false);lyr_Veculos_86.setVisible(false);lyr_Trigo_87.setVisible(false);lyr_Passageiros_88.setVisible(false);lyr_ProdutosSiderrgicos_89.setVisible(false);lyr_ApoioLogsticoOffshore_90.setVisible(false);lyr_Offshore_91.setVisible(false);lyr_CargaGeraleGranelSlido_92.setVisible(false);lyr_CargaGeraleApoioOffshore_93.setVisible(false);lyr_CargaGeraleOffshore_94.setVisible(false);lyr_GranisLquidos_95.setVisible(false);lyr_GranelSlido_96.setVisible(false);lyr_Contineres_97.setVisible(false);lyr_Multiuso_98.setVisible(false);lyr_Veculos_99.setVisible(false);lyr_Trigo_100.setVisible(false);lyr_Passageiros_101.setVisible(false);lyr_ProdutosSiderrgicos_102.setVisible(false);lyr_ApoioLogsticoOffshore_103.setVisible(false);lyr_Offshore_104.setVisible(false);lyr_CargaGeraleGranelSlido_105.setVisible(false);lyr_CargaGeraleOffshore_106.setVisible(false);lyr_CargaGeral_107.setVisible(false);lyr_GranisLquidos_108.setVisible(false);lyr_GranisSlidos_109.setVisible(false);lyr_Contineres_110.setVisible(false);lyr_Multiuso_111.setVisible(false);lyr_Veculos_112.setVisible(false);lyr_Trigo_113.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_114.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_115.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_117.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_ImveisTombados,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_TerminaldePassageiros,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_ImveisTombados_1.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Inst.Legal': 'Instrumento Legal ', 'Id': 'Id', });
lyr_UnidadesdeConservao_2.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Inst.Legal': 'Instrumento Legal ', });
lyr_reasUrbanaseRurais_3.set('fieldAliases', {'Id': 'Id', 'Tipo': 'Tipo de Área ', 'Ins_Legal': 'Instrumento Legal ', 'Área': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_4.set('fieldAliases', {'Funcao': 'Função ', 'N. Ident.': 'Número de Identificação ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_5.set('fieldAliases', {'Funcao': 'Função ', 'N. Ident.': 'Número de Identificação ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_6.set('fieldAliases', {'Funcao': 'Função ', 'N. Ident.': 'Número de Identificação ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_7.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_8.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_9.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_10.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_11.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_12.set('fieldAliases', {'id': 'id', 'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_13.set('fieldAliases', {'id': 'id', 'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_14.set('fieldAliases', {'id': 'id', 'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_15.set('fieldAliases', {'id': 'id', 'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosDutoviriosExternos_16.set('fieldAliases', {'Nome': 'Nome', 'MatTransp': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'TipoDuto': 'Tipo de Duto ', 'Id': 'Id', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_21.set('fieldAliases', {'Id': 'Id', 'Linha': 'Linha', 'Descricao': 'Descrição ', 'Operador': 'Operador', 'Trecho': 'Trecho', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldAliases', {'id': 'id', 'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldAliases', {'id': 'id', 'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldAliases', {'id': 'id', 'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldAliases', {'id': 'id', 'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_26.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', 'Legenda': 'Legenda', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', 'Id': 'Id', 'Legenda': 'Legenda', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldAliases', {'Id_1': 'Id_1', 'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldAliases', {'Id_1': 'Id_1', 'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldAliases', {'Id_1': 'Id_1', 'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldAliases', {'Id_1': 'Id_1', 'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Área': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Id': 'Id', 'Destinacao': 'Destinação ', });
lyr_AcostagemLongoPrazo_40.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const.': 'Características Construtivas ', 'Compr': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_41.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const.': 'Características Construtivas ', 'Compr': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_42.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const.': 'Características Construtivas ', 'Compr': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_43.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const.': 'Características Construtivas ', 'Compr': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_TerminaisdePassageirosLongoPrazo_44.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosMdioPrazo_45.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosCurtoPrazo_46.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosSituaoAtual_47.set('fieldAliases', {'Id': 'Id', 'Nome': 'Nome', 'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', });
lyr_ArmazenagemLongoPrazo_48.set('fieldAliases', {'Id': 'Id', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemMdioPrazo_49.set('fieldAliases', {'Id': 'Id', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemCurtoPrazo_50.set('fieldAliases', {'Id': 'Id', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemSituaoAtual_51.set('fieldAliases', {'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Id': 'Id', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.set('fieldAliases', {'Id': 'Id', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_Passageiros_60.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_ProdutosSiderrgicos_61.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_DieselMartimoeBunker_62.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_ApoioLogsticoOffshore_63.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Offshore_64.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleApoioOffshore_65.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleOffshore_66.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleGranelSlido_67.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranisLquidosCargaGeraleReparonaval_68.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranisLquidos_69.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelSlido_70.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Contineres_71.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multiuso_72.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Veculos_73.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Trigo_74.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Passageiros_75.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_ProdutosSiderrgicos_76.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_ApoioLogsticoOffshore_77.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Offshore_78.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleGranelSlido_79.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleApoioOffshore_80.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleOffshore_81.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranisLquidos_82.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelSlido_83.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Contineres_84.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multiuso_85.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Veculos_86.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Trigo_87.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Passageiros_88.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_ProdutosSiderrgicos_89.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_ApoioLogsticoOffshore_90.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Offshore_91.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleGranelSlido_92.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleApoioOffshore_93.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CargaGeraleOffshore_94.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranisLquidos_95.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_GranelSlido_96.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Contineres_97.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Multiuso_98.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Veculos_99.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Trigo_100.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_Passageiros_101.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ProdutosSiderrgicos_102.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação', });
lyr_ApoioLogsticoOffshore_103.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação', });
lyr_Offshore_104.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeraleGranelSlido_105.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeraleOffshore_106.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeral_107.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisLquidos_108.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_109.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Contineres_110.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multiuso_111.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Veculos_112.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação', });
lyr_Trigo_113.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_114.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_115.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_117.set('fieldAliases', {'Id': 'Id', 'Id_1': 'Id_1', 'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.set('fieldAliases', {'ID': 'ID', 'Ins_Legal': 'Instrumento Legal', 'Anexo': 'Anexo', });
lyr_ImveisTombados_1.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Inst.Legal': 'TextEdit', 'Id': 'TextEdit', });
lyr_UnidadesdeConservao_2.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Inst.Legal': 'TextEdit', });
lyr_reasUrbanaseRurais_3.set('fieldImages', {'Id': 'Range', 'Tipo': 'TextEdit', 'Ins_Legal': 'TextEdit', 'Área': 'TextEdit', });
lyr_FundeadourosLongoPrazo_4.set('fieldImages', {'Funcao': 'TextEdit', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_5.set('fieldImages', {'Funcao': 'TextEdit', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_6.set('fieldImages', {'Funcao': 'TextEdit', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_7.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_8.set('fieldImages', {'Id': '', 'Nome': '', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_9.set('fieldImages', {'Id': '', 'Nome': '', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_10.set('fieldImages', {'Id': '', 'Nome': '', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_11.set('fieldImages', {'Id': '', 'Nome': '', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_12.set('fieldImages', {'id': '', 'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_13.set('fieldImages', {'id': '', 'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_14.set('fieldImages', {'id': '', 'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_15.set('fieldImages', {'id': '', 'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosDutoviriosExternos_16.set('fieldImages', {'Nome': 'TextEdit', 'MatTransp': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'TipoDuto': 'TextEdit', 'Id': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldImages', {'Id': '', 'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldImages', {'Id': '', 'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldImages', {'Id': '', 'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldImages', {'Id': '', 'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosExternos_21.set('fieldImages', {'Id': '', 'Linha': 'TextEdit', 'Descricao': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldImages', {'id': 'Range', 'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldImages', {'id': 'Range', 'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldImages', {'id': 'Range', 'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldImages', {'id': 'Range', 'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosExternos_26.set('fieldImages', {'id': '', 'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Legenda': '', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldImages', {'Inst_Legal': 'TextEdit', 'Id': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldImages', {'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldImages', {'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldImages', {'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldImages', {'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'Área': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', 'Destinacao': 'TextEdit', });
lyr_AcostagemLongoPrazo_40.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const.': 'TextEdit', 'Compr': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_41.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const.': 'TextEdit', 'Compr': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_42.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const.': 'TextEdit', 'Compr': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_43.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const.': 'TextEdit', 'Compr': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_TerminaisdePassageirosLongoPrazo_44.set('fieldImages', {'Id': 'Range', 'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_TerminaisdePassageirosMdioPrazo_45.set('fieldImages', {'Id': 'Range', 'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_TerminaisdePassageirosCurtoPrazo_46.set('fieldImages', {'Id': 'Range', 'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_TerminaisdePassageirosSituaoAtual_47.set('fieldImages', {'Id': 'Range', 'Nome': 'TextEdit', 'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_48.set('fieldImages', {'Id': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_49.set('fieldImages', {'Id': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_50.set('fieldImages', {'Id': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_51.set('fieldImages', {'Capacidade': 'TextEdit', 'Volume': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Id': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.set('fieldImages', {'Id': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_Passageiros_60.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ProdutosSiderrgicos_61.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_DieselMartimoeBunker_62.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ApoioLogsticoOffshore_63.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Offshore_64.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleApoioOffshore_65.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleOffshore_66.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleGranelSlido_67.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranisLquidosCargaGeraleReparonaval_68.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranisLquidos_69.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSlido_70.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Contineres_71.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multiuso_72.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Veculos_73.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Trigo_74.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Passageiros_75.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ProdutosSiderrgicos_76.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ApoioLogsticoOffshore_77.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Offshore_78.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleGranelSlido_79.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleApoioOffshore_80.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleOffshore_81.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranisLquidos_82.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSlido_83.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Contineres_84.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multiuso_85.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Veculos_86.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Trigo_87.set('fieldImages', {'fid': '', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': '', 'Perfil': '', 'T_Instal': '', });
lyr_Passageiros_88.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ProdutosSiderrgicos_89.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_ApoioLogsticoOffshore_90.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Offshore_91.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleGranelSlido_92.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleApoioOffshore_93.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CargaGeraleOffshore_94.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranisLquidos_95.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_GranelSlido_96.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Contineres_97.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Multiuso_98.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Veculos_99.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Trigo_100.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_Passageiros_101.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ProdutosSiderrgicos_102.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ApoioLogsticoOffshore_103.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Offshore_104.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeraleGranelSlido_105.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeraleOffshore_106.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeral_107.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisLquidos_108.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_109.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Contineres_110.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multiuso_111.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Veculos_112.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Trigo_113.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_114.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_115.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_117.set('fieldImages', {'Id': 'TextEdit', 'Id_1': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.set('fieldImages', {'ID': 'TextEdit', 'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_ImveisTombados_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Inst.Legal': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_UnidadesdeConservao_2.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Inst.Legal': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_3.set('fieldLabels', {'Id': 'hidden field', 'Tipo': 'inline label - visible with data', 'Ins_Legal': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_4.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_5.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_6.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_7.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_8.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_9.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_10.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_11.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_12.set('fieldLabels', {'id': 'hidden field', 'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_13.set('fieldLabels', {'id': 'hidden field', 'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_14.set('fieldLabels', {'id': 'hidden field', 'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_15.set('fieldLabels', {'id': 'hidden field', 'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'MatTransp': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'TipoDuto': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_21.set('fieldLabels', {'Id': 'hidden field', 'Linha': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldLabels', {'id': 'hidden field', 'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldLabels', {'id': 'hidden field', 'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldLabels', {'id': 'hidden field', 'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldLabels', {'id': 'hidden field', 'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_26.set('fieldLabels', {'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', 'Legenda': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_27.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', 'Id': 'hidden field', 'Legenda': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_32.set('fieldLabels', {'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_33.set('fieldLabels', {'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_34.set('fieldLabels', {'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_35.set('fieldLabels', {'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', 'Destinacao': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_40.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const.': 'inline label - visible with data', 'Compr': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_41.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const.': 'inline label - visible with data', 'Compr': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_42.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const.': 'inline label - visible with data', 'Compr': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_43.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const.': 'inline label - visible with data', 'Compr': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_TerminaisdePassageirosLongoPrazo_44.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_TerminaisdePassageirosMdioPrazo_45.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_TerminaisdePassageirosCurtoPrazo_46.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_TerminaisdePassageirosSituaoAtual_47.set('fieldLabels', {'Id': 'hidden field', 'Nome': 'inline label - visible with data', 'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_48.set('fieldLabels', {'Id': 'hidden field', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_49.set('fieldLabels', {'Id': 'hidden field', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_50.set('fieldLabels', {'Id': 'hidden field', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_51.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_56.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_57.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_58.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Id': 'hidden field', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_59.set('fieldLabels', {'Id': 'hidden field', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_Passageiros_60.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_61.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_DieselMartimoeBunker_62.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ApoioLogsticoOffshore_63.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Offshore_64.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleApoioOffshore_65.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_66.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_67.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranisLquidosCargaGeraleReparonaval_68.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranisLquidos_69.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSlido_70.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Contineres_71.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multiuso_72.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Veculos_73.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Trigo_74.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Passageiros_75.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_76.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ApoioLogsticoOffshore_77.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Offshore_78.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_79.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleApoioOffshore_80.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_81.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranisLquidos_82.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSlido_83.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Contineres_84.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multiuso_85.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Veculos_86.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Trigo_87.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Passageiros_88.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_89.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_ApoioLogsticoOffshore_90.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Offshore_91.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_92.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleApoioOffshore_93.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_94.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranisLquidos_95.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_GranelSlido_96.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Contineres_97.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Multiuso_98.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Veculos_99.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Trigo_100.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_Passageiros_101.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_102.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ApoioLogsticoOffshore_103.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Offshore_104.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_105.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_106.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeral_107.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisLquidos_108.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_109.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Contineres_110.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multiuso_111.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Veculos_112.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Trigo_113.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_114.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_115.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_117.set('fieldLabels', {'Id': 'hidden field', 'Id_1': 'hidden field', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.set('fieldLabels', {'ID': 'hidden field', 'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodoRioJaneiro_118.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});