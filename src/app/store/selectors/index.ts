import { createSelector } from '@ngrx/store';
import { getGameEntities } from './games.selectors';
import { selectRouteParameters } from './router.selectors';

export * from './account.selectors';
export * from './feed.selectors';
export * from './interface.selectors';
export * from './sessions.selectors';
export * from './games.selectors';
export * from './router.selectors';

export const selectCurrentGame = createSelector(
  getGameEntities,
  selectRouteParameters,
  (games, route) => {
    console.log(games);
    console.log(route.id);
    return games[route.id];
  }
);
