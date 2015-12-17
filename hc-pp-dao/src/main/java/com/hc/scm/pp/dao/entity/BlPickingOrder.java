package com.hc.scm.pp.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
public class BlPickingOrder {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 拣货单号
     */
    private String billNo;

    /**
     * 单据类型(拣货单)
     */
    private String billTypeNo;

    /**
     * 事业部编号(前端不显示)
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
     * 供应商(考虑后期外协拣货发料，暂不用)
     */
    private String supplierNo;

    /**
     * 开工日期
     */
    @JSONField (format="yyyy-MM-dd")
    private Date startDate;

    /**
     * 单据状态(取数据字典 bill_status)
     */
    private String billStatus;

    /**
     * 创建人
     */
    private String creator;

    /**
     * 创建时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 审核人
     */
    private String auditor;

    /**
     * 审核时间
     */
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date auditTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_picking_order.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_picking_order.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_picking_order.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_picking_order.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     *
     * @return the value of bl_picking_order.bill_type_no
     */
    public String getBillTypeNo() {
        return billTypeNo;
    }

    /**
     * 
     * {@linkplain #billTypeNo}
     * @param billTypeNo the value for bl_picking_order.bill_type_no
     */
    public void setBillTypeNo(String billTypeNo) {
        this.billTypeNo = billTypeNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_picking_order.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_picking_order.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     *
     * @return the value of bl_picking_order.store_no
     */
    public String getStoreNo() {
        return storeNo;
    }

    /**
     * 
     * {@linkplain #storeNo}
     * @param storeNo the value for bl_picking_order.store_no
     */
    public void setStoreNo(String storeNo) {
        this.storeNo = storeNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of bl_picking_order.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for bl_picking_order.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     *
     * @return the value of bl_picking_order.supplier_no
     */
    public String getSupplierNo() {
        return supplierNo;
    }

    /**
     * 
     * {@linkplain #supplierNo}
     * @param supplierNo the value for bl_picking_order.supplier_no
     */
    public void setSupplierNo(String supplierNo) {
        this.supplierNo = supplierNo;
    }

    /**
     * 
     * {@linkplain #startDate}
     *
     * @return the value of bl_picking_order.start_date
     */
    public Date getStartDate() {
        return startDate;
    }

    /**
     * 
     * {@linkplain #startDate}
     * @param startDate the value for bl_picking_order.start_date
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of bl_picking_order.bill_status
     */
    public String getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for bl_picking_order.bill_status
     */
    public void setBillStatus(String billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_picking_order.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_picking_order.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_picking_order.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_picking_order.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_picking_order.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_picking_order.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_picking_order.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_picking_order.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bl_picking_order.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bl_picking_order.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bl_picking_order.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bl_picking_order.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_picking_order.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_picking_order.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}