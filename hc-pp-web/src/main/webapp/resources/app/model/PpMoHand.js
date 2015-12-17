/**
 * Description: 工单拆手表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.PpMoHand', {
    extend: 'Ext.data.Model',
    alias: 'model.ppmohand',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'handNo', text: '手编号(yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'boxNo', text: '箱号(yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'startDate', text: '开工日期', type: 'date'},
         {name: 'workshopNo', text: '工作中心(从bas_workshop取)', type: 'string'},
         {name: 'wrkactType', text: '工作中心类型(取数据字典 workshop_type)', type: 'string'},
         {name: 'factoryNo', text: '厂区编号(前端不显示)', type: 'string'},
         {name: 'divisionNo', text: '车间所在事业部编号(前端不显示)', type: 'string'},
         {name: 'wrkactNo', text: '工分表编号', type: 'string'},
         {name: 'materialNo', text: '半成品编码', type: 'string'},
         {name: 'materialName', text: '产品名称', type: 'string'},
         {name: 'normalUnit', text: '基本单位', type: 'string'},
         {name: 'qtyTotal', text: '每手总数量', type: 'int'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'moNo', text: 'MO号', type: 'string'},
         {name: 'moDivisionNo', text: 'MO所在事业部编号(前端不显示)', type: 'string'},
         {name: 'sizeNo', text: '配码', type: 'string'},
         {name: 'qtyMo', text: 'MO配码工单数量', type: 'int'},
         {name: 'qtyHand', text: '每个配码数量', type: 'int'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'modtlLineId', text: '表bl_mo_dtl的lineid', type: 'int'}
         ]

  });