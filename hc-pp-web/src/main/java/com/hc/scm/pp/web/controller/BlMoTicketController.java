package com.hc.scm.pp.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pp.dao.entity.BlMoTicket;
import com.hc.scm.pp.service.BlMoTicketService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:14:32
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_mo_ticket")
public class BlMoTicketController extends BaseCrudController<BlMoTicket> {
    @Resource
    private BlMoTicketService blMoTicketService;

    @Override
    public BaseCrudService init() {
        return blMoTicketService;
    }
}