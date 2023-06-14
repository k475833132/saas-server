import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 营养分析
 */
@Entity('nutrition_day_analysis')
export class NutritionDayAnalysisEntity extends BaseEntity {
  @Index()
  @Column({ comment: '日期：星期x', default: '' })
  weekX: string;

  @Column({ comment: '类型标准', default: '' })
  typeStandard: string;

  @Column({ comment: '热量（kcal）', default: 0 })
  heat: number;

  @Column({ comment: '蛋白质（g）', default: 0 })
  protein: number;

  @Column({ comment: '钙（mg）', default: 0 })
  calcium: number;

  @Column({ comment: '评价', default: '' })
  evaluate: string;
}
