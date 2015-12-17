package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlPickingOrderDtl;
import com.hc.scm.pp.service.BlPickingOrderDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_picking_order_dtl")
public class BlPickingOrderDtlController extends BaseCrudController<BlPickingOrderDtl> {
    @Resource
    private BlPickingOrderDtlService blPickingOrderDtlService;

    @Override
    public BaseCrudService init() {
        return blPickingOrderDtlService;
    }
}