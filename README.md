<h1 align="center">
  <br>
  <a href="https://tipe.io?ref=github-starter"><img src="https://cdn.tipe.io/tipe/tgr.png?dpr=2&w=800" width="800" alt="Tipe + GraphQL + React"></a>
  <br>
  Tipe + GraphQL + React
  <br>
</h1>


> :tada: Starter repo for [React](https://reactjs.org/) and [Next](https://zeit.co/next), together with [GraphQL](http://graphql.org/) and [Tipe](https://tipe.io?ref=github-starter) :100:

## What is Tipe
[Tipe](https://tipe.io), pronounced *type*, is a content backend for all your apps. If you have any non-user generated content in your apps, you should use Tipe to manage it. You and content creators can use our web app to create and publish content, then consume that same content with our **REST** and **GraphQL** API's. 

## What is this repo
This repo is a solid starting point for anyone looking to build a Universal, SPA, or Static site with React and Tipe. The repo consists of a simple blog application that consumes content from Tipe via GraphQL.

## Tech in this repo
* [Next](https://zeit.co/next/) and [React](https://reactjs.org/)
* [GraphQL](http://graphql.org/) and [Apollo](https://www.apollographql.com/client)
* [Bulma](https://bulma.io/)


## Things you'll need
* Node *(version is whatever Next needs)*
* An account on [Tipe](https://tipe.io?ref=github-starter)
	* **Tipe is free right now!**

## Getting started
* Clone this repo
* Install dependences
	* `yarn` or `npm install`
* Create a `.env` file on the **root** of this repo. Copy over the contents from `.env.sample`.
* Replace the env values with your API Key and Org ID from the Tipe dashboard.
* Run `yarn dev` or `npm run dev`'
	* this will start Next dev Universal mode

## Things to notice
Apollo will fetch the content from your `tutorial` folder on your Tipe account. Because Next is running in Universal mode, the content is rendered with the App and then cached and transferred to the client side.

Most of the content you see on the app is from Tipe. Take a look at the `/apollo/query/` folder. Notice the queries and how they relate to your content on the Tipe dashboard in the `tutorial` folder. There's no reason why all the content on this starter app couldn't be stored in Tipe. It's non-user generated, and as a developer, you should never hard code content.

## Contributing
* Fork and cut a PR, we'll check it out :sunglasses:

## Related
* [Tipe + GraphQL + Vue starter](https://github.com/tipeio/tipe-vue-starter)

## Tipe Community
* [Twitter @TipeIO](https://twitter.com/tipeio)
* [Facebook](https://facebook.com/TipeCMS)
* [Slack](https://join.slack.com/t/tipe-community/shared_invite/enQtMzE0NTAwMTMwNzM5LTk0ZWIyYWQ0YWY3ZGEwYWE2ZmVkNmRjMTMzMDU5YWI5ZjdkODcxNzNjMzU2NTU1NmM2M2MyN2QyYWJhNzc5NjE)
* [Github](https://github.com/tipeio)
* [Linkedin](https://www.linkedin.com/company/tipeio/)
* [awesome-tipe](https://github.com/tipeio/awesome-tipe)

## License
MIT
