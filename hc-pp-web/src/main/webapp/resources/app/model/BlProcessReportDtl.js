/**
 * Description: 工序汇报从表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlProcessReportDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blprocessreportdtl',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'materialNo', text: '产品编号', type: 'string'},
         {name: 'moNo', text: 'MO号', type: 'string'},
         {name: 'sizeTypeNo', text: '配码组', type: 'string'},
         {name: 'sizeNo', text: '尺码', type: 'string'},
         {name: 'sizeQty', text: '尺码数量', type: 'int'},
         {name: 'reportQty', text: '汇报数', type: 'int'},
         {name: 'finishFlag', text: '完结标记', type: 'int'},
         {name: 'standWorkPoints', text: '标准工分值', type: 'float'},
         {name: 'sumWorkPoints', text: '累计工分值', type: 'float'},
         ]
  });