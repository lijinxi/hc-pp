/**
 * Description: 工票工序明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketdtl.BlMoTicketDtl', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmoticketdtl',
	requires: [
		'Hc_pp.model.BlMoTicketDtl',
		'Hc_pp.view.blmoticketdtl.BlMoTicketDtlController',
		'Hc_pp.view.blmoticketdtl.BlMoTicketDtlModel'
	],
	controller: 'blmoticketdtl',
	viewModel: {
		type: 'blmoticketdtl'
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
				{dataIndex: 'workValue', text: '工分值', editor: {allowBlank: false}},
				{dataIndex: 'isAssist', text: '是否外协(0=否,1=是)', editor: {allowBlank: false}},
				{dataIndex: 'workGroupCode', text: '作业组别(从pd_work_group取数)', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket_dtl/listsave.json'
		});
		me.callParent();
	}
});
