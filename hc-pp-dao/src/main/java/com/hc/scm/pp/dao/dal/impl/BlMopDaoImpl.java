package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlMopDao;
import com.hc.scm.pp.dao.mapper.BlMopMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:15
 * @version 1.0.0
 */
@Service("blMopDao")
class BlMopDaoImpl extends BaseCrudDaoImpl implements BlMopDao {
    @Resource
    private BlMopMapper blMopMapper;

    @Override
    public BaseCrudMapper init() {
        return blMopMapper;
    }
}