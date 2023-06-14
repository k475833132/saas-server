import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 菜品管理
 */
@Entity('comprehensive_data')
export class ComprehensiveDataEntity extends BaseEntity {
  @Index()
  @Column({ comment: '单位名称', length: 50, default: '莘莘食堂' })
  companyName: string;

  @Column({ comment: '一人市购均量（g）', default: 100 })
  average: number;

  @Column({ comment: '日期', default: '2023-06-15 00:33:48.705892' })
  date: string;

  @Column({ comment: '周次', default: '1' })
  week: string;

  @Column({ comment: '配餐人数', default: 100 })
  cateringNumber: number;

  @Column({ comment: '营养配餐师', default: '廖乾坤' })
  dietitian: string;

  @Column({ comment: '归属租户', default: 1 })
  tenantId: number;
}
