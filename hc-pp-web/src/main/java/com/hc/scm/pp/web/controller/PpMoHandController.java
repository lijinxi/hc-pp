package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.PpMoHand;
import com.hc.scm.pp.service.PpMoHandService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-14 09:45:52
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pp_mo_hand")
public class PpMoHandController extends BaseCrudController<PpMoHand> {
    @Resource
    private PpMoHandService ppMoHandService;

    @Override
    public BaseCrudService init() {
        return ppMoHandService;
    }
}