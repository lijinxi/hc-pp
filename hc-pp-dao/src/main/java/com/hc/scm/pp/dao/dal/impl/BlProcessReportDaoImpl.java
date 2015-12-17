package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlProcessReportDao;
import com.hc.scm.pp.dao.mapper.BlProcessReportMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
@Service("blProcessReportDao")
class BlProcessReportDaoImpl extends BaseCrudDaoImpl implements BlProcessReportDao {
    @Resource
    private BlProcessReportMapper blProcessReportMapper;

    @Override
    public BaseCrudMapper init() {
        return blProcessReportMapper;
    }
}