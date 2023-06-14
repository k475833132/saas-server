/**
 * @desc 货单
 * @file manifest.ts
 * @author kangjianxuan
 */

import { CoolController, BaseController } from '@cool-midway/core';
import { ManifestEntity } from '../../entity/manifest';

@CoolController({
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: ManifestEntity,
})
export class ManifestController extends BaseController {
    
}
