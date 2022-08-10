# Installation Guide
This is a GraphQL + Node + MongoDB (locally hosted) + Typescript backend. Please follow the instructions below to install!

# For MacOS:
XCode Command Line Tools.

```
xcode-select --install
```

# Database Installation 
[Alternate Instructions for Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

To install homebrew (if not already installed)
Run the following commands in the terminal 
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

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
![Screen Shot 2022-08-10 at 2 02 08 pm](https://user-images.githubusercontent.com/49749803/183810255-14e82047-d6f1-4044-81e4-3ccbc2cc8e1c.png)


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
Ensure you're using node v18.7.0
```
node --version
```
Otherwise, install node v 18.7.0
```
brew install n
sudo n 18.7.0
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

The GraphQL backend should now be available via the ApolloGraphQL GUI @ http://localhost:4000/graphql. Alternatively you can run the following command in your terminal to run some tests which are written under /src/__tests__
```
yarn test
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
- [ ] Mutations other than create
- [ ] Other access patterns to consider
- [ ] Client wants to know which shows are on sale
- [ ] Client wants to know which shows are about to go on sale
- [ ] Consider pagination 
- [ ] It probably doesn't make sense to ask the client to pass the userID via the query string. A call to the backend to authorise the client is probably a better way to do this.
- [ ] Demand-oriented schema design
- [ ] Caching for better performance?
- [ ] Maybe we should just pass the platform link and the backend can handle the business logic of creating the embedded audio play experience
- [ ] Metadata object storing link metadata like dateCreated, lastModified etc?
- [ ] Sorted by date can default to either ascending/descending depedning on client preference
