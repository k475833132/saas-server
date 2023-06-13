/**
 * 清杀清洗模块-记录
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { InspectionEntity } from '../../entity/inspection';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: InspectionEntity,
})
export class SampleController extends BaseController {}
