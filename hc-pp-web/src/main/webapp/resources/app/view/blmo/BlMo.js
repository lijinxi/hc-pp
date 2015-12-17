/**
 * Description: 生产加工单表(manufacture_order)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmo.BlMo', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blmo',
	requires: [
		'Hc_pp.model.BlMo',
		'Hc_pp.view.blmo.BlMoController',
		'Hc_pp.view.blmo.BlMoModel'
	],
	controller: 'blmo',
	viewModel: {
		type: 'blmo'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
		                	 fieldLabel : '工单状态',
		                	 name : 'moMoStatus',
		                	 xtype:'extcombox',
		                	 displayvalue:"40=确认:41=部分汇报:500=完结"		                		 		                	 
			             },			             
  		                 {xtype: 'textfield',name: 'billNo', fieldLabel: '工单号'},
  		                 {
		                	 fieldLabel : '事业部',
		                	 name : 'divisionNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_division/listAll.json",
		                	 displaymember:'divisionName',
		                	 valuemember:'divisionNo'
			             },
  		                 {
		                	 fieldLabel : '品牌',
		                	 name : 'brandNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_brand/listAll.json",
		                	 displaymember:'brandCname',
		                	 valuemember:'brandNo'	                		 		                	 
			             },
  		                 {
		                	 fieldLabel : '厂区',
		                	 name : 'factoryNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_factory/listAll.json",
		                	 displaymember:'factoryName',
		                	 valuemember:'factoryNo'	                		 		                	 
			             },
  		                 {
		                	 fieldLabel : '车间',
		                	 name : 'workshopNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_workshop/listAll.json",
		                	 displaymember:'workshopName',
		                	 valuemember:'workshopNo'		                		 		                	 
			             },
  		                 {
		                	 fieldLabel : '面部小组',
		                	 name : 'groupNo',
		                	 xtype:'extcombox',
		                	 displayvalue:"面部小组编号"		                		 		                	 
			             },
			             {xtype: 'textfield',name: 'materialNo', fieldLabel: '产品编码'},
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '开工日期',
		                	 name : 'orderDateStrat'
		                 },
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '到',
		                	 name : 'startDate',
		                	 vtype:'compareTo',     //数据验证方式，compareTo
		                	 compareTo:'orderDateStrat', // 被比较的输入框控件name
		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
		                	 compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
		                 }
		                 ,
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '完工日期',
		                	 name : 'orderDateStrat'
		                 },
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '到',
		                	 name : 'endDate',
		                	 vtype:'compareTo',     //数据验证方式，compareTo
		                	 compareTo:'orderDateStrat', // 被比较的输入框控件name
		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
		                	 compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
		                 }
			             ],
			gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true,editor: {allowBlank: true}},
				{dataIndex: 'moMoStatus', text: '工单状态', editor: {allowBlank: true}},/*(取片语mo_mo_status，40确认,41部分汇报,500完结)*/
				{dataIndex: 'billNo', text: '工单号', editor: {allowBlank: true}},
				{dataIndex: 'factoryNo', text: '厂区', editor: {allowBlank: true}},				
				{dataIndex: 'divisionNo', text: '事业部', editor: {allowBlank: true}},
				{dataIndex: 'brandNo', text: '品牌', editor: {allowBlank: true}},
				{dataIndex: 'storeNo', text: '仓库', editor: {allowBlank: true}},
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: true}},
				{dataIndex: 'groupNo', text: '面部小组', editor: {allowBlank: true}},
				{dataIndex: 'planer', text: '计划员', editor: {allowBlank: true}},
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: true}},
				{dataIndex: 'startDate', text: '开工日期', editor: {allowBlank: true}},
				{dataIndex: 'endDate', text: '完工日期', editor: {allowBlank: true}},
				{dataIndex: 'materialNo', text: '产品编码', editor: {allowBlank: true}},			
				/*{dataIndex: 'billTypeNo', text: '工单类型(MO)', editor: {allowBlank: false}},*/
				{dataIndex: 'workOrderType', text: '工单类型', editor: {allowBlank: true}},/*(CP,ZD,DL,BM物料基础资料自动带出，可调整)*/
				{dataIndex: 'customerType', text: '客户类型', editor: {allowBlank: true}},/*(内销还是外销)*/
				{dataIndex: 'moMaterialStatus', text: '物料状态', editor: {allowBlank: true}},/*(取片语mo_material_status，50确认,51分配,52拣货,500完结)*/
				{dataIndex: 'moProcessStatus', text: '工序状态', editor: {allowBlank: true}},/*(取片语mo_process_status，60确认，61部分汇报，500完结)*/				
				{dataIndex: 'sizeTypeNo', text: '配码组', editor: {allowBlank: true}},
				{dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: true}},
				{dataIndex: 'sizeQty', text: '工单数量', editor: {allowBlank: true}},
				{dataIndex: 'finishQty', text: '完工数', editor: {allowBlank: true}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: true}},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: true}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: true}},
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: true}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: true}}
				
			],
 		   gridModel: 'Hc_pp.model.BlMo',
		   gridLoadUrl: Hc.ppsPath + 'bl_mo/list.json',
 		   dtlName:'blmobom',
		   showModel:'selftab'
		});
		me.callParent();
	}
});
