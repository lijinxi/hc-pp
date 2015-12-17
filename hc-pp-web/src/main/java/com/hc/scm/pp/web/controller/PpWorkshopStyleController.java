package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.PpWorkshopStyle;
import com.hc.scm.pp.service.PpWorkshopStyleService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-28 09:06:01
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pp_workshop_style")
public class PpWorkshopStyleController extends BaseCrudController<PpWorkshopStyle> {
    @Resource
    private PpWorkshopStyleService ppWorkshopStyleService;

    @Override
    public BaseCrudService init() {
        return ppWorkshopStyleService;
    }
}