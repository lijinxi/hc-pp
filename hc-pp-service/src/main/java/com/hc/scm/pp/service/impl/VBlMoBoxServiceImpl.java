package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.VBlMoBoxDao;
import com.hc.scm.pp.service.VBlMoBoxService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-18 09:43:18
 * @version 1.0.0
 */
@Service("vBlMoBoxService")
class VBlMoBoxServiceImpl extends BaseCrudServiceImpl implements VBlMoBoxService {
    @Resource
    private VBlMoBoxDao vBlMoBoxDao;

    @Override
    public BaseCrudDao init() {
        return vBlMoBoxDao;
    }
}