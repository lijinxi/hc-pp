package com.hc.scm.pp.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */
public class BlMoTicketHand {
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
     * 手编号
     */
    private String handNo;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of bl_mo_ticket_hand.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for bl_mo_ticket_hand.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of bl_mo_ticket_hand.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for bl_mo_ticket_hand.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of bl_mo_ticket_hand.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for bl_mo_ticket_hand.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     *
     * @return the value of bl_mo_ticket_hand.ticket_no
     */
    public String getTicketNo() {
        return ticketNo;
    }

    /**
     * 
     * {@linkplain #ticketNo}
     * @param ticketNo the value for bl_mo_ticket_hand.ticket_no
     */
    public void setTicketNo(String ticketNo) {
        this.ticketNo = ticketNo;
    }

    /**
     * 
     * {@linkplain #handNo}
     *
     * @return the value of bl_mo_ticket_hand.hand_no
     */
    public String getHandNo() {
        return handNo;
    }

    /**
     * 
     * {@linkplain #handNo}
     * @param handNo the value for bl_mo_ticket_hand.hand_no
     */
    public void setHandNo(String handNo) {
        this.handNo = handNo;
    }
}