/**
 * Description:  拣货单从表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlPickingOrderDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.blpickingorderdtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '拣货单号', type: 'string'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'productNo', text: '产品编号', type: 'string'},
         {name: 'materialPurpose', text: '物料用途', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'sizeNo', text: '尺码', type: 'string'},
         {name: 'unitNo', text: '单位', type: 'string'},
         {name: 'sumQty', text: '定额数量', type: 'float'}
         ]
  });