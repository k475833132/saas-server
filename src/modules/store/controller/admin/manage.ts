/**
 * @file manage.ts
 * @author kangjianxuan
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { ManageEntity } from '../../entity/manage';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: ManageEntity,
})
export class ManageController extends BaseController {}
