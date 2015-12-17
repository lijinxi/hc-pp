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
        requires: ['Hc_pp.model.BlMoTicketCreate', 
                   'Hc_pp.model.PpMoHand', 
                   'Hc_pp.view.blmoticketcreate.BlMoTicketCreateController', 
                   'Hc_pp.view.blmoticketcreate.BlMoTicketCreateModel'],
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