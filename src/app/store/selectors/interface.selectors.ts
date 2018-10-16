import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import * as fromInterface from '../reducers/interface.reducer';
import { IAppState } from '../models/IAppState';
import { IInterfaceState } from '../models/IInterfaceState';

export const getInterfaceState: MemoizedSelector<IAppState, IInterfaceState> = createFeatureSelector<IAppState, IInterfaceState>('interface');

export const getIsSettingsOpen: MemoizedSelector<IAppState, boolean> = createSelector(
  getInterfaceState,
  fromInterface.getIsSettingsOpen
);

