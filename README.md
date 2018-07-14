# my-egghead-io

https://egghead.io/lessons/angular-say-hello-world-to-angular-2

2) Create a simple component 

> ng generate component simple-form -inline template -inline style
> ng g c simple-form -it -is

3) Manage Angular2 Elements with Events and Refs

> ng g c simple-form-events -it -is

<input #sfEvents type="text">
<button (click)="onClick(sfEvents.value)" >Click me !</button>


