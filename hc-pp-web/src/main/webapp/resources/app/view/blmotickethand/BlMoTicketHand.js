/**
 * Description: 工票拆手明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmotickethand.BlMoTicketHand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmotickethand',
	requires: [
		'Hc_pp.model.BlMoTicketHand',
		'Hc_pp.view.blmotickethand.BlMoTicketHandController',
		'Hc_pp.view.blmotickethand.BlMoTicketHandModel'
	],
	controller: 'blmotickethand',
	viewModel: {
		type: 'blmotickethand'
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
				{dataIndex: 'handNo', text: '手编号', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bl_mo_ticket_hand/listsave.json'
		});
		me.callParent();
	}
});
