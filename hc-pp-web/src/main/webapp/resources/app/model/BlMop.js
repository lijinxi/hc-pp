/**
 * Description: 生产计划单主表(manufacture_order_proposed)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMop', {
    extend: 'Ext.data.Model',
    alias: 'model.blmop',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号(MOP号)', type: 'string'},
         {name: 'billTypeNo', text: '单据类型(MOP)', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示)', type: 'string'},
         {name: 'brandNo', text: '品牌编号(取bas_brand)', type: 'string'},
         {name: 'coNo', text: '销售订单号', type: 'string'},
         {name: 'dataSource', text: '数据来源', type: 'string', defaultValue:0},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'data_source', text: '数据来源', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'},
         
         
         ]
  });