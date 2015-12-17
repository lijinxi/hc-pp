package com.hc.scm.pp.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.pp.dao.entity.VBlMoBox;
import com.hc.scm.pp.service.VBlMoBoxService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-18 09:43:18
 * @version 1.0.0
 */
@Controller
@RequestMapping("/v_bl_mo_box")
public class VBlMoBoxController extends BaseCrudController<VBlMoBox> {
    @Resource
    private VBlMoBoxService vBlMoBoxService;

    @Override
    public BaseCrudService init() {
        return vBlMoBoxService;
    }
}