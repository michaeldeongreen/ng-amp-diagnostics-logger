## About ng-amp-diagnostics-logger

ng-amp-diagnostics-logger is a package that sends Azure Media Player telemetry information to Azure Application Insights in a Angular application.  ng-amp-diagnostics-logger is a TypeScript conversion of the [amp-diagnosticsLogger.js](https://github.com/Azure-Samples/media-services-javascript-azure-media-player-diagnostic-logger-plugin/blob/master/amp-diagnosticsLogger.js) JavaScript library.


## npm package

You can find the official npm package [here](https://www.npmjs.com/package/ng-amp-diagnostics-logger)

## Install

```bash
npm i ng-amp-diagnostics-logger --save-dev
```

## Sample Code
```html 
  <!--HEAD tag of index.html-->
  <link href="//amp.azure.net/libs/amp/latest/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
  <script src="//amp.azure.net/libs/amp/latest/azuremediaplayer.min.js"></script>   
```

```typescript
/**
 * app.component.ts
*/

//import
import { NgAmpDiagnosticsLoggerService, NgAmpDiagnosticsLoggerConfiguration } from 'ng-amp-diagnostics-logger'

// constructor
 constructor(private ngAmpDiagnosticsLoggerService: NgAmpDiagnosticsLoggerService) { }

 // ngAfterViewInit
const ngAmpDiagnosticsLoggerConfiguration: NgAmpDiagnosticsLoggerConfiguration =  {
    appName: 'some-component',
    player: this.player,
    instrumentationKey: 'APPLICATION INSIGHTS INSTRUMENTATION KEY HERE'};
    this.ngAmpDiagnosticsLoggerService.initialize(ngAmpDiagnosticsLoggerConfiguration); 
    }

// when media is played in the component
// some unqiue string will be stored in Application Insights User Id field
this.ngAmpDiagnosticsLoggerService.log('SOME UNIQUE STRING');    
```

Full sample and documentation can be found [here](https://github.com/michaeldeongreen/ng-amp-diagnostics-logger/tree/master/projects/ng-amp-diagnostics-logger/samples/angular-amp-appinsights-demo)

## NgAmpDiagnosticsLoggerService Dependencies:

* [applicationinsights-js](https://www.npmjs.com/package/applicationinsights-js)
* [azuremediaplayer.d.ts](https://github.com/Azure-Samples/media-services-javascript-azure-media-subclipper-plugin/blob/master/AMVE/azuremediaplayer.d.ts)
* [azuremediaplayer.min.js](https://amp.azure.net/libs/amp/latest/azuremediaplayer.min.js)

## Components

* ng-amp-diagnostics-logger comes with it's own copy of [azuremediaplayer.d.ts](https://github.com/Azure-Samples/media-services-javascript-azure-media-subclipper-plugin/blob/master/AMVE/azuremediaplayer.d.ts).

**NgAmpDiagnosticsLoggerConfiguration** - This interface is used to initialize the *NgAmpDiagnosticsLoggerService* Service when a Angular Component is ready to use the service.  The interface has 3 properties:

* appName - The name of the application that is using the *NgAmpDiagnosticsLoggerService* service.  This can be set to any value.
* instrumentationKey - The Application Insights Instrumentation Key used by [applicationinsights-js](https://www.npmjs.com/package/applicationinsights-js)
* player - The *azuremediaplayer.d.ts* player object


**NgAmpDiagnosticsLoggerService**  - This service is a custom TypeScript service and is a conversion of the [amp-diagnosticsLogger.js](https://github.com/Azure-Samples/media-services-javascript-azure-media-player-diagnostic-logger-plugin/blob/master/amp-diagnosticsLogger.js) JavaScript library to TypeScript as there wasn't any TypeScript libraries to use at this time.


The service has 2 public methods:
* **initialize Method** - This method accepts a *NgAmpDiagnosticsLoggerConfiguration* object and initializes the *NgAmpDiagnosticsLoggerService* service by setting important private variables.  This method also sets the *callback* variable, which is used to log telemetry data to Application Insights.
* **log Method** - This method accepts a **string** to serve as the value for the Application Insights *User Id* field.  At the time this documentation was written, we are using the *ProjectId* field from the *Project* Table. This method evaluates the *_isInitalized* and *_isConfigured* private variables to determine if plumbing to wireup the *Azure Media Player* events to send telemetry data to Application Insights.

If *_isInitialized* is false, the service will log a warning to the JavaScript console.  If *_isConfigured* is false,  the method will:
* Execute the code to add a [TelemetryInitializer](https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md) to the *applicationinsights-js* node package AppInsights object context.  The TelemetryInializer is used to set the Application Insights *User Id* field via the *['ai.user.id']* tag.
* Execute the code to wireup the *Azure Media Player* events to send telemetry data to Application Insights.  At the time this documentation was written, all *Azure Media Player* events are being logged to Application insights.

## Possible Improvements
* **Mocking** - In the future, it would be beneficial inject the *amp* and *AppInsights* object into the *NgAmpDiagnosticsLoggerService* service.  The *amp* object is just a namespace, so I was not able to figure out how to inject this object.  I was able to inject the *AppInsights* object into the constructor but I observed very odd and inconsistent behavior when not just using this object directly.  Injecting these objects into the constructor will allow for the service to be tested via mocking.
* **Custom Callback** - In the future, it may be beneficial to make the *callback* variable a property in the *NgAmpDiagnosticsLoggerService* interface to allow for custom code for logging.
* **Configurable Console Logging** - In the future, it may be benefical to add a new property to the *AmpDiagnosticsLoggerConfiguration* interface that can be used to turn on/off console logging in the *NgAmpDiagnosticsLoggerService* Service.  
* **Configure Events** - In the future, it may be beneficial to make configurable which Azure Media Player Events are sent to Application Insights.

## External Resources
[How to send Azure Media Player Telemetry Information to Azure Application Insights in a Angular 7 Application](https://blog.michaeldeongreen.com/post/how-to-send-azure-media-player-telemetry-information-to-azure-application-insights-in-a-angular-7-application)


## Notes

* ng-ampDiagnosticsLogger - Main Angular project and how you make changes to ng-diagnostics-logger.  You would open up this project and build *ng-diagnostics-logger* and "paths" section of tsconfig.json allows the application to automatically see any changes

* ng-ampDiagnosticsLogger/projects/ng-diagnostics-logger - Loction of the npm source files.  You would make changes in this project, test the changes using the main *ng-diagnostics-logger* Angular application. 

* ng-ampDiagnosticsLogger/dist/lib//ng-diagnostics-logger - This is the directory where you would run *npm publish*

* Remember to update all README.md files

* After changes have been made and tested, make sure to update *projects/ng-diagnostics-logger* package.json version.  Once you have done this run the following:

```bash
 ng build ng-ampDiagnosticsLogger
```

Navigate to: *ng-ampDiagnosticsLogger/dist/lib//ng-diagnostics-logger* and run:
```bash
npm publish
```

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](https://github.com/michaeldeongreen/ng-amp-diagnostics-logger/blob/master/LICENSE.txt) License.