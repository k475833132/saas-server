/**
 * @file manage.ts
 * @author kangjianxuan
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { OutEntity } from '../../entity/out';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: OutEntity,
})
export class OutController extends BaseController {}
