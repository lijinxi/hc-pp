/**
 * Description: 生产加工单表(manufacture_order)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMo', {
    extend: 'Ext.data.Model',
    alias: 'model.blmo',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'brandNo', text: '品牌', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'groupNo', text: '面部小组', type: 'string'},
         {name: 'planer', text: '计划员', type: 'string'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'startDate', text: '开工日期', type: 'date'},
         {name: 'endDate', text: '完工日期', type: 'date'},
         {name: 'materialNo', text: '产品编号', type: 'string'},
         {name: 'billNo', text: '单据编号(MO号)', type: 'string'},
         {name: 'billTypeNo', text: '单据类型(MO)', type: 'string'},
         {name: 'workOrderType', text: '工单类型(CP,ZD,DL,BM物料基础资料自动带出，可调整)', type: 'string'},
         {name: 'customerType', text: '客户类型(内销还是外销)', type: 'string'},
         {name: 'moMaterialStatus', text: '物料状态(取片语mo_material_status，50确认,51分配,52拣货,500完结)', type: 'string'},
         {name: 'moProcessStatus', text: '工序状态(取片语mo_process_status，60确认，61部分汇报，500完结)', type: 'string'},
         {name: 'moMoStatus', text: '工单状态(取片语mo_mo_status，40确认,41部分汇报,500完结)', type: 'string'},
         {name: 'sizeTypeNo', text: '配码组', type: 'string'},
         {name: 'sizeNo', text: '尺码', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'finishQty', text: '制造数(完工数)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });