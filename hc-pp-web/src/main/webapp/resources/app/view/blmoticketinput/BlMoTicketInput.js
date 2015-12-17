/**
 * Description: 工票录入明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketinput.BlMoTicketInput', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmoticketinput',
	requires: [
		'Hc_pp.model.BlMoTicketInput',
		'Hc_pp.view.blmoticketinput.BlMoTicketInputController',
		'Hc_pp.view.blmoticketinput.BlMoTicketInputModel'
	],
	controller: 'blmoticketinput',
	viewModel: {
		type: 'blmoticketinput'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '工序序号(工序工分表里的序号)', editor: {allowBlank: false}},
				{dataIndex: 'workProcessCode', text: '工序编码', editor: {allowBlank: false}},
				{dataIndex: 'empCode', text: '员工编号', editor: {allowBlank: false}},
				{dataIndex: 'shortCode', text: '电脑号', editor: {allowBlank: false}},
				{dataIndex: 'deptId', text: '员工所在部门ID', editor: {allowBlank: false}},
				{dataIndex: 'inputQty', text: '录入数量', editor: {allowBlank: false}},
				{dataIndex: 'inputTime', text: '录入时间', editor: {allowBlank: false}},
				{dataIndex: 'whetherSum', text: '是否汇总(0=未汇总,1=汇总.汇总是进行工资运算)', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket_input/listsave.json'
		});
		me.callParent();
	}
});
