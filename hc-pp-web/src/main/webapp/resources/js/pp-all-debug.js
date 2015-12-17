/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_pp.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_pp',
    
    
       	
    appFolder:'resources/app',

    init: function() {
        var me = this;
        me.setDefaultToken('blmo');
        Ext.setGlyphFontFamily('FontAwesome');
        Ext.QuickTips.init();
    },

    launch: function () {

    }
});

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
/**
 * Description: 工单生成(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     hexy
 * @date:  2015-05-14 15:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicketCreate', {
    extend: 'Ext.data.Model',
    alias: 'model.blmoticketcreate',
     fields: [
            
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'boxNo', text: '箱号(yyyyMMdd+6位流水号)', type: 'string'},
         {name: 'scheduleNo', text: '排程号', type: 'string'},
         {name: 'modelNo', text: '形体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'workGroupCode', text: '作业组', type: 'string'},
         {name: 'workshopNo', text: '车间(从bas_workshop取)', type: 'string'},
         {name: 'startDate', text: '开工日期', type: 'string'},
         {name: 'generation', text: '生成方式', type: 'string'},
         ]
  });
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
/**
 * Description: ��Ʊ������ϸ��(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicketHand', {
    extend: 'Ext.data.Model',
    alias: 'model.blmotickethand',
     fields: [
         {name: 'lineId', text: '��id(����)', type: 'bigint'},
         {name: 'divisionNo', text: '��������������ҵ�����', type: 'string'},
         {name: 'billNo', text: '���ݱ��(T+yyyyMMdd+6λ��ˮ��)', type: 'string'},
         {name: 'ticketNo', text: '��Ʊ���(ͬ���ݱ��)', type: 'string'},
         {name: 'handNo', text: '�ֱ��', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });
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
/**
 * Description: 生产计划单主表(manufacture_order_proposed)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMop', {
    extend: 'Ext.data.Model',
    alias: 'model.blmop',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号(MOP号)', type: 'string'},
         {name: 'billTypeNo', text: '单据类型(MOP)', type: 'string'},
         {name: 'divisionNo', text: '事业部编号(前端不显示)', type: 'string'},
         {name: 'brandNo', text: '品牌编号(取bas_brand)', type: 'string'},
         {name: 'coNo', text: '销售订单号', type: 'string'},
         {name: 'dataSource', text: '数据来源', type: 'string', defaultValue:0},
         {name: 'billStatus', text: '单据状态(取数据字典 bill_status)', type: 'string'},
         {name: 'data_source', text: '数据来源', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'},
         
         
         ]
  });
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
/**
 * Description: 工序汇报表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlProcessReport', {
    extend: 'Ext.data.Model',
    alias: 'model.blprocessreport',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'brandNo', text: '品牌编号(取bas_brand)', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'billTypeNo', text: '单据类型', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间', type: 'date'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'date'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'date'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
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
/**
 * Description: 拆分手()(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhu.yh
 * @date:  2015-05-14 10:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.PpHandSplit', {
    extend: 'Ext.data.Model',
    alias: 'model.pphandsplit',
     fields: [
         {name: 'hand0', text: '第0手', type: 'int'},
         ]
  });
/**
 * Description: 工单拆分合并(manufacture_order)(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.PpMo', {
    extend: 'Ext.data.Model',
    alias: 'model.ppmo',
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
         {name: 'materialName', text: '产品名称', type: 'string'},
         {name: 'normalUnit', text: '基本单位', type: 'string'},
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
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'wcode', text: '工分表编号', type: 'string'}
         
         ]
  });
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
/**
 * Description:  车间型体款号维护(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.PpWorkshopStyle', {
    extend: 'Ext.data.Model',
    alias: 'model.ppworkshopstyle',
     fields: [
         {name: 'lineId', text: '行ID(主键)', type: 'int'},
         {name: 'factoryNo', text: '厂区编号', type: 'string'},
         {name: 'divisionNo', text: '事业部编号', type: 'string'},
         {name: 'materialNo', text: '物料编号', type: 'string'},
         {name: 'workshopNo', text: '车间', type: 'string'},
         {name: 'groupNo', text: '小组', type: 'string'},
         {name: 'aheadTime', text: '提前期', type: 'int'},
         {name: 'enableFlag', text: '数据状态(0=禁用 1=启用)', type: 'int'},
         {name: 'modifier', text: '最后修改人', type: 'string'},
         {name: 'modifyTime', text: '最后修改时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description:
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_pp.store.BlTemplate', {
    extend: 'Ext.data.Store',

    alias: 'store.bltemplate',

    storeId:'bltemplate',

    model:'Hc_pp.model.BlTemplate'
});
/**
 * Description: 生产加工单表(manufacture_order)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmo.BlMo', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blmo',
	
	controller: 'blmo',
	viewModel: {
		type: 'blmo'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{
		                	 fieldLabel : '工单状态',
		                	 name : 'moMoStatus',
		                	 xtype:'extcombox',
		                	 displayvalue:"40=确认:41=部分汇报:500=完结"		                		 		                	 
			             },			             
  		                 {xtype: 'textfield',name: 'billNo', fieldLabel: '工单号'},
  		                 {
		                	 fieldLabel : '事业部',
		                	 name : 'divisionNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_division/listAll.json",
		                	 displaymember:'divisionName',
		                	 valuemember:'divisionNo'
			             },
  		                 {
		                	 fieldLabel : '品牌',
		                	 name : 'brandNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_brand/listAll.json",
		                	 displaymember:'brandCname',
		                	 valuemember:'brandNo'	                		 		                	 
			             },
  		                 {
		                	 fieldLabel : '厂区',
		                	 name : 'factoryNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_factory/listAll.json",
		                	 displaymember:'factoryName',
		                	 valuemember:'factoryNo'	                		 		                	 
			             },
  		                 {
		                	 fieldLabel : '车间',
		                	 name : 'workshopNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_workshop/listAll.json",
		                	 displaymember:'workshopName',
		                	 valuemember:'workshopNo'		                		 		                	 
			             },
  		                 {
		                	 fieldLabel : '面部小组',
		                	 name : 'groupNo',
		                	 xtype:'extcombox',
		                	 displayvalue:"面部小组编号"		                		 		                	 
			             },
			             {xtype: 'textfield',name: 'materialNo', fieldLabel: '产品编码'},
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '开工日期',
		                	 name : 'orderDateStrat'
		                 },
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '到',
		                	 name : 'startDate',
		                	 vtype:'compareTo',     //数据验证方式，compareTo
		                	 compareTo:'orderDateStrat', // 被比较的输入框控件name
		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
		                	 compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
		                 }
		                 ,
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '完工日期',
		                	 name : 'orderDateStrat'
		                 },
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '到',
		                	 name : 'endDate',
		                	 vtype:'compareTo',     //数据验证方式，compareTo
		                	 compareTo:'orderDateStrat', // 被比较的输入框控件name
		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
		                	 compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
		                 }
			             ],
			gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true,editor: {allowBlank: true}},
				{dataIndex: 'moMoStatus', text: '工单状态', editor: {allowBlank: true}},/*(取片语mo_mo_status，40确认,41部分汇报,500完结)*/
				{dataIndex: 'billNo', text: '工单号', editor: {allowBlank: true}},
				{dataIndex: 'factoryNo', text: '厂区', editor: {allowBlank: true}},				
				{dataIndex: 'divisionNo', text: '事业部', editor: {allowBlank: true}},
				{dataIndex: 'brandNo', text: '品牌', editor: {allowBlank: true}},
				{dataIndex: 'storeNo', text: '仓库', editor: {allowBlank: true}},
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: true}},
				{dataIndex: 'groupNo', text: '面部小组', editor: {allowBlank: true}},
				{dataIndex: 'planer', text: '计划员', editor: {allowBlank: true}},
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: true}},
				{dataIndex: 'startDate', text: '开工日期', editor: {allowBlank: true}},
				{dataIndex: 'endDate', text: '完工日期', editor: {allowBlank: true}},
				{dataIndex: 'materialNo', text: '产品编码', editor: {allowBlank: true}},			
				/*{dataIndex: 'billTypeNo', text: '工单类型(MO)', editor: {allowBlank: false}},*/
				{dataIndex: 'workOrderType', text: '工单类型', editor: {allowBlank: true}},/*(CP,ZD,DL,BM物料基础资料自动带出，可调整)*/
				{dataIndex: 'customerType', text: '客户类型', editor: {allowBlank: true}},/*(内销还是外销)*/
				{dataIndex: 'moMaterialStatus', text: '物料状态', editor: {allowBlank: true}},/*(取片语mo_material_status，50确认,51分配,52拣货,500完结)*/
				{dataIndex: 'moProcessStatus', text: '工序状态', editor: {allowBlank: true}},/*(取片语mo_process_status，60确认，61部分汇报，500完结)*/				
				{dataIndex: 'sizeTypeNo', text: '配码组', editor: {allowBlank: true}},
				{dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: true}},
				{dataIndex: 'sizeQty', text: '工单数量', editor: {allowBlank: true}},
				{dataIndex: 'finishQty', text: '完工数', editor: {allowBlank: true}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: true}},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: true}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: true}},
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: true}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: true}}
				
			],
 		   gridModel: 'Hc_pp.model.BlMo',
		   gridLoadUrl: Hc.ppsPath + 'bl_mo/list.json',
 		   dtlName:'blmobom',
		   showModel:'selftab'
		});
		me.callParent();
	}
});

