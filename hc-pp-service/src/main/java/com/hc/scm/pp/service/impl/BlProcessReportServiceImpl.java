package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.BlProcessReportDao;
import com.hc.scm.pp.service.BlProcessReportService;
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
@Service("blProcessReportService")
class BlProcessReportServiceImpl extends BaseCrudServiceImpl implements BlProcessReportService {
    @Resource
    private BlProcessReportDao blProcessReportDao;

    @Override
    public BaseCrudDao init() {
        return blProcessReportDao;
    }
}