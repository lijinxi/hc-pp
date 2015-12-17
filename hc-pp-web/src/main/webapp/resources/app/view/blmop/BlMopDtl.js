/**
 * Description: 生产计划单从表(manufacture_order_proposed)(default) All rights
 * Reserved, Designed ByHc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 * 
 * @author: zhangyk
 * @date: 2015-04-24 14:30:17
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmop.BlMopDtl', {
	extend : 'Hc_Common.view.BaseBillDetailPage',
	alias : 'widget.blmopdtl',
	requires : ['Hc_pp.model.BlMopDtl', 'Hc_pp.model.BlMop',
			'Hc_pp.view.blmop.BlMopDtlController',
			'Hc_pp.view.blmop.BlMopDtlModel'],
	controller : 'blmopdtl',
	viewModel : {
		type : 'blmopdtl'
	},
	initComponent : function() {
		var me = this;
		
		Ext.apply(me, {
					billItems : [{
			            	fieldLabel: '品牌编号',
			            	name: 'brandNo',
			            	bind: {
			            		value: '{billRow.brandNo}'
			            	},
			            	xtype: 'searchhelpfield',
			            	allowBlank: false,
			            	winTitle: '选择品牌',
			            	gridColumns: [{dataIndex: 'brandNo',text: '品牌编号',flex: 0.5}, 
			            		{dataIndex: 'brandCname', text: '品牌名称   ', flex: 0.5},
			            		{dataIndex: 'divisionNo', text: '事业部编号', flex: 0.5},
			            		{dataIndex: 'divisionName', text: '事业部名称', flex: 0.5}
			            	],
			            	searchItems: [{name: 'brandNo', fieldLabel: '品牌编号'},
			            		{name: 'brandCname', fieldLabel: '品牌名称'}
			            	],
			            	otherFields: 'brandCname,divisionNo,divisionName',
			            	url: Hc.mdmPath + 'bas_brand_relation/listvo.json?selectVoName=SelectListByVoBasBrandRelation'
			            }, {
			            	fieldLabel: '品牌名称',
			            	name: 'brandCname',
			            	xtype: 'textfield',
			            	readOnly: true,
			            	editable: false
			            }, {
			            	fieldLabel: '事业部编码',
			            	name: 'divisionNo',
			            	xtype: 'textfield',
			            	hidden: true
			            }, {
			            	fieldLabel: '事业部',
			            	name: 'divisionName',
			            	xtype: 'textfield'
			            }, {
						xtype : 'textfield',
						fieldLabel : '销售订单号',
						name : 'coNo',
						bind : {
							value : '{billRow.coNo}'
						}
					}, {
						fieldLabel : '单据来源',
						name : 'mopSource',
						xtype : 'extcombox',
						bind : {
							value : '{billRow.mopSource}'
						},
						displayvalue : "0=手工新增:1=MRP",
						width : '100%'
					}],
					
					billLoadUrl : Hc.ppsPath + 'bl_mop/list.json',
					billSaveUrl : Hc.ppsPath + 'bl_mop/saveSizeHorizontalData.json',
					billAuditUrl : Hc.ppsPath + 'bl_mop/audit.json',
					billExportUrl : Hc.ppsPath + 'bl_mop/do_export.json',
					billModel : 'Hc_pp.model.BlMop',
					billSubGrid : ['mastergrid'],
					hasStatus2 : true,
					billType : 'bl-mop',
					gridColumns : [{
								dataIndex : 'lineId',
								text : '序号'
							},

							{
								dataIndex : 'materialNo',
								text : '物料编码',
								editor : {
									allowBlank : false,
									xtype : 'searchhelpfield', // 数据精灵类
									name : 'materialNo',
									reference : 'materialNo',
									gridColumns : [{ // 弹出框网格的列
										dataIndex : 'materialNo',
										text : '物料编码',
										flex : 0.5
									}, {
										dataIndex : 'materialName',
										text : '物料名称',
										flex : 0.5
									}],
									searchItems : [{
												name : 'materialNo',
												fieldLabel : '物料编码'
											}, {
												name : 'materialName',
												fieldLabel : '物料名称'
											}], // 弹出框的查询面板
									isAutoLoad : false,
									url : Hc.mdmPath
											+ 'bas_material/list.json',
									allowBlank : false
								}
							}, {
								dataIndex : 'startDate',
								text : '计划开工日期',
								editor : {
									allowBlank : false
								}
							}, {
								dataIndex : 'endDate',
								text : '计划完工日期'
							}, {
								dataIndex : 'planer',
								text : '计划员',
								editor : {
									allowBlank : true
								}
							}, {
								dataIndex : 'scheduleNo',
								text : '排程号',
								editor : {
									allowBlank : true
								}
							}, {
								dataIndex : 'groupNo',
								text : '面部小组',
								editor : {
									allowBlank : true
								}

							}, {
								dataIndex : 'bomPurpose',
								text : 'BOM用途'
							}, {
								dataIndex : 'sizeTypeNo',
								text : '配码组'
							}, {
								dataIndex : 'sizeNo',
								text : '尺码'
							}, {
								dataIndex : 'sizeQty',
								text : '尺码数量',
								editor : {
									allowBlank : false
								}
							}, {
								dataIndex : 'remarks',
								text : '备注',
								editor : {
									allowBlank : true
								}
							}, {
								dataIndex : 'workshopNo',
								text : '车间'
							}, {
								dataIndex : 'coLineNo',
								text : '销售订单行号'
							}, {
								dataIndex : 'factoryNo',
								text : '厂区编号'
							}],
					gridPrimaryKey : 'lineId',
					gridModel : 'Hc_pp.model.BlMopDtl',
					gridLoadUrl : Hc.ppsPath + 'bl_mop_dtl/listvo.json',
					gridMSizeIdx : 5
				});

		me.callParent();
	}
});
