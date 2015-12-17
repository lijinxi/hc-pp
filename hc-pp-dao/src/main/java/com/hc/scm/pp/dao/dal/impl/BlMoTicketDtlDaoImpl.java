package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlMoTicketDtlDao;
import com.hc.scm.pp.dao.mapper.BlMoTicketDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
@Repository("blMoTicketDtlDao")
class BlMoTicketDtlDaoImpl extends BaseCrudDaoImpl implements BlMoTicketDtlDao {
    @Resource
    private BlMoTicketDtlMapper blMoTicketDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return blMoTicketDtlMapper;
    }
}