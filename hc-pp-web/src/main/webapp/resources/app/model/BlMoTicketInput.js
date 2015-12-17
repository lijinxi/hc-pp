/**
 * Description: 工票录入明细表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicketInput', {
    extend: 'Ext.data.Model',
    alias: 'model.blmoticketinput',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'bigint'},
         {name: 'divisionNo', text: '工作中心所在事业部编号', type: 'string'},
         {name: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'ticketNo', text: '工票编号(同单据编号)', type: 'string'},
         {name: 'orderNo', text: '工序序号(工序工分表里的序号)', type: 'smallint'},
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         {name: 'empCode', text: '员工编号', type: 'string'},
         {name: 'shortCode', text: '电脑号', type: 'string'},
         {name: 'deptId', text: '员工所在部门ID', type: 'int'},
         {name: 'inputQty', text: '录入数量', type: 'smallint'},
         {name: 'inputTime', text: '录入时间', type: 'date'},
         {name: 'whetherSum', text: '是否汇总(0=未汇总,1=汇总.汇总是进行工资运算)', type: 'smallint'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });