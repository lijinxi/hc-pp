package com.hc.scm.pp.dao.entity;

import java.math.BigDecimal;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
public class BlPickingOrderDtl {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 拣货单号
     */
    private String billNo;

    /**
     * 序号
     */
    private Integer orderNo;

    /**
     * 事业部编号
     */
    private String divisionNo;

    /**
     * 排程号
     */
    private String scheduleNo;

    /**
     * 产品编号
     */
    private String productNo;

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
     * 单位
     */
    private String unitNo;

    /**
     * 定额数量
     */
    private BigDecimal sumQty;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_picking_order_dtl.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_picking_order_dtl.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_picking_order_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_picking_order_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_picking_order_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_picking_order_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_picking_order_dtl.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_picking_order_dtl.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of bl_picking_order_dtl.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for bl_picking_order_dtl.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }

    /**
     * 
     * {@linkplain #productNo}
     *
     * @return the value of bl_picking_order_dtl.product_no
     */
    public String getProductNo() {
        return productNo;
    }

    /**
     * 
     * {@linkplain #productNo}
     * @param productNo the value for bl_picking_order_dtl.product_no
     */
    public void setProductNo(String productNo) {
        this.productNo = productNo;
    }

    /**
     * 
     * {@linkplain #materialPurpose}
     *
     * @return the value of bl_picking_order_dtl.material_purpose
     */
    public String getMaterialPurpose() {
        return materialPurpose;
    }

    /**
     * 
     * {@linkplain #materialPurpose}
     * @param materialPurpose the value for bl_picking_order_dtl.material_purpose
     */
    public void setMaterialPurpose(String materialPurpose) {
        this.materialPurpose = materialPurpose;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_picking_order_dtl.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_picking_order_dtl.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_picking_order_dtl.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_picking_order_dtl.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     *
     * @return the value of bl_picking_order_dtl.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for bl_picking_order_dtl.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #sumQty}
     *
     * @return the value of bl_picking_order_dtl.sum_qty
     */
    public BigDecimal getSumQty() {
        return sumQty;
    }

    /**
     * 
     * {@linkplain #sumQty}
     * @param sumQty the value for bl_picking_order_dtl.sum_qty
     */
    public void setSumQty(BigDecimal sumQty) {
        this.sumQty = sumQty;
    }
}