package com.hc.scm.pp.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
public class BlMo {
    /**
     * 行ID(主键)
     */
    private Integer lineId;

    /**
     * 厂区编号
     */
    private String factoryNo;

    /**
     * 品牌
     */
    private String brandNo;

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
     * 面部小组
     */
    private String groupNo;

    /**
     * 计划员
     */
    private String planer;

    /**
     * 排程号
     */
    private String scheduleNo;

    /**
     * 开工日期
     */
    private Date startDate;

    /**
     * 完工日期
     */
    private Date endDate;

    /**
     * 产品编号
     */
    private String materialNo;

    /**
     * 单据编号(MO号)
     */
    private String billNo;

    /**
     * 单据类型(MO)
     */
    private String billTypeNo;

    /**
     * 工单类型(CP,ZD,DL,BM物料基础资料自动带出，可调整)
     */
    private String workOrderType;

    /**
     * 客户类型(内销还是外销)
     */
    private String customerType;

    /**
     * 物料状态(取片语mo_material_status，50确认,51分配,52拣货,500完结)
     */
    private String moMaterialStatus;

    /**
     * 工序状态(取片语mo_process_status，60确认，61部分汇报，500完结)
     */
    private String moProcessStatus;

    /**
     * 工单状态(取片语mo_mo_status，40确认,41部分汇报,500完结)
     */
    private String moMoStatus;

    /**
     * 配码组
     */
    private String sizeTypeNo;

    /**
     * 尺码
     */
    private String sizeNo;

    /**
     * 尺码数量
     */
    private Integer sizeQty;

    /**
     * 制造数(完工数)
     */
    private Integer finishQty;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_mo.line_id
     */
    public Integer getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mo.line_id
     */
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of bl_mo.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for bl_mo.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     *
     * @return the value of bl_mo.brand_no
     */
    public String getBrandNo() {
        return brandNo;
    }

    /**
     * 
     * {@linkplain #brandNo}
     * @param brandNo the value for bl_mo.brand_no
     */
    public void setBrandNo(String brandNo) {
        this.brandNo = brandNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mo.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mo.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bl_mo.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bl_mo.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of bl_mo.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for bl_mo.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     *
     * @return the value of bl_mo.group_no
     */
    public String getGroupNo() {
        return groupNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     * @param groupNo the value for bl_mo.group_no
     */
    public void setGroupNo(String groupNo) {
        this.groupNo = groupNo;
    }

    /**
     * 
     * {@linkplain #planer}
     *
     * @return the value of bl_mo.planer
     */
    public String getPlaner() {
        return planer;
    }

    /**
     * 
     * {@linkplain #planer}
     * @param planer the value for bl_mo.planer
     */
    public void setPlaner(String planer) {
        this.planer = planer;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of bl_mo.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for bl_mo.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }

    /**
     * 
     * {@linkplain #startDate}
     *
     * @return the value of bl_mo.start_date
     */
    public Date getStartDate() {
        return startDate;
    }

    /**
     * 
     * {@linkplain #startDate}
     * @param startDate the value for bl_mo.start_date
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    /**
     * 
     * {@linkplain #endDate}
     *
     * @return the value of bl_mo.end_date
     */
    public Date getEndDate() {
        return endDate;
    }

    /**
     * 
     * {@linkplain #endDate}
     * @param endDate the value for bl_mo.end_date
     */
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_mo.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_mo.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mo.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mo.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     *
     * @return the value of bl_mo.bill_type_no
     */
    public String getBillTypeNo() {
        return billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     * @param billTypeNo the value for bl_mo.bill_type_no
     */
    public void setBillTypeNo(String billTypeNo) {
        this.billTypeNo = billTypeNo;
    }

    /**
     * 
     * {@linkplain #workOrderType}
     *
     * @return the value of bl_mo.work_order_type
     */
    public String getWorkOrderType() {
        return workOrderType;
    }

    /**
     * 
     * {@linkplain #workOrderType}
     * @param workOrderType the value for bl_mo.work_order_type
     */
    public void setWorkOrderType(String workOrderType) {
        this.workOrderType = workOrderType;
    }

    /**
     * 
     * {@linkplain #customerType}
     *
     * @return the value of bl_mo.customer_type
     */
    public String getCustomerType() {
        return customerType;
    }

    /**
     * 
     * {@linkplain #customerType}
     * @param customerType the value for bl_mo.customer_type
     */
    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    /**
     * 
     * {@linkplain #moMaterialStatus}
     *
     * @return the value of bl_mo.mo_material_status
     */
    public String getMoMaterialStatus() {
        return moMaterialStatus;
    }

    /**
     * 
     * {@linkplain #moMaterialStatus}
     * @param moMaterialStatus the value for bl_mo.mo_material_status
     */
    public void setMoMaterialStatus(String moMaterialStatus) {
        this.moMaterialStatus = moMaterialStatus;
    }

    /**
     * 
     * {@linkplain #moProcessStatus}
     *
     * @return the value of bl_mo.mo_process_status
     */
    public String getMoProcessStatus() {
        return moProcessStatus;
    }

    /**
     * 
     * {@linkplain #moProcessStatus}
     * @param moProcessStatus the value for bl_mo.mo_process_status
     */
    public void setMoProcessStatus(String moProcessStatus) {
        this.moProcessStatus = moProcessStatus;
    }

    /**
     * 
     * {@linkplain #moMoStatus}
     *
     * @return the value of bl_mo.mo_mo_status
     */
    public String getMoMoStatus() {
        return moMoStatus;
    }

    /**
     * 
     * {@linkplain #moMoStatus}
     * @param moMoStatus the value for bl_mo.mo_mo_status
     */
    public void setMoMoStatus(String moMoStatus) {
        this.moMoStatus = moMoStatus;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bl_mo.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bl_mo.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_mo.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_mo.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     *
     * @return the value of bl_mo.size_qty
     */
    public Integer getSizeQty() {
        return sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     * @param sizeQty the value for bl_mo.size_qty
     */
    public void setSizeQty(Integer sizeQty) {
        this.sizeQty = sizeQty;
    }

    /**
     * 
     * {@linkplain #finishQty}
     *
     * @return the value of bl_mo.finish_qty
     */
    public Integer getFinishQty() {
        return finishQty;
    }

    /**
     * 
     * {@linkplain #finishQty}
     * @param finishQty the value for bl_mo.finish_qty
     */
    public void setFinishQty(Integer finishQty) {
        this.finishQty = finishQty;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_mo.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_mo.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_mo.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_mo.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_mo.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_mo.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_mo.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_mo.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_mo.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_mo.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}