/**
 * Description: 工单BOM表(manufacture_order_bom)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmo.BlMoBom', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blmobom',
	
	controller: 'blmobom',
	viewModel: {
		type: 'blmobom'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			billItems: [
			            {
			            	name: 'moMoStatus', 
			            	fieldLabel: '工单状态', 
			            	xtype: 'extcombox',
			            	bind: {value: '{billRow.moMoStatus}'},
			            	displayvalue:"40=确认:41=部分汇报:500=完结"
			            },
			            {name: 'billNo', fieldLabel: '工单号',xtype: 'textfield',bind: {value: '{billRow.billNo}'}},
			            {
			            	name: 'factoryNo', 
			            	fieldLabel: '厂区',
			            	xtype: 'extcombox',
			            	bind: {value: '{billRow.factoryNo}'},
						   displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
						   displaymember: 'factoryName',
						   valuemember: 'factoryNo'
			            },	            
			            {
			               fieldLabel: '事业部',
						   name: 'divisionNo',
						   xtype: 'extcombox',
						   bind: {value: '{billRow.divisionNo}'},
						   displayvalue: Hc.mdmPath + 'bas_division/listAll.json',				   
						   displaymember: 'divisionName',
						   valuemember: 'divisionNo'
		                },
			            {
		                	name: 'brandNo', 
		                	fieldLabel: '品牌',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.brandNo}'},
						   displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
						   displaymember: 'brandCname',
						   valuemember: 'brandNo'
		                	
		                },
			            {
		                	name: 'storeNo', 
		                	fieldLabel: '仓库',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.storeNo}'},
		                	displayvalue:Hc.mdmPath + 'bas_store/listAll.json',
							displaymember: 'storeName',
							valuemember: 'storeNo'
		                },
			            {
		                	name: 'workshopNo', 
		                	fieldLabel: '车间',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.workshopNo}'},
		                	displayvalue:Hc.mdmPath + 'bas_workshop/listAll.json',
							   displaymember: 'workshopName',
							   valuemember: 'workshopNo'
		                },
			            {
		                	name: 'groupNo', 
		                	fieldLabel: '面部小组',
		                	xtype: 'extcombox',
		                	bind: {value: '{billRow.groupNo}'},
		                	displayvalue:"百丽面部小组"
		                },
			            {name: 'planer', fieldLabel: '计划员',xtype: 'textfield',bind: {value: '{billRow.planer}'}},
			            {name: 'scheduleNo', fieldLabel: '排程号',xtype: 'textfield',bind: {value: '{billRow.scheduleNo}'}},
			            {name: 'startDate', fieldLabel: '开工日期',xtype: 'datefield',bind: {value: '{billRow.startDate}'}},
			            {name: 'endDate', fieldLabel: '完工日期',xtype: 'datefield',bind: {value: '{billRow.endDate}'}},
			            {name: 'materialNo', fieldLabel: '产品编码',xtype: 'textfield',bind: {value: '{billRow.materialNo}'}},
			            {name: 'workOrderType', fieldLabel: '工单类型',xtype: 'textfield',bind: {value: '{billRow.workOrderType}'}},
			            {name: 'customerType', fieldLabel: '客户类型',xtype: 'textfield',bind: {value: '{billRow.customerType}'}},
/*			            {
			            	name: 'moMaterialStatus', 
			            	fieldLabel: '物料状态',
			            	xtype: 'extcombox',
			            	bind: {value: '{billRow.brandNo}'},
			            	displayvalue:"50确认:51分配:52拣货:500完结"
			            },
			            {
			            	name: 'moProcessStatus', 
			            	fieldLabel: '工序状态',
			            	xtype: 'textfield',
			            	bind: {value: '{billRow.brandNo}'},
			            	displayvalue:"60确认:61部分汇报:500完结"
			            },*/
			            {name: 'sizeTypeNo', fieldLabel: '配码组',xtype: 'textfield',bind: {value: '{billRow.sizeTypeNo}'}},
			            {name: 'sizeNo', fieldLabel: '尺码',xtype: 'textfield',bind: {value: '{billRow.sizeNo}'}},
			            {name: 'sizeQty', fieldLabel: '工单数量',xtype: 'textfield',bind: {value: '{billRow.sizeQty}'}},
			            {name: 'finishQty', fieldLabel: '完工数',xtype: 'textfield',bind: {value: '{billRow.finishQty}'}},
			            {name: 'remarks', fieldLabel: '备注',xtype: 'textfield',bind: {value: '{billRow.remarks}'}}
			            ],
						   billLoadUrl: Hc.ppsPath + 'bl_mo_bom/list.json',
						   billSaveUrl: Hc.ppsPath + 'bl_mo_bom/saveSizeHorizontalData.json',//'bl_co/saveMasterCustomerList.json',
						   billAuditUrl: Hc.ppsPath + 'bl_mo_bom/audit.json',
						   billExportUrl: Hc.ppsPath + 'bl_mo_bom/do_export.json',
						   billModel: 'Hc_pp.model.BlMoBom',
						   billSubGrid: ['mastergrid'],
						   hasStatus2: true,
			     gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true, editor: {allowBlank: false}},
/*				{dataIndex: 'factoryNo', text: '厂区编号', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'storeNo', text: '仓库编号', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: false}},
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},*/
				
				{dataIndex: 'billNo', text: '工单号', hidden:true, editor: {allowBlank: false}},
				{dataIndex: 'productNo', text: '产品编码', hidden:true, editor: {allowBlank: true}},
				{dataIndex: 'seqNo', text: '序号'},
				{dataIndex: 'childSeqNo', text: '子序号'},
				{dataIndex: 'materialPurpose', text: '物料用途', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '物料编码', editor: {allowBlank: true}},
				{dataIndex: '', text: '物料名称', editor: {allowBlank: true}},
				{dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: true}},
				{dataIndex: 'unitNo', text: '单位', editor: {allowBlank: false}},
				{dataIndex: 'unitQty', text: '单用量', editor: {allowBlank: false}},
				{dataIndex: 'sumQty', text: '总用量'},
				{dataIndex: 'assignedQty', text: '已分配量'},
				{dataIndex: 'issuedQty', text: '已发料量'},
				{dataIndex: 'unissuedQty', text: '未发料量'},
				{dataIndex: 'moIssuedStatus', text: '发料状态'},/*(取字典mo_issued_status ，50确认,51分配,52拣货,53发料,500完结)*/
				{dataIndex: 'pickingOrderNo', text: '拣货单号'},
				{dataIndex: 'issuedStoreNo', text: '发料仓库', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '建档人', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false}}
			],
			   gridPrimaryKey: 'lineId',
			   gridModel: 'Hc_pp.model.BlMoBom',
			   gridLoadUrl: Hc.ppsPath + 'bl_mo_bom/list.json',
			   gridMSizeIdx:5
		});
		me.callParent();
	}
});

/**
 * Description: 工单BOM表(manufacture_order_bom)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmo.BlMoBomController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.blmobom'
  });
/**
 * Description: 工单BOM表(manufacture_order_bom)Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmo.BlMoBomModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blmobom'
  });
/**
 * Description: 生产加工单表(manufacture_order)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmo.BlMoController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blmo'
  });
/**
 * Description: 生产加工单表(manufacture_order)Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmo.BlMoModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.blmo'
  });
/**
 * Description: 生产计划单主表(manufacture_order_proposed)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmop.BlMop', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blmop',
	
	controller: 'blmop',
	viewModel: {
		type: 'blmop'
	},

	initComponent: function (){
		var me= this,
			brandStore =  Ext.create('Hc_Common.store.CmnBrandRelation'),
			blTypeStore = Ext.create('Hc_Common.store.CmnDict',{
					proxy: {
						url: Hc.mdmPath+'bas_dict/listAll.json?dictCode=bill_type'
					}
				}),
			divisionStore = Ext.create('Hc_Common.store.CmnDivision');
		
		Ext.apply(me, {
			 searchItems : [/*{
				xtype:'extcombox',
		    	fieldLabel:'事业部',
				displaymember: 'divisionName',
				valuemember: 'divisionNo',
				store: divisionStore
			 },*/{
				xtype:'extcombox',
		    	fieldLabel:'品牌',
				displaymember: 'brandCname',
				valuemember: 'brandNo',
				store: brandStore
			 }, {
		         	xtype:'textfield',
		        	fieldLabel:'销售订单号',
		        	name:'coNo'
			 },{
				 fieldLabel : '单据来源', name : 'mopSource',
				 xtype:'extcombox', displayvalue:"0=手工新增:1=MRP"}
			 ],
             
             gridColumns: [
	            {dataIndex: 'brandNo', text: '品牌',
		            xtype: 'bllookupedit',
		            displaymember: 'brandCname',
					valuemember: 'brandNo',
					gstore: brandStore,
					readOnly: true,
					width: 140 },
				{dataIndex: 'divisionNo', text: '事业部', 
					xtype: 'bllookupedit',
		            displaymember: 'divisionName',
					valuemember: 'divisionNo',
					gstore: divisionStore,
					readOnly: true,
					width: 140 },
				{dataIndex: 'coNo', text: '销售订单号', width: 155},
				{dataIndex: 'mopSource', text: '单据来源',xtype: 'bllookupedit', displayvalue:'0=手工新增:1=MRP', readOnly: true}
			],
	
			gridModel: 'Hc_pp.model.BlMop',
			gridLoadUrl: Hc.ppsPath + 'bl_mop/list.json',
			dtlName:'blmopdtl',
			showModel:'selftab'
		});
	
	me.callParent();
	}
});

