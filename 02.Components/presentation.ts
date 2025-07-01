// Components
// The Building Blocks of Our Application

//1. Components Basic Idea
//2. Creating Components
//3. Bootstrapping
//4. Data Bindings & Templates
//5. Licycle Hooks
//6. COmponent Interaction


//Components: Basic Idea
//The Main Building Block

//The Idea Behind Components
// -A component controls part of the screen(the view)
// -Tou define application logic into the component
// -Each component has its own HTML/CSS template

// import { Component } from '@angular.core'


// @Component({
//     selector: 'app=root',
//     standalone: true,
//     template: `<h1>{{title}}<h1>`,
//     styles: [ `h1 {
//       background-color: red;}`  ]
// })

// export class AppComponent { title = 'App Title'; }


//Components as Standalone Units
// -In Angular 18, components are typically standalone,
// meaning they do not necessarily require an 
// NgModule for declaration. This simplifies the architecture and boosts flexibility
// standalone: true
// -Standalone components are promoted by Angular 18 as default approach
//  -Simplifies architecture
//  -Enhances modularity