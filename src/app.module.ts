import {EffectModule, Reducer} from "@sigi/core";

export interface AppState {
    count: number;
}

export class AppModule extends EffectModule<AppState> {
    defaultState = {
        count: 1
    }

    @Reducer()
    addCount(state: AppState, payload: undefined) {
        state.count += 1;
        return state;
    }
}
