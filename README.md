# Installation Guide
For MacOS:

#Prereq technologies
Install xcode command line tools.
```bash
```
xcode-select --install

```
Install homebrew
```
```bash
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

# Database Installation

Install MongoDB 6.0 Community Edition using homebrew (The local database will utilise this)
```
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0
```

Startup MongoDB as a macOS service and confirm that it is running
```
brew services start mongodb-community@6.0
brew services list
```
[Insert screenshot here]

If everything is installed correctly, run the below commands in your terminal to allow this app to access your locally hosted database
```
mongosh --port 27017

```

Using mongosh:
```
use admin
```
```
db.createUser(
  {
    user: "admin",
    pwd: "admin"
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
```

# App Installation
# Ensure that the version of node is v 18.7.0
```
node --version
```
Otherwise, install node v 18.7.0
```
```bash
```
brew install nvm
```

```
nvm install v18.7.0
```

```
nvm use v18.7.0
```

```
This should now return v18.7.0
```
node --version 
```


# Installing the app
```
yarn install
```
```
yarn dev
```


# The Problem
We have three new link types for our users.

1. Classic
	- Titles can be no longer than 144 characters.
	- Some URLs will contain query parameters, some will not.
2. Shows List
	- One show will be sold out.
	- One show is not yet on sale.
	- The rest of the shows are on sale.
3. Music Player
	- Clients will need to link off to each individual platform.
	- Clients will embed audio players from each individual platform.
	
You are required to create a JSON API that our front end clients will interact with.

- The API can be GraphQL or REST.
- The API can be written in your preferred language.
- The client must be able to create a new link of each type.
- The client must be able to find all links matching a particular userId.
- The client must be able to find links matching a particular userId, sorted by dateCreated.


## Your Solution

- Consider bad input data and the end user of your API - we're looking for good error handling and input validation.
- If you are creating a GraphQL API, think about the access patterns the client may use, and think about the acces patterns the client may not use. Try not to [Yak Shave](https://seths.blog/2005/03/dont_shave_that/)
- Consider extensibility, these are 3 of hundreds of potential link types that we will be developing.


## Rules & Tips

- Choose the language and environment of your choice, just include documentation on how to run your code.
- Immutability and functional programming is looked upon favorably.
- You cannot connect to a real world database - document your schema design.
- Mocking third parties is looked upon favorably.
- @todo comments are encouraged. You aren't expected to complete the challenge, but how you design your solution and your ideas for the future are important.

---
# Submission
Set up your own remote git repository and make commits as you would in your day to day work. Submit a link to your repo when you're finished.

@todo
- [ ] Consider how we generate links