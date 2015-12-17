/**
 * Description: 工票拆手明细表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmotickethand.BlMoTicketHandModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blmotickethand',
    stores: {
    	commonstore:{
   			model:'Hc_pp.model.BlMoTicketHand',
    		proxy: {
    		url: Hc.IntegPath + 'rest/bl_mo_ticket_hand/list.json'
    		}
   		 }
    }
  });