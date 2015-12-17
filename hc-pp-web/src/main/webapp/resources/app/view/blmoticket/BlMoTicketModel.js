/**
 * Description: 工票主表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmoticket.BlMoTicketModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blmoticket',
    stores: {
    	commonstore:{
   			model:'Hc_pp.model.BlMoTicket',
    		proxy: {
    		url: Hc.ppsPath + 'rest/bl_mo_ticket/list.json'
    		}
   		 }
    }
  });