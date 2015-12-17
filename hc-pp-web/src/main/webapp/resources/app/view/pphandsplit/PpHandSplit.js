/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.pphandsplit.PpHandSplit', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.pphandsplit',
	requires: [
		'Hc_pp.model.BlMop',
		'Hc_pp.model.PpHandSplit',
		'Hc_pp.view.pphandsplit.PpHandSplitController',
		'Hc_pp.view.pphandsplit.PpHandSplitModel'
	],
	controller: 'pphandsplit',
	viewModel: {
		type: 'pphandsplit'
	},
	isAutoLoad : false,
	customLayout1 : true,
	selLineIds : '',
	
	initComponent: function () {
		var me= this;
		Ext.apply(me,
				{
					//grid
					gridModel: 'Hc_pp.model.PpMo',
					gridColumns: [
								    {dataIndex: 'lineId', text: '表bl_mop_dtl(lineId)',hidden:true},
								    {dataIndex: 'scheduleNo', text: '排程号'},
									{dataIndex: 'billNo', text: 'MO号'},
									{dataIndex: 'wcode', text: '工分表编号'},
									{dataIndex: 'materialNo', text: '产品编码'},
									{dataIndex: 'materialName', text: '产品名称'},
									{dataIndex: 'sizeNo', text: '尺码'},
									{dataIndex: 'sizeQty', text: '工单数量'},
									{dataIndex: 'normalUnit', text: '单位'},
									{dataIndex: 'divisionNo', text: '事业部'},
									{dataIndex: 'factoryNo', text: '厂区'}					              	
								 ],
					gridPrimaryKey: 'lineid',
					gridLoadUrl: Hc.ppsPath + 'pp_mo/listAll.json',
					gridSelModel: 'SINGLE',
					gridIsMaster:false,
					gridSubGrid:[],
					
					//grid1
					grid1Model: 'Hc_pp.model.PpHandSplit',
					grid1Columns: [],
					grid1HasMark:false,
					grid1SelModel: 'SINGLE',
					
				});
		Ext.apply(me.grid, { id: 'ppHandSplitGrid',height:200});	
		Ext.apply(me.grid1, { id: 'ppHandSplitGrid1'});	
		
		me.items = [];
		var h=me.controller.getBodyHeight(0.4);
		var toppanel = {
				xtype : "panel",
				name : 'handtoppanel',
				reference : 'handtoppanel',
				region : 'north',
				height : h,
				layout: {type: 'table', columns:2, align:'center'},
				split : false,
				border : false,
				defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
				items : [
				         {xtype : 'textfield',fieldLabel : '生产单号',bind : {value : '{gridRow.billNo}'}},
				         {xtype : 'textfield',fieldLabel : '单位',bind : {value : '{gridRow.normalUnit}'}},
				         {xtype : 'textfield',fieldLabel : '产品编码',bind : {value : '{gridRow.materialNo}'}},
				         {xtype : 'textfield',fieldLabel : '尺码',bind : {value : '{gridRow.sizeNo}'}},
				         {xtype : 'textfield',fieldLabel : '产品名称',bind : {value : '{gridRow.materialName}'}},
				         {xtype : 'textfield',reference:'txtSizeQty',fieldLabel : '工单数量',bind : {value : '{gridRow.sizeQty}'}},
				         {xtype : 'textfield',reference:'txtHandQty',fieldLabel : '每手数量',
				          regex : /^[0-9]*[1-9][0-9]*$/,regexText : '只能输入正整数',
				          listeners: {'change': 'onHandQtyChange'}
				         },
				         {xtype : 'textfield',reference:'txtHandMinQty',fieldLabel : '每手最小数量',
				          regex : /^[0-9]*[1-9][0-9]*$/,regexText : '只能输入正整数',
				          listeners: {'change': 'onHandMinQtyChange'}
				         },
				         me.grid
				]
			};		
        
	    var bottompanel={
				xtype:"panel",
				region:"center",
				layout:'border',
				items:[me.grid1],
				border:false
		    };    
	
	    var panel = {
	        xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[toppanel,bottompanel],
	        border:false
	    };
	    me.items.push(panel);

		me.callParent();
		
		var store1 = Ext.create('Hc_Common.store.Base', {  
			  fields: []
			}); 		
		me.grid1.store = store1;
	}
});
