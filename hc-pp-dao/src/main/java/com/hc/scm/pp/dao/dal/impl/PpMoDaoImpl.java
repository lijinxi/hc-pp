package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.PpMoDao;
import com.hc.scm.pp.dao.mapper.PpMoMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
@Service("ppMoDao")
class PpMoDaoImpl extends BaseCrudDaoImpl implements PpMoDao {
    @Resource
    private PpMoMapper PpMoMapper;

    @Override
    public BaseCrudMapper init() {
        return PpMoMapper;
    }
}