package com.hc.scm.pp.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
public class BlMoTicket {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 单据编号(T+yyyyMMdd+6位流水号)
     */
    private String billNo;

    /**
     * 工票编号(同单据编号)
     */
    private String ticketNo;

    /**
     * 工票类型(取数据字典 workshop_type)
     */
    private String ticketType;

    /**
     * 工作中心(从bas_workshop取)
     */
    private String workshopNo;

    /**
     * 工作中心所在事业部编号
     */
    private String divisionNo;

    /**
     * 小组编号(从bas_workshop_group取)
     */
    private String groupNo;

    /**
     * 工票数量
     */
    private Short ticketQty;

    /**
     * 箱号
     */
    private String boxno;

    /**
     * 是否打印(0=未打印 1=已打印)
     */
    private Short isPrint;

    /**
     * 打印人(最后一次打印人)
     */
    private String printer;

    /**
     * 打印时间(最后一次打印时间)
     */
    private Date printTime;

    /**
     * 是否录入(0=未录入 1=已录入)
     */
    private Short isInput;

    /**
     * 录入状态(数据字典)
     */
    private Byte inputStatus;

    /**
     * 录入人(最后一次录入人)
     */
    private String inputer;

    /**
     * 录入时间(最后一次录入时间)
     */
    private Date inputTime;

    /**
     * 录入审核人
     */
    private String inputAuditor;

    /**
     * 录入审核时间
     */
    private Date inputAuditTime;

    /**
     * 是否汇报(0=未汇报 1=部分汇报 2=全部汇报)
     */
    private Short isReport;

    /**
     * 汇报人(最后一次汇报人)
     */
    private String reporter;

    /**
     * 汇报时间(最后一次汇报时间)
     */
    private Date reportTime;

    /**
     * 是否汇总(0=未汇总,1=汇总 汇总是进行工资运算)
     */
    private Short whetherSum;

    /**
     * 创建者
     */
    private String creator;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 修改者
     */
    private String modifier;

    /**
     * 修改时间
     */
    private Date modifyTime;

    /**
     * 审核人
     */
    private String auditor;

    /**
     * 审核时间
     */
    private Date auditTime;

