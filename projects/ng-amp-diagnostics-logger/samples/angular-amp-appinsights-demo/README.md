## How to Run this Application

* Create an Application Insights Resource in the Azure Portal.  Official documentation can be found [here](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource)
* Install Docker. Official documentation can be found [here](https://docs.docker.com/install/)
* Clone the *ng-amp-diagnostics-logger* Git Repository and navigate to the *samples* directory
* Open up the Angular application in your IDE of choice and find the line below in the *app.compoent.ts* file and replace the words *APPLICATION INSIGHTS INSTRUMENTATION KEY HERE* with the Appliction Insights *Instrumentation Key* from your Application Insights Resource:
```typescript
    const ngAmpDiagnosticsLoggerConfiguration: NgAmpDiagnosticsLoggerConfiguration =  {
      appName: 'play-media-component',
      player: this.player,
      instrumentationKey: 'APPLICATION INSIGHTS INSTRUMENTATION KEY HERE'};
      this.ngAmpDiagnosticsLoggerService.initialize(ngAmpDiagnosticsLoggerConfiguration);
  }
```
* Open a Terminal/Command Prompt and navigate to the directory where you cloned the repository and run the following commands (*Note: Linux users may need to use sudo*):
```bash
# Build docker image and run container
docker build -t angular-amp-appinsights-demo . \ 
&& docker run -p 4200:80 angular-amp-appinsights-demo
```
* Open up a browser and navigate to *http://localhost:4200*

## External Resources

[How to send Azure Media Player Telemetry Information to Azure Application Insights in a Angular 7 Application](https://blog.michaeldeongreen.com/post/how-to-send-azure-media-player-telemetry-information-to-azure-application-insights-in-a-angular-7-application)

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](https://github.com/michaeldeongreen/ng-amp-diagnostics-logger/blob/master/projects/ng-amp-diagnostics-logger/samples/angular-amp-appinsights-demo/LICENSE.txt) License.