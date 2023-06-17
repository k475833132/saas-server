/**
 * @desc 加工流程
 * @file machining.ts
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Index, Entity } from 'typeorm';

@Entity('process_machining')
export class MachiningEntity extends BaseEntity {
    @Index()
    @Column({ comment: '归属租户' })
    company: string;

    @Column({ comment: '流程名称', length: 50 })
    processName: string;

    @Column({ comment: '负责人' })
    principal: string;

    @Column({ comment: '监督人' })
    supervisor: string;

    @Column({ comment: '类型' })
    type: string;

    @Column({ comment: '工艺' })
    technology: string;

    @Column({ comment: '外键ID' })
    foreignID: string;

    @Column({ comment: '货品内容' })
    goodsContent: string;

    @Column({ comment: '货物数量' })
    goodsCount: number;

    @Column({ comment: '出品ID', default: 'asdgsjadghiawgyid' })
    productID: string;

    @Column({ comment: '出品时间' })
    productDate: Date;

    @Column({ comment: '出品内容' })
    productContent: string;
    
    @Column({ comment: '出品数量' })
    productCount: string;

    @Column({ comment: '单位' })
    unit: string;
}