/**
 * Description: 生产计划单主表(manufacture_order_proposed)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmop.BlMopController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blmop'
  });
/**
 * Description: 生产计划单从表(manufacture_order_proposed)(default) All rights
 * Reserved, Designed ByHc Copyright: Copyright(C) 2014-2015 Company:
 * Wonhigh.
 * 
 * @author: zhangyk
 * @date: 2015-04-24 14:30:17
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmop.BlMopDtl', {
	extend : 'Hc_Common.view.BaseBillDetailPage',
	alias : 'widget.blmopdtl',
	
	controller : 'blmopdtl',
	viewModel : {
		type : 'blmopdtl'
	},
	initComponent : function() {
		var me = this;
		
		Ext.apply(me, {
					billItems : [{
			            	fieldLabel: '品牌编号',
			            	name: 'brandNo',
			            	bind: {
			            		value: '{billRow.brandNo}'
			            	},
			            	xtype: 'searchhelpfield',
			            	allowBlank: false,
			            	winTitle: '选择品牌',
			            	gridColumns: [{dataIndex: 'brandNo',text: '品牌编号',flex: 0.5}, 
			            		{dataIndex: 'brandCname', text: '品牌名称   ', flex: 0.5},
			            		{dataIndex: 'divisionNo', text: '事业部编号', flex: 0.5},
			            		{dataIndex: 'divisionName', text: '事业部名称', flex: 0.5}
			            	],
			            	searchItems: [{name: 'brandNo', fieldLabel: '品牌编号'},
			            		{name: 'brandCname', fieldLabel: '品牌名称'}
			            	],
			            	otherFields: 'brandCname,divisionNo,divisionName',
			            	url: Hc.mdmPath + 'bas_brand_relation/listvo.json?selectVoName=SelectListByVoBasBrandRelation'
			            }, {
			            	fieldLabel: '品牌名称',
			            	name: 'brandCname',
			            	xtype: 'textfield',
			            	readOnly: true,
			            	editable: false
			            }, {
			            	fieldLabel: '事业部编码',
			            	name: 'divisionNo',
			            	xtype: 'textfield',
			            	hidden: true
			            }, {
			            	fieldLabel: '事业部',
			            	name: 'divisionName',
			            	xtype: 'textfield'
			            }, {
						xtype : 'textfield',
						fieldLabel : '销售订单号',
						name : 'coNo',
						bind : {
							value : '{billRow.coNo}'
						}
					}, {
						fieldLabel : '单据来源',
						name : 'mopSource',
						xtype : 'extcombox',
						bind : {
							value : '{billRow.mopSource}'
						},
						displayvalue : "0=手工新增:1=MRP",
						width : '100%'
					}],
					
					billLoadUrl : Hc.ppsPath + 'bl_mop/list.json',
					billSaveUrl : Hc.ppsPath + 'bl_mop/saveSizeHorizontalData.json',
					billAuditUrl : Hc.ppsPath + 'bl_mop/audit.json',
					billExportUrl : Hc.ppsPath + 'bl_mop/do_export.json',
					billModel : 'Hc_pp.model.BlMop',
					billSubGrid : ['mastergrid'],
					hasStatus2 : true,
					billType : 'bl-mop',
					gridColumns : [{
								dataIndex : 'lineId',
								text : '序号'
							},

							{
								dataIndex : 'materialNo',
								text : '物料编码',
								editor : {
									allowBlank : false,
									xtype : 'searchhelpfield', // 数据精灵类
									name : 'materialNo',
									reference : 'materialNo',
									gridColumns : [{ // 弹出框网格的列
										dataIndex : 'materialNo',
										text : '物料编码',
										flex : 0.5
									}, {
										dataIndex : 'materialName',
										text : '物料名称',
										flex : 0.5
									}],
									searchItems : [{
												name : 'materialNo',
												fieldLabel : '物料编码'
											}, {
												name : 'materialName',
												fieldLabel : '物料名称'
											}], // 弹出框的查询面板
									isAutoLoad : false,
									url : Hc.mdmPath
											+ 'bas_material/list.json',
									allowBlank : false
								}
							}, {
								dataIndex : 'startDate',
								text : '计划开工日期',
								editor : {
									allowBlank : false
								}
							}, {
								dataIndex : 'endDate',
								text : '计划完工日期'
							}, {
								dataIndex : 'planer',
								text : '计划员',
								editor : {
									allowBlank : true
								}
							}, {
								dataIndex : 'scheduleNo',
								text : '排程号',
								editor : {
									allowBlank : true
								}
							}, {
								dataIndex : 'groupNo',
								text : '面部小组',
								editor : {
									allowBlank : true
								}

							}, {
								dataIndex : 'bomPurpose',
								text : 'BOM用途'
							}, {
								dataIndex : 'sizeTypeNo',
								text : '配码组'
							}, {
								dataIndex : 'sizeNo',
								text : '尺码'
							}, {
								dataIndex : 'sizeQty',
								text : '尺码数量',
								editor : {
									allowBlank : false
								}
							}, {
								dataIndex : 'remarks',
								text : '备注',
								editor : {
									allowBlank : true
								}
							}, {
								dataIndex : 'workshopNo',
								text : '车间'
							}, {
								dataIndex : 'coLineNo',
								text : '销售订单行号'
							}, {
								dataIndex : 'factoryNo',
								text : '厂区编号'
							}],
					gridPrimaryKey : 'lineId',
					gridModel : 'Hc_pp.model.BlMopDtl',
					gridLoadUrl : Hc.ppsPath + 'bl_mop_dtl/listvo.json',
					gridMSizeIdx : 5
				});

		me.callParent();
	}
});

/**
 * Description: 生产计划单从表(manufacture_order_proposed)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:17
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmop.BlMopDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.blmopdtl'
  });
/**
 * Description: 生产计划单从表(manufacture_order_proposed)Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:17
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmop.BlMopDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blmopdtl'
  });
/**
 * Description: 生产计划单主表(manufacture_order_proposed)Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmop.BlMopModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blmop'

  });
/**
 * Description: 工票主表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticket.BlMoTicket', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmoticket',
	
	controller: 'blmoticket',
	viewModel: {
		type: 'blmoticket'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketType', text: '工票类型(取数据字典 workshop_type)', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '工作中心(从bas_workshop取)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'groupNo', text: '小组编号(从bas_workshop_group取)', editor: {allowBlank: false}},
				{dataIndex: 'ticketQty', text: '工票数量', editor: {allowBlank: false}},
				{dataIndex: 'boxno', text: '箱号', editor: {allowBlank: false}},
				{dataIndex: 'isPrint', text: '是否打印(0=未打印 1=已打印)', editor: {allowBlank: false}},
				{dataIndex: 'printer', text: '打印人(最后一次打印人)', editor: {allowBlank: false}},
				{dataIndex: 'printTime', text: '打印时间(最后一次打印时间)', editor: {allowBlank: false}},
				{dataIndex: 'isInput', text: '是否录入(0=未录入 1=已录入)', editor: {allowBlank: false}},
				{dataIndex: 'inputStatus', text: '录入状态(数据字典)', editor: {allowBlank: false}},
				{dataIndex: 'inputer', text: '录入人(最后一次录入人)', editor: {allowBlank: false}},
				{dataIndex: 'inputTime', text: '录入时间(最后一次录入时间)', editor: {allowBlank: false}},
				{dataIndex: 'inputAuditor', text: '录入审核人', editor: {allowBlank: false}},
				{dataIndex: 'inputAuditTime', text: '录入审核时间', editor: {allowBlank: false}},
				{dataIndex: 'isReport', text: '是否汇报(0=未汇报 1=部分汇报 2=全部汇报)', editor: {allowBlank: false}},
				{dataIndex: 'reporter', text: '汇报人(最后一次汇报人)', editor: {allowBlank: false}},
				{dataIndex: 'reportTime', text: '汇报时间(最后一次汇报时间)', editor: {allowBlank: false}},
				{dataIndex: 'whetherSum', text: '是否汇总(0=未汇总,1=汇总 汇总是进行工资运算)', editor: {allowBlank: false}},
				{dataIndex: 'creator', text: '创建者', editor: {allowBlank: false}},
				{dataIndex: 'createTime', text: '创建时间', editor: {allowBlank: false}},
				{dataIndex: 'modifier', text: '修改者', editor: {allowBlank: false}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: false}},
				{dataIndex: 'auditor', text: '审核人', editor: {allowBlank: false}},
				{dataIndex: 'auditTime', text: '审核时间', editor: {allowBlank: false}},
				{dataIndex: 'billStatus', text: '工票状态(数据字典)', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 工票主表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticket.BlMoTicketController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.blmoticket'
  });
/**
 * Description: 工票主表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmoticket.BlMoTicketModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blmoticket',
    stores: {
    	commonstore:{
   			model:'Hc_pp.model.BlMoTicket',
    		proxy: {
    		url: Hc.ppsPath + 'rest/bl_mo_ticket/list.json'
    		}
   		 }
    }
  });
/**
 * Description: 工单生成(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     hexy
 * @date:  2015-05-14 15:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketcreate.BlMoTicketCreate', {
        extend: 'Hc_Common.view.BaseMultiPage',
        alias: 'widget.blmoticketcreate',
        
        controller: 'blmoticketcreate',
        viewModel: {
                type: 'blmoticketcreate'
        },
        //查询条件
        searchItems: [{
                fieldLabel: '车间',
                name: 'workshopNo',
                xtype: 'searchhelpfield',
                //数据精灵类
                winTitle: '选择车间',
                //弹出框标题，默认为"选择器"
                gridColumns: [{ //弹出框网格的列
                        dataIndex: 'workshopNo',
                        text: '车间编号',
                        flex: 0.5
                },
                {
                        dataIndex: 'workshopName',
                        text: '车间名称',
                        flex: 0.5
                },
                {
                        dataIndex: 'factoryNo',
                        text: '厂区',
                        flex: 0.5
                }],
                searchItems: [{
                        name: 'workshopNo',
                        fieldLabel: '车间编号'
                },
                {
                    name: 'workshopName',
                    fieldLabel: '车间名称'
                },
                {
                        name: 'factory_no',
                        fieldLabel: '厂区'
                }],
                //弹出框的查询面板
                url: Hc.mdmPath + 'bas_workshop/list.json' //后端的服务URL
        },
        {
                xtype: 'datefield',
                fieldLabel: '开工日期',
                name: 'startDate'
        },
        {
                fieldLabel: '作业组',
                name: 'workGroupCode',
                xtype: 'extcombox',
                displayvalue: Hc.pdsPath + 'pd_work_group/listAll.json',
                displaymember: 'workGroupName',
                valuemember: 'workGroupCode'

        },
        {
                fieldLabel: '生成方式',
                name: 'generation',
                xtype: 'extcombox',
                displayvalue: "1=按箱生成:2=按手生成"
        }

        ],
        //主表字段
        gridHasMark:false,
        gridHasCreator:false,
        gridHasModifier:false,
        gridHasAuditor:false,
        gridColumns: [{
                dataIndex: 'boxNo',
                text: '箱号',
        },
        {
                dataIndex: 'scheduleNo',
                text: '排程号',
        },
        {
                dataIndex: 'modelNo',
                text: '形体',
        },
        {
                dataIndex: 'styleNo',
                text: '款号',
        },
        {
                dataIndex: 'workshopNo',
                text: '下达小组',
        }],

        gridModel: 'Hc_pp.model.BlMoTicketCreate',
        gridSubGrid:['grid1'],           
        gridPrimaryKey: 'boxNo',
        gridLoadUrl: Hc.ppsPath + 'v_bl_mo_box/list.json',
        gridSaveUrl: Hc.ppsPath + 'v_bl_mo_box/saveMasterCustomerList.json',
        gridExportUrl: Hc.ppsPath + 'v_bl_mo_box/do_export.json',
        gridImportUrl: Hc.ppsPath + 'v_bl_mo_box/importExcel.json',

        //从表字段
        grid1Columns: [
                       {
            dataIndex: 'boxNo',
            text: '箱号',
        },{
                dataIndex: 'handNo',
                text: '手编号',
        },
        {
                dataIndex: 'sizeNo',
                text: '配码',
        },
        {
                dataIndex: 'qtyTotal',
                text: '每手总数量',
        },
        {
                dataIndex: 'materialNo',
                text: '产品编码'
        }],
        grid1HasMark:false,
        grid1SupGrid: 'mastergrid',
        grid1Model: 'Hc_pp.model.PpMoHand',
        grid1PrimaryKey: 'handNo',
        grid1LoadUrl: Hc.ppsPath + 'pp_mo_hand/list.json',
        grid1ExportUrl: Hc.ppsPath + 'pp_mo_hand/do_export.json',
        grid1ImportUrl: Hc.ppsPath + 'pp_mo_hand/importExcel.json',

        initComponent: function() {

                var me = this;
                me.callParent();
        }
});
/**
 * Description: 工单生成(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     hexy
 * @date:  2015-05-14 15:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketcreate.BlMoTicketCreateController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.blmoticketcreate',
    
    init:function(){
    	var me = this,    	
        objList = me.getObjList();
        me.callParent();
        if (!objList) return;
        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }
    	
       objList.btnAdd.hidden=true;
       objList.btnSave.hidden=true;
       objList.btnDelete.hidden=true;
       objList.btnPrint.hidden=true;
       //objlist.btnPrint.hidden=true;
       //objlist.btnDelete.hidden=true;
       // objlist.btnExport.hidden=true;
       /* objlist.btnPrint.hidden=true;
        objlist.btnOther.hidden=true;
        objlist.btnSave.hidden=true;*/
        
		objList.btnOther1.setVisible(true);
		objList.btnOther1.text='生成工票';  	
		
		objList.btnOther2.setVisible(true);
		objList.btnOther2.text='工票列表';  	
		
		objList.btnOther3.setVisible(true);
		objList.btnOther3.text='工序详情';  	
		
		objList.btnOther4.setVisible(true);
		objList.btnOther4.text='批量修改小组';  	
    },
  });
