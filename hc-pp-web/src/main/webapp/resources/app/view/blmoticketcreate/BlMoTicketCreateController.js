/**
 * Description: 工单生成(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     hexy
 * @date:  2015-05-14 15:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketcreate.BlMoTicketCreateController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.blmoticketcreate',
    
    init:function(){
    	var me = this,    	
        objList = me.getObjList();
        me.callParent();
        if (!objList) return;
        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }
    	
       objList.btnAdd.hidden=true;
       objList.btnSave.hidden=true;
       objList.btnDelete.hidden=true;
       objList.btnPrint.hidden=true;
       //objlist.btnPrint.hidden=true;
       //objlist.btnDelete.hidden=true;
       // objlist.btnExport.hidden=true;
       /* objlist.btnPrint.hidden=true;
        objlist.btnOther.hidden=true;
        objlist.btnSave.hidden=true;*/
        
		objList.btnOther1.setVisible(true);
		objList.btnOther1.text='生成工票';  	
		
		objList.btnOther2.setVisible(true);
		objList.btnOther2.text='工票列表';  	
		
		objList.btnOther3.setVisible(true);
		objList.btnOther3.text='工序详情';  	
		
		objList.btnOther4.setVisible(true);
		objList.btnOther4.text='批量修改小组';  	
    },
  });