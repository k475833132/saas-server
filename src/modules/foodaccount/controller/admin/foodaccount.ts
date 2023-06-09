import { CoolController, BaseController } from '@cool-midway/core';
import { FoodAccountEntity } from '../../entity/foodaccount';
/**
 * 描述
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FoodAccountEntity,
})
export class FoodAccountController extends BaseController {}
