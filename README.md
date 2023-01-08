# AngularWeatherChallenge
  
## How To Run
Once you run "npm install" you can run "npm run start"

## Used in the application
Angular + Ngrx Store, Eslint, prettier, Local Storage, Tailwind, Material Components, sweetalert2 (pop up notifications), Reactive Forms, Router, shared components

## Could use
Custom Pipes and directives but I only needed the built-in date pipe

## App explanation
Once the app is loaded we navigate to "/current" Route and I request Gps location. You can search by City or by clicking the gps button..

If you click "Go to Forcast" we navigate to "/forecast5" and Call the api only if we don't have data in Local Storage and we call it on a different day. Every visible day is clickable and you can see it's details (reusable component for forecast items). 

Every Api call is called via Ngrx + service, on CatchError I call sweetalert2 to show the Error in a pop up Modal, on Loading I show a shared Spinner component.

## Css
Mostly used Tailwind inline css, global classes, Material global Theme for some components (override default), mixins, colors variables.


