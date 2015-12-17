package com.hc.scm.pp.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-18 09:43:18
 * @version 1.0.0
 */
public class VBlMoBox {
    /**
     * 箱号(yyyyMMdd+6位流水号)
     */
    private String boxNo;

    /**
     * 工序工分表编号
     */
    private String wrkactNo;

    /**
     * 型体
     */
    private String modelNo;

    /**
     * 款号
     */
    private String styleNo;

    /**
     * 开工日期
     */
    private Date startDate;

    /**
     * 工作中心(从bas_workshop取)
     */
    private String workshopNo;

    /**
     * 排程号
     */
    private String scheduleNo;

    /**
     * 
     * {@linkplain #boxNo}
     *
     * @return the value of v_bl_mo_box.box_no
     */
    public String getBoxNo() {
        return boxNo;
    }

    /**
     * 
     * {@linkplain #boxNo}
     * @param boxNo the value for v_bl_mo_box.box_no
     */
    public void setBoxNo(String boxNo) {
        this.boxNo = boxNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of v_bl_mo_box.wrkact_no
     */
    public String getWrkactNo() {
        return wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for v_bl_mo_box.wrkact_no
     */
    public void setWrkactNo(String wrkactNo) {
        this.wrkactNo = wrkactNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     *
     * @return the value of v_bl_mo_box.model_no
     */
    public String getModelNo() {
        return modelNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     * @param modelNo the value for v_bl_mo_box.model_no
     */
    public void setModelNo(String modelNo) {
        this.modelNo = modelNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     *
     * @return the value of v_bl_mo_box.style_no
     */
    public String getStyleNo() {
        return styleNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     * @param styleNo the value for v_bl_mo_box.style_no
     */
    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    /**
     * 
     * {@linkplain #startDate}
     *
     * @return the value of v_bl_mo_box.start_date
     */
    public Date getStartDate() {
        return startDate;
    }

    /**
     * 
     * {@linkplain #startDate}
     * @param startDate the value for v_bl_mo_box.start_date
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of v_bl_mo_box.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for v_bl_mo_box.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     *
     * @return the value of v_bl_mo_box.schedule_no
     */
    public String getScheduleNo() {
        return scheduleNo;
    }

    /**
     * 
     * {@linkplain #scheduleNo}
     * @param scheduleNo the value for v_bl_mo_box.schedule_no
     */
    public void setScheduleNo(String scheduleNo) {
        this.scheduleNo = scheduleNo;
    }
}