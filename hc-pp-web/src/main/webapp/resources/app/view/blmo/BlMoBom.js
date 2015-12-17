/**
 * Description: 工单BOM表(manufacture_order_bom)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmo.BlMoBom', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blmobom',
	requires: [
	    'Hc_pp.model.BlMo',
		'Hc_pp.model.BlMoBom',
		'Hc_pp.view.blmo.BlMoBomController',
		'Hc_pp.view.blmo.BlMoBomModel'
	],
	controller: 'blmobom',
	viewModel: {
		type: 'blmobom'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			billItems: [
			            {
			            	name: 'moMoStatus', 
			            	fieldLabel: '工单状态', 
			            	xtype: 'extcombox',
			            	bind: {value: '{billRow.moMoStatus}'},
			            	displayvalue:"40=确认:41=部分汇报:500=完结"
			            },
			            {name: 'billNo', fieldLabel: '工单号',xtype: 'textfield',bind: {value: '{billRow.billNo}'}},
			            {
			            	name: 'factoryNo', 
			            	fieldLabel: '厂区',
			            	xtype: 'extcombox',
			            	bind: {value: '{billRow.factoryNo}'},
						   displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
						   displaymember: 'factoryName',
						   valuemember: 'factoryNo'
			            },	            
			            {
			               fieldLabel: '事业部',
						   name: 'divisionNo',
						   xtype: 'extcombox',
						   bind: {value: '{billRow.divisionNo}'},
						   displayvalue: Hc.mdmPath + 'bas_division/listAll.json',				   
						   displaymember: 'divisionName',
						   valuemember: 'divisionNo'
		                },
			            {
		                	name: 'brandNo', 
		                	fieldLabel: '品牌',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.brandNo}'},
						   displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
						   displaymember: 'brandCname',
						   valuemember: 'brandNo'
		                	
		                },
			            {
		                	name: 'storeNo', 
		                	fieldLabel: '仓库',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.storeNo}'},
		                	displayvalue:Hc.mdmPath + 'bas_store/listAll.json',
							displaymember: 'storeName',
							valuemember: 'storeNo'
		                },
			            {
		                	name: 'workshopNo', 
		                	fieldLabel: '车间',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.workshopNo}'},
		                	displayvalue:Hc.mdmPath + 'bas_workshop/listAll.json',
							   displaymember: 'workshopName',
							   valuemember: 'workshopNo'
		                },
			            {
		                	name: 'groupNo', 
		                	fieldLabel: '面部小组',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.groupNo}'},
		                	displayvalue:"百丽面部小组"
		                },
			            {name: 'planer', fieldLabel: '计划员',xtype: 'textfield',bind: {value: '{billRow.planer}'}},
			            {name: 'scheduleNo', fieldLabel: '排程号',xtype: 'textfield',bind: {value: '{billRow.scheduleNo}'}},
			            {name: 'startDate', fieldLabel: '开工日期',xtype: 'datefield',bind: {value: '{billRow.startDate}'}},
			            {name: 'endDate', fieldLabel: '完工日期',xtype: 'datefield',bind: {value: '{billRow.endDate}'}},
			            {name: 'materialNo', fieldLabel: '产品编码',xtype: 'textfield',bind: {value: '{billRow.materialNo}'}},
			            {name: 'workOrderType', fieldLabel: '工单类型',xtype: 'textfield',bind: {value: '{billRow.workOrderType}'}},
			            {name: 'customerType', fieldLabel: '客户类型',xtype: 'textfield',bind: {value: '{billRow.customerType}'}},
/*			            {
			            	name: 'moMaterialStatus', 
			            	fieldLabel: '物料状态',
			            	xtype: 'extcombox',
			            	bind: {value: '{billRow.brandNo}'},
			            	displayvalue:"50确认:51分配:52拣货:500完结"
			            },
			            {
			            	name: 'moProcessStatus', 
			            	fieldLabel: '工序状态',
			            	xtype: 'textfield',
			            	bind: {value: '{billRow.brandNo}'},
			            	displayvalue:"60确认:61部分汇报:500完结"
			            },*/
			            {name: 'sizeTypeNo', fieldLabel: '配码组',xtype: 'textfield',bind: {value: '{billRow.sizeTypeNo}'}},
			            {name: 'sizeNo', fieldLabel: '尺码',xtype: 'textfield',bind: {value: '{billRow.sizeNo}'}},
			            {name: 'sizeQty', fieldLabel: '工单数量',xtype: 'textfield',bind: {value: '{billRow.sizeQty}'}},
			            {name: 'finishQty', fieldLabel: '完工数',xtype: 'textfield',bind: {value: '{billRow.finishQty}'}},
			            {name: 'remarks', fieldLabel: '备注',xtype: 'textfield',bind: {value: '{billRow.remarks}'}}
			            ],
						   billLoadUrl: Hc.ppsPath + 'bl_mo_bom/list.json',
						   billSaveUrl: Hc.ppsPath + 'bl_mo_bom/saveSizeHorizontalData.json',//'bl_co/saveMasterCustomerList.json',
						   billAuditUrl: Hc.ppsPath + 'bl_mo_bom/audit.json',
						   billExportUrl: Hc.ppsPath + 'bl_mo_bom/do_export.json',
						   billModel: 'Hc_pp.model.BlMoBom',
						   billSubGrid: ['mastergrid'],
						   hasStatus2: true,
			     gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true, editor: {allowBlank: false}},
/*				{dataIndex: 'factoryNo', text: '厂区编号', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'storeNo', text: '仓库编号', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: false}},
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},*/
				
				{dataIndex: 'billNo', text: '工单号', hidden:true, editor: {allowBlank: false}},
				{dataIndex: 'productNo', text: '产品编码', hidden:true, editor: {allowBlank: true}},
				{dataIndex: 'seqNo', text: '序号'},
				{dataIndex: 'childSeqNo', text: '子序号'},
				{dataIndex: 'materialPurpose', text: '物料用途', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '物料编码', editor: {allowBlank: true}},
				{dataIndex: '', text: '物料名称', editor: {allowBlank: true}},
				{dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: true}},
				{dataIndex: 'unitNo', text: '单位', editor: {allowBlank: false}},
				{dataIndex: 'unitQty', text: '单用量', editor: {allowBlank: false}},
				{dataIndex: 'sumQty', text: '总用量'},
				{dataIndex: 'assignedQty', text: '已分配量'},
				{dataIndex: 'issuedQty', text: '已发料量'},
				{dataIndex: 'unissuedQty', text: '未发料量'},
				{dataIndex: 'moIssuedStatus', text: '发料状态'},/*(取字典mo_issued_status ，50确认,51分配,52拣货,53发料,500完结)*/
				{dataIndex: 'pickingOrderNo', text: '拣货单号'},
				{dataIndex: 'issuedStoreNo', text: '发料仓库', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false}}
			],
			   gridPrimaryKey: 'lineId',
			   gridModel: 'Hc_pp.model.BlMoBom',
			   gridLoadUrl: Hc.ppsPath + 'bl_mo_bom/list.json',
			   gridMSizeIdx:5
		});
		me.callParent();
	}
});
