/**
 * Description:  车间型体款号维护Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppworkshopstyle.PpWorkshopStyleController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.ppworkshopstyle',
    
    onDivOrFacSelect:function( obj,rec ){
    	var me = this,
        objlist = me.getObjList(),
        form = objlist['commonsearch'];
        //record = form.getRecord(); //表头取记录用form ， 网格用grid来取
  	  	//if (!record) return;
    	
    	var workshopNoCombo = me.lookupReference('workshopNo');
    	
    	var divisionNo = form.items.getAt(0).getValue(),
    	factoryNo = form.items.getAt(1).getValue();
    	
    	if(divisionNo != null && divisionNo != ''){
    		workshopNoCombo.store.proxy.extraParams['divisionNo'] = divisionNo;
    	}
    	if(factoryNo != null && factoryNo != ''){
    		workshopNoCombo.store.proxy.extraParams['factoryNo'] = factoryNo;
    	}
    	
    	workshopNoCombo.store.load();
    	
    }
  });