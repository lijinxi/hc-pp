/**
 * Description: 工票录入明细表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmoticketinput.BlMoTicketInputModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blmoticketinput',
    stores: {
    	commonstore:{
   			model:'Hc_pp.model.BlMoTicketInput',
    		proxy: {
    		url: Hc.ppsPath + 'rest/bl_mo_ticket_input/list.json'
    		}
   		 }
    }
  });