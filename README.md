# Recipes "R" Us -  Keep track of your family recipes

This project is single page web application  built with [AngularJS](https://angularjs.org/) on the front-end and [Django](https://www.djangoproject.com/) on the back-end. This app allows you to add or edit or family recipes. It also contains a basic User Authentication, so you can keep your family's recipes separated from someone else's recipes. 


## Project Set-up

To get you started you should clone down the recipe_organizer repository and install the dependencies.

### Cloning the Repository

You can clone this project down from the recipe_organizer repository from github.
```
git clone https://github.com/alexjohnlyman/recipe_organizer.git
```

### Install Dependencies - AngularJS

There are multiple dependencies in this project: tools, angular framework code, etc. 

* I get the tools I depend upon via `npm`, the [node package manager][npm].
* I get the angular code via `bower`, a [client-side code package manager][bower].

Both `npm` and  `bower`  are configured to automatically run upon typing:

```
npm install
```

This also calls `bower install` which will create two new folders in your project:

* `node_modules` - contains the npm packages
* `app/bower_components` - contains the angular framework files

### Run Front-end During Development

You can start the server by typing:
```
npm start
```
You can now browse to the app locally at `http://localhost:8000/app/index.html`.

This project also comes a local development web server. You can start this web server by using `npm start`:

```
sudo npm install
```

Then you can choose to configure your own webserver, such as apache or nginx. Just configure your server to serve the files under the `app/` directory.



### Install Dependencies - Django


Next, you will need to install your virtual environment, virtual environment wrapper and pip. I suggest using the combined installer found on brainsik's github account under [virtualenv-burrito](https://github.com/brainsik/virtualenv-burrito). Once inside of your virtual environment, you can install the dependencies found in the requirements.txt file.
```
(yourvrtenv) $ pip install django
(yourvrtenv) $ pip freeze > requirements.txt
```

## Basic User Authentication
This app contains a basic level of user authentication, based on the built-in Django user authentication module. While the authentication of this app does not allow for password and email verification, it allow for new users to sign-up and then simultaneously logs them in. It allows for users to maintain separation between different user's recipes. 


### Start adding your recipes!
I hope you enjoy my simple app that gives you a way to always have Grandma's Apple Pie recipe on-hand.

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org

