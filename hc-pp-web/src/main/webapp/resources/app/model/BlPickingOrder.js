/**
 * Description:  拣货单主表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @string:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlPickingOrder', {
    extend: 'Ext.data.Model',
    alias: 'model.blpickingorder',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '拣货单号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型(拣货单)', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示)', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'supplierNo', text: '供应商(考虑后期外协拣货发料，暂不用)', type: 'string'},
         {name: 'startDate', text: '开工日期'},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'creator', text: '创建人', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'string'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });