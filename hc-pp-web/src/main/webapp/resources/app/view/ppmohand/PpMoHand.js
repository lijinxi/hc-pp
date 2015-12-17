/**
 * Description: 工单拆手表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmohand.PpMoHand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.ppmohand',
	requires: [
		'Hc_pp.model.PpMoHand',
		'Hc_pp.view.ppmohand.PpMoHandController',
		'Hc_pp.view.ppmohand.PpMoHandModel'
	],
	controller: 'PpMoHand',
	viewModel: {
		type: 'PpMoHand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: [{
				xtype: 'combo',
				width:'250',
				editable:false,
				triggerAction: 'all',
				fieldLabel: '所属项目编码',
				name: 'projectCode',
				displayField: 'projectName',
				valueField: 'projectCode',
				store: {
					type: 'itgproject',
					autoLoad: true
				}
			}]
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'handNo', text: '手编号(yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'boxNo', text: '箱号(yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'startDate', text: '开工日期', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '工作中心(从bas_workshop取)', editor: {allowBlank: false}},
				{dataIndex: 'wrkactType', text: '工作中心类型(取数据字典 workshop_type)', editor: {allowBlank: false}},
				{dataIndex: 'factoryNo', text: '厂区编号(前端不显示)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '车间所在事业部编号(前端不显示)', editor: {allowBlank: false}},
				{dataIndex: 'wrkactNo', text: '工分表编号', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '半成品编码', editor: {allowBlank: false}},
				{dataIndex: 'qtyTotal', text: '每手总数量', editor: {allowBlank: false}},
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},
				{dataIndex: 'moNo', text: 'MO号', editor: {allowBlank: false}},
				{dataIndex: 'moDivisionNo', text: 'MO所在事业部编号(前端不显示)', editor: {allowBlank: false}},
				{dataIndex: 'sizeNo', text: '配码', editor: {allowBlank: false}},
				{dataIndex: 'qtyMo', text: 'MO配码工单数量', editor: {allowBlank: false}},
				{dataIndex: 'qtyHand', text: '每个配码数量', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/pp_mo_hand/listsave.json'
		});
		me.callParent();
	}
});
