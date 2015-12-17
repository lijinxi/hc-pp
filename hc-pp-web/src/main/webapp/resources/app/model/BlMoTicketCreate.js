/**
 * Description: 工单生成(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     hexy
 * @date:  2015-05-14 15:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicketCreate', {
    extend: 'Ext.data.Model',
    alias: 'model.blmoticketcreate',
     fields: [
            
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'boxNo', text: '箱号(yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'modelNo', text: '形体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'workGroupCode', text: '作业组', type: 'string'},
         {name: 'workshopNo', text: '车间(从bas_workshop取)', type: 'string'},
         {name: 'startDate', text: '开工日期', type: 'string'},
         {name: 'generation', text: '生成方式', type: 'string'},
         ]
  });