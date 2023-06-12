/**
 * @desc 出库单
 * @file out.ts
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('store_out')
export class OutEntity extends BaseEntity {
    @Index()
    @Column({ comment: '出库时间'})
    outTime: Date;

    @Column({ comment: '领料人'})
    material: string;

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

    @Column({ comment: '状态'})
    status: string;

    @Column({ comment: '附件'})
    attachment: string;

}
