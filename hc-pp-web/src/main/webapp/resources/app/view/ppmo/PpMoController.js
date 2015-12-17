/**
 * Description: 工单拆分合并(manufacture_order)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmo.PpMoController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.ppmo',
    
    init:function() {
		var me = this,
        objList = me.getObjList();
		me.callParent(arguments);
		me.getObj('mastergrid').down("pagingtoolbar").setVisible(false);
		me.getObj('grid1').down("pagingtoolbar").setVisible(false);
    },
    
    /*查询按钮*/
    onBtnSearchClick: function (btn) {
		var me = this,
		objlist = me.getObjList(),
		store = objlist['mastergrid'].getStore(),
		store1 = objlist['grid1'].getStore(),
        searchPanel = me.getObj('commonsearch');
        if (searchPanel) {
            var formValue = searchPanel.getValues();
            for (var field in formValue) {
                if (formValue[field] !== '') {
                    store.proxy.extraParams[field] = formValue[field];
                    store1.proxy.extraParams[field] = formValue[field];
                } else {
                    delete  store.proxy.extraParams[field]
                    delete  store1.proxy.extraParams[field];
                }
            }
        }
        delete  store.proxy.extraParams['notSplitLineIds']
        delete  store.proxy.extraParams['splitLineIds']
        if (me.beforeSearch(store) === false) return;
        if (me.beforeSearch(store1) === false) return;
        store.currentPage = 1;
        store.loadPage(1);
        store1.currentPage = 1;
        store1.loadPage(1);
        
        //测试
        //delete store.proxy.extraParams['notSplitLineIds'];
        //store.proxy.extraParams['notSplitLineIds'] = "(0,1,10)";
        //store.loadPage(1);
    },
    
    //重写删除
    onBtnDeleteClick: function (btn) {
    	var me = this;
    	var objList = me.getObjList();
    	me.workObject = objList.grid1;
    	me.callParent(arguments);
    },
    
    //迁进
    onMoveIn: function (btn) {
		var me = this,
		objlist = me.getObjList();
		//me.workObject=objlist['grid1'];
		//me.workObject=objlist['mastergrid'];
		var storemaster=objlist['mastergrid'].store;
		var storegrid1=objlist['grid1'].store;
		searchPanel = me.getObj('commonsearch');
		   if (searchPanel) {
	            var formValue = searchPanel.getValues();
	            for (var field in formValue) {
	                if (formValue[field] !== '') {
	                	storemaster.proxy.extraParams[field] = formValue[field];
	                	storegrid1.proxy.extraParams[field] = formValue[field];
	                } else {
	                    delete  storemaster.proxy.extraParams[field]
	                    delete  storegrid1.proxy.extraParams[field];
	                }
	            }
	        }
		   
		 delete storemaster.proxy.extraParams['notSplitLineIds'];
		 storemaster.proxy.extraParams['notSplitLineIds'] = me.getGridSelectSplitLineIds();
		 storemaster.loadPage(1);
		 
		 var datas = objlist.mastergrid.getSelectionModel().getSelection();
		 var grid1StoreCount=storegrid1.count();
		 for(var i=0;i<datas.length;i++){
			 storegrid1.add(me.getNewRowForGrid1(storegrid1,datas[i]));
		 }
		 me.workObject.getSelectionModel().select(grid1StoreCount);
	  	 grid1StoreCount=grid1StoreCount+1;
		 
	},
	
	//迁出
    onMoveOut: function (btn) {
    	var me = this,
		objlist = me.getObjList();
		var storemaster=objlist['mastergrid'].store;
		var storegrid1=objlist['grid1'].store;
	    var records=objlist.grid1.getSelection();  
        me.onBtnDeleteClick();

	    delete storemaster.proxy.extraParams['notSplitLineIds'];
	    storemaster.proxy.extraParams['notSplitLineIds'] = me.getGrid1LineIds();
	    storemaster.loadPage(1);
	},
	
	/*grid1新增一行*/
	getNewRowForGrid1:function(storegrid1,record){
		 var model = storegrid1.getModel();
		 var newObj = model.create({_flag: 'A'});
		    newObj.set('modtlLineId', record.get('lineId'));
	  		newObj.set('normalUnit', record.get('normalUnit'));
	  		newObj.set('scheduleNo', record.get('scheduleNo'));
	  		newObj.set('wrkactNo', record.get('wcode'));
	  		newObj.set('sizeNo', record.get('sizeNo'));
	  		newObj.set('qtyMo', record.get('sizeQty'));
	  		newObj.set('qtyHand', record.get('sizeQty'));
	  		newObj.set('materialNo', record.get('materialNo'));
	  		newObj.set('materialName', record.get('materialName'));
	  		return newObj;
	},	
	
	/*拆分*/
	onShowSplitDialog: function (btn) {
      var me = this,
      selSplitLineIds = me.getGridSelectSplitLineIds();
	  if(selSplitLineIds===""){
		  Hc.alert('请选择需拆分行');
		  return;
	  }      
  	  var dtl = {
    	          xtype: 'pphandsplit',
    	          userRight: me.view.userRight,
    	          moduleRight: me.view.moduleRight,
    	          userCode: me.view.userCode,
    	          userName: me.view.userName,
    	          selLineIds :selSplitLineIds
    	      };
  	  	 dtl.width = Ext.getBody().getWidth() * 0.6;
  	     dtl.height = Ext.getBody().getHeight() * 0.6;
  	     me.showInWin(dtl, {id : 'pphandsplit',winName: 'pphandsplit', title: '拆分', showBbar: true});
	},
	
	/*自动拆分*/
	onShowAutoSplitDialog: function (btn) {
	},
	
	/*grid所选行ID集合*/
	getGridSelectSplitLineIds:function(){
  	  	var me=this;		
  	  	var objlist = me.getObjList();
  	  	var splitLineIds = "(";
  	  	var arr = objlist.mastergrid.getSelectionModel().getSelection();
  	  	if(arr.length==0){
  	  		return "";
  	  	}
  	  	Ext.Array.each(arr,function(row){
  	  		splitLineIds=splitLineIds+row.get('lineId')+",";
        })
        splitLineIds = Ext.util.Format.substr(splitLineIds, 0, splitLineIds.length-1);
  	  	splitLineIds = splitLineIds+")";
  	  	return splitLineIds;
	},
	
	/*grid1所有行modtlID集合*/
	getGrid1LineIds:function(){
  	  	var me=this;		
  	  	var objlist = me.getObjList();
  	  	var arrLineeIds=[];
  	  	var lineIds = "(";
  	  	objlist.grid1.getStore().each(function(record){
			var curLineIds = record.get("modtlLineId");
  	  		if(!Ext.Array.contains(arrLineeIds,curLineIds)){
  	  			arrLineeIds.push(curLineIds);
  	  			lineIds = lineIds+curLineIds+",";
  	  		}
		});
  	  	lineIds = Ext.util.Format.substr(lineIds, 0, lineIds.length-1);
  	  	lineIds = lineIds+")";
  	  	return lineIds;  	  	
	},
	
    /**弹出框中的确认按钮事件*/
    onWinConfirmClick: function (btn) {
  	  var me=this;		
  	  var objlist = me.getObjList();
  	  var diaGrid = Ext.getCmp("ppHandSplitGrid");
  	  
  	  if(!diaGrid.getSelectionModel().selectNext()){
  		btn.up('window').close();
  	  }
    }
	
  });