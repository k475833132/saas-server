/**
 * @file foodaccount.ts
 * @desc 伙食的账目
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('food_account')
export class FoodAccountEntity extends BaseEntity {
  @Index()
  @Column({ comment: '申请时间' })
  applyTime: Date;

  @Column({ comment: '名称' })
  name: String;

  @Column({ comment: '类型' })
  type: number;

  @Column({ comment: '二级类型' })
  subType: number;

  @Column({ comment: '申请人' })
  applyer: string;

  @Column({ comment: '联系方式' })
  contact: number;

  @Column({ comment: '金额' })
  price: number;

  @Column({ comment: '证图' })
  proofPicture: string;

  @Column({ comment: '发票类型' })
  invoiceType: string;

  @Column({ comment: '发票文件' })
  invoiceFile: string;

  @Column({ comment: '发票金额' })
  invoiceAmount: number;

  @Column({ comment: '银行回执单' })
  bankRepId: number;

  @Column({ comment: '银行流水号' })
  bankRepNumber: string;

  @Column({ comment: '备注' })
  remark: string;

  @Column({ comment: '附件' })
  attachment: string;
}
