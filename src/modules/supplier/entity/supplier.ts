import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * @desc 食品留样
 * @file sample.ts
 * @author kangjianxuan
 */
@Entity('supplier')
export class SupplierEntity extends BaseEntity {
    @Index()
    @Column({ comment: '供应商名称'})
    supplierName: string;

    @Column({ comment: '负责人' })
    principal: string;

    @Column({ comment: '联系电话'})
    phone: number;
  // TODO
  // 归属租户
  // 需要看一下是否需要关联租户表
}
