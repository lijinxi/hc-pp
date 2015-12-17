/**
 * Description:  拣货单从表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrderDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blpickingorderdtl',
	requires: [
	           'Hc_pp.model.BlPickingOrder',
	           'Hc_pp.model.BlPickingOrderDtl',
	           'Hc_pp.view.blpickingorder.BlPickingOrderDtlController',
	           'Hc_pp.view.blpickingorder.BlPickingOrderDtlModel'
	           ],
	           controller: 'blpickingorderdtl',
	           viewModel: {
	        	   type: 'blpickingorderdtl'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   Ext.apply(me, {
	        		   billItems: [
	        		               /*{
	        		            	   name: 'storeNo',
	        		            	   reference: 'storeNo',
	        		            	   xtype: 'extcombox',
	        		            	   fieldLabel: '仓库编号',
	        		            	   displayvalue: Hc.mdmPath + 'bas_store/list.json',
	        		            	   displaymember: 'storeName',
	        		            	   valuemember: 'storeNo',
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.storeNo}'
	        		            	   }
	        		               },*/
	        		               {
	        		            	   fieldLabel : '仓库',
	        		            	   name : 'storeNo',
	        		            	   xtype: 'searchhelpfield',//数据精灵类
	        		            	   winTitle:'选择仓库', //弹出框标题，默认为"选择器"
	        		            	   allowBlank: false,
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
	        		            	   value:'面部车间',
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.workshopNo}'
	        		            	   }
	        		               },
	        		               {
	        		            	   fieldLabel: '开工日期',
	        		            	   name: 'startDate',
	        		            	   xtype: 'datefield',
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.startDate}'
	        		            	   }
	        		               },
	        		               {
	        		            	   name: 'remarks',
	        		            	   fieldLabel: '备注',
	        		            	   xtype: 'textfield',
	        		            	   colspan: 4,
	        		            	   allowBlank: true,
	        		            	   bind: {
	        		            		   value: '{billRow.remarks}'
	        		            	   },
	        		            	   regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
	        		            	   //只能输入字母、数字或中文或下划线
	        		            	   regexText: '请输入字母、数字、中文',
	        		            	   maxLength: 60,
	        		            	   enforceMaxLength: true
	        		               }],
	        		               billLoadUrl: Hc.ppsPath + 'bl_picking_order/list.json',
	        		               billSaveUrl: Hc.ppsPath + 'bl_picking_order/saveSizeHorizontalData.json',//'bl_co/saveMasterCustomerList.json',
	        		               billAuditUrl: Hc.ppsPath + 'bl_picking_order/audit.json',
	        		               billExportUrl: Hc.ppsPath + 'bl_picking_order/do_export.json',
	        		               billModel: 'Hc_pp.model.BlPickingOrder',
	        		               billSubGrid: ['mastergrid'],
	        		               hasStatus2: false,
	        		               editStatus: 10,
	        		               billType: '163001',
	        		               gridColumns: [
	        		                             {dataIndex: 'billNo', text: '拣货单号', editor: {allowBlank: false}},
	        		                             {dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},
	        		                             {dataIndex: 'productNo', text: '产品编码', editor: {allowBlank: false}},
	        		                             {dataIndex: 'materialPurpose', text: '物料用途', editor: {allowBlank: false}},
	        		                             {dataIndex: 'materialNo', text: '物料编码', editor: {allowBlank: false}},
	        		                             {dataIndex: 'sizeNo', text: '配码', editor: {allowBlank: false}},
	        		                             {dataIndex: 'unitNo', text: '单位', editor: {allowBlank: false}},
	        		                             {dataIndex: 'sumQty', text: '定额数量', editor: {allowBlank: false}}
	        		                             ],
	        		                             gridPrimaryKey: 'lineId',
	        		                             gridModel: 'Hc_pp.model.BlPickingOrderDtl',
	        		                             gridLoadUrl: Hc.ppsPath + 'bl_picking_order_dtl/list.json'
//	        		                             gridMSizeIdx:5   //物料尺码信息（基类控制）
	        	   });
	        	   me.callParent();
	           }
});