    /**
     * 工票状态(数据字典)
     */
    private Byte billStatus;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_mo_ticket.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mo_ticket.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mo_ticket.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mo_ticket.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     *
     * @return the value of bl_mo_ticket.ticket_no
     */
    public String getTicketNo() {
        return ticketNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     * @param ticketNo the value for bl_mo_ticket.ticket_no
     */
    public void setTicketNo(String ticketNo) {
        this.ticketNo = ticketNo;
    }

    /**
     * 
     * {@linkplain #ticketType}
     *
     * @return the value of bl_mo_ticket.ticket_type
     */
    public String getTicketType() {
        return ticketType;
    }

    /**
     * 
     * {@linkplain #ticketType}
     * @param ticketType the value for bl_mo_ticket.ticket_type
     */
    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of bl_mo_ticket.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for bl_mo_ticket.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mo_ticket.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mo_ticket.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     *
     * @return the value of bl_mo_ticket.group_no
     */
    public String getGroupNo() {
        return groupNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     * @param groupNo the value for bl_mo_ticket.group_no
     */
    public void setGroupNo(String groupNo) {
        this.groupNo = groupNo;
    }

    /**
     * 
     * {@linkplain #ticketQty}
     *
     * @return the value of bl_mo_ticket.ticket_qty
     */
    public Short getTicketQty() {
        return ticketQty;
    }

    /**
     * 
     * {@linkplain #ticketQty}
     * @param ticketQty the value for bl_mo_ticket.ticket_qty
     */
    public void setTicketQty(Short ticketQty) {
        this.ticketQty = ticketQty;
    }

    /**
     * 
     * {@linkplain #boxno}
     *
     * @return the value of bl_mo_ticket.boxno
     */
    public String getBoxno() {
        return boxno;
    }

    /**
     * 
     * {@linkplain #boxno}
     * @param boxno the value for bl_mo_ticket.boxno
     */
    public void setBoxno(String boxno) {
        this.boxno = boxno;
    }

    /**
     * 
     * {@linkplain #isPrint}
     *
     * @return the value of bl_mo_ticket.is_print
     */
    public Short getIsPrint() {
        return isPrint;
    }

    /**
     * 
     * {@linkplain #isPrint}
     * @param isPrint the value for bl_mo_ticket.is_print
     */
    public void setIsPrint(Short isPrint) {
        this.isPrint = isPrint;
    }

    /**
     * 
     * {@linkplain #printer}
     *
     * @return the value of bl_mo_ticket.printer
     */
    public String getPrinter() {
        return printer;
    }

    /**
     * 
     * {@linkplain #printer}
     * @param printer the value for bl_mo_ticket.printer
     */
    public void setPrinter(String printer) {
        this.printer = printer;
    }

    /**
     * 
     * {@linkplain #printTime}
     *
     * @return the value of bl_mo_ticket.print_time
     */
    public Date getPrintTime() {
        return printTime;
    }

    /**
     * 
     * {@linkplain #printTime}
     * @param printTime the value for bl_mo_ticket.print_time
     */
    public void setPrintTime(Date printTime) {
        this.printTime = printTime;
    }

    /**
     * 
     * {@linkplain #isInput}
     *
     * @return the value of bl_mo_ticket.is_input
     */
    public Short getIsInput() {
        return isInput;
    }

    /**
     * 
     * {@linkplain #isInput}
     * @param isInput the value for bl_mo_ticket.is_input
     */
    public void setIsInput(Short isInput) {
        this.isInput = isInput;
    }

    /**
     * 
     * {@linkplain #inputStatus}
     *
     * @return the value of bl_mo_ticket.input_status
     */
    public Byte getInputStatus() {
        return inputStatus;
    }

    /**
     * 
     * {@linkplain #inputStatus}
     * @param inputStatus the value for bl_mo_ticket.input_status
     */
    public void setInputStatus(Byte inputStatus) {
        this.inputStatus = inputStatus;
    }

    /**
     * 
     * {@linkplain #inputer}
     *
     * @return the value of bl_mo_ticket.inputer
     */
    public String getInputer() {
        return inputer;
    }

    /**
     * 
     * {@linkplain #inputer}
     * @param inputer the value for bl_mo_ticket.inputer
     */
    public void setInputer(String inputer) {
        this.inputer = inputer;
    }

    /**
     * 
     * {@linkplain #inputTime}
     *
     * @return the value of bl_mo_ticket.input_time
     */
    public Date getInputTime() {
        return inputTime;
    }

    /**
     * 
     * {@linkplain #inputTime}
     * @param inputTime the value for bl_mo_ticket.input_time
     */
    public void setInputTime(Date inputTime) {
        this.inputTime = inputTime;
    }

    /**
     * 
     * {@linkplain #inputAuditor}
     *
     * @return the value of bl_mo_ticket.input_auditor
     */
    public String getInputAuditor() {
        return inputAuditor;
    }

    /**
     * 
     * {@linkplain #inputAuditor}
     * @param inputAuditor the value for bl_mo_ticket.input_auditor
     */
    public void setInputAuditor(String inputAuditor) {
        this.inputAuditor = inputAuditor;
    }

    /**
     * 
     * {@linkplain #inputAuditTime}
     *
     * @return the value of bl_mo_ticket.input_audit_time
     */
    public Date getInputAuditTime() {
        return inputAuditTime;
    }

    /**
     * 
     * {@linkplain #inputAuditTime}
     * @param inputAuditTime the value for bl_mo_ticket.input_audit_time
     */
    public void setInputAuditTime(Date inputAuditTime) {
        this.inputAuditTime = inputAuditTime;
    }

    /**
     * 
     * {@linkplain #isReport}
     *
     * @return the value of bl_mo_ticket.is_report
     */
    public Short getIsReport() {
        return isReport;
    }

    /**
     * 
     * {@linkplain #isReport}
     * @param isReport the value for bl_mo_ticket.is_report
     */
    public void setIsReport(Short isReport) {
        this.isReport = isReport;
    }

    /**
     * 
     * {@linkplain #reporter}
     *
     * @return the value of bl_mo_ticket.reporter
     */
    public String getReporter() {
        return reporter;
    }

    /**
     * 
     * {@linkplain #reporter}
     * @param reporter the value for bl_mo_ticket.reporter
     */
    public void setReporter(String reporter) {
        this.reporter = reporter;
    }

    /**
     * 
     * {@linkplain #reportTime}
     *
     * @return the value of bl_mo_ticket.report_time
     */
    public Date getReportTime() {
        return reportTime;
    }

    /**
     * 
     * {@linkplain #reportTime}
     * @param reportTime the value for bl_mo_ticket.report_time
     */
    public void setReportTime(Date reportTime) {
        this.reportTime = reportTime;
    }

    /**
     * 
     * {@linkplain #whetherSum}
     *
     * @return the value of bl_mo_ticket.whether_sum
     */
    public Short getWhetherSum() {
        return whetherSum;
    }

    /**
     * 
     * {@linkplain #whetherSum}
     * @param whetherSum the value for bl_mo_ticket.whether_sum
     */
    public void setWhetherSum(Short whetherSum) {
        this.whetherSum = whetherSum;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of bl_mo_ticket.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for bl_mo_ticket.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of bl_mo_ticket.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for bl_mo_ticket.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of bl_mo_ticket.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for bl_mo_ticket.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of bl_mo_ticket.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for bl_mo_ticket.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of bl_mo_ticket.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for bl_mo_ticket.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of bl_mo_ticket.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for bl_mo_ticket.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of bl_mo_ticket.bill_status
     */
    public Byte getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for bl_mo_ticket.bill_status
     */
    public void setBillStatus(Byte billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of bl_mo_ticket.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for bl_mo_ticket.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}