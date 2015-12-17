/**
 * Description: ��Ʊ������ϸ��(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-14 11:29:16
 * @version 1.0.0
 */
Ext.define('Hc_pp.model.BlMoTicketHand', {
    extend: 'Ext.data.Model',
    alias: 'model.blmotickethand',
     fields: [
         {name: 'lineId', text: '��id(����)', type: 'bigint'},
         {name: 'divisionNo', text: '��������������ҵ�����', type: 'string'},
         {name: 'billNo', text: '���ݱ��(T+yyyyMMdd+6λ��ˮ��)', type: 'string'},
         {name: 'ticketNo', text: '��Ʊ���(ͬ���ݱ��)', type: 'string'},
         {name: 'handNo', text: '�ֱ��', type: 'string'},
         ],
    idProperty: 'appNo',
    identifier: 'negative'
  });