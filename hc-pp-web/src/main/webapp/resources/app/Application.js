/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_pp.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_pp',
    
    requires: [
    	'Hc_pp.view.blmo.BlMo',
        'Hc_pp.view.blmo.BlMoBom',
        'Hc_pp.view.blmop.BlMop',
        'Hc_pp.view.blmop.BlMopDtl',
        'Hc_pp.view.blpickingorder.BlPickingOrder',
        'Hc_pp.view.blpickingorder.BlPickingOrderDtl',
        'Hc_pp.view.ppworkshopstyle.PpWorkshopStyle',
        'Hc_pp.view.blprocessreport.BlProcessReport',
        'Hc_pp.view.blprocessreport.BlProcessReportDtl',
        'Hc_pp.view.pphandsplit.PpHandSplit',
        'Hc_pp.view.ppmo.PpMo',
        'Hc_pp.view.blmoticketcreate.BlMoTicketCreate'
       	],
       	
    appFolder:'resources/app',

    init: function() {
        var me = this;
        me.setDefaultToken('blmo');
        Ext.setGlyphFontFamily('FontAwesome');
        Ext.QuickTips.init();
    },

    launch: function () {

    }
});
