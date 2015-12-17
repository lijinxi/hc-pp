/**
 * Description:  拣货单主表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrder', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blpickingorder',
	requires: [
	           'Hc_pp.model.BlPickingOrder',
	           'Hc_pp.view.blpickingorder.BlPickingOrderController',
	           'Hc_pp.view.blpickingorder.BlPickingOrderModel'
	           ],
	           controller: 'blpickingorder',
	           viewModel: {
	        	   type: 'blpickingorder'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   Ext.apply(me, {
	        		   searchItems: [
	        		                 /* {
	        		                	 name: 'storeNo',
	        		                	 bind: {
	        		                		 value: '{billRow.storeNo}'
	        		                	 },
	        		                	 reference: 'storeNo',
	        		                	 xtype: 'extcombox',
	        		                	 allowBlank: false,
	        		                	 fieldLabel: '仓库编号',
	        		                	 displayvalue: Hc.mdmPath + 'bas_store/list.json',
	        		                	 displaymember: 'storeName',
	        		                	 valuemember: 'storeNo'
	        		                 },*/
	        		                 {
	        		                	 fieldLabel : '仓库',
	        		                	 name : 'storeNo',
	        		                	 xtype: 'searchhelpfield',//数据精灵类
	        		                	 winTitle:'选择仓库', //弹出框标题，默认为"选择器"
//	        		                	 allowBlank: false,
	        		                	 bind: {
	        		                		 value: '{billRow.storeNo}'
	        		                	 },
	        		                	 gridColumns:[{    //弹出框网格的列
	        		                		 dataIndex:'storeNo',
	        		                		 text:'仓库编号',
	        		                		 flex: 0.5
	        		                	 },
	        		                	 {
	        		                		 dataIndex:'storeName',
	        		                		 text:'仓库名称',
	        		                		 flex: 0.5
	        		                	 }
	        		                	 ],
	        		                	 searchItems:[{name:'storeNo',fieldLabel:'仓库编号'},
	        		                	              {name:'storeName',fieldLabel:'仓库名称'}
	        		                	 ], //弹出框的查询面板
	        		                	 url:Hc.mdmPath + 'bas_store/listAll.json'//后端的服务URL

	        		                 },
	        		                 {
	        		                	 fieldLabel : '车间',
	        		                	 name : 'workshopNo',
	        		                	 xtype:'extcombox',
	        		                	 displayvalue:"面部车间=面部车间",
	        		                	 value:'面部车间'
	        		                 }
	        		                 ],
	        		                 gridColumns: [
	        		                               {dataIndex: 'storeNo', text: '仓库编号', editor: {allowBlank: false}},
	        		                               {dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: false}},
	        		                               {dataIndex: 'startDate', text: '开工日期', editor: {allowBlank: false}},
	        		                               ],
	        		                               gridModel: 'Hc_pp.model.BlPickingOrder',
	        		                               gridLoadUrl: Hc.ppsPath + 'bl_picking_order/list.json',
	        		                               dtlName:'blpickingorderdtl',
	        		                               showModel:'selftab'
	        	   });
	        	   me.callParent();
	           }
});
