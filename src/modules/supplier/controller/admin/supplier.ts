import { CoolController, BaseController } from '@cool-midway/core';
import { SupplierEntity } from '../../entity/supplier';

/**
 * 清杀清洗模块-记录
 */
@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: SupplierEntity,
})
export class SupplierController extends BaseController {}
