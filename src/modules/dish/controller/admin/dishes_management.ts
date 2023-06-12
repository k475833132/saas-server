import { CoolController, BaseController } from '@cool-midway/core';
import { DishesManagementEntity } from '../../entity/dishes_management';

/**
 * 菜品管理
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DishesManagementEntity,
})
export class DishesManagementController extends BaseController {}
