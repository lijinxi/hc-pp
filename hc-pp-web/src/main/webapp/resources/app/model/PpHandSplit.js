/**
 * Description: 拆分手()(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     zhu.yh
 * @date:  2015-05-14 10:23:08
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.PpHandSplit', {
    extend: 'Ext.data.Model',
    alias: 'model.pphandsplit',
     fields: [
         {name: 'hand0', text: '第0手', type: 'int'},
         ]
  });