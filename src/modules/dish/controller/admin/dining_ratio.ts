import { CoolController, BaseController } from '@cool-midway/core';
import { DiningRatioEntity } from '../../entity/dining_ratio';

/**
 * 分餐比例
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DiningRatioEntity,
})
export class DiningRatioController extends BaseController {}
