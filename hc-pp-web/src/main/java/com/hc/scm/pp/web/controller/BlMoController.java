package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlMo;
import com.hc.scm.pp.service.BlMoService;
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
@RequestMapping("/bl_mo")
public class BlMoController extends BaseCrudController<BlMo> {
    @Resource
    private BlMoService blMoService;

    @Override
    public BaseCrudService init() {
        return blMoService;
    }
}