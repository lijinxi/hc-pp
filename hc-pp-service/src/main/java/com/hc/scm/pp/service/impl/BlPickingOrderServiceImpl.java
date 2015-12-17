package com.hc.scm.pp.service.impl;

import java.util.Date;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.pp.dao.dal.BlPickingOrderDao;
import com.hc.scm.pp.service.BlPickingOrderService;
import com.hc.scm.pp.dao.entity.BlPickingOrder;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yangjun
 * @date:  2015-04-24 14:10:57
 * @version 1.0.0
 */
@Service("blPickingOrderService")
class BlPickingOrderServiceImpl extends BaseCrudServiceImpl implements BlPickingOrderService {
    @Resource
    private BlPickingOrderDao blPickingOrderDao;

    @Override
    public BaseCrudDao init() {
        return blPickingOrderDao;
    }
    
    @Override
   	public <ModelType>  void audit(List<ModelType> auditModelList ,SystemUser systemUser){
       	
       	if(auditModelList != null && auditModelList.size() > 0){
       		for(Object obj :auditModelList){
   				CommonUtil.setFieldValue(obj, "billStatus", BlPickingOrder.class, "20");
       			CommonUtil.setFieldValue(obj, "auditor", BlPickingOrder.class, systemUser.getUserName());
       			CommonUtil.setFieldValue(obj, "auditTime", BlPickingOrder.class, new Date());
       			blPickingOrderDao.modifyById(obj);
       		}
       	}
   	}
}