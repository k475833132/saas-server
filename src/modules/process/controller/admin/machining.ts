/**
 * @desc 加工流程
 * @file machining.ts
 * @author kangjianxuan
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { MachiningEntity } from '../../entity/machining';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: MachiningEntity,
})
export class MachiningController extends BaseController {
    
}