/**
 * Description: 工单生成Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     hexy
 * @date:  2015-05-14 15:45:52
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmoticketcreate.BlMoTicketCreateModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.blmoticketcreate'

  });
/**
 * Description: 工票工序明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketdtl.BlMoTicketDtl', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmoticketdtl',
	
	controller: 'blmoticketdtl',
	viewModel: {
		type: 'blmoticketdtl'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '工序序号(工序工分表里的序号)', editor: {allowBlank: false}},
				{dataIndex: 'workProcessCode', text: '工序编码', editor: {allowBlank: false}},
				{dataIndex: 'workValue', text: '工分值', editor: {allowBlank: false}},
				{dataIndex: 'isAssist', text: '是否外协(0=否,1=是)', editor: {allowBlank: false}},
				{dataIndex: 'workGroupCode', text: '作业组别(从pd_work_group取数)', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket_dtl/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 工票工序明细表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketdtl.BlMoTicketDtlController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.blmoticketdtl'
  });
/**
 * Description: 工票拆手明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmotickethand.BlMoTicketHand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmotickethand',
	
	controller: 'blmotickethand',
	viewModel: {
		type: 'blmotickethand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'handNo', text: '手编号', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket_hand/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 工票拆手明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmotickethand.BlMoTicketHand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmotickethand',
	
	controller: 'blmotickethand',
	viewModel: {
		type: 'blmotickethand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'handNo', text: '手编号', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/bl_mo_ticket_hand/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 工票拆手明细表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmotickethand.BlMoTicketHandController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.blmotickethand'
  });
/**
 * Description: 工票拆手明细表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmotickethand.BlMoTicketHandModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blmotickethand',
    stores: {
    	commonstore:{
   			model:'Hc_pp.model.BlMoTicketHand',
    		proxy: {
    		url: Hc.IntegPath + 'rest/bl_mo_ticket_hand/list.json'
    		}
   		 }
    }
  });
/**
 * Description: 工票录入明细表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketinput.BlMoTicketInput', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.blmoticketinput',
	
	controller: 'blmoticketinput',
	viewModel: {
		type: 'blmoticketinput'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: []
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '工作中心所在事业部编号', editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号(T+yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'ticketNo', text: '工票编号(同单据编号)', editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '工序序号(工序工分表里的序号)', editor: {allowBlank: false}},
				{dataIndex: 'workProcessCode', text: '工序编码', editor: {allowBlank: false}},
				{dataIndex: 'empCode', text: '员工编号', editor: {allowBlank: false}},
				{dataIndex: 'shortCode', text: '电脑号', editor: {allowBlank: false}},
				{dataIndex: 'deptId', text: '员工所在部门ID', editor: {allowBlank: false}},
				{dataIndex: 'inputQty', text: '录入数量', editor: {allowBlank: false}},
				{dataIndex: 'inputTime', text: '录入时间', editor: {allowBlank: false}},
				{dataIndex: 'whetherSum', text: '是否汇总(0=未汇总,1=汇总.汇总是进行工资运算)', editor: {allowBlank: false}},
			],
			batchUrl: Hc.ppsPath + 'rest/bl_mo_ticket_input/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 工票录入明细表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blmoticketinput.BlMoTicketInputController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.blmoticketinput'
  });
/**
 * Description: 工票录入明细表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blmoticketinput.BlMoTicketInputModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.blmoticketinput',
    stores: {
    	commonstore:{
   			model:'Hc_pp.model.BlMoTicketInput',
    		proxy: {
    		url: Hc.ppsPath + 'rest/bl_mo_ticket_input/list.json'
    		}
   		 }
    }
  });
/**
 * Description:  拣货单主表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrder', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blpickingorder',
	
	           controller: 'blpickingorder',
	           viewModel: {
	        	   type: 'blpickingorder'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   Ext.apply(me, {
	        		   searchItems: [
	        		                 /* {
	        		                	 name: 'storeNo',
	        		                	 bind: {
	        		                		 value: '{billRow.storeNo}'
	        		                	 },
	        		                	 reference: 'storeNo',
	        		                	 xtype: 'extcombox',
	        		                	 allowBlank: false,
	        		                	 fieldLabel: '仓库编号',
	        		                	 displayvalue: Hc.mdmPath + 'bas_store/list.json',
	        		                	 displaymember: 'storeName',
	        		                	 valuemember: 'storeNo'
	        		                 },*/
	        		                 {
	        		                	 fieldLabel : '仓库',
	        		                	 name : 'storeNo',
	        		                	 xtype: 'searchhelpfield',//数据精灵类
	        		                	 winTitle:'选择仓库', //弹出框标题，默认为"选择器"
//	        		                	 allowBlank: false,
	        		                	 bind: {
	        		                		 value: '{billRow.storeNo}'
	        		                	 },
	        		                	 gridColumns:[{    //弹出框网格的列
	        		                		 dataIndex:'storeNo',
	        		                		 text:'仓库编号',
	        		                		 flex: 0.5
	        		                	 },
	        		                	 {
	        		                		 dataIndex:'storeName',
	        		                		 text:'仓库名称',
	        		                		 flex: 0.5
	        		                	 }
	        		                	 ],
	        		                	 searchItems:[{name:'storeNo',fieldLabel:'仓库编号'},
	        		                	              {name:'storeName',fieldLabel:'仓库名称'}
	        		                	 ], //弹出框的查询面板
	        		                	 url:Hc.mdmPath + 'bas_store/listAll.json'//后端的服务URL

	        		                 },
	        		                 {
	        		                	 fieldLabel : '车间',
	        		                	 name : 'workshopNo',
	        		                	 xtype:'extcombox',
	        		                	 displayvalue:"面部车间=面部车间",
	        		                	 value:'面部车间'
	        		                 }
	        		                 ],
	        		                 gridColumns: [
	        		                               {dataIndex: 'storeNo', text: '仓库编号', editor: {allowBlank: false}},
	        		                               {dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: false}},
	        		                               {dataIndex: 'startDate', text: '开工日期', editor: {allowBlank: false}},
	        		                               ],
	        		                               gridModel: 'Hc_pp.model.BlPickingOrder',
	        		                               gridLoadUrl: Hc.ppsPath + 'bl_picking_order/list.json',
	        		                               dtlName:'blpickingorderdtl',
	        		                               showModel:'selftab'
	        	   });
	        	   me.callParent();
	           }
});

/**
 * Description:  拣货单主表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrderController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blpickingorder'
  });
/**
 * Description:  拣货单从表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrderDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blpickingorderdtl',
	
	           controller: 'blpickingorderdtl',
	           viewModel: {
	        	   type: 'blpickingorderdtl'
	           },
	           initComponent: function () {
	        	   var me= this;
	        	   Ext.apply(me, {
	        		   billItems: [
	        		               /*{
	        		            	   name: 'storeNo',
	        		            	   reference: 'storeNo',
	        		            	   xtype: 'extcombox',
	        		            	   fieldLabel: '仓库编号',
	        		            	   displayvalue: Hc.mdmPath + 'bas_store/list.json',
	        		            	   displaymember: 'storeName',
	        		            	   valuemember: 'storeNo',
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.storeNo}'
	        		            	   }
	        		               },*/
	        		               {
	        		            	   fieldLabel : '仓库',
	        		            	   name : 'storeNo',
	        		            	   xtype: 'searchhelpfield',//数据精灵类
	        		            	   winTitle:'选择仓库', //弹出框标题，默认为"选择器"
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.storeNo}'
	        		            	   },
	        		            	   gridColumns:[{    //弹出框网格的列
	        		            		   dataIndex:'storeNo',
	        		            		   text:'仓库编号',
	        		            		   flex: 0.5
	        		            	   },
	        		            	   {
	        		            		   dataIndex:'storeName',
	        		            		   text:'仓库名称',
	        		            		   flex: 0.5
	        		            	   }
	        		            	   ],
	        		            	   searchItems:[{name:'storeNo',fieldLabel:'仓库编号'},
	        		            	                {name:'storeName',fieldLabel:'仓库名称'}
	        		            	   ], //弹出框的查询面板
	        		            	   url:Hc.mdmPath + 'bas_store/listAll.json'//后端的服务URL

	        		               },
	        		               {
	        		            	   fieldLabel : '车间',
	        		            	   name : 'workshopNo',
	        		            	   xtype:'extcombox',
	        		            	   displayvalue:"面部车间=面部车间",
	        		            	   value:'面部车间',
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.workshopNo}'
	        		            	   }
	        		               },
	        		               {
	        		            	   fieldLabel: '开工日期',
	        		            	   name: 'startDate',
	        		            	   xtype: 'datefield',
	        		            	   allowBlank: false,
	        		            	   bind: {
	        		            		   value: '{billRow.startDate}'
	        		            	   }
	        		               },
	        		               {
	        		            	   name: 'remarks',
	        		            	   fieldLabel: '备注',
	        		            	   xtype: 'textfield',
	        		            	   colspan: 4,
	        		            	   allowBlank: true,
	        		            	   bind: {
	        		            		   value: '{billRow.remarks}'
	        		            	   },
	        		            	   regex: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
	        		            	   //只能输入字母、数字或中文或下划线
	        		            	   regexText: '请输入字母、数字、中文',
	        		            	   maxLength: 60,
	        		            	   enforceMaxLength: true
	        		               }],
	        		               billLoadUrl: Hc.ppsPath + 'bl_picking_order/list.json',
	        		               billSaveUrl: Hc.ppsPath + 'bl_picking_order/saveSizeHorizontalData.json',//'bl_co/saveMasterCustomerList.json',
	        		               billAuditUrl: Hc.ppsPath + 'bl_picking_order/audit.json',
	        		               billExportUrl: Hc.ppsPath + 'bl_picking_order/do_export.json',
	        		               billModel: 'Hc_pp.model.BlPickingOrder',
	        		               billSubGrid: ['mastergrid'],
	        		               hasStatus2: false,
	        		               editStatus: 10,
	        		               billType: '163001',
	        		               gridColumns: [
	        		                             {dataIndex: 'billNo', text: '拣货单号', editor: {allowBlank: false}},
	        		                             {dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},
	        		                             {dataIndex: 'productNo', text: '产品编码', editor: {allowBlank: false}},
	        		                             {dataIndex: 'materialPurpose', text: '物料用途', editor: {allowBlank: false}},
	        		                             {dataIndex: 'materialNo', text: '物料编码', editor: {allowBlank: false}},
	        		                             {dataIndex: 'sizeNo', text: '配码', editor: {allowBlank: false}},
	        		                             {dataIndex: 'unitNo', text: '单位', editor: {allowBlank: false}},
	        		                             {dataIndex: 'sumQty', text: '定额数量', editor: {allowBlank: false}}
	        		                             ],
	        		                             gridPrimaryKey: 'lineId',
	        		                             gridModel: 'Hc_pp.model.BlPickingOrderDtl',
	        		                             gridLoadUrl: Hc.ppsPath + 'bl_picking_order_dtl/list.json'
