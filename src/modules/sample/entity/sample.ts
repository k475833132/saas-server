import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * @desc 食品留样
 * @file sample.ts
 * @author kangjianxuan
 */
@Entity('sample')
export class SampleEntity extends BaseEntity {
    @Index()
    @Column({ comment: '归属公司', nullable: true})
    company: string;

    @Column({ comment: '留样菜品名称'})
    sampleName: string;

    @Column({ comment: '留样菜品克数'})
    sampleWeight: string;

    @Column({ comment: '留样时间'})
    sampleDate: string;

    @Column({ comment: '负责人' })
    principal: string;

    @Column({ comment: '监督人' })
    supervisor: string;

  // TODO
  // 归属租户
  // 需要看一下是否需要关联租户表
}
