/**
 * @desc 货单
 * @file manifest.ts
 * @author kangjianxuan
 */

import { BaseEntity } from '@cool-midway/core';
import { Column, Index, Entity } from 'typeorm';

@Entity('process_manifest')
export class ManifestEntity extends BaseEntity {
    @Index()
    @Column({ comment: '制造时间' })
    productDate: Date;

    @Column({ comment: '食材名称' })
    name: string;

    @Column({ comment: '数量' })
    count: Number;

    @Column({ comment: '单位' })
    unit: string;
}
