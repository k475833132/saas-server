/**
 * @desc 仓库管理
 * @file manage.ts
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('store_manage')
export class ManageEntity extends BaseEntity {
    @Index()
    @Column({ comment: '货物名称'})
    goodsName: string;

    @Column({ comment: '货物品类'})
    goodsType: number;

    @Column({ comment: '现存数量'})
    quantity: number;

    @Column({ comment: '供应商'})
    supplier: string;

    @Column({ comment: '归属租户'})
    account: string;

}
