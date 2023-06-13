/**
 * @desc 客户评价
 * @file evaluation.ts
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('evaluation')
export class EvaluationEntity extends BaseEntity {
    @Index()
    @Column({ comment: '归属公司', nullable: true})
    company: string;

    @Column({ comment: '评价内容'})
    content: string;

    @Column({ comment: '评价类型'})
    type: number;
}
