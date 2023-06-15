import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 分餐比例
 */
@Entity('dining_ratio')
export class DiningRatioEntity extends BaseEntity {
  @Index()
  @Column({ comment: '配餐均龄（岁）', default: 8.5 })
  cateringAverageAge: number;

  @Column({ comment: '均龄组', default: '100%' })
  averageAgeGroup: string;

  @Column({ comment: '归属租户', default: 1 })
  tenantId: number;
}
