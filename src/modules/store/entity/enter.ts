/**
 * @desc 入库单
 * @file enter.ts
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('store_enter')
export class EnterEntity extends BaseEntity {
    @Index()
    @Column({ comment: '入库时间'})
    enterTime: Date;

    @Column({ comment: '采购人'})
    buyer: string;

    @Column({ comment: '保管时间'})
    purchaseTime: Date;

    @Column({ comment: '货物名称'})
    goodsName: string;

    @Column({ comment: '货物品类'})
    goodsType: number;

    @Column({ comment: '数量'})
    count: number;

    @Column({ comment: '单位'})
    unit: string;

    @Column({ comment: '供应商'})
    supplier: string;

    @Column({ comment: '金额'})
    price: number;

    @Column({ comment: '附件'})
    attachment: string;

}
