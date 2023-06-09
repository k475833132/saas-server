import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 清杀清洗记录
 */
@Entity('disinfect_records')
export class DisinfectRecordsEntity extends BaseEntity {
  @Index()
  @Column({ comment: '项目名称', length: 50 })
  projectName: string;

  @Column({ comment: '项目类型', length: 50, default: '消杀/清洗' })
  projectType: string;

  // TODO 应该是Date类型，而不是String
  @Column({ comment: '开始时间' })
  startingTime: string;

  // TODO 应该是Date类型，而不是String
  @Column({ comment: '结束时间', default: '消杀/清洗' })
  endTime: string;

  @Column({ comment: '持续时间' })
  duration: number;

  @Column({ comment: '项目目标' })
  projectObjectives: string;

  @Column({ comment: '负责人' })
  principal: string;

  @Column({ comment: '监督人' })
  supervisor: string;

  @Column({ comment: '证图' })
  proofPicture: string;

  @Column({ comment: '备注' })
  remark: string;

  // TODO
  // 归属租户
  // 需要看一下是否需要关联租户表
}
