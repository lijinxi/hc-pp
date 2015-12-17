/**
 * Description: 工序汇报表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlProcessReport', {
    extend: 'Ext.data.Model',
    alias: 'model.blprocessreport',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'brandNo', text: '品牌编号(取bas_brand)', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });