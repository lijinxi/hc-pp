package com.hc.scm.pp.dao.entity;

import java.math.BigDecimal;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
public class BlMoTicketDtl {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 工作中心所在事业部编号
     */
    private String divisionNo;

    /**
     * 单据编号(T+yyyyMMdd+6位流水号)
     */
    private String billNo;

    /**
     * 工票编号(同单据编号)
     */
    private String ticketNo;

    /**
     * 工序序号(工序工分表里的序号)
     */
    private Short orderNo;

    /**
     * 工序编码
     */
    private String workProcessCode;

    /**
     * 工分值
     */
    private BigDecimal workValue;

    /**
     * 是否外协(0=否,1=是)
     */
    private Short isAssist;

    /**
     * 作业组别(从pd_work_group取数)
     */
    private String workGroupCode;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_mo_ticket_dtl.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mo_ticket_dtl.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mo_ticket_dtl.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mo_ticket_dtl.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mo_ticket_dtl.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mo_ticket_dtl.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     *
     * @return the value of bl_mo_ticket_dtl.ticket_no
     */
    public String getTicketNo() {
        return ticketNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     * @param ticketNo the value for bl_mo_ticket_dtl.ticket_no
     */
    public void setTicketNo(String ticketNo) {
        this.ticketNo = ticketNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_mo_ticket_dtl.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_mo_ticket_dtl.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     *
     * @return the value of bl_mo_ticket_dtl.work_process_code
     */
    public String getWorkProcessCode() {
        return workProcessCode;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     * @param workProcessCode the value for bl_mo_ticket_dtl.work_process_code
     */
    public void setWorkProcessCode(String workProcessCode) {
        this.workProcessCode = workProcessCode;
    }

    /**
     * 
     * {@linkplain #workValue}
     *
     * @return the value of bl_mo_ticket_dtl.work_value
     */
    public BigDecimal getWorkValue() {
        return workValue;
    }

    /**
     * 
     * {@linkplain #workValue}
     * @param workValue the value for bl_mo_ticket_dtl.work_value
     */
    public void setWorkValue(BigDecimal workValue) {
        this.workValue = workValue;
    }

    /**
     * 
     * {@linkplain #isAssist}
     *
     * @return the value of bl_mo_ticket_dtl.is_assist
     */
    public Short getIsAssist() {
        return isAssist;
    }

    /**
     * 
     * {@linkplain #isAssist}
     * @param isAssist the value for bl_mo_ticket_dtl.is_assist
     */
    public void setIsAssist(Short isAssist) {
        this.isAssist = isAssist;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     *
     * @return the value of bl_mo_ticket_dtl.work_group_code
     */
    public String getWorkGroupCode() {
        return workGroupCode;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     * @param workGroupCode the value for bl_mo_ticket_dtl.work_group_code
     */
    public void setWorkGroupCode(String workGroupCode) {
        this.workGroupCode = workGroupCode;
    }
}