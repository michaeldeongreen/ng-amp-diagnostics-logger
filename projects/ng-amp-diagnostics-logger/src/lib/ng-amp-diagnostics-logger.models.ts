/**
 * NgAmpDiagnosticsLoggerConfiguration inteface is used to configure the NgAmpDiagnosticsLoggerService service
 * appName can be any string and is mainly used to send data to the console or to Application Insights when there is a Azure Media Player exception
 * instrumentationKey can be any valid Application Insights Instrumentation Key
 * player is a Player object from azuremediaplayer.d.ts
 */

/// <reference path="./azuremediaplayer.d.ts" ./>

export interface NgAmpDiagnosticsLoggerConfiguration {
    appName: string;
    instrumentationKey: string;
    player: amp.Player;
  }