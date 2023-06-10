import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * @desc 食品留样
 * @file inspection.ts
 * @author kangjianxuan
 */
@Entity('inspection')
export class InspectionEntity extends BaseEntity {
    @Index()
    @Column({ comment: '员工姓名'})
    employeeName: string;

    @Column({ comment: '晨检'})
    morningTemp: string;

    @Column({ comment: '午检'})
    afternoonTemp: string;

    @Column({ comment: '监督人' })
    supervisor: string;
}
