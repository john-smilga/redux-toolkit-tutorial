import { createContext } from 'react';
export const ReactReduxContext = /*#__PURE__*/createContext(null);

if (process.env.NODE_ENV !== 'production') {
  ReactReduxContext.displayName = 'ReactRedux';
}

export default ReactReduxContext;