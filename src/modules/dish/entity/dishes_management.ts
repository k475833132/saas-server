import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 菜品管理
 */
@Entity('dishes_management')
export class DishesManagementEntity extends BaseEntity {
  @Index()
  @Column({ comment: '日期：星期x', length: 50, default: '' })
  weekX: string;

  @Column({ comment: '早餐食谱', default: '' })
  breakfastRecipe: string;

  @Column({ comment: '早餐食物', default: '' })
  breakfastFood: string;

  @Column({ comment: '早餐食物重量', default: 20 })
  breakfastUnit: number;

  @Column({ comment: '午餐食谱', default: '' })
  lunchRecipe: string;

  @Column({ comment: '午餐食物', default: '' })
  lunchFood: string;

  @Column({ comment: '午餐食物重量', default: 20 })
  lunchUnit: number;

  @Column({ comment: '归属租户', default: 1 })
  tenantId: number;
}
