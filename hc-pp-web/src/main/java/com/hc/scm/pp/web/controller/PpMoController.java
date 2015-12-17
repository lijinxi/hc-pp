package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.PpMo;
import com.hc.scm.pp.service.PpMoService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-23 14:23:08
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pp_mo")
public class PpMoController extends BaseCrudController<PpMo> {
    @Resource
    private PpMoService ppMoService;

    @Override
    public BaseCrudService init() {
        return ppMoService;
    }
}