import { CoolController, BaseController } from '@cool-midway/core';
import { NutritionWeekAnalysisEntity } from '../../entity/nutrition_week_analysis';

/**
 * 一周营养分析
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: NutritionWeekAnalysisEntity,
})
export class NutritionWeekAnalysisController extends BaseController {}
