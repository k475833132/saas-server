import { CoolController, BaseController } from '@cool-midway/core';
import { DisinfectRecordsEntity } from '../../entity/record';

/**
 * 清杀清洗模块-记录
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DisinfectRecordsEntity,
})
export class DisinfectRecordsController extends BaseController {}
