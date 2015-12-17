package com.hc.scm.pp.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
public class BlMoBom {
    /**
     * 行ID(主键)
     */
    private Integer lineId;

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
     * 排程号
     */
    private String scheduleNo;

    /**
     * 产品编号
     */
    private String productNo;

    /**
     * MO号
     */
    private String billNo;

    /**
     * 物料序号
     */
    private String seqNo;

    /**
     * 物料子序号
     */
    private String childSeqNo;

    /**
     * 物料用途
     */
    private String materialPurpose;

    /**
     * 物料编号
     */
    private String materialNo;

    /**
     * 尺码
     */
    private String sizeNo;

    /**
     * 物料单位编号
     */
    private String unitNo;

    /**
     * 单用量
     */
    private BigDecimal unitQty;

    /**
     * 总用量
     */
    private BigDecimal sumQty;

    /**
     * 已分配量
     */
    private BigDecimal assignedQty;

    /**
     * 已发料量
     */
    private BigDecimal issuedQty;

    /**
     * 未发料量
     */
    private BigDecimal unissuedQty;

    /**
     * 发料状态(取字典mo_issued_status ，50确认,51分配,52拣货,53发料,500完结)
     */
    private String moIssuedStatus;

    /**
     * 拣货单号
     */
    private String pickingOrderNo;

    /**
     * 发料仓库
     */
    private String issuedStoreNo;

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
     * @return the value of bl_mo_bom.line_id
     */
    public Integer getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mo_bom.line_id
     */
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of bl_mo_bom.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for bl_mo_bom.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mo_bom.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mo_bom.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bl_mo_bom.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bl_mo_bom.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of bl_mo_bom.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for bl_mo_bom.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of bl_mo_bom.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for bl_mo_bom.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }

    /**
     * 
     * {@linkplain #productNo}
     *
     * @return the value of bl_mo_bom.product_no
     */
    public String getProductNo() {
        return productNo;
    }

    /**
     * 
     * {@linkplain #productNo}
     * @param productNo the value for bl_mo_bom.product_no
     */
    public void setProductNo(String productNo) {
        this.productNo = productNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mo_bom.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mo_bom.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #seqNo}
     *
     * @return the value of bl_mo_bom.seq_no
     */
    public String getSeqNo() {
        return seqNo;
    }

    /**
     * 
     * {@linkplain #seqNo}
     * @param seqNo the value for bl_mo_bom.seq_no
     */
    public void setSeqNo(String seqNo) {
        this.seqNo = seqNo;
    }

    /**
     * 
     * {@linkplain #childSeqNo}
     *
     * @return the value of bl_mo_bom.child_seq_no
     */
    public String getChildSeqNo() {
        return childSeqNo;
    }

    /**
     * 
     * {@linkplain #childSeqNo}
     * @param childSeqNo the value for bl_mo_bom.child_seq_no
     */
    public void setChildSeqNo(String childSeqNo) {
        this.childSeqNo = childSeqNo;
    }

    /**
     * 
     * {@linkplain #materialPurpose}
     *
     * @return the value of bl_mo_bom.material_purpose
     */
    public String getMaterialPurpose() {
        return materialPurpose;
    }

    /**
     * 
     * {@linkplain #materialPurpose}
     * @param materialPurpose the value for bl_mo_bom.material_purpose
     */
    public void setMaterialPurpose(String materialPurpose) {
        this.materialPurpose = materialPurpose;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_mo_bom.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_mo_bom.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_mo_bom.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_mo_bom.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     *
     * @return the value of bl_mo_bom.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for bl_mo_bom.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #unitQty}
     *
     * @return the value of bl_mo_bom.unit_qty
     */
    public BigDecimal getUnitQty() {
        return unitQty;
    }

    /**
     * 
     * {@linkplain #unitQty}
     * @param unitQty the value for bl_mo_bom.unit_qty
     */
    public void setUnitQty(BigDecimal unitQty) {
        this.unitQty = unitQty;
    }

    /**
     * 
     * {@linkplain #sumQty}
     *
     * @return the value of bl_mo_bom.sum_qty
     */
    public BigDecimal getSumQty() {
        return sumQty;
    }

    /**
     * 
     * {@linkplain #sumQty}
     * @param sumQty the value for bl_mo_bom.sum_qty
     */
    public void setSumQty(BigDecimal sumQty) {
        this.sumQty = sumQty;
    }

    /**
     * 
     * {@linkplain #assignedQty}
     *
     * @return the value of bl_mo_bom.assigned_qty
     */
    public BigDecimal getAssignedQty() {
        return assignedQty;
    }

    /**
     * 
     * {@linkplain #assignedQty}
     * @param assignedQty the value for bl_mo_bom.assigned_qty
     */
    public void setAssignedQty(BigDecimal assignedQty) {
        this.assignedQty = assignedQty;
    }

    /**
     * 
     * {@linkplain #issuedQty}
     *
     * @return the value of bl_mo_bom.issued_qty
     */
    public BigDecimal getIssuedQty() {
        return issuedQty;
    }

    /**
     * 
     * {@linkplain #issuedQty}
     * @param issuedQty the value for bl_mo_bom.issued_qty
     */
    public void setIssuedQty(BigDecimal issuedQty) {
        this.issuedQty = issuedQty;
    }

    /**
     * 
     * {@linkplain #unissuedQty}
     *
     * @return the value of bl_mo_bom.unissued_qty
     */
    public BigDecimal getUnissuedQty() {
        return unissuedQty;
    }

    /**
     * 
     * {@linkplain #unissuedQty}
     * @param unissuedQty the value for bl_mo_bom.unissued_qty
     */
    public void setUnissuedQty(BigDecimal unissuedQty) {
        this.unissuedQty = unissuedQty;
    }

    /**
     * 
     * {@linkplain #moIssuedStatus}
     *
     * @return the value of bl_mo_bom.mo_issued_status
     */
    public String getMoIssuedStatus() {
        return moIssuedStatus;
    }

    /**
     * 
     * {@linkplain #moIssuedStatus}
     * @param moIssuedStatus the value for bl_mo_bom.mo_issued_status
     */
    public void setMoIssuedStatus(String moIssuedStatus) {
        this.moIssuedStatus = moIssuedStatus;
    }

    /**
     * 
     * {@linkplain #pickingOrderNo}
     *
     * @return the value of bl_mo_bom.picking_order_no
     */
    public String getPickingOrderNo() {
        return pickingOrderNo;
    }

    /**
     * 
     * {@linkplain #pickingOrderNo}
     * @param pickingOrderNo the value for bl_mo_bom.picking_order_no
     */
    public void setPickingOrderNo(String pickingOrderNo) {
        this.pickingOrderNo = pickingOrderNo;
    }

    /**
     * 
     * {@linkplain #issuedStoreNo}
     *
     * @return the value of bl_mo_bom.issued_store_no
     */
    public String getIssuedStoreNo() {
        return issuedStoreNo;
    }

    /**
     * 
     * {@linkplain #issuedStoreNo}
     * @param issuedStoreNo the value for bl_mo_bom.issued_store_no
     */
    public void setIssuedStoreNo(String issuedStoreNo) {
        this.issuedStoreNo = issuedStoreNo;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_mo_bom.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_mo_bom.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_mo_bom.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_mo_bom.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_mo_bom.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_mo_bom.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_mo_bom.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_mo_bom.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_mo_bom.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_mo_bom.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}