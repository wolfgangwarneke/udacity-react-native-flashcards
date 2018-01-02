# _Mobile Flashcards_

#### _A mobile flashcard study app for Udacity's React Nanodegree, 1.2.2018_

#### By _**Wolfgang Warneke**_

## About my Mobile Flashcards project

Are you tired of getting paper cuts studying for your Spanish exam? Do you want to memorize the director of every single Arnold Schwarzeneggar movie? Or maybe you're just trying to learn some good ol' React Native... Well with this Udacity React Nanodegree project you can absolutely study all of these things and more with your own DECKS and CARDS, in the classic flashcard format we've all grown to love. Just broadcast this app to your smartphone locally with Expo and you're good to go.

## Getting Started

If you would like to check out this project for grading purposes or otherwise...
* Clone project
* Run `npm install start` on the command line to install dependencies and boot Expo
* Scan that lovely QR code and you'll be studying in a *flash*

### Notes to Udacity Reviewer

##### Device Testing #####
This APP was testing in Expo on a physical iPhone 6 Plus and a physical Samsung Galaxy S5. Only portrait mode was tested for these devices and at this point this app is intended to function as portrait only.

##### How to test the notifications #####
I'm sure you've had to tweak many similar setups, so you will know what to do, but to be extra sure: if you'd like to setup notifications, go into `/utils/notifications.js` and alter the relevant constants.
Also, there is a a button on the `Settings` component which clears out the local notification, which may be useful for you.

##### *A semantic note* #####
My quiz view *technically* starts after the quiz begins. The view with the instructions and button to start the quiz is a *quiz loading* or `PreQuiz` view rather than the quiz view itself. The instructions were deemed necessary by test users who could not easily recognize what the app was for or how to use it and thusly added for clarity.

##### About that Meta Data... #####
Meta data for production is NOT included in this app, because there was nothing specifying wether there should be or not. At this point, this app exists in a state of prototypal development!


### Prerequisites

```
- NPM
```
If NPM is not installed, please check out [this page](https://www.npmjs.com/get-npm) and follow as advised.

```
- EXPO
```
You need Expo in your life. [Seriously.](https://expo.io/)

### Usage

As a user you can:
* Receive reminder notifications at 8pm!
* Create a new deck
* Create more decks
* Delete all of the decks at once
* Add questions/answer pairs to the decks as *cards*
* Take a quiz of all the questions in a deck in randomized order
* Receive feedback while taking the quiz to know how many questions are left
* Receive feedback at end of quiz to the amount of correct questions and percentage.

### Features

* Nice, blue colors.
* Decent UX (but it could be a lot better)
* Local storage!

## Built With

* [UdaciFitness](https://github.com/udacity/reactnd-UdaciFitness-complete/) - Notification functions from the UdaciFitness example project by [Tyler McGinniss](https://github.com/tylermcginnis)
* [React](https://github.com/facebook/react) - JavaScript UI framework
* [React Native](https://facebook.github.io/react-native/) - Cross platform mobile apps with React!
* [Create React Native App](https://github.com/react-community/create-react-native-app) - Tool to bootstrap simple React Native boilerplate apps
* [React Navigation](https://reactnavigation.org/) - Routing tool for React Native mobile apps

## License

MIT License

Copyright (c) [2017] [Wolfgang Warneke]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments
Thank you...
* [Udacity](https://www.udacity.com/)
* [Tyler McGinniss](https://github.com/tylermcginnis)
* [React Training](https://www.reacttraining.com/)
* [Expo](https://expo.io/)
