package com.hc.scm.pp.dao.entity;

import java.math.BigDecimal;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
public class BlProcessReportDtl {
    /**
     * 行ID(主键)
     */
    private Integer lineId;

    /**
     * 单据编号
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
    private String materialNo;

    /**
     * MO号
     */
    private String moNo;

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
     * 汇报数
     */
    private Integer reportQty;

    /**
     * 完结标记
     */
    private Integer finishFlag;

    /**
     * 标准工分值
     */
    private BigDecimal standWorkPoints;

    /**
     * 累计工分值
     */
    private BigDecimal sumWorkPoints;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_process_report_dtl.line_id
     */
    public Integer getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_process_report_dtl.line_id
     */
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_process_report_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_process_report_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_process_report_dtl.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_process_report_dtl.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_process_report_dtl.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_process_report_dtl.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of bl_process_report_dtl.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for bl_process_report_dtl.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_process_report_dtl.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for bl_process_report_dtl.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #moNo}
     *
     * @return the value of bl_process_report_dtl.mo_no
     */
    public String getMoNo() {
        return moNo;
    }

    /**
     * 
     * {@linkplain #moNo}
     * @param moNo the value for bl_process_report_dtl.mo_no
     */
    public void setMoNo(String moNo) {
        this.moNo = moNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     *
     * @return the value of bl_process_report_dtl.size_type_no
     */
    public String getSizeTypeNo() {
        return sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeTypeNo}
     * @param sizeTypeNo the value for bl_process_report_dtl.size_type_no
     */
    public void setSizeTypeNo(String sizeTypeNo) {
        this.sizeTypeNo = sizeTypeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of bl_process_report_dtl.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for bl_process_report_dtl.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     *
     * @return the value of bl_process_report_dtl.size_qty
     */
    public Integer getSizeQty() {
        return sizeQty;
    }

    /**
     * 
     * {@linkplain #sizeQty}
     * @param sizeQty the value for bl_process_report_dtl.size_qty
     */
    public void setSizeQty(Integer sizeQty) {
        this.sizeQty = sizeQty;
    }

    /**
     * 
     * {@linkplain #reportQty}
     *
     * @return the value of bl_process_report_dtl.report_qty
     */
    public Integer getReportQty() {
        return reportQty;
    }

    /**
     * 
     * {@linkplain #reportQty}
     * @param reportQty the value for bl_process_report_dtl.report_qty
     */
    public void setReportQty(Integer reportQty) {
        this.reportQty = reportQty;
    }

    /**
     * 
     * {@linkplain #finishFlag}
     *
     * @return the value of bl_process_report_dtl.finish_flag
     */
    public Integer getFinishFlag() {
        return finishFlag;
    }

    /**
     * 
     * {@linkplain #finishFlag}
     * @param finishFlag the value for bl_process_report_dtl.finish_flag
     */
    public void setFinishFlag(Integer finishFlag) {
        this.finishFlag = finishFlag;
    }

    /**
     * 
     * {@linkplain #standWorkPoints}
     *
     * @return the value of bl_process_report_dtl.stand_work_points
     */
    public BigDecimal getStandWorkPoints() {
        return standWorkPoints;
    }

    /**
     * 
     * {@linkplain #standWorkPoints}
     * @param standWorkPoints the value for bl_process_report_dtl.stand_work_points
     */
    public void setStandWorkPoints(BigDecimal standWorkPoints) {
        this.standWorkPoints = standWorkPoints;
    }

    /**
     * 
     * {@linkplain #sumWorkPoints}
     *
     * @return the value of bl_process_report_dtl.sum_work_points
     */
    public BigDecimal getSumWorkPoints() {
        return sumWorkPoints;
    }

    /**
     * 
     * {@linkplain #sumWorkPoints}
     * @param sumWorkPoints the value for bl_process_report_dtl.sum_work_points
     */
    public void setSumWorkPoints(BigDecimal sumWorkPoints) {
        this.sumWorkPoints = sumWorkPoints;
    }
}