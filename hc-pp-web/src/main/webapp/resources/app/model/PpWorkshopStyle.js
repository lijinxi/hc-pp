/**
 * Description:  车间型体款号维护(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.PpWorkshopStyle', {
    extend: 'Ext.data.Model',
    alias: 'model.ppworkshopstyle',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'groupNo', text: '小组', type: 'string'},
         {name: 'aheadTime', text: '提前期', type: 'int'},
         {name: 'enableFlag', text: '数据状态(0=禁用 1=启用)', type: 'int'},
         {name: 'modifier', text: '最后修改人', type: 'string'},
         {name: 'modifyTime', text: '最后修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });