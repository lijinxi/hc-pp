/**
 * Description: 工序汇报表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blprocessreport.BlProcessReport', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blprocessreport',
	requires: [
		'Hc_pp.model.BlProcessReport',
		'Hc_pp.view.blprocessreport.BlProcessReportController',
		'Hc_pp.view.blprocessreport.BlProcessReportModel'
	],
	controller: 'blprocessreport',
	viewModel: {
		type: 'blprocessreport'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
		   searchItems: [
						 {
							 fieldLabel : '厂区',
							 name : 'factoryNo',
							 xtype:'extcombox',
							 displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
							 displaymember: 'factoryName',
							 valuemember: 'factoryNo'
						 },
						 {
							 fieldLabel : '事业部',
							 name : 'divisionNo',
							 xtype:'extcombox',
						     displayvalue: Hc.mdmPath + 'bas_division/listAll.json',						   
						     displaymember: 'divisionName',
						     valuemember: 'divisionNo'
						 },
						 {
							 fieldLabel : '品牌',
							 name : 'brandNo',
							 xtype:'extcombox',
							 displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
							 displaymember: 'brandCname',
							 valuemember: 'brandNo'		                		 		                	 
						 },

						 {
							 fieldLabel : '车间',
							 name : 'workshopNo',
							 xtype:'extcombox',
							 displayvalue:"面部车间"	
						 },
			             {xtype: 'textfield',name: 'creator', fieldLabel: '汇报人'},
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '汇报时间',
		                	 name : 'createTime'
		                 }
				],
		   gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true, editor: {allowBlank: true}},
				{dataIndex: 'factoryNo', text: '厂区编号', editor: {allowBlank: true}},		
				{dataIndex: 'divisionNo', text: '事业部编号', editor: {allowBlank: true}},
				{dataIndex: 'brandNo', text: '品牌编号', editor: {allowBlank: true}},
				/*{dataIndex: 'billNo', text: '单据编号', editor: {allowBlank: true}},
				{dataIndex: 'billTypeNo', text: '单据类型', editor: {allowBlank: true}},*/
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: true}},
				/*{dataIndex: 'creator', text: '建档人', editor: {allowBlank: true}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: true}},
				{dataIndex: 'auditor', text: '审核人', editor: {allowBlank: true}},
				{dataIndex: 'auditTime', text: '审核时间', editor: {allowBlank: true}},*/
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: true}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: true}}
				/*{dataIndex: 'remarks', text: '备注', editor: {allowBlank: true}},*/
			],
 		   gridModel: 'Hc_pp.model.BlProcessReport',
		   gridLoadUrl: Hc.ppsPath + 'bl_process_report/list.json',
 		   dtlName:'blprocessreportdtl',
		   showModel:'selftab'
		});
		me.callParent();
	}
});
