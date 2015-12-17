package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.BlMoTicketDao;
import com.hc.scm.pp.service.BlMoTicketService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
@Service("blMoTicketService")
class BlMoTicketServiceImpl extends BaseCrudServiceImpl implements BlMoTicketService {
    @Resource
    private BlMoTicketDao blMoTicketDao;

    @Override
    public BaseCrudDao init() {
        return blMoTicketDao;
    }
}