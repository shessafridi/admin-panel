import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

class Logger {
  private _isInitialized = false;

  logError(error: Error | any) {
    if (this._isInitialized) Sentry.captureException(error);
  }

  withLogger(component: React.ComponentType) {
    if (this._isInitialized) return Sentry.withProfiler(component);
    return component;
  }

  initialize() {
    if (process.env.REACT_APP_LOG_URL) {
      Sentry.init({
        dsn: process.env.REACT_APP_LOG_URL,
        autoSessionTracking: true,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
      });

      this._isInitialized = true;
    }
  }
}

export default new Logger();
