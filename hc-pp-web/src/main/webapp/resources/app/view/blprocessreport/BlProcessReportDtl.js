/**
 * Description: 工序汇报从表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blprocessreport.BlProcessReportDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blprocessreportdtl',
	requires: [
		'Hc_pp.model.BlProcessReport',
		'Hc_pp.model.BlProcessReportDtl',
		'Hc_pp.view.blprocessreport.BlProcessReportDtlController',
		'Hc_pp.view.blprocessreport.BlProcessReportDtlModel'
	],
	controller: 'blprocessreportdtl',
	viewModel: {
		type: 'blprocessreportdtl'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			billItems: [{
							name: 'brandNo', 
							fieldLabel: '品牌',
							xtype: 'extcombox',
							bind: {value: '{billRow.brandNo}'},
							displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
						    displaymember: 'brandCname',
						    valuemember: 'brandNo'
							
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
							name: 'factoryNo', 
							fieldLabel: '厂区',
							xtype: 'extcombox',
							bind: {value: '{billRow.brandNo}'},							
							displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
						    displaymember: 'factoryName',
						    valuemember: 'factoryNo'
						},
						 {
							 fieldLabel : '车间',
							 name : 'workshopNo',
							 xtype:'extcombox',
							 bind: {value: '{billRow.brandNo}'},
							 displayvalue:"面部车间"	
						 },
						 {name: 'remarks', fieldLabel: '备注',colspan : 3,xtype: 'textfield',bind: {value: '{billRow.remarks}'}}
						 ],
					   billLoadUrl: Hc.ppsPath + 'bl_process_report_dtl/list.json',
					   billSaveUrl: Hc.ppsPath + 'bl_process_report_dtl/saveSizeHorizontalData.json',//'bl_co/saveMasterCustomerList.json',
					   billAuditUrl: Hc.ppsPath + 'bl_process_report_dtl/audit.json',
					   billExportUrl: Hc.ppsPath + 'bl_process_report_dtl/do_export.json',
					   billModel: 'Hc_pp.model.BlProcessReportDtl',
					   billSubGrid: ['mastergrid'],
					   hasStatus2: true,		
			 gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true, editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号', hidden:true, editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '序号', editor: {allowBlank: false}},
				/*{dataIndex: 'divisionNo', text: '事业部编号', editor: {allowBlank: false}},*/
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '产品编码', editor: {allowBlank: true}},
				{dataIndex: 'materialCname', text: '产品名称', editor: {allowBlank: false}},
				{dataIndex: 'moNo', text: '工单号', editor: {allowBlank: true}},
				{dataIndex: 'sizeTypeNo', text: '配码组', editor: {allowBlank: false}},
				{dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: false}},
				{dataIndex: 'sizeQty', text: '尺码数量', editor: {allowBlank: false}},
				{dataIndex: 'reportQty', text: '汇报数', editor: {allowBlank: true}},
				{dataIndex: 'finishFlag', text: '完结标记', editor: {allowBlank: false}},
				{dataIndex: 'standWorkPoints', text: '标准工分值', editor: {allowBlank: false}},
				{dataIndex: 'sumWorkPoints', text: '累计工分值', editor: {allowBlank: false}}
			],
		   gridPrimaryKey: 'lineId',
		   gridModel: 'Hc_pp.model.BlProcessReportDtl',
		   gridLoadUrl: Hc.ppsPath + 'bl_process_report_dtl/list.json',
		   gridMSizeIdx:5
		});
		me.callParent();
	}
});
