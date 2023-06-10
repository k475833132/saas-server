import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 清杀清洗记录
 */
@Entity('tenant_manage')
export class TenantManageEntity extends BaseEntity {
  @Index()
  @Column({ comment: '租户名称', length: 50, default: '' })
  tenantName: string;

  @Column({ comment: '地址', length: 50, default: '' })
  address: string;

  @Column({ comment: '负责人', default: '' })
  principal: string;

  @Column({ comment: '联系方式', default: '' })
  contact: string;

  @Column({ comment: '启用/禁用', default: false })
  enable: boolean;
}
