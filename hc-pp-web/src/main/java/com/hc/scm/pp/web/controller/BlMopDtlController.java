package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlMopDtl;
import com.hc.scm.pp.service.BlMopDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhangyk
 * @date:  2015-04-24 14:30:16
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_mop_dtl")
public class BlMopDtlController extends BaseCrudController<BlMopDtl> {
    @Resource
    private BlMopDtlService blMopDtlService;

    @Override
    public BaseCrudService init() {
        return blMopDtlService;
    }
}