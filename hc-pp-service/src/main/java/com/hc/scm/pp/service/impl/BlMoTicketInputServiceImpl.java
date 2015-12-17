package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.BlMoTicketInputDao;
import com.hc.scm.pp.service.BlMoTicketInputService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
@Service("blMoTicketInputService")
class BlMoTicketInputServiceImpl extends BaseCrudServiceImpl implements BlMoTicketInputService {
    @Resource
    private BlMoTicketInputDao blMoTicketInputDao;

    @Override
    public BaseCrudDao init() {
        return blMoTicketInputDao;
    }
}