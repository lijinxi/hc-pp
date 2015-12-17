package com.hc.scm.pp.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pp.dao.dal.PpMoHandDao;
import com.hc.scm.pp.service.PpMoHandService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
@Service("ppMoHandService")
class PpMoHandServiceImpl extends BaseCrudServiceImpl implements PpMoHandService {
    @Resource
    private PpMoHandDao ppMoHandDao;

    @Override
    public BaseCrudDao init() {
        return ppMoHandDao;
    }
}