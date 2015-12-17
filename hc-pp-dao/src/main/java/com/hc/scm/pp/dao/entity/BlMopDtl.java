package com.hc.scm.pp.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
public class BlMopDtl {
    /**
     * 行ID(主键)
     */
    private Integer lineId;

    /**
     * 单据编号(MOP号)
     */
    private String billNo;

    /**
     * 厂区编号
     */
    private String factoryNo;

    /**
     * 事业部编号
     */
    private String divisionNo;

    /**
     * 仓库编号
     */
    private String storeNo;

    /**
     * 车间
     */
    private String workshopNo;

    /**
     * 计划员
     */
    private String planer;

    /**
     * 计划开工日期
     */
    @JSONField(format="yyyy-MM-dd")
    private Date startDate;

    /**
     * 排程号
     */
    private String scheduleNo;

    /**
     * 计划完工日期(根据开工日期和提前期计算出来)
     */
    @JSONField(format="yyyy-MM-dd")
    private Date endDate;

    /**
     * 销售订单行号
     */
    private String coLineNo;

    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * BOM用途(S2=开发 STD=标准 SUB=委外 SPD=预测)
     */
    private String bomPurpose;

    /**
     * 工单类型(CP,ZD,DL,BM物料基础资料自动带出，可调整)
     */
    private String workOrderType;

    /**
     * 委托关联号(发生调单有用)
     */
    private String associateNo;

    /**
     * 计划单(MOP)状态(制单状态10,确认为20)
     */
    private String mopStatus;

    /**
     * 客户类型(内销还是外销)
     */
    private String customerType;

    /**
     * 面部小组
     */
    private String groupNo;

    /**
     * 尺码
     */
    private String sizeNo;

    /**
     * 尺码数量
     */
    private Integer sizeQty;

    /**
     * 配码组(根据物料基础信息带出)
     */
    private String sizeTypeNo;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_mop_dtl.line_id
     */
    public Integer getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mop_dtl.line_id
     */
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mop_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mop_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of bl_mop_dtl.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for bl_mop_dtl.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mop_dtl.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mop_dtl.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bl_mop_dtl.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bl_mop_dtl.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of bl_mop_dtl.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for bl_mop_dtl.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #planer}
     *
     * @return the value of bl_mop_dtl.planer
     */
    public String getPlaner() {
        return planer;
    }

    /**
     * 
     * {@linkplain #planer}
     * @param planer the value for bl_mop_dtl.planer
     */
    public void setPlaner(String planer) {
        this.planer = planer;
    }

    /**
     * 
     * {@linkplain #startDate}
     *
     * @return the value of bl_mop_dtl.start_date
     */
    public Date getStartDate() {
        return startDate;
    }

    /**
     * 
     * {@linkplain #startDate}
     * @param startDate the value for bl_mop_dtl.start_date
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of bl_mop_dtl.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for bl_mop_dtl.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }

    /**
     * 
     * {@linkplain #endDate}
     *
     * @return the value of bl_mop_dtl.end_date
     */
    public Date getEndDate() {
        return endDate;
    }

    /**
     * 
     * {@linkplain #endDate}
     * @param endDate the value for bl_mop_dtl.end_date
     */
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    /**
     * 
     * {@linkplain #coLineNo}
     *
     * @return the value of bl_mop_dtl.co_line_no
     */
    public String getCoLineNo() {
        return coLineNo;
    }

    /**
     * 
     * {@linkplain #coLineNo}
     * @param coLineNo the value for bl_mop_dtl.co_line_no
     */
    public void setCoLineNo(String coLineNo) {
        this.coLineNo = coLineNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_mop_dtl.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_mop_dtl.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     *
     * @return the value of bl_mop_dtl.bom_purpose
     */
    public String getBomPurpose() {
        return bomPurpose;
    }

    /**
     * 
     * {@linkplain #bomPurpose}
     * @param bomPurpose the value for bl_mop_dtl.bom_purpose
     */
    public void setBomPurpose(String bomPurpose) {
        this.bomPurpose = bomPurpose;
    }

    /**
     * 
     * {@linkplain #workOrderType}
     *
     * @return the value of bl_mop_dtl.work_order_type
     */
    public String getWorkOrderType() {
        return workOrderType;
    }

    /**
     * 
     * {@linkplain #workOrderType}
     * @param workOrderType the value for bl_mop_dtl.work_order_type
     */
    public void setWorkOrderType(String workOrderType) {
        this.workOrderType = workOrderType;
    }

    /**
     * 
     * {@linkplain #associateNo}
     *
     * @return the value of bl_mop_dtl.associate_no
     */
    public String getAssociateNo() {
        return associateNo;
    }

    /**
     * 
     * {@linkplain #associateNo}
     * @param associateNo the value for bl_mop_dtl.associate_no
     */
    public void setAssociateNo(String associateNo) {
        this.associateNo = associateNo;
    }

    /**
     * 
     * {@linkplain #mopStatus}
     *
     * @return the value of bl_mop_dtl.mop_status
     */
    public String getMopStatus() {
        return mopStatus;
    }

    /**
     * 
     * {@linkplain #mopStatus}
     * @param mopStatus the value for bl_mop_dtl.mop_status
     */
    public void setMopStatus(String mopStatus) {
        this.mopStatus = mopStatus;
    }

    /**
     * 
     * {@linkplain #customerType}
     *
     * @return the value of bl_mop_dtl.customer_type
     */
    public String getCustomerType() {
        return customerType;
    }

    /**
     * 
     * {@linkplain #customerType}
     * @param customerType the value for bl_mop_dtl.customer_type
     */
    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    /**
     * 
     * {@linkplain #groupNo}
     *
     * @return the value of bl_mop_dtl.group_no
     */
    public String getGroupNo() {
        return groupNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     * @param groupNo the value for bl_mop_dtl.group_no
     */
    public void setGroupNo(String groupNo) {
        this.groupNo = groupNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_mop_dtl.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_mop_dtl.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     *
     * @return the value of bl_mop_dtl.size_qty
     */
    public Integer getSizeQty() {
        return sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     * @param sizeQty the value for bl_mop_dtl.size_qty
     */
    public void setSizeQty(Integer sizeQty) {
        this.sizeQty = sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bl_mop_dtl.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bl_mop_dtl.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_mop_dtl.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_mop_dtl.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}