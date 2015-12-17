package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.BlMoDao;
import com.hc.scm.pp.service.BlMoService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
@Service("blMoService")
class BlMoServiceImpl extends BaseCrudServiceImpl implements BlMoService {
    @Resource
    private BlMoDao blMoDao;

    @Override
    public BaseCrudDao init() {
        return blMoDao;
    }
}