//	        		                             gridMSizeIdx:5   //物料尺码信息（基类控制）
	        	   });
	        	   me.callParent();
	           }
});

/**
 * Description:  拣货单从表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrderDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.blpickingorderdtl'
  });
/**
 * Description:  拣货单从表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrderDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blpickingorderdtl',
  });
/**
 * Description:  拣货单主表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blpickingorder.BlPickingOrderModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.blpickingorder'
  });
/**
 * Description: 工序汇报表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blprocessreport.BlProcessReport', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.blprocessreport',
	
	controller: 'blprocessreport',
	viewModel: {
		type: 'blprocessreport'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
		   searchItems: [
						 {
							 fieldLabel : '厂区',
							 name : 'factoryNo',
							 xtype:'extcombox',
							 displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
							 displaymember: 'factoryName',
							 valuemember: 'factoryNo'
						 },
						 {
							 fieldLabel : '事业部',
							 name : 'divisionNo',
							 xtype:'extcombox',
						     displayvalue: Hc.mdmPath + 'bas_division/listAll.json',						   
						     displaymember: 'divisionName',
						     valuemember: 'divisionNo'
						 },
						 {
							 fieldLabel : '品牌',
							 name : 'brandNo',
							 xtype:'extcombox',
							 displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
							 displaymember: 'brandCname',
							 valuemember: 'brandNo'		                		 		                	 
						 },

						 {
							 fieldLabel : '车间',
							 name : 'workshopNo',
							 xtype:'extcombox',
							 displayvalue:"面部车间"	
						 },
			             {xtype: 'textfield',name: 'creator', fieldLabel: '汇报人'},
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '汇报时间',
		                	 name : 'createTime'
		                 }
				],
		   gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true, editor: {allowBlank: true}},
				{dataIndex: 'factoryNo', text: '厂区编号', editor: {allowBlank: true}},		
				{dataIndex: 'divisionNo', text: '事业部编号', editor: {allowBlank: true}},
				{dataIndex: 'brandNo', text: '品牌编号', editor: {allowBlank: true}},
				/*{dataIndex: 'billNo', text: '单据编号', editor: {allowBlank: true}},
				{dataIndex: 'billTypeNo', text: '单据类型', editor: {allowBlank: true}},*/
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: true}},
				/*{dataIndex: 'creator', text: '建档人', editor: {allowBlank: true}},
				{dataIndex: 'createTime', text: '建档时间', editor: {allowBlank: true}},
				{dataIndex: 'auditor', text: '审核人', editor: {allowBlank: true}},
				{dataIndex: 'auditTime', text: '审核时间', editor: {allowBlank: true}},*/
				{dataIndex: 'modifier', text: '修改人', editor: {allowBlank: true}},
				{dataIndex: 'modifyTime', text: '修改时间', editor: {allowBlank: true}}
				/*{dataIndex: 'remarks', text: '备注', editor: {allowBlank: true}},*/
			],
 		   gridModel: 'Hc_pp.model.BlProcessReport',
		   gridLoadUrl: Hc.ppsPath + 'bl_process_report/list.json',
 		   dtlName:'blprocessreportdtl',
		   showModel:'selftab'
		});
		me.callParent();
	}
});

/**
 * Description: 工序汇报表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blprocessreport.BlProcessReportController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.blprocessreport'
  });
/**
 * Description: 工序汇报从表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blprocessreport.BlProcessReportDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.blprocessreportdtl',
	
	controller: 'blprocessreportdtl',
	viewModel: {
		type: 'blprocessreportdtl'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			billItems: [{
							name: 'brandNo', 
							fieldLabel: '品牌',
							xtype: 'extcombox',
							bind: {value: '{billRow.brandNo}'},
							displayvalue: Hc.mdmPath + 'bas_brand/listAll.json',
						    displaymember: 'brandCname',
						    valuemember: 'brandNo'
							
						},            
						{
						   fieldLabel: '事业部',
						   name: 'divisionNo',
						   xtype: 'extcombox',
						   bind: {value: '{billRow.divisionNo}'},
						   displayvalue: Hc.mdmPath + 'bas_division/listAll.json',					   
						   displaymember: 'divisionName',
						   valuemember: 'divisionNo'
						},
						{
							name: 'factoryNo', 
							fieldLabel: '厂区',
							xtype: 'extcombox',
							bind: {value: '{billRow.brandNo}'},							
							displayvalue: Hc.mdmPath + 'bas_factory/listAll.json',
						    displaymember: 'factoryName',
						    valuemember: 'factoryNo'
						},
						 {
							 fieldLabel : '车间',
							 name : 'workshopNo',
							 xtype:'extcombox',
							 bind: {value: '{billRow.brandNo}'},
							 displayvalue:"面部车间"	
						 },
						 {name: 'remarks', fieldLabel: '备注',colspan : 3,xtype: 'textfield',bind: {value: '{billRow.remarks}'}}
						 ],
					   billLoadUrl: Hc.ppsPath + 'bl_process_report_dtl/list.json',
					   billSaveUrl: Hc.ppsPath + 'bl_process_report_dtl/saveSizeHorizontalData.json',//'bl_co/saveMasterCustomerList.json',
					   billAuditUrl: Hc.ppsPath + 'bl_process_report_dtl/audit.json',
					   billExportUrl: Hc.ppsPath + 'bl_process_report_dtl/do_export.json',
					   billModel: 'Hc_pp.model.BlProcessReportDtl',
					   billSubGrid: ['mastergrid'],
					   hasStatus2: true,		
			 gridColumns: [
				{dataIndex: 'lineId', text: '行ID(主键)', hidden:true, editor: {allowBlank: false}},
				{dataIndex: 'billNo', text: '单据编号', hidden:true, editor: {allowBlank: false}},
				{dataIndex: 'orderNo', text: '序号', editor: {allowBlank: false}},
				/*{dataIndex: 'divisionNo', text: '事业部编号', editor: {allowBlank: false}},*/
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '产品编码', editor: {allowBlank: true}},
				{dataIndex: 'materialCname', text: '产品名称', editor: {allowBlank: false}},
				{dataIndex: 'moNo', text: '工单号', editor: {allowBlank: true}},
				{dataIndex: 'sizeTypeNo', text: '配码组', editor: {allowBlank: false}},
				{dataIndex: 'sizeNo', text: '尺码', editor: {allowBlank: false}},
				{dataIndex: 'sizeQty', text: '尺码数量', editor: {allowBlank: false}},
				{dataIndex: 'reportQty', text: '汇报数', editor: {allowBlank: true}},
				{dataIndex: 'finishFlag', text: '完结标记', editor: {allowBlank: false}},
				{dataIndex: 'standWorkPoints', text: '标准工分值', editor: {allowBlank: false}},
				{dataIndex: 'sumWorkPoints', text: '累计工分值', editor: {allowBlank: false}}
			],
		   gridPrimaryKey: 'lineId',
		   gridModel: 'Hc_pp.model.BlProcessReportDtl',
		   gridLoadUrl: Hc.ppsPath + 'bl_process_report_dtl/list.json',
		   gridMSizeIdx:5
		});
		me.callParent();
	}
});

