package com.hc.scm.pp.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pp.dao.dal.BlPickingOrderDao;
import com.hc.scm.pp.dao.mapper.BlPickingOrderMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
@Repository("blPickingOrderDao")
class BlPickingOrderDaoImpl extends BaseCrudDaoImpl implements BlPickingOrderDao {
    @Resource
    private BlPickingOrderMapper blPickingOrderMapper;

    @Override
    public BaseCrudMapper init() {
        return blPickingOrderMapper;
    }
}