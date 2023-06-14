/**
 * @desc 食材溯源
 * @file traceability.ts
 * @author kangjianxuan
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { TraceabilityEntity } from '../../entity//traceability';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: TraceabilityEntity,
})
export class TraceabilityController extends BaseController {
    
}
