package com.hc.scm.pp.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
public class BlMoTicketInput {
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
     * 员工编号
     */
    private String empCode;

    /**
     * 电脑号
     */
    private String shortCode;

    /**
     * 员工所在部门ID
     */
    private Integer deptId;

    /**
     * 录入数量
     */
    private Short inputQty;

    /**
     * 录入时间
     */
    private Date inputTime;

    /**
     * 是否汇总(0=未汇总,1=汇总.汇总是进行工资运算)
     */
    private Short whetherSum;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_mo_ticket_input.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mo_ticket_input.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mo_ticket_input.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mo_ticket_input.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mo_ticket_input.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mo_ticket_input.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     *
     * @return the value of bl_mo_ticket_input.ticket_no
     */
    public String getTicketNo() {
        return ticketNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     * @param ticketNo the value for bl_mo_ticket_input.ticket_no
     */
    public void setTicketNo(String ticketNo) {
        this.ticketNo = ticketNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of bl_mo_ticket_input.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for bl_mo_ticket_input.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     *
     * @return the value of bl_mo_ticket_input.work_process_code
     */
    public String getWorkProcessCode() {
        return workProcessCode;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     * @param workProcessCode the value for bl_mo_ticket_input.work_process_code
     */
    public void setWorkProcessCode(String workProcessCode) {
        this.workProcessCode = workProcessCode;
    }

    /**
     * 
     * {@linkplain #empCode}
     *
     * @return the value of bl_mo_ticket_input.emp_code
     */
    public String getEmpCode() {
        return empCode;
    }

    /**
     * 
     * {@linkplain #empCode}
     * @param empCode the value for bl_mo_ticket_input.emp_code
     */
    public void setEmpCode(String empCode) {
        this.empCode = empCode;
    }

    /**
     * 
     * {@linkplain #shortCode}
     *
     * @return the value of bl_mo_ticket_input.short_code
     */
    public String getShortCode() {
        return shortCode;
    }

    /**
     * 
     * {@linkplain #shortCode}
     * @param shortCode the value for bl_mo_ticket_input.short_code
     */
    public void setShortCode(String shortCode) {
        this.shortCode = shortCode;
    }

    /**
     * 
     * {@linkplain #deptId}
     *
     * @return the value of bl_mo_ticket_input.dept_id
     */
    public Integer getDeptId() {
        return deptId;
    }

    /**
     * 
     * {@linkplain #deptId}
     * @param deptId the value for bl_mo_ticket_input.dept_id
     */
    public void setDeptId(Integer deptId) {
        this.deptId = deptId;
    }

    /**
     * 
     * {@linkplain #inputQty}
     *
     * @return the value of bl_mo_ticket_input.input_qty
     */
    public Short getInputQty() {
        return inputQty;
    }

    /**
     * 
     * {@linkplain #inputQty}
     * @param inputQty the value for bl_mo_ticket_input.input_qty
     */
    public void setInputQty(Short inputQty) {
        this.inputQty = inputQty;
    }

    /**
     * 
     * {@linkplain #inputTime}
     *
     * @return the value of bl_mo_ticket_input.input_time
     */
    public Date getInputTime() {
        return inputTime;
    }

    /**
     * 
     * {@linkplain #inputTime}
     * @param inputTime the value for bl_mo_ticket_input.input_time
     */
    public void setInputTime(Date inputTime) {
        this.inputTime = inputTime;
    }

    /**
     * 
     * {@linkplain #whetherSum}
     *
     * @return the value of bl_mo_ticket_input.whether_sum
     */
    public Short getWhetherSum() {
        return whetherSum;
    }

    /**
     * 
     * {@linkplain #whetherSum}
     * @param whetherSum the value for bl_mo_ticket_input.whether_sum
     */
    public void setWhetherSum(Short whetherSum) {
        this.whetherSum = whetherSum;
    }
}