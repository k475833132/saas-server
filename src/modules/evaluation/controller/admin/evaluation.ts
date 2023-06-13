/**
 * 客户评价
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { EvaluationEntity } from '../../entity/evaluation';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: EvaluationEntity,
})
export class EvaluationController extends BaseController {

}
