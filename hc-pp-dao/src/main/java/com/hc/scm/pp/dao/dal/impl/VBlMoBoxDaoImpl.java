package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.VBlMoBoxDao;
import com.hc.scm.pp.dao.mapper.VBlMoBoxMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-18 09:43:18
 * @version 1.0.0
 */
@Repository("vBlMoBoxDao")
class VBlMoBoxDaoImpl extends BaseCrudDaoImpl implements VBlMoBoxDao {
    @Resource
    private VBlMoBoxMapper vBlMoBoxMapper;

    @Override
    public BaseCrudMapper init() {
        return vBlMoBoxMapper;
    }
}