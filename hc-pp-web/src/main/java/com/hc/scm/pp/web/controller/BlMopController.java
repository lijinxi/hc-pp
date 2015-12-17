package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlMop;
import com.hc.scm.pp.service.BlMopService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:15
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_mop")
public class BlMopController extends BaseCrudController<BlMop> {
    @Resource
    private BlMopService blMopService;

    @Override
    public BaseCrudService init() {
        return blMopService;
    }
}