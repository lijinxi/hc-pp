/**
 * Description: 生产计划单从表(manufacture_order_proposed)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:17
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMopDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blmopdtl',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号(MOP号)', type: 'string'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'storeNo', text: '仓库编号', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'planer', text: '计划员', type: 'string'},
         {name: 'startDate', text: '计划开工日期', type: 'date'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'endDate', text: '计划完工日期(根据开工日期和提前期计算出来)', type: 'date'},
         {name: 'coLineNo', text: '销售订单行号', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'bomPurpose', text: 'BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)', type: 'string'},
         {name: 'workOrderType', text: '工单类型(CP,ZD,DL,BM物料基础资料自动带出，可调整)', type: 'string'},
         {name: 'associateNo', text: '委托关联号(发生调单有用)', type: 'string'},
         {name: 'mopStatus', text: '计划单(MOP)状态(制单状态10,确认为20)', type: 'string'},
         {name: 'customerType', text: '客户类型(内销还是外销)', type: 'string'},
         {name: 'groupNo', text: '面部小组', type: 'string'},
         {name: 'sizeNo', text: '尺码', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'sizeTypeNo', text: '配码组(根据物料基础信息带出)', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });