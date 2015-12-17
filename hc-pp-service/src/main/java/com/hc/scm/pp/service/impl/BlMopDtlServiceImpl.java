package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.BlMopDtlDao;
import com.hc.scm.pp.service.BlMopDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
@Service("blMopDtlService")
class BlMopDtlServiceImpl extends BaseCrudServiceImpl implements BlMopDtlService {
    @Resource
    private BlMopDtlDao blMopDtlDao;

    @Override
    public BaseCrudDao init() {
        return blMopDtlDao;
    }
}