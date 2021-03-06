package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.PpWorkshopStyleDao;
import com.hc.scm.pp.service.PpWorkshopStyleService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:01
 * @version 1.0.0
 */
@Service("ppWorkshopStyleService")
class PpWorkshopStyleServiceImpl extends BaseCrudServiceImpl implements PpWorkshopStyleService {
    @Resource
    private PpWorkshopStyleDao ppWorkshopStyleDao;

    @Override
    public BaseCrudDao init() {
        return ppWorkshopStyleDao;
    }
}