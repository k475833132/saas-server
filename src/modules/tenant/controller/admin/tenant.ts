import { CoolController, BaseController } from '@cool-midway/core';
import { TenantManageEntity } from '../../entity/tenant';

/**
 * 租户管理模块
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: TenantManageEntity,
})
export class TenantManageController extends BaseController {}
