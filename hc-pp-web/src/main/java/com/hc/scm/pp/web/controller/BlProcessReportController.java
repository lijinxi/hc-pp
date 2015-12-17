package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlProcessReport;
import com.hc.scm.pp.service.BlProcessReportService;
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
@RequestMapping("/bl_process_report")
public class BlProcessReportController extends BaseCrudController<BlProcessReport> {
    @Resource
    private BlProcessReportService blProcessReportService;

    @Override
    public BaseCrudService init() {
        return blProcessReportService;
    }
}