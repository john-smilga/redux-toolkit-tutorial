/// <reference types="react" />
import type { Action, AnyAction, Store } from 'redux';
import type { Subscription } from '../utils/Subscription';
export interface ReactReduxContextValue<SS = any, A extends Action = AnyAction> {
    store: Store<SS, A>;
    subscription: Subscription;
    getServerState?: () => SS;
}
export declare const ReactReduxContext: import("react").Context<ReactReduxContextValue<any, AnyAction>>;
export declare type ReactReduxContextInstance = typeof ReactReduxContext;
export default ReactReduxContext;
