package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.PpMoHandDao;
import com.hc.scm.pp.dao.mapper.PpMoHandMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
@Service("ppMoHandDao")
class PpMoHandDaoImpl extends BaseCrudDaoImpl implements PpMoHandDao {
    @Resource
    private PpMoHandMapper ppMoHandMapper;

    @Override
    public BaseCrudMapper init() {
        return ppMoHandMapper;
    }
}