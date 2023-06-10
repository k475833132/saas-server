import { CoolController, BaseController } from '@cool-midway/core';
import { SampleEntity } from '../../entity/sample';

/**
 * 清杀清洗模块-记录
 */
@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: SampleEntity,
})
export class SampleController extends BaseController {}
