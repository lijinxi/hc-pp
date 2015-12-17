package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlMoTicketInputDao;
import com.hc.scm.pp.dao.mapper.BlMoTicketInputMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:33
 * @version 1.0.0
 */
@Repository("blMoTicketInputDao")
class BlMoTicketInputDaoImpl extends BaseCrudDaoImpl implements BlMoTicketInputDao {
    @Resource
    private BlMoTicketInputMapper blMoTicketInputMapper;

    @Override
    public BaseCrudMapper init() {
        return blMoTicketInputMapper;
    }
}