/**
 * Description: 工序汇报从表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.blprocessreport.BlProcessReportDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.blprocessreportdtl'
  });
/**
 * Description: 工序汇报从表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blprocessreport.BlProcessReportDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.blprocessreportdtl'
  });
/**
 * Description: 工序汇报表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.blprocessreport.BlProcessReportModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.blprocessreport'
  });
/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.pphandsplit.PpHandSplit', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.pphandsplit',
	
	controller: 'pphandsplit',
	viewModel: {
		type: 'pphandsplit'
	},
	isAutoLoad : false,
	customLayout1 : true,
	selLineIds : '',
	
	initComponent: function () {
		var me= this;
		Ext.apply(me,
				{
					//grid
					gridModel: 'Hc_pp.model.PpMo',
					gridColumns: [
								    {dataIndex: 'lineId', text: '表bl_mop_dtl(lineId)',hidden:true},
								    {dataIndex: 'scheduleNo', text: '排程号'},
									{dataIndex: 'billNo', text: 'MO号'},
									{dataIndex: 'wcode', text: '工分表编号'},
									{dataIndex: 'materialNo', text: '产品编码'},
									{dataIndex: 'materialName', text: '产品名称'},
									{dataIndex: 'sizeNo', text: '尺码'},
									{dataIndex: 'sizeQty', text: '工单数量'},
									{dataIndex: 'normalUnit', text: '单位'},
									{dataIndex: 'divisionNo', text: '事业部'},
									{dataIndex: 'factoryNo', text: '厂区'}					              	
								 ],
					gridPrimaryKey: 'lineid',
					gridLoadUrl: Hc.ppsPath + 'pp_mo/listAll.json',
					gridSelModel: 'SINGLE',
					gridIsMaster:false,
					gridSubGrid:[],
					
					//grid1
					grid1Model: 'Hc_pp.model.PpHandSplit',
					grid1Columns: [],
					grid1HasMark:false,
					grid1SelModel: 'SINGLE',
					
				});
		Ext.apply(me.grid, { id: 'ppHandSplitGrid',height:200});	
		Ext.apply(me.grid1, { id: 'ppHandSplitGrid1'});	
		
		me.items = [];
		var h=me.controller.getBodyHeight(0.4);
		var toppanel = {
				xtype : "panel",
				name : 'handtoppanel',
				reference : 'handtoppanel',
				region : 'north',
				height : h,
				layout: {type: 'table', columns:2, align:'center'},
				split : false,
				border : false,
				defaults:{ labelAlign:'right',labelWidth:80,width:'100%'},
				items : [
				         {xtype : 'textfield',fieldLabel : '生产单号',bind : {value : '{gridRow.billNo}'}},
				         {xtype : 'textfield',fieldLabel : '单位',bind : {value : '{gridRow.normalUnit}'}},
				         {xtype : 'textfield',fieldLabel : '产品编码',bind : {value : '{gridRow.materialNo}'}},
				         {xtype : 'textfield',fieldLabel : '尺码',bind : {value : '{gridRow.sizeNo}'}},
				         {xtype : 'textfield',fieldLabel : '产品名称',bind : {value : '{gridRow.materialName}'}},
				         {xtype : 'textfield',reference:'txtSizeQty',fieldLabel : '工单数量',bind : {value : '{gridRow.sizeQty}'}},
				         {xtype : 'textfield',reference:'txtHandQty',fieldLabel : '每手数量',
				          regex : /^[0-9]*[1-9][0-9]*$/,regexText : '只能输入正整数',
				          listeners: {'change': 'onHandQtyChange'}
				         },
				         {xtype : 'textfield',reference:'txtHandMinQty',fieldLabel : '每手最小数量',
				          regex : /^[0-9]*[1-9][0-9]*$/,regexText : '只能输入正整数',
				          listeners: {'change': 'onHandMinQtyChange'}
				         },
				         me.grid
				]
			};		
        
	    var bottompanel={
				xtype:"panel",
				region:"center",
				layout:'border',
				items:[me.grid1],
				border:false
		    };    
	
	    var panel = {
	        xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[toppanel,bottompanel],
	        border:false
	    };
	    me.items.push(panel);

		me.callParent();
		
		var store1 = Ext.create('Hc_Common.store.Base', {  
			  fields: []
			}); 		
		me.grid1.store = store1;
	}
});

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.pphandsplit.PpHandSplitController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.pphandsplit',

    init:function() {
		var me = this,
        objList = me.getObjList();
		me.callParent(arguments);
		//console.dir(objList.handtoppanel);
		
		//me.getObj('mastergrid').setVisible(false);
		//me.getObj('mastergrid').down("pagingtoolbar").setVisible(false);
		me.getObj('grid1').down("pagingtoolbar").setVisible(false);
		
		var store=objList.mastergrid.getStore();
		delete store.proxy.extraParams['splitLineIds'];
		store.proxy.extraParams['splitLineIds']=me.view.selLineIds;
		store.reload({
		    scope: this,
		    callback: function(records, operation, success) {
		    	if (records.length>0)
		    	{
	           		objList.mastergrid.getSelectionModel().select(0);
		    	}
		    }
		});
		
		me.view.on('beforedestroy','onBeforeDestroy',me);
		
        if (objList.handtoppanel) {
            var list = objList.handtoppanel.query('textfield,numberfield,datefield,combo');
            Ext.each(list, function (txt) {
                txt.on('specialkey', me.keyToSplit, me);
            });
        }
	},
	
	onBeforeDestroy: function(){
    	//弹出窗体给主窗体grid重载
    	var me = this,
    	parentGrid = Ext.getCmp('ppMoGrid'),
    	pareStore = parentGrid.getStore();
        delete pareStore.proxy.extraParams['notSplitLineIds'];
        pareStore.proxy.extraParams['notSplitLineIds'] = me.getParentGrid1LineIds();
        pareStore.loadPage(1);		
	},
	
	/*parentGrid1所有行modtlID集合*/
	getParentGrid1LineIds:function(){
  	  	var me=this;		
  	  	parentGrid1 = Ext.getCmp('ppMoGrid1');
  	  	var arrLineeIds=[];
  	  	var lineIds = "(";
  	  	parentGrid1.getStore().each(function(record){
			var curLineIds = record.get("modtlLineId");
  	  		if(!Ext.Array.contains(arrLineeIds,curLineIds)){
  	  			arrLineeIds.push(curLineIds);
  	  			lineIds = lineIds+curLineIds+",";
  	  		}
		});
  	  	lineIds = Ext.util.Format.substr(lineIds, 0, lineIds.length-1);
  	  	lineIds = lineIds+")";
  	  	return lineIds;  	  	
	},
	
	keyToSplit: function (obj, e) {
        var me = this,
        objList = me.getObjList();
        if (e.keyCode == e.ENTER) {
            //验证不通过
        	if((!me.lookupReference('txtHandQty').isValid())||
        	   (!me.lookupReference('txtHandMinQty').isValid())){
        		return;
        	}
        	//弹出窗体给主窗体grid1新增拆分行
        	var parentGrid1 = Ext.getCmp('ppMoGrid1'),
        	pareStore1 = parentGrid1.getStore();
        	var row=objList.mastergrid.getSelection()[0];
        	var store1 = objList.grid1.getStore();
        	var cols = objList.grid1.getColumnManager().columns;
        	store1.each(function(record){
            	Ext.Array.each(cols,function(col){
            		var qtyHand = record.get(col.dataIndex);
            		var newObj =me.getNewRowForParentGrid1(pareStore1,row,qtyHand)
    	   			pareStore1.add(newObj);
                })
    		});
        	//清空填写的数量
        	me.lookupReference('txtHandQty').setValue('');
        	me.lookupReference('txtHandMinQty').setValue('');
    		//下一行要拆分的MO
    		var grid = objList.mastergrid;
      	  	if(!grid.getSelectionModel().selectNext()){
      	  		Ext.getCmp("pphandsplit").close();
        	  }
        }
    },
    
	/*parent grid1新增一行*/
	getNewRowForParentGrid1:function(storegrid1,record,qtyHand){
		 var model = storegrid1.getModel();
		 var newObj = model.create({_flag: 'A'});
		    newObj.set('modtlLineId', record.get('lineId'));
	  		newObj.set('normalUnit', record.get('normalUnit'));
	  		newObj.set('scheduleNo', record.get('scheduleNo'));
	  		newObj.set('wrkactNo', record.get('wcode'));
	  		newObj.set('sizeNo', record.get('sizeNo'));
	  		newObj.set('qtyMo', record.get('sizeQty'));
	  		newObj.set('qtyHand', qtyHand);//每手数量
	  		newObj.set('materialNo', record.get('materialNo'));
	  		newObj.set('materialName', record.get('materialName'));
	  		return newObj;
	},
    
    onHandQtyChange: function(field,newValue,oldValue){
    	var me = this;
    	var hand=10;
    	var handQty = parseInt(field.getValue());
    	if(handQty<hand){
    		hand = handQty;
    	}
    	//触发onHandMinQtyChange
    	me.lookupReference('txtHandMinQty').setValue('');
    	me.lookupReference('txtHandMinQty').setValue(hand);
    },
    
    onHandMinQtyChange: function(field,newValue,oldValue){
    	var me = this;
    	me.onSplitHand(field);
    },    
    
    onSplitHand: function(field){
		var me = this,
        objList = me.getObjList(),
        store1 = objList.grid1.getStore(),
        grid1cols = me.view.grid1Columns,
        model1 = store1.model;
		if(field.getValue()==""){
			return;
		}
		
		var calQty = 0;
		var sizeQty = parseInt(me.lookupReference('txtSizeQty').getValue());
    	var handQty = parseInt(me.lookupReference('txtHandQty').getValue());
    	var handMinQty = parseInt(field.getValue());
    	if(handMinQty>handQty){
  		  Hc.alert('每手最小数量不得大于每手数量');
  		  field.setValue((handQty<10?handQty:10));
		  return;
    	}
    	if(handQty>sizeQty){
    		  Hc.alert('每手数量不得大于工单数量');
    		  me.lookupReference('txtHandQty').setValue(sizeQty);
  		  return;
      	}
    	if(handMinQty==0){
    		field.setValue('');
    		store1.remove(store1.getAt(0));
    		return;
    	}
    	if(handQty!=0){
    		if(sizeQty%handQty<handMinQty){
    			calQty = parseInt(sizeQty/handQty);
    		}
    		else{
    			calQty = parseInt(sizeQty/handQty)+1;
    		}
    	}
		
		var fields={};
		fields['_flag']='A';//可去掉
		//清空store
		grid1cols = [];
		if(store1.count()>0){
			store1.remove(store1.getAt(0));
		}
		var spare = sizeQty;
		for(var i=1;i<calQty+1;i++){
			grid1cols.push({"text":"第"+i+"手","dataIndex":"hand"+i,"name":"hand"+i});
			if(spare>=handQty+handMinQty){
				fields['hand'+i]=handQty;
				spare = spare - handQty;
			}
			else{
				fields['hand'+i]=spare;
			}
		}
		//store动态添加列
		objList.grid1.reconfigure(store1,grid1cols); 
		//store新增一行
		store1.insert(0, new model1(fields));		
    }
    
    
    
    
    
    

    
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.pphandsplit.PpHandSplitModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.pphandsplit'
  });
