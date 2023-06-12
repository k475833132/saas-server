/**
 * @file erter.ts
 * @author kangjianxuan
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { EnterEntity } from '../../entity/enter';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: EnterEntity,
})
export class EnterController extends BaseController {}
