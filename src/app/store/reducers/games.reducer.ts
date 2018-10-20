import { Selector } from '@ngrx/store';
import { IGamesState } from '../models/IGamesState';
import { IGame } from '../../models/IGame';

const initialState: IGamesState = {
  entities: {
    1: {
      id: 1,
      name: 'Fortnite',
      avatar: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/42576642_2171186926291953_6316140491310104576_n.jpg?_nc_cat=1&_nc_ht=scontent.ftlv5-1.fna&oh=a7dcf9bf53b38f3f916c3344491cd2b5&oe=5C5838A6',
      image: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/42631856_2171185786292067_5590439014269190144_o.jpg?_nc_cat=1&_nc_ht=scontent.ftlv5-1.fna&oh=a1a6a4287640a13159f7895f24edb80e&oe=5C3FAECD',
      description: `<strong>Battle Royale:</strong><br/>
      Fortnite includes Battle Royale, the completely free 100-player PvP mode. One giant map. A Battle Bus. Last one standing wins.
      <br/>
      <strong>Save the World:</strong><br/>
      <br/>
      The Storm came without warning and 98% of the world’s population vanished.
      You and up to 3 players lead the world’s remaining Heroes in a battle to save the World.`,
      developer: 'Epic Games',
      publisher: 'Epic Games',
      genre: 'Action & Adventure',
      platforms: 'Xbox One, PS4, PC, Android, IOS',
      releaseDate: 'July 21, 2017'
    }
  },
  isLoading: false,
  isLoaded: false
};

export function reducer(state = initialState, action: any): IGamesState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const getGameEntities: Selector<IGamesState, Record<string, IGame>> = (state: IGamesState) => state.entities;
