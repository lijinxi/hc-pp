package com.hc.scm.pp.dao.entity;

import java.util.Date;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:01
 * @version 1.0.0
 */
public class PpWorkshopStyle {
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
     * 物料编号
     */
    private String materialNo;

    /**
     * 车间
     */
    private String workshopNo;

    /**
     * 小组
     */
    private String groupNo;

    /**
     * 提前期
     */
    private Integer aheadTime;

    /**
     * 数据状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 最后修改人
     */
    private String modifier;

    /**
     * 最后修改时间
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
     * @return the value of pp_workshop_style.line_id
     */
    public Integer getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pp_workshop_style.line_id
     */
    public void setLineId(Integer lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     *
     * @return the value of pp_workshop_style.factory_no
     */
    public String getFactoryNo() {
        return factoryNo;
    }

    /**
     * 
     * {@linkplain #factoryNo}
     * @param factoryNo the value for pp_workshop_style.factory_no
     */
    public void setFactoryNo(String factoryNo) {
        this.factoryNo = factoryNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     *
     * @return the value of pp_workshop_style.division_no
     */
    public String getDivisionNo() {
        return divisionNo;
    }

    /**
     * 
     * {@linkplain #divisionNo}
     * @param divisionNo the value for pp_workshop_style.division_no
     */
    public void setDivisionNo(String divisionNo) {
        this.divisionNo = divisionNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of pp_workshop_style.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for pp_workshop_style.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     *
     * @return the value of pp_workshop_style.workshop_no
     */
    public String getWorkshopNo() {
        return workshopNo;
    }

    /**
     * 
     * {@linkplain #workshopNo}
     * @param workshopNo the value for pp_workshop_style.workshop_no
     */
    public void setWorkshopNo(String workshopNo) {
        this.workshopNo = workshopNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     *
     * @return the value of pp_workshop_style.group_no
     */
    public String getGroupNo() {
        return groupNo;
    }

    /**
     * 
     * {@linkplain #groupNo}
     * @param groupNo the value for pp_workshop_style.group_no
     */
    public void setGroupNo(String groupNo) {
        this.groupNo = groupNo;
    }

    /**
     * 
     * {@linkplain #aheadTime}
     *
     * @return the value of pp_workshop_style.ahead_time
     */
    public Integer getAheadTime() {
        return aheadTime;
    }

    /**
     * 
     * {@linkplain #aheadTime}
     * @param aheadTime the value for pp_workshop_style.ahead_time
     */
    public void setAheadTime(Integer aheadTime) {
        this.aheadTime = aheadTime;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of pp_workshop_style.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for pp_workshop_style.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of pp_workshop_style.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for pp_workshop_style.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of pp_workshop_style.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for pp_workshop_style.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pp_workshop_style.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pp_workshop_style.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}