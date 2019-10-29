import { UiState } from '~/store/ui';
import { DataState } from '~/store/data';

export interface RootState {
  ui: UiState
  catalogue: DataState
}
