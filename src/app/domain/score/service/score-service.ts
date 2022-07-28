import { Observable } from 'rxjs';
import { BaseCrudService } from '../../../shared/shared-service/base-crud-service';
import { ScoreUpdateDto } from '../model/dto/score-update-dto';
import { Score } from '../model/score';
import { ScoreDto } from '../model/dto/score-dto';

export interface ScoreService extends BaseCrudService<Score> {

  updateScore(studentId: number): Observable<ScoreUpdateDto>;

  findOne(id: number, detailAlt?: string): Observable<ScoreDto | null>

}
