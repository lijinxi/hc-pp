package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlProcessReportDtl;
import com.hc.scm.pp.service.BlProcessReportDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhao.zj
 * @date:  2015-04-28 16:38:13
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_process_report_dtl")
public class BlProcessReportDtlController extends BaseCrudController<BlProcessReportDtl> {
    @Resource
    private BlProcessReportDtlService blProcessReportDtlService;

    @Override
    public BaseCrudService init() {
        return blProcessReportDtlService;
    }
}