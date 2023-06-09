import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';
@EntityModel('food_test', {
  connectionName: 'test',
})
export class DzhMemberTestEntity extends BaseEntity {
  @Column({ comment: '会员账号' })
  username: string;

  @Column({ comment: '会员密码', default: 888888 })
  password: string;

  @Column({ comment: '会员昵称', nullable: true })
  nickname: string;

  @Column({ comment: '会员等级', default: 1 })
  role_id: number;

  @Column({ comment: '备注', type: 'text', nullable: true })
  remark: string;

  @Column({ comment: '状态 0:禁用 1:正常', default: 1, type: 'tinyint' })
  status: number;
}
