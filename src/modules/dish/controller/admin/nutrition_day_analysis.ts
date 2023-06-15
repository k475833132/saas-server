import { CoolController, BaseController } from '@cool-midway/core';
import { NutritionDayAnalysisEntity } from '../../entity/nutrition_day_analysis';

/**
 * 当日营养分析
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: NutritionDayAnalysisEntity,
})
export class NutritionDayAnalysisController extends BaseController {}
