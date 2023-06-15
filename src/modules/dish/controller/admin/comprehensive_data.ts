import { CoolController, BaseController } from '@cool-midway/core';
import { ComprehensiveDataEntity } from '../../entity/comprehensive_data';

/**
 * 综合数据
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ComprehensiveDataEntity,
})
export class ComprehensiveDataController extends BaseController {}
