/**
 * Description: 工票主表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticket.BlMoTicket', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmoticket',
	requires: [
		'Hc_pp.model.BlMoTicket',
		'Hc_pp.view.blmoticket.BlMoTicketController',
		'Hc_pp.view.blmoticket.BlMoTicketModel'
	],
	controller: 'blmoticket',
	viewModel: {
		type: 'blmoticket'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketType', text: '工票类型(取数据字典 workshop_type)', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '工作中心(从bas_workshop取)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'groupNo', text: '小组编号(从bas_workshop_group取)', editor: {allowBlank: false}},
				{dataIndex: 'ticketQty', text: '工票数量', editor: {allowBlank: false}},
				{dataIndex: 'boxno', text: '箱号', editor: {allowBlank: false}},
				{dataIndex: 'isPrint', text: '是否打印(0=未打印 1=已打印)', editor: {allowBlank: false}},
				{dataIndex: 'printer', text: '打印人(最后一次打印人)', editor: {allowBlank: false}},
				{dataIndex: 'printTime', text: '打印时间(最后一次打印时间)', editor: {allowBlank: false}},
				{dataIndex: 'isInput', text: '是否录入(0=未录入 1=已录入)', editor: {allowBlank: false}},
				{dataIndex: 'inputStatus', text: '录入状态(数据字典)', editor: {allowBlank: false}},
				{dataIndex: 'inputer', text: '录入人(最后一次录入人)', editor: {allowBlank: false}},
				{dataIndex: 'inputTime', text: '录入时间(最后一次录入时间)', editor: {allowBlank: false}},
				{dataIndex: 'inputAuditor', text: '录入审核人', editor: {allowBlank: false}},
				{dataIndex: 'inputAuditTime', text: '录入审核时间', editor: {allowBlank: false}},
				{dataIndex: 'isReport', text: '是否汇报(0=未汇报 1=部分汇报 2=全部汇报)', editor: {allowBlank: false}},
				{dataIndex: 'reporter', text: '汇报人(最后一次汇报人)', editor: {allowBlank: false}},
				{dataIndex: 'reportTime', text: '汇报时间(最后一次汇报时间)', editor: {allowBlank: false}},
				{dataIndex: 'whetherSum', text: '是否汇总(0=未汇总,1=汇总 汇总是进行工资运算)', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '创建者', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '创建时间', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '修改者', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false}},
				{dataIndex: 'auditor', text: '审核人', editor: {allowBlank: false}},
				{dataIndex: 'auditTime', text: '审核时间', editor: {allowBlank: false}},
				{dataIndex: 'billStatus', text: '工票状态(数据字典)', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket/listsave.json'
		});
		me.callParent();
	}
});
