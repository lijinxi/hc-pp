package com.hc.scm.pp.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
public class PpMoHand {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 手编号(yyyyMMdd+6位流水号)
     */
    private String handNo;

    /**
     * 箱号(yyyyMMdd+6位流水号)
     */
    private String boxNo;

    /**
     * 开工日期
     */
    private Date startDate;

    /**
     * 工作中心(从bas_workshop取)
     */
    private String workshopNo;

    /**
     * 工作中心类型(取数据字典 workshop_type)
     */
    private String wrkactType;

    /**
     * 厂区编号(前端不显示)
     */
    private String factoryNo;

    /**
     * 车间所在事业部编号(前端不显示)
     */
    private String divisionNo;

    /**
     * 工分表编号
     */
    private String wrkactNo;

    /**
     * 半成品编码
     */
    private String materialNo;
    
    /**
     * 产品名称
     */
    private String materialName;
    
    /**
     * 单位
     */
    private String normalUnit;

    /**
     * 每手总数量
     */
    private Short qtyTotal;

    /**
     * 排程号
     */
    private String scheduleNo;

    /**
     * MO号
     */
    private String moNo;

    /**
     * MO所在事业部编号(前端不显示)
     */
    private String moDivisionNo;

    /**
     * 配码
     */
    private String sizeNo;

    /**
     * MO配码工单数量
     */
    private Short qtyMo;

    /**
     * 每个配码数量
     */
    private Short qtyHand;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of pp_mo_hand.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pp_mo_hand.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #handNo}
     *
     * @return the value of pp_mo_hand.hand_no
     */
    public String getHandNo() {
        return handNo;
    }

    /**
     * 
     * {@linkplain #handNo}
     * @param handNo the value for pp_mo_hand.hand_no
     */
    public void setHandNo(String handNo) {
        this.handNo = handNo;
    }

    /**
     * 
     * {@linkplain #boxNo}
     *
     * @return the value of pp_mo_hand.box_no
     */
    public String getBoxNo() {
        return boxNo;
    }

    /**
     * 
     * {@linkplain #boxNo}
     * @param boxNo the value for pp_mo_hand.box_no
     */
    public void setBoxNo(String boxNo) {
        this.boxNo = boxNo;
    }

    /**
     * 
     * {@linkplain #startDate}
     *
     * @return the value of pp_mo_hand.start_date
     */
    public Date getStartDate() {
        return startDate;
    }

    /**
     * 
     * {@linkplain #startDate}
     * @param startDate the value for pp_mo_hand.start_date
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of pp_mo_hand.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for pp_mo_hand.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #wrkactType}
     *
     * @return the value of pp_mo_hand.wrkact_type
     */
    public String getWrkactType() {
        return wrkactType;
    }

    /**
     * 
     * {@linkplain #wrkactType}
     * @param wrkactType the value for pp_mo_hand.wrkact_type
     */
    public void setWrkactType(String wrkactType) {
        this.wrkactType = wrkactType;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of pp_mo_hand.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for pp_mo_hand.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of pp_mo_hand.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for pp_mo_hand.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pp_mo_hand.wrkact_no
     */
    public String getWrkactNo() {
        return wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pp_mo_hand.wrkact_no
     */
    public void setWrkactNo(String wrkactNo) {
        this.wrkactNo = wrkactNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of pp_mo_hand.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for pp_mo_hand.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }
    
    /**
     * 
     * {@linkplain #materialName}
     *
     * @return the value of bl_mo.material_no
     */
    public String getMaterialName() {
        return materialName;
    }

    /**
     * 
     * {@linkplain #materialName}
     * @param materialNo the value for bl_mo.material_no
     */
    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }
    
    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of bl_mo.material_no
     */
    public String getNormalUnit() {
        return normalUnit;
    }

    /**
     * 
     * {@linkplain #normalUnit}
     * @param materialNo the value for bl_mo.material_no
     */
    public void setNormalUnit(String normalUnit) {
        this.normalUnit = normalUnit;
    }

    /**
     * 
     * {@linkplain #qtyTotal}
     *
     * @return the value of pp_mo_hand.qty_total
     */
    public Short getQtyTotal() {
        return qtyTotal;
    }

    /**
     * 
     * {@linkplain #qtyTotal}
     * @param qtyTotal the value for pp_mo_hand.qty_total
     */
    public void setQtyTotal(Short qtyTotal) {
        this.qtyTotal = qtyTotal;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of pp_mo_hand.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for pp_mo_hand.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }

    /**
     * 
     * {@linkplain #moNo}
     *
     * @return the value of pp_mo_hand.mo_no
     */
    public String getMoNo() {
        return moNo;
    }

    /**
     * 
     * {@linkplain #moNo}
     * @param moNo the value for pp_mo_hand.mo_no
     */
    public void setMoNo(String moNo) {
        this.moNo = moNo;
    }

    /**
     * 
     * {@linkplain #moDivisionNo}
     *
     * @return the value of pp_mo_hand.mo_division_no
     */
    public String getMoDivisionNo() {
        return moDivisionNo;
    }

    /**
     * 
     * {@linkplain #moDivisionNo}
     * @param moDivisionNo the value for pp_mo_hand.mo_division_no
     */
    public void setMoDivisionNo(String moDivisionNo) {
        this.moDivisionNo = moDivisionNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     *
     * @return the value of pp_mo_hand.size_no
     */
    public String getSizeNo() {
        return sizeNo;
    }

    /**
     * 
     * {@linkplain #sizeNo}
     * @param sizeNo the value for pp_mo_hand.size_no
     */
    public void setSizeNo(String sizeNo) {
        this.sizeNo = sizeNo;
    }

    /**
     * 
     * {@linkplain #qtyMo}
     *
     * @return the value of pp_mo_hand.qty_mo
     */
    public Short getQtyMo() {
        return qtyMo;
    }

    /**
     * 
     * {@linkplain #qtyMo}
     * @param qtyMo the value for pp_mo_hand.qty_mo
     */
    public void setQtyMo(Short qtyMo) {
        this.qtyMo = qtyMo;
    }

    /**
     * 
     * {@linkplain #qtyHand}
     *
     * @return the value of pp_mo_hand.qty_hand
     */
    public Short getQtyHand() {
        return qtyHand;
    }

    /**
     * 
     * {@linkplain #qtyHand}
     * @param qtyHand the value for pp_mo_hand.qty_hand
     */
    public void setQtyHand(Short qtyHand) {
        this.qtyHand = qtyHand;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pp_mo_hand.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pp_mo_hand.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}