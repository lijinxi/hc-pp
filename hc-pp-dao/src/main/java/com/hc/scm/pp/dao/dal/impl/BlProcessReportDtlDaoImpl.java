package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlProcessReportDtlDao;
import com.hc.scm.pp.dao.mapper.BlProcessReportDtlMapper;
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
@Service("blProcessReportDtlDao")
class BlProcessReportDtlDaoImpl extends BaseCrudDaoImpl implements BlProcessReportDtlDao {
    @Resource
    private BlProcessReportDtlMapper blProcessReportDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return blProcessReportDtlMapper;
    }
}