/**
 * Description: 工单拆分合并(manufacture_order)(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmo.PpMo', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.ppmo',
	
	controller: 'ppmo',
	viewModel: {
		type: 'ppmo'
	},
	isAutoLoad : false,
	customLayout1 : true,	
	
    choosetoolbar: {
        xtype: 'toolbar',
        reference: 'choosetoolbar',
        region: 'north',
        items: [{
            text: '拆分',
            itemId: 'btnOther1',
            reference: 'btnOther1',
            handler: 'onShowSplitDialog',
           // glyph: Hc.Icon.btnAdd,
            canUse: true,
            disabled: false
        }, {
            text: '自动拆手',
            itemId: 'btnOther2',
            reference: 'btnOther2',
            handler: 'onShowAutoSplitDialog',
           // glyph: Hc.Icon.btnDelete,
            canUse: true,
            disabled: false
        },
        {
            text: '迁进',
            itemId: 'btnOther3',
            reference: 'btnOther3',
            handler: 'onMoveIn',
            glyph: Hc.Icon.btnAdd,
            canUse: true,
            disabled: false
        },
        {
            text: '迁出',
            itemId: 'btnOther4',
            reference: 'btnOther4',
            handler: 'onMoveOut',
            glyph: Hc.Icon.btnDelete,
            canUse: true,
            disabled: false
        }
        ]
    },
    
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [ {
           	 fieldLabel : '工单类型',
        	 name : 'wrkactType',
        	 xtype:'extcombox',
        	 displayvalue:"CP=成品:BM=帮面"		                		 		                	 
         },
			              
			              {
		                	 fieldLabel : '车间',
		                	 name : 'workshopNo',
		                	 xtype:'extcombox',
		                	 displayvalue:Hc.mdmPath+"bas_workshop/listAll.json",
		                	 displaymember:'workshopName',
		                	 valuemember:'workshopNo'		                		 		                	 
			             },
			             
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '开工日期',
		                	 name : 'orderDateStrat'
		                 },
		                 {
		                	 xtype : 'datefield',
		                	 fieldLabel : '到',
		                	 name : 'startDate',
		                	 vtype:'compareTo',     //数据验证方式，compareTo
		                	 compareTo:'orderDateStrat', // 被比较的输入框控件name
		                	 compareType:'>=',      // 比较方式，有>=,<=,>,<,= 默认为等于
		                	 compareError:'结束日期不能小于开始日期' //比较不通过时，返回提示信息
		                 },
		                 {xtype: 'textfield',name: 'scheduleNo', fieldLabel: '排程号'}
			             ],
			gridColumns: [
			    {dataIndex: 'lineId', text: '表bl_mop_dtl(lineId)',hidden:true},
			    {dataIndex: 'scheduleNo', text: '排程号'},
				{dataIndex: 'billNo', text: 'MO号'},
				{dataIndex: 'wcode', text: '工分表编号'},
				{dataIndex: 'materialNo', text: '产品编码'},
				{dataIndex: 'materialName', text: '产品名称'},
				//{dataIndex: 'workOrderType', text: '工单类型', editor: {allowBlank: true}},/*(CP,ZD,DL,BM物料基础资料自动带出，可调整)*/
				{dataIndex: 'sizeNo', text: '尺码'},
				{dataIndex: 'sizeQty', text: '工单数量'},
				{dataIndex: 'normalUnit', text: '单位'},
				{dataIndex: 'divisionNo', text: '事业部'},
				{dataIndex: 'factoryNo', text: '厂区'}
			],
			
		   gridPrimaryKey: 'lineId',
 		   gridModel: 'Hc_pp.model.PpMo',
		   gridLoadUrl: Hc.ppsPath + 'pp_mo/listAll.json',
		   gridHasMark:false,
		   gridHasCreator:false,
		   gridHasModifier:false,
		   gridHasAuditor:false,
		   gridHasOrderNo:true,
		   gridSelModel: 'checkboxmodel',
		   gridIsMaster:false,
		   gridSubGrid:[],
		  
		  grid1Columns: [
					{dataIndex: 'handNo', text: '手编号'},
					{dataIndex: 'scheduleNo', text: '排程号'},
					{dataIndex: 'wrkactNo', text: '工分表编号'},
					{dataIndex: 'materialNo', text: '产品编码'},
					{dataIndex: 'materialName', text: '产品名称'},
					{dataIndex: 'sizeNo', text: '配码'},
					{dataIndex: 'qtyMo', text: '工单数量'},
					{dataIndex: 'qtyHand', text: '手数量'},
					{dataIndex: 'normalUnit', text: '单位'},
					{dataIndex: 'modtlLineId', text: '表bl_mo_dtl的lineid',hidden:true}					
					],
					
			grid1PrimaryKey: 'lineId',
			grid1Model: 'Hc_pp.model.PpMoHand',
			grid1LoadUrl: Hc.ppsPath + 'pp_mo_hand/listAll.json',
			grid1SaveUrl : Hc.pdsPath+ 'pp_mo_hand/batchOperate.json',
			
			grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1HasOrderNo:true
						
		});
		Ext.apply(me.grid, { id: 'ppMoGrid'});	
		Ext.apply(me.grid1, { id: 'ppMoGrid1'});	
		
        me.items = [me.toolbar];
        if (me.searchItems.length > 0) {
            me.items.push(me.searchPanel);
        }
        
	    var h=me.controller.getBodyHeight(0.4);
	    var con1={
			xtype:"panel",
			height:h,
			region:"north",
			layout:'border',
			items:[me.grid],
			split:true,
			border:false
	    };
	    
	    h=me.controller.getBodyHeight(0.04);
	    var con2={
				xtype:"panel",
				height:h,
				region:"north",
				layout:'border',
				items:[me.choosetoolbar],
				border:false
		    };	    
	
	    var con3={
			xtype:"panel",
			region:"center",
			layout:'border',
			items:[me.grid1],
			border:false
	    };
	    
	    var panelchild={
			xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[con2,con3],
	        border:false
	    };
	    
	    var rightpanel={
				xtype: "panel",
		        region: 'center',
		        layout:'border',
		        items:[con1,panelchild],
		        border:false
		    };	    
	
	    var panel = {
	        xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[rightpanel],
	        border:false
	    };
	    me.items.push(panel);		
		me.callParent();
	}
});

/**
 * Description: 工单拆分合并(manufacture_order)Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmo.PpMoController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.ppmo',
    
    init:function() {
		var me = this,
        objList = me.getObjList();
		me.callParent(arguments);
		me.getObj('mastergrid').down("pagingtoolbar").setVisible(false);
		me.getObj('grid1').down("pagingtoolbar").setVisible(false);
    },
    
    /*查询按钮*/
    onBtnSearchClick: function (btn) {
		var me = this,
		objlist = me.getObjList(),
		store = objlist['mastergrid'].getStore(),
		store1 = objlist['grid1'].getStore(),
        searchPanel = me.getObj('commonsearch');
        if (searchPanel) {
            var formValue = searchPanel.getValues();
            for (var field in formValue) {
                if (formValue[field] !== '') {
                    store.proxy.extraParams[field] = formValue[field];
                    store1.proxy.extraParams[field] = formValue[field];
                } else {
                    delete  store.proxy.extraParams[field]
                    delete  store1.proxy.extraParams[field];
                }
            }
        }
        delete  store.proxy.extraParams['notSplitLineIds']
        delete  store.proxy.extraParams['splitLineIds']
        if (me.beforeSearch(store) === false) return;
        if (me.beforeSearch(store1) === false) return;
        store.currentPage = 1;
        store.loadPage(1);
        store1.currentPage = 1;
        store1.loadPage(1);
        
        //测试
        //delete store.proxy.extraParams['notSplitLineIds'];
        //store.proxy.extraParams['notSplitLineIds'] = "(0,1,10)";
        //store.loadPage(1);
    },
    
    //重写删除
    onBtnDeleteClick: function (btn) {
    	var me = this;
    	var objList = me.getObjList();
    	me.workObject = objList.grid1;
    	me.callParent(arguments);
    },
    
    //迁进
    onMoveIn: function (btn) {
		var me = this,
		objlist = me.getObjList();
		//me.workObject=objlist['grid1'];
		//me.workObject=objlist['mastergrid'];
		var storemaster=objlist['mastergrid'].store;
		var storegrid1=objlist['grid1'].store;
		searchPanel = me.getObj('commonsearch');
		   if (searchPanel) {
	            var formValue = searchPanel.getValues();
	            for (var field in formValue) {
	                if (formValue[field] !== '') {
	                	storemaster.proxy.extraParams[field] = formValue[field];
	                	storegrid1.proxy.extraParams[field] = formValue[field];
	                } else {
	                    delete  storemaster.proxy.extraParams[field]
	                    delete  storegrid1.proxy.extraParams[field];
	                }
	            }
	        }
		   
		 delete storemaster.proxy.extraParams['notSplitLineIds'];
		 storemaster.proxy.extraParams['notSplitLineIds'] = me.getGridSelectSplitLineIds();
		 storemaster.loadPage(1);
		 
		 var datas = objlist.mastergrid.getSelectionModel().getSelection();
		 var grid1StoreCount=storegrid1.count();
		 for(var i=0;i<datas.length;i++){
			 storegrid1.add(me.getNewRowForGrid1(storegrid1,datas[i]));
		 }
		 me.workObject.getSelectionModel().select(grid1StoreCount);
	  	 grid1StoreCount=grid1StoreCount+1;
		 
	},
	
	//迁出
    onMoveOut: function (btn) {
    	var me = this,
		objlist = me.getObjList();
		var storemaster=objlist['mastergrid'].store;
		var storegrid1=objlist['grid1'].store;
	    var records=objlist.grid1.getSelection();  
        me.onBtnDeleteClick();

	    delete storemaster.proxy.extraParams['notSplitLineIds'];
	    storemaster.proxy.extraParams['notSplitLineIds'] = me.getGrid1LineIds();
	    storemaster.loadPage(1);
	},
	
	/*grid1新增一行*/
	getNewRowForGrid1:function(storegrid1,record){
		 var model = storegrid1.getModel();
		 var newObj = model.create({_flag: 'A'});
		    newObj.set('modtlLineId', record.get('lineId'));
	  		newObj.set('normalUnit', record.get('normalUnit'));
	  		newObj.set('scheduleNo', record.get('scheduleNo'));
	  		newObj.set('wrkactNo', record.get('wcode'));
	  		newObj.set('sizeNo', record.get('sizeNo'));
	  		newObj.set('qtyMo', record.get('sizeQty'));
	  		newObj.set('qtyHand', record.get('sizeQty'));
	  		newObj.set('materialNo', record.get('materialNo'));
	  		newObj.set('materialName', record.get('materialName'));
	  		return newObj;
	},	
	
	/*拆分*/
	onShowSplitDialog: function (btn) {
      var me = this,
      selSplitLineIds = me.getGridSelectSplitLineIds();
	  if(selSplitLineIds===""){
		  Hc.alert('请选择需拆分行');
		  return;
	  }      
  	  var dtl = {
    	          xtype: 'pphandsplit',
    	          userRight: me.view.userRight,
    	          moduleRight: me.view.moduleRight,
    	          userCode: me.view.userCode,
    	          userName: me.view.userName,
    	          selLineIds :selSplitLineIds
    	      };
  	  	 dtl.width = Ext.getBody().getWidth() * 0.6;
  	     dtl.height = Ext.getBody().getHeight() * 0.6;
  	     me.showInWin(dtl, {id : 'pphandsplit',winName: 'pphandsplit', title: '拆分', showBbar: true});
	},
	
	/*自动拆分*/
	onShowAutoSplitDialog: function (btn) {
	},
	
	/*grid所选行ID集合*/
	getGridSelectSplitLineIds:function(){
  	  	var me=this;		
  	  	var objlist = me.getObjList();
  	  	var splitLineIds = "(";
  	  	var arr = objlist.mastergrid.getSelectionModel().getSelection();
  	  	if(arr.length==0){
  	  		return "";
  	  	}
  	  	Ext.Array.each(arr,function(row){
  	  		splitLineIds=splitLineIds+row.get('lineId')+",";
        })
        splitLineIds = Ext.util.Format.substr(splitLineIds, 0, splitLineIds.length-1);
  	  	splitLineIds = splitLineIds+")";
  	  	return splitLineIds;
	},
	
	/*grid1所有行modtlID集合*/
	getGrid1LineIds:function(){
  	  	var me=this;		
  	  	var objlist = me.getObjList();
  	  	var arrLineeIds=[];
  	  	var lineIds = "(";
  	  	objlist.grid1.getStore().each(function(record){
			var curLineIds = record.get("modtlLineId");
  	  		if(!Ext.Array.contains(arrLineeIds,curLineIds)){
  	  			arrLineeIds.push(curLineIds);
  	  			lineIds = lineIds+curLineIds+",";
  	  		}
		});
  	  	lineIds = Ext.util.Format.substr(lineIds, 0, lineIds.length-1);
  	  	lineIds = lineIds+")";
  	  	return lineIds;  	  	
	},
	
    /**弹出框中的确认按钮事件*/
    onWinConfirmClick: function (btn) {
  	  var me=this;		
  	  var objlist = me.getObjList();
  	  var diaGrid = Ext.getCmp("ppHandSplitGrid");
  	  
  	  if(!diaGrid.getSelectionModel().selectNext()){
  		btn.up('window').close();
  	  }
    }
	
  });
/**
 * Description: 工单拆分合并(manufacture_order)Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.ppmo.PpMoModel', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.ppmo'
  });
/**
 * Description: 工单拆手表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmohand.PpMoHand', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.ppmohand',
	
	controller: 'PpMoHand',
	viewModel: {
		type: 'PpMoHand'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me.searchPanel, {
			items: [{
				xtype: 'combo',
				width:'250',
				editable:false,
				triggerAction: 'all',
				fieldLabel: '所属项目编码',
				name: 'projectCode',
				displayField: 'projectName',
				valueField: 'projectCode',
				store: {
					type: 'itgproject',
					autoLoad: true
				}
			}]
		});
		Ext.apply(me.grid, {
			columns: [
				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
				{dataIndex: 'handNo', text: '手编号(yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'boxNo', text: '箱号(yyyyMMdd+6位流水号)', editor: {allowBlank: false}},
				{dataIndex: 'startDate', text: '开工日期', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '工作中心(从bas_workshop取)', editor: {allowBlank: false}},
				{dataIndex: 'wrkactType', text: '工作中心类型(取数据字典 workshop_type)', editor: {allowBlank: false}},
				{dataIndex: 'factoryNo', text: '厂区编号(前端不显示)', editor: {allowBlank: false}},
				{dataIndex: 'divisionNo', text: '车间所在事业部编号(前端不显示)', editor: {allowBlank: false}},
				{dataIndex: 'wrkactNo', text: '工分表编号', editor: {allowBlank: false}},
				{dataIndex: 'materialNo', text: '半成品编码', editor: {allowBlank: false}},
				{dataIndex: 'qtyTotal', text: '每手总数量', editor: {allowBlank: false}},
				{dataIndex: 'scheduleNo', text: '排程号', editor: {allowBlank: false}},
				{dataIndex: 'moNo', text: 'MO号', editor: {allowBlank: false}},
				{dataIndex: 'moDivisionNo', text: 'MO所在事业部编号(前端不显示)', editor: {allowBlank: false}},
				{dataIndex: 'sizeNo', text: '配码', editor: {allowBlank: false}},
				{dataIndex: 'qtyMo', text: 'MO配码工单数量', editor: {allowBlank: false}},
				{dataIndex: 'qtyHand', text: '每个配码数量', editor: {allowBlank: false}},
				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}},
			],
			batchUrl: Hc.IntegPath + 'rest/pp_mo_hand/listsave.json'
		});
		me.callParent();
	}
});

/**
 * Description: 工单拆手表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppmohand.PpMoHandController', {
    extend: 'Hc_Common.view.BaseMultiPageController',
    alias: 'controller.ppmohand'
  });
/**
 * Description: 工单拆手表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.ppmohand.PpMoHand', {
    extend: 'Hc_Common.view.BaseMultiPageModel',
    alias: 'viewmodel.ppmohand'

  });
/**
 * Description:  车间型体款号维护(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppworkshopstyle.PpWorkshopStyle', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.ppworkshopstyle',
	
	controller: 'ppworkshopstyle',
	viewModel: {
		type: 'ppworkshopstyle'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
				             {
						    	   fieldLabel:'事业部',	
					      		   xtype:'extcombox',
					    		   displayvalue:Hc.mdmPath+'bas_division/listAll.json',
					    		   displaymember:'divisionName',
					    		   valuemember:'divisionNo',
					    		   reference:'divisionNo',
					    		   listeners:{
					    				 'select':'onDivOrFacSelect'
					    			 }
						       },
						       {
						    	     fieldLabel:'厂区',
					      			 xtype:'extcombox',
					      			 reference:'factoryNo',
					    			 displayvalue:Hc.mdmPath+'bas_factory/listAll.json',
					    			 displaymember:'factoryName',
					    			 valuemember:'factoryNo',
					    			 listeners:{
					    				 'select':'onDivOrFacSelect'
					    			 }
						       },
	  		                 {
			                	 fieldLabel : '车间',
			                	 name : 'workshopNo',
			                	 reference:'workshopNo',
			                	 xtype:'extcombox',
			                	 displayvalue:Hc.mdmPath+'bas_workshop/listAll.json',
			                	 displaymember:'workshopName',
				    			 valuemember:'workshopNo'
				             },
				             {    
				            	 xtype: 'textfield',
				            	 name: 'materialNo', 
				            	 fieldLabel: '物料编号'
				            },
				             {    
				            	 xtype: 'textfield',
				            	 name: 'materialNo', 
				            	 fieldLabel: '型体'
				            },
				            {    
				            	 xtype: 'textfield',
				            	 name: 'materialNo', 
				            	 fieldLabel: '款号'
				            }
				            ],
		gridColumns: [
                 {dataIndex: 'factoryNo', text: '厂区', editor: {allowBlank: false}},
                 {      dataIndex : 'divisionNo',
	        		    text : '事业部',
	        		    editor:{allowBlank: false},
	        		    xtype:'bllookupedit',
	        		    displayvalue:Hc.mdmPath+'bas_division/listAll.json',
	        		    displaymember:'divisionName',
	        		    valuemember:'divisionNo'
	        	 }, 
			     {      dataIndex: 'materialNo', 
					    text: '产品编码',
					    editor:{
						xtype:'searchhelpfield',
						name:'materialNo',
						reference: 'materialNo',
						gridColumns:[{
						   dataIndex:'materialNo',
						   text:'物料编码',
						   flex:0.3
						},{
						   dataIndex:'materialCode',
						   text:'物料编号',
						   flex:0.3
						},{
						   dataIndex:'materialName',
						   text:'物料名称',
						   flex:0.3
						}],
						searchItems:[
										{
											fieldLabel : '物料编码',
										    name:'materialNo',
										    flex:0.5
										 }
						             ],
						isAutoLoad:false,
						url:Hc.mdmPath + 'bas_material/list.json',
						allowBlank: false
					}
                },
			    {dataIndex: 'materialNo', text: '产品名称', editor: {allowBlank: false}},
			    {dataIndex: 'materialNo', text: '款号', editor: {allowBlank: false}},
			    {dataIndex: 'materialNo', text: '型体', editor: {allowBlank: false}},
				{dataIndex: 'workshopNo', text: '车间', editor: {allowBlank: false}},
				{dataIndex: 'groupNo', text: '面部小组', editor: {allowBlank: false}},
				/*{
					dataIndex: 'aheadTime', 
					text: '提前期',
					editor: {allowBlank: false,
					regex:/^\+?[1-9][0-9]*$/,  //只能输入非零正整数
					 regexText:'请输入数字',
					 enforceMaxLength:true
					 }
				},*/
				 {dataIndex: 'materialNo', text: '里料', editor: {allowBlank: false}},
				 {dataIndex: 'materialNo', text: '男/女鞋', editor: {allowBlank: false}},
				 {dataIndex: 'materialNo', text: '工分', editor: {allowBlank: false}},
				{dataIndex: 'enableFlag',
      				text: '启用状态',
      				editor: {allowBlank: false},
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用"},

//				{dataIndex: 'modifier', text: '最后修改人', editor: {allowBlank: false}},
//				{dataIndex: 'modifyTime', text: '最后修改时间', editor: {allowBlank: false}},
//				{dataIndex: 'remarks', text: '备注', editor: {allowBlank: false}}
			],
			   gridPrimaryKey: 'lineId',
			   gridModel: 'Hc_pp.model.PpWorkshopStyle',
			   gridLoadUrl: Hc.ppsPath + 'pp_workshop_style/list.json',
			   gridSaveUrl: Hc.ppsPath + 'pp_workshop_style/batchOperate.json',
			   gridExportUrl: Hc.ppsPath + 'pp_workshop_style/do_export.json',
			   gridImportUrl: Hc.ppsPath + ''
		});
		me.callParent();
	}
});

/**
 * Description:  车间型体款号维护Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */
Ext.define('Hc_pp.view.ppworkshopstyle.PpWorkshopStyleController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.ppworkshopstyle',
    
    onDivOrFacSelect:function( obj,rec ){
    	var me = this,
        objlist = me.getObjList(),
        form = objlist['commonsearch'];
        //record = form.getRecord(); //表头取记录用form ， 网格用grid来取
  	  	//if (!record) return;
    	
    	var workshopNoCombo = me.lookupReference('workshopNo');
    	
    	var divisionNo = form.items.getAt(0).getValue(),
    	factoryNo = form.items.getAt(1).getValue();
    	
    	if(divisionNo != null && divisionNo != ''){
    		workshopNoCombo.store.proxy.extraParams['divisionNo'] = divisionNo;
    	}
    	if(factoryNo != null && factoryNo != ''){
    		workshopNoCombo.store.proxy.extraParams['factoryNo'] = factoryNo;
    	}
    	
    	workshopNoCombo.store.load();
    	
    }
  });
/**
 * Description:  车间型体款号维护Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:04
 * @version 1.0.0
 */ 
Ext.define('Hc_pp.view.ppworkshopstyle.PpWorkshopStyleModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.ppworkshopstyle'
  });
