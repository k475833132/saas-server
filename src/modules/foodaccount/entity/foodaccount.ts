import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 伙食的账目
 */
@Entity('food_account')
export class FoodAccountEntity extends BaseEntity {
  @Column({ comment: '大米' })
  foodRice: number;
  @Column({ comment: '面粉' })
  foodFlour: number;
  @Column({ comment: '食用油' })
  foodOil: number;
  @Column({ comment: '干货/调味品' })
  condiment: number;
  @Column({ comment: '牛奶' })
  milk: number;
  @Column({ comment: '肉类' })
  meat: number;
  @Column({ comment: '鱼类' })
  fish: number;
  @Column({ comment: '面点类' })
  pastry: number;
  @Column({ comment: '蔬菜' })
  vegetable: number;
  @Column({ comment: '燃气' })
  gas: number;
  @Column({ comment: '水电' })
  electricity: number;
  @Column({ comment: '管理费' })
  managementFee: number;
  @Column({ comment: '其他' })
  other: number;
}
