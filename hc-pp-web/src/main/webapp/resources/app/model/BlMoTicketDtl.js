/**
 * Description: 工票工序明细表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicketDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blmoticketdtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'bigint'},
         {name: 'divisionNo', text: '工作中心所在事业部编号', type: 'string'},
         {name: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'ticketNo', text: '工票编号(同单据编号)', type: 'string'},
         {name: 'orderNo', text: '工序序号(工序工分表里的序号)', type: 'smallint'},
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         {name: 'workValue', text: '工分值', type: 'decimal'},
         {name: 'isAssist', text: '是否外协(0=否,1=是)', type: 'smallint'},
         {name: 'workGroupCode', text: '作业组别(从pd_work_group取数)', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });