import {AccountEffects} from './account.effects';
import { FeedEffects } from './feed.effects';
import { SessionsEffects } from './sessions.effects';

export const effects: any[] = [AccountEffects, FeedEffects, SessionsEffects];

export * from './account.effects';
export * from './feed.effects';
export * from './sessions.effects';
