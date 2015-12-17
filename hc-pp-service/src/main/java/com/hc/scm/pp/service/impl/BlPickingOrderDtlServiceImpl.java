package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.BlPickingOrderDtlDao;
import com.hc.scm.pp.service.BlPickingOrderDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
@Service("blPickingOrderDtlService")
class BlPickingOrderDtlServiceImpl extends BaseCrudServiceImpl implements BlPickingOrderDtlService {
    @Resource
    private BlPickingOrderDtlDao blPickingOrderDtlDao;

    @Override
    public BaseCrudDao init() {
        return blPickingOrderDtlDao;
    }
}