# Album Reviews

A website that allows users to review albums and see reviews by other reviews. Also allows the admin to add more albums for users to review. Made with Ember.js

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### User Stories

* The restaurant (or whatever users will review in your app) will have many ratings.
* Ratings may be any metric of your choosing, and could include a comment/explanation if you desire.
* Use a helper to display nicely formatted timestamps, and/or represent ratings visually (ie: display stars, or thumbs up/thumbs down).
* Include at least one computed property.
* Use a service to allow users to create a list of "favorite restaurants" (or whatever thing users review in your specific app).
* There should be an option to add new restaurants/things to review. This can either be an admin-style page, or something available to all users.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
