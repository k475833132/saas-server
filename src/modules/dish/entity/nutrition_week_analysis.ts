import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 营养分析
 */
@Entity('nutrition_week_analysis')
export class NutritionWeekAnalysisEntity extends BaseEntity {
  @Index()
  @Column({ comment: '类型标准', default: '' })
  typeStandard: string;

  @Column({ comment: '热量（kcal）总量', default: 0 })
  heatSum: number;

  @Column({ comment: '热量（kcal）碳水热', default: 0 })
  carbs: number;

  @Column({ comment: '热量（kcal）脂肪热', default: 0 })
  fatFever: number;

  @Column({ comment: '蛋白质（g）总量', default: 0 })
  proteinSum: number;

  @Column({ comment: '蛋白质（g）动物类/动豆类', default: 0 })
  animalsAndBeans: number;

  @Column({ comment: '钙（mg）', default: 0 })
  calcium: number;

  @Column({ comment: '维 A/维 B1', default: 0 })
  DimensionAAndB1: number;

  @Column({ comment: '维 B2', default: 0 })
  DimensionB2: number;

  @Column({ comment: '维 C', default: 0 })
  DimensionC: number;

  @Column({ comment: '维 E/维PP', default: 0 })
  DimensionEAndPP: number;

  @Column({ comment: '钾', default: 0 })
  potassium: number;

  @Column({ comment: '镁', default: 0 })
  magnesium: number;

  @Column({ comment: '铁/锌', default: 0 })
  ironAndZinc: number;

  @Column({ comment: '磷', default: 0 })
  phosphorus: number;

  @Column({ comment: '硒', default: 0 })
  selenium: number;

  @Column({ comment: '评价', default: '' })
  evaluate: string;
}
