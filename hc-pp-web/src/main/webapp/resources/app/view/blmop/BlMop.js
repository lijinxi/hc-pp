/**
 * Description: 生产计划单主表(manufacture_order_proposed)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmop.BlMop', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blmop',
	requires: [
		'Hc_pp.model.BlMop',
		'Hc_pp.view.blmop.BlMopController',
		'Hc_pp.view.blmop.BlMopModel',
		'Hc_Common.store.CmnBrandRelation',
		'Hc_Common.store.CmnDict',
		'Hc_Common.store.CmnDivision'
	],
	controller: 'blmop',
	viewModel: {
		type: 'blmop'
	},

	initComponent: function (){
		var me= this,
			brandStore =  Ext.create('Hc_Common.store.CmnBrandRelation'),
			blTypeStore = Ext.create('Hc_Common.store.CmnDict',{
					proxy: {
						url: Hc.mdmPath+'bas_dict/listAll.json?dictCode=bill_type'
					}
				}),
			divisionStore = Ext.create('Hc_Common.store.CmnDivision');
		
		Ext.apply(me, {
			 searchItems : [/*{
				xtype:'extcombox',
		    	fieldLabel:'事业部',
				displaymember: 'divisionName',
				valuemember: 'divisionNo',
				store: divisionStore
			 },*/{
				xtype:'extcombox',
		    	fieldLabel:'品牌',
				displaymember: 'brandCname',
				valuemember: 'brandNo',
				store: brandStore
			 }, {
		         	xtype:'textfield',
		        	fieldLabel:'销售订单号',
		        	name:'coNo'
			 },{
				 fieldLabel : '单据来源', name : 'mopSource',
				 xtype:'extcombox', displayvalue:"0=手工新增:1=MRP"}
			 ],
             
             gridColumns: [
	            {dataIndex: 'brandNo', text: '品牌',
		            xtype: 'bllookupedit',
		            displaymember: 'brandCname',
					valuemember: 'brandNo',
					gstore: brandStore,
					readOnly: true,
					width: 140 },
				{dataIndex: 'divisionNo', text: '事业部', 
					xtype: 'bllookupedit',
		            displaymember: 'divisionName',
					valuemember: 'divisionNo',
					gstore: divisionStore,
					readOnly: true,
					width: 140 },
				{dataIndex: 'coNo', text: '销售订单号', width: 155},
				{dataIndex: 'mopSource', text: '单据来源',xtype: 'bllookupedit', displayvalue:'0=手工新增:1=MRP', readOnly: true}
			],
	
			gridModel: 'Hc_pp.model.BlMop',
			gridLoadUrl: Hc.ppsPath + 'bl_mop/list.json',
			dtlName:'blmopdtl',
			showModel:'selftab'
		});
	
	me.callParent();
	}
});
