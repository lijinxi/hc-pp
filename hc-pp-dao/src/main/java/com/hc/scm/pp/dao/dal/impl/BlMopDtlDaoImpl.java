package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlMopDtlDao;
import com.hc.scm.pp.dao.mapper.BlMopDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
@Service("blMopDtlDao")
class BlMopDtlDaoImpl extends BaseCrudDaoImpl implements BlMopDtlDao {
    @Resource
    private BlMopDtlMapper blMopDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return blMopDtlMapper;
    }
}