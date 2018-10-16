import { Action } from '@ngrx/store';

export const OPEN_SETTINGS = '[SETTINGS] OPEN SETTINGS';
export const CLOSE_SETTINGS = '[SETTINGS] CLOSE SETTINGS';

export class OpenSettings implements Action {
  readonly type = OPEN_SETTINGS;
}

export class CloseSettings implements Action {
  readonly type = CLOSE_SETTINGS;
}

export type InterfaceActions =
  | OpenSettings
  | CloseSettings;
