/**
 * Description:  车间型体款号维护(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppworkshopstyle.PpWorkshopStyle', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.ppworkshopstyle',
	requires: [
		'Hc_pp.model.PpWorkshopStyle',
		'Hc_pp.view.ppworkshopstyle.PpWorkshopStyleController',
		'Hc_pp.view.ppworkshopstyle.PpWorkshopStyleModel'
	],
	controller: 'ppworkshopstyle',
	viewModel: {
		type: 'ppworkshopstyle'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
				             {
						    	   fieldLabel:'事业部',	
					      		   xtype:'extcombox',
					    		   displayvalue:Hc.mdmPath+'bas_division/listAll.json',
					    		   displaymember:'divisionName',
					    		   valuemember:'divisionNo',
					    		   reference:'divisionNo',
					    		   listeners:{
					    				 'select':'onDivOrFacSelect'
					    			 }
						       },
						       {
						    	     fieldLabel:'厂区',
					      			 xtype:'extcombox',
					      			 reference:'factoryNo',
					    			 displayvalue:Hc.mdmPath+'bas_factory/listAll.json',
					    			 displaymember:'factoryName',
					    			 valuemember:'factoryNo',
					    			 listeners:{
					    				 'select':'onDivOrFacSelect'
					    			 }
						       },
	  		                 {
			                	 fieldLabel : '车间',
			                	 name : 'workshopNo',
			                	 reference:'workshopNo',
			                	 xtype:'extcombox',
			                	 displayvalue:Hc.mdmPath+'bas_workshop/listAll.json',
			                	 displaymember:'workshopName',
				    			 valuemember:'workshopNo'
				             },
				             {    
				            	 xtype: 'textfield',
				            	 name: 'materialNo', 
				            	 fieldLabel: '物料编号'
				            },
				             {    
				            	 xtype: 'textfield',
				            	 name: 'materialNo', 
				            	 fieldLabel: '型体'
				            },
				            {    
				            	 xtype: 'textfield',
				            	 name: 'materialNo', 
				            	 fieldLabel: '款号'
				            }
				            ],
		gridColumns: [
                 {dataIndex: 'factoryNo', text: '厂区', editor: {allowBlank: false}},
                 {      dataIndex : 'divisionNo',
	        		    text : '事业部',
	        		    editor:{allowBlank: false},
	        		    xtype:'bllookupedit',
	        		    displayvalue:Hc.mdmPath+'bas_division/listAll.json',
	        		    displaymember:'divisionName',
	        		    valuemember:'divisionNo'
	        	 }, 
			     {      dataIndex: 'materialNo', 
					    text: '产品编码',
					    editor:{
						xtype:'searchhelpfield',
						name:'materialNo',
						reference: 'materialNo',
						gridColumns:[{
						   dataIndex:'materialNo',
						   text:'物料编码',
						   flex:0.3
						},{
						   dataIndex:'materialCode',
						   text:'物料编号',
						   flex:0.3
						},{
						   dataIndex:'materialName',
						   text:'物料名称',
						   flex:0.3
						}],
						searchItems:[
										{
											fieldLabel : '物料编码',
										    name:'materialNo',
										    flex:0.5
										 }
						             ],
						isAutoLoad:false,
						url:Hc.mdmPath + 'bas_material/list.json',
						allowBlank: false
					}
                },
			    {dataIndex: 'materialNo', text: '产品名称', editor: {allowBlank: false}},
			    {dataIndex: 'materialNo', text: '款号', editor: {allowBlank: false}},
			    {dataIndex: 'materialNo', text: '型体', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: false}},
				{dataIndex: 'groupNo', text: '面部小组', editor: {allowBlank: false}},
				/*{
					dataIndex: 'aheadTime', 
					text: '提前期',
					editor: {allowBlank: false,
					regex:/^\+?[1-9][0-9]*$/,  //只能输入非零正整数
					 regexText:'请输入数字',
					 enforceMaxLength:true
					 }
				},*/
				 {dataIndex: 'materialNo', text: '里料', editor: {allowBlank: false}},
				 {dataIndex: 'materialNo', text: '男/女鞋', editor: {allowBlank: false}},
				 {dataIndex: 'materialNo', text: '工分', editor: {allowBlank: false}},
				{dataIndex: 'enableFlag',
      				text: '启用状态',
      				editor: {allowBlank: false},
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用"},

//				{dataIndex: 'modifier', text: '最后修改人', editor: {allowBlank: false}},
//				{dataIndex: 'modifyTime', text: '最后修改时间', editor: {allowBlank: false}},
//				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}}
			],
			   gridPrimaryKey: 'lineId',
			   gridModel: 'Hc_pp.model.PpWorkshopStyle',
			   gridLoadUrl: Hc.ppsPath + 'pp_workshop_style/list.json',
			   gridSaveUrl: Hc.ppsPath + 'pp_workshop_style/batchOperate.json',
			   gridExportUrl: Hc.ppsPath + 'pp_workshop_style/do_export.json',
			   gridImportUrl: Hc.ppsPath + ''
		});
		me.callParent();
	}
});
