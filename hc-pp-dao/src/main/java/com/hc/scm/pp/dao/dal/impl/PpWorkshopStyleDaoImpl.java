package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.PpWorkshopStyleDao;
import com.hc.scm.pp.dao.mapper.PpWorkshopStyleMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:01
 * @version 1.0.0
 */
@Repository("ppWorkshopStyleDao")
class PpWorkshopStyleDaoImpl extends BaseCrudDaoImpl implements PpWorkshopStyleDao {
    @Resource
    private PpWorkshopStyleMapper ppWorkshopStyleMapper;

    @Override
    public BaseCrudMapper init() {
        return ppWorkshopStyleMapper;
    }
}