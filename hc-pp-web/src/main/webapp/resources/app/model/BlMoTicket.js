/**
 * Description: 工票主表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicket', {
    extend: 'Ext.data.Model',
    alias: 'model.blmoticket',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'bigint'},
         {name: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'ticketNo', text: '工票编号(同单据编号)', type: 'string'},
         {name: 'ticketType', text: '工票类型(取数据字典 workshop_type)', type: 'string'},
         {name: 'workshopNo', text: '工作中心(从bas_workshop取)', type: 'string'},
         {name: 'divisionNo', text: '工作中心所在事业部编号', type: 'string'},
         {name: 'groupNo', text: '小组编号(从bas_workshop_group取)', type: 'string'},
         {name: 'ticketQty', text: '工票数量', type: 'smallint'},
         {name: 'boxno', text: '箱号', type: 'string'},
         {name: 'isPrint', text: '是否打印(0=未打印 1=已打印)', type: 'smallint'},
         {name: 'printer', text: '打印人(最后一次打印人)', type: 'string'},
         {name: 'printTime', text: '打印时间(最后一次打印时间)', type: 'date'},
         {name: 'isInput', text: '是否录入(0=未录入 1=已录入)', type: 'smallint'},
         {name: 'inputStatus', text: '录入状态(数据字典)', type: 'tinyint'},
         {name: 'inputer', text: '录入人(最后一次录入人)', type: 'string'},
         {name: 'inputTime', text: '录入时间(最后一次录入时间)', type: 'date'},
         {name: 'inputAuditor', text: '录入审核人', type: 'string'},
         {name: 'inputAuditTime', text: '录入审核时间', type: 'date'},
         {name: 'isReport', text: '是否汇报(0=未汇报 1=部分汇报 2=全部汇报)', type: 'smallint'},
         {name: 'reporter', text: '汇报人(最后一次汇报人)', type: 'string'},
         {name: 'reportTime', text: '汇报时间(最后一次汇报时间)', type: 'date'},
         {name: 'whetherSum', text: '是否汇总(0=未汇总,1=汇总 汇总是进行工资运算)', type: 'smallint'},
         {name: 'creator', text: '创建者', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'date'},
         {name: 'modifier', text: '修改者', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'date'},
         {name: 'billStatus', text: '工票状态(数据字典)', type: 'tinyint'},
         {name: 'remarks', text: '备注', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });