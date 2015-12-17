/**
 * Description: 工单BOM表(manufacture_order_bom)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoBom', {
    extend: 'Ext.data.Model',
    alias: 'model.blmobom',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'productNo', text: '产品编号', type: 'string'},
         {name: 'billNo', text: 'MO号', type: 'string'},
         {name: 'seqNo', text: '物料序号', type: 'string'},
         {name: 'childSeqNo', text: '物料子序号', type: 'string'},
         {name: 'materialPurpose', text: '物料用途', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'sizeNo', text: '尺码', type: 'string'},
         {name: 'unitNo', text: '物料单位编号', type: 'string'},
         {name: 'unitQty', text: '单用量', type: 'number'},
         {name: 'sumQty', text: '总用量', type: 'number'},
         {name: 'assignedQty', text: '已分配量', type: 'number'},
         {name: 'issuedQty', text: '已发料量', type: 'number'},
         {name: 'unissuedQty', text: '未发料量', type: 'number'},
         {name: 'moIssuedStatus', text: '发料状态(取字典mo_issued_status ，50确认,51分配,52拣货,53发料,500完结)', type: 'string'},
         {name: 'pickingOrderNo', text: '拣货单号', type: 'string'},
         {name: 'issuedStoreNo', text: '发料仓库', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });