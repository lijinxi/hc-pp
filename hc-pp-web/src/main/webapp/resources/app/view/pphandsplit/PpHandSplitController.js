/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.pphandsplit.PpHandSplitController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.pphandsplit',

    init:function() {
		var me = this,
        objList = me.getObjList();
		me.callParent(arguments);
		//console.dir(objList.handtoppanel);
		
		//me.getObj('mastergrid').setVisible(false);
		//me.getObj('mastergrid').down("pagingtoolbar").setVisible(false);
		me.getObj('grid1').down("pagingtoolbar").setVisible(false);
		
		var store=objList.mastergrid.getStore();
		delete store.proxy.extraParams['splitLineIds'];
		store.proxy.extraParams['splitLineIds']=me.view.selLineIds;
		store.reload({
		    scope: this,
		    callback: function(records, operation, success) {
		    	if (records.length>0)
		    	{
	           		objList.mastergrid.getSelectionModel().select(0);
		    	}
		    }
		});
		
		me.view.on('beforedestroy','onBeforeDestroy',me);
		
        if (objList.handtoppanel) {
            var list = objList.handtoppanel.query('textfield,numberfield,datefield,combo');
            Ext.each(list, function (txt) {
                txt.on('specialkey', me.keyToSplit, me);
            });
        }
	},
	
	onBeforeDestroy: function(){
    	//弹出窗体给主窗体grid重载
    	var me = this,
    	parentGrid = Ext.getCmp('ppMoGrid'),
    	pareStore = parentGrid.getStore();
        delete pareStore.proxy.extraParams['notSplitLineIds'];
        pareStore.proxy.extraParams['notSplitLineIds'] = me.getParentGrid1LineIds();
        pareStore.loadPage(1);		
	},
	
	/*parentGrid1所有行modtlID集合*/
	getParentGrid1LineIds:function(){
  	  	var me=this;		
  	  	parentGrid1 = Ext.getCmp('ppMoGrid1');
  	  	var arrLineeIds=[];
  	  	var lineIds = "(";
  	  	parentGrid1.getStore().each(function(record){
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
	
	keyToSplit: function (obj, e) {
        var me = this,
        objList = me.getObjList();
        if (e.keyCode == e.ENTER) {
            //验证不通过
        	if((!me.lookupReference('txtHandQty').isValid())||
        	   (!me.lookupReference('txtHandMinQty').isValid())){
        		return;
        	}
        	//弹出窗体给主窗体grid1新增拆分行
        	var parentGrid1 = Ext.getCmp('ppMoGrid1'),
        	pareStore1 = parentGrid1.getStore();
        	var row=objList.mastergrid.getSelection()[0];
        	var store1 = objList.grid1.getStore();
        	var cols = objList.grid1.getColumnManager().columns;
        	store1.each(function(record){
            	Ext.Array.each(cols,function(col){
            		var qtyHand = record.get(col.dataIndex);
            		var newObj =me.getNewRowForParentGrid1(pareStore1,row,qtyHand)
    	   			pareStore1.add(newObj);
                })
    		});
        	//清空填写的数量
        	me.lookupReference('txtHandQty').setValue('');
        	me.lookupReference('txtHandMinQty').setValue('');
    		//下一行要拆分的MO
    		var grid = objList.mastergrid;
      	  	if(!grid.getSelectionModel().selectNext()){
      	  		Ext.getCmp("pphandsplit").close();
        	  }
        }
    },
    
	/*parent grid1新增一行*/
	getNewRowForParentGrid1:function(storegrid1,record,qtyHand){
		 var model = storegrid1.getModel();
		 var newObj = model.create({_flag: 'A'});
		    newObj.set('modtlLineId', record.get('lineId'));
	  		newObj.set('normalUnit', record.get('normalUnit'));
	  		newObj.set('scheduleNo', record.get('scheduleNo'));
	  		newObj.set('wrkactNo', record.get('wcode'));
	  		newObj.set('sizeNo', record.get('sizeNo'));
	  		newObj.set('qtyMo', record.get('sizeQty'));
	  		newObj.set('qtyHand', qtyHand);//每手数量
	  		newObj.set('materialNo', record.get('materialNo'));
	  		newObj.set('materialName', record.get('materialName'));
	  		return newObj;
	},
    
    onHandQtyChange: function(field,newValue,oldValue){
    	var me = this;
    	var hand=10;
    	var handQty = parseInt(field.getValue());
    	if(handQty<hand){
    		hand = handQty;
    	}
    	//触发onHandMinQtyChange
    	me.lookupReference('txtHandMinQty').setValue('');
    	me.lookupReference('txtHandMinQty').setValue(hand);
    },
    
    onHandMinQtyChange: function(field,newValue,oldValue){
    	var me = this;
    	me.onSplitHand(field);
    },    
    
    onSplitHand: function(field){
		var me = this,
        objList = me.getObjList(),
        store1 = objList.grid1.getStore(),
        grid1cols = me.view.grid1Columns,
        model1 = store1.model;
		if(field.getValue()==""){
			return;
		}
		
		var calQty = 0;
		var sizeQty = parseInt(me.lookupReference('txtSizeQty').getValue());
    	var handQty = parseInt(me.lookupReference('txtHandQty').getValue());
    	var handMinQty = parseInt(field.getValue());
    	if(handMinQty>handQty){
  		  Hc.alert('每手最小数量不得大于每手数量');
  		  field.setValue((handQty<10?handQty:10));
		  return;
    	}
    	if(handQty>sizeQty){
    		  Hc.alert('每手数量不得大于工单数量');
    		  me.lookupReference('txtHandQty').setValue(sizeQty);
  		  return;
      	}
    	if(handMinQty==0){
    		field.setValue('');
    		store1.remove(store1.getAt(0));
    		return;
    	}
    	if(handQty!=0){
    		if(sizeQty%handQty<handMinQty){
    			calQty = parseInt(sizeQty/handQty);
    		}
    		else{
    			calQty = parseInt(sizeQty/handQty)+1;
    		}
    	}
		
		var fields={};
		fields['_flag']='A';//可去掉
		//清空store
		grid1cols = [];
		if(store1.count()>0){
			store1.remove(store1.getAt(0));
		}
		var spare = sizeQty;
		for(var i=1;i<calQty+1;i++){
			grid1cols.push({"text":"第"+i+"手","dataIndex":"hand"+i,"name":"hand"+i});
			if(spare>=handQty+handMinQty){
				fields['hand'+i]=handQty;
				spare = spare - handQty;
			}
			else{
				fields['hand'+i]=spare;
			}
		}
		//store动态添加列
		objList.grid1.reconfigure(store1,grid1cols); 
		//store新增一行
		store1.insert(0, new model1(fields));		
    }
    
    
    
    
    
    

    
  });