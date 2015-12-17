/**
 * Description: 工单拆分合并(manufacture_order)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmo.PpMo', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.ppmo',
	requires: [
		'Hc_pp.model.PpMo',
		'Hc_pp.model.PpMoHand',
		'Hc_pp.view.ppmo.PpMoController',
		'Hc_pp.view.ppmo.PpMoModel'
	],
	controller: 'ppmo',
	viewModel: {
		type: 'ppmo'
	},
	isAutoLoad : false,
	customLayout1 : true,	
	
    choosetoolbar: {
        xtype: 'toolbar',
        reference: 'choosetoolbar',
        region: 'north',
        items: [{
            text: '拆分',
            itemId: 'btnOther1',
            reference: 'btnOther1',
            handler: 'onShowSplitDialog',
           // glyph: Hc.Icon.btnAdd,
            canUse: true,
            disabled: false
        }, {
            text: '自动拆手',
            itemId: 'btnOther2',
            reference: 'btnOther2',
            handler: 'onShowAutoSplitDialog',
           // glyph: Hc.Icon.btnDelete,
            canUse: true,
            disabled: false
        },
        {
            text: '迁进',
            itemId: 'btnOther3',
            reference: 'btnOther3',
            handler: 'onMoveIn',
            glyph: Hc.Icon.btnAdd,
            canUse: true,
            disabled: false
        },
        {
            text: '迁出',
            itemId: 'btnOther4',
            reference: 'btnOther4',
            handler: 'onMoveOut',
            glyph: Hc.Icon.btnDelete,
            canUse: true,
            disabled: false
        }
        ]
    },
    
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [ {
           	 fieldLabel : '工单类型',
        	 name : 'wrkactType',
        	 xtype:'extcombox',
        	 displayvalue:"CP=成品:BM=帮面"		                		 		                	 
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
		                 },
		                 {xtype: 'textfield',name: 'scheduleNo', fieldLabel: '排程号'}
			             ],
			gridColumns: [
			    {dataIndex: 'lineId', text: '表bl_mop_dtl(lineId)',hidden:true},
			    {dataIndex: 'scheduleNo', text: '排程号'},
				{dataIndex: 'billNo', text: 'MO号'},
				{dataIndex: 'wcode', text: '工分表编号'},
				{dataIndex: 'materialNo', text: '产品编码'},
				{dataIndex: 'materialName', text: '产品名称'},
				//{dataIndex: 'workOrderType', text: '工单类型', editor: {allowBlank: true}},/*(CP,ZD,DL,BM物料基础资料自动带出，可调整)*/
				{dataIndex: 'sizeNo', text: '尺码'},
				{dataIndex: 'sizeQty', text: '工单数量'},
				{dataIndex: 'normalUnit', text: '单位'},
				{dataIndex: 'divisionNo', text: '事业部'},
				{dataIndex: 'factoryNo', text: '厂区'}
			],
			
		   gridPrimaryKey: 'lineId',
 		   gridModel: 'Hc_pp.model.PpMo',
		   gridLoadUrl: Hc.ppsPath + 'pp_mo/listAll.json',
		   gridHasMark:false,
		   gridHasCreator:false,
		   gridHasModifier:false,
		   gridHasAuditor:false,
		   gridHasOrderNo:true,
		   gridSelModel: 'checkboxmodel',
		   gridIsMaster:false,
		   gridSubGrid:[],
		  
		  grid1Columns: [
					{dataIndex: 'handNo', text: '手编号'},
					{dataIndex: 'scheduleNo', text: '排程号'},
					{dataIndex: 'wrkactNo', text: '工分表编号'},
					{dataIndex: 'materialNo', text: '产品编码'},
					{dataIndex: 'materialName', text: '产品名称'},
					{dataIndex: 'sizeNo', text: '配码'},
					{dataIndex: 'qtyMo', text: '工单数量'},
					{dataIndex: 'qtyHand', text: '手数量'},
					{dataIndex: 'normalUnit', text: '单位'},
					{dataIndex: 'modtlLineId', text: '表bl_mo_dtl的lineid',hidden:true}					
					],
					
			grid1PrimaryKey: 'lineId',
			grid1Model: 'Hc_pp.model.PpMoHand',
			grid1LoadUrl: Hc.ppsPath + 'pp_mo_hand/listAll.json',
			grid1SaveUrl : Hc.pdsPath+ 'pp_mo_hand/batchOperate.json',
			
			grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1HasOrderNo:true
						
		});
		Ext.apply(me.grid, { id: 'ppMoGrid'});	
		Ext.apply(me.grid1, { id: 'ppMoGrid1'});	
		
        me.items = [me.toolbar];
        if (me.searchItems.length > 0) {
            me.items.push(me.searchPanel);
        }
        
	    var h=me.controller.getBodyHeight(0.4);
	    var con1={
			xtype:"panel",
			height:h,
			region:"north",
			layout:'border',
			items:[me.grid],
			split:true,
			border:false
	    };
	    
	    h=me.controller.getBodyHeight(0.04);
	    var con2={
				xtype:"panel",
				height:h,
				region:"north",
				layout:'border',
				items:[me.choosetoolbar],
				border:false
		    };	    
	
	    var con3={
			xtype:"panel",
			region:"center",
			layout:'border',
			items:[me.grid1],
			border:false
	    };
	    
	    var panelchild={
			xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[con2,con3],
	        border:false
	    };
	    
	    var rightpanel={
				xtype: "panel",
		        region: 'center',
		        layout:'border',
		        items:[con1,panelchild],
		        border:false
		    };	    
	
	    var panel = {
	        xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[rightpanel],
	        border:false
	    };
	    me.items.push(panel);		
		me.callParent();
	}
});
