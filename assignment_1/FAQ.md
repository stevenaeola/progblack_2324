
# COMP1101 Programming (Black) Summative Assessment 1 FAQs

## General

### Can I use code from elsewhere and how should I reference it?

Using pre-existing code modules on the server side is recommended. As long as it is installed properly with npm so that the dependency is included in your package.json file you don't need to do anything else.

If you re-use, adapt or modify code taken from other sources (e.g. StackOverflow) then put a comment in your code pointing to the URL of the source.

### What about using copyrighted content?

Work legally. Make sure you follow the terms of the license i.e. provide attribution if required. There are some [exceptions to copyright](https://www.gov.uk/guidance/exceptions-to-copyright) but you might want to share your work publicly (after the June exam board) so be careful not to assume everything is for private study. There is plenty of material out there that you are allowed to use.

## Client-side functionality criteria

### Do we need an authentication aspect, like username and password?

Not recommended: if you are going to do authentication you should do it properly, and it's very unlikely that you could write something yourself that would be robust. My usual advice would be to use an external authentication service (e.g. through firebase), but that requires have tokens etc embedded into your code. Sharing that with others would most likely be outside the terms and conditions of its use. So if you want to do authentication, just include a function to authenticate, which maybe pops up an alert saying 'this page is private' or something like that.

### Are there marks for complexity?

Yes, but only up to what is requested in the brief. So, for example, if you provide more than three entities you don't gain marks, but you will lose marks if you have fewer than two entities. 

### Should we use CDNs for things like bootstrap?

You can but you don't have to. It will not affect your marks, only your download time (positively) and offline access (negatively).

### What is the best way to attach event listeners to multiple buttons?

Use a class if buttons doing the same action on different things: use the event parameter in the event handler to extract the object. If the actions are all different then add by hand with ids. Do it after DOM is loaded to make sure that all the elements exist, possibly by using `defer` attribute on your [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).

## Client-side quality criteria

### Can I use react to build the web-site?

Not recommended: peer reviewers probably don't know what this is, and so may find it difficult to assess the quality of your solution.

### Can I use jQuery to build the web-site?

Not recommended: in years gone by jQuery was essential to make things like event handling and AJAX work across browsers. However these days modern browsers offer things like the Fetch API which handle this. Internet Explorer support is not the issue it once was, because it now has such a small market share, and polyfills are available to make it look like it has Fetch. Some systems still do use jQuery (e.g. Bootstrap 4) but many have removed it as a requirement (e.g. Bootstrap 5) so I wouldn't recommend it for a new project.

### Will I get marked on documentation of the client-side code?

No

### What do you mean by 'gracefully handles server disconnection'

Basically your client-side code should do something sensible if the connection to the server goes down (as it might do if it were connected via the internet). It should display an informative message to the user, and maybe try again later. You can test this by stopping the server and trying to interact with it through the client. Once the server is started up again the client should be able to carry on as before. So follow the sequence: start server, load page, stop server, get helpful message, restart server, works again (without reloading page).

###  Is it possible to use TypeScript or should we just stick with normal JavaScript?

TypeScript needs transpilation tools to be installed and uses different code quality rules so for this assignment you should stick with plain JavaScript - you are free to do what you want in the second assignment.

### Do Alt tags added by users need to be unique?

No

### Does it have to be in British English?

No

## Server-side functionality criteria

### Are we allowed to include additional modules via NPM that provide additional functionality?

Yes this is definitely a good idea, as it makes the code easier to read, more robust and more maintainable. Bear in mind that some frameworks (e.g. react) that are installed via npm essentially use a different language, so are difficult to read for non-experts. They are best avoided.

### How are we advised to save the data, i.e using database?

If this were for real then a database of some kind would be the best way to store data. However, databases are not part of this course. My recommendation would be to write functions for saving the state, which just write to file a JSON string representing the state. This would not work with multiple users but would be enough for simple testing.

### How to store entities? Two different files?

Not necessarily, one is fine, as long as it contains all of the relevant details and relationships.

### What do you mean by an 'entity type'?

If this were object oriented programming they would be referred to classes. It is a 'type' or 'kind' of thing. The different entity types will have different information stored for them. If your app is about poets and their poems then you would have two entitity types: 'poet' and 'poem'. For each poet you might want to store their id, name(s), date of birth, url of image. For each poem you might want to store an id, the title, date of writing, and the text. The relationships between the entities would be of the form poet1 authored poem2. Exactly how you store the information about the relationship is up to you: you could store the author id with the poem, or store a list of poems ids with the author, or have a separate store relating the two. In either case, when you get the details of an entity you should include everything, including the relationships.

### Do we need to set up the http server so it's not on the localhost?

No, although you might like to do that after the June exam board if you would like other people to use your app.

### Do GET/POST have to be exactly what it says?

They should: list (GET), details of one (GET), add one (POST). If not sure, ask me.

## Server-side quality criteria

### Is the testing solely on the server.js file or on the other js files the website uses also

You only need to test the server side javascript: client-side testing is a whole different can of worms.

### Does automatic testing have to test every component?

Yes, to get full marks you need to have detailed testing of every GET and POST method you write. You can get some marks by partial testing.

### How do you test if it works on another machine?

The main reasons for it not to work on another machine are if you use absolute paths, or use a back (Windows) or forward (Mac/Linx) to separate directories in the path. `__dirname__` is your friend, and use [path.sep](https://nodejs.org/api/path.html#pathsep) and [path.join](https://nodejs.org/api/path.html#pathjoinpaths). You can always use a CIS lab machine to test whether it works on another machine. Many are dual-boot so you can try out Windows and Linux.

### Are we allowed to use an API documentation generator like Postman or must we create our own documentation from scratch?

Yes, if you have a good tool for API generation such as <https://learning.postman.com/docs/postman/api-documentation/documenting-your-api/> that would be fine, and a good idea.

### Will adding comments to the API be sufficient for API documentation, or would it be preferable to use something like postman or 'https://www.npmjs.com/package/node-api-doc-generator' (an npm package)?

You should not have to read the code to see the API documentation. You could write it in HTML by hand, or you could use a tool to do that. The postman tool looks good and well maintained, but the npm tool looks less good: not updated in a long time, virtually no history of maintenance.

### What do we need in the API documentation?

For the API documentation the ideal is something like the documentation of the [Twitter API](https://developer.twitter.com/en/docs/api-reference-index) which lists the methods in the API and then provides the [details for each method](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id) including details of parameters and response.

### How should we configure the ESLint file?


Unless you have a good reason to do otherwise you should use this

```
module.exports = {
    "extends": "standard",
    "rules": {
      "semi": [2, "always"],
      "indent": "off"
    }
};
```

But if you are using something else reasonable that is fine, as long as you include the relevant .eslintrc and it doesn’t require a whole load of work to set up.

## Video Presentation

### You mentioned that for every 10 seconds after 2 minutes we will be losing 10% of our marks, does this apply if our video is anywhere from 2 mins 1s to 2 mins 9 seconds long ?

Yes, basically it’s 1% per second.

###  What information are we supposed to include in the video?

The video only needs to cover the points that are not peer assessed. Treat it as a sales pitch for the criteria listed under client-side functionality and server-side functionality. You don't need to show every single thing that your site does, just show how it meets the requirements. So things like HTML validation, automated testing and the API documentation do not need to be covered. It is difficult to keep videos anonymous, so your peer assessors will not see the video.

### What software should we use to record the presentation, and where could we find it?

The university provides panopto (which is used for sharing lecture recordings) for recording and simple editing and gives some [instructions for use](https://www.dur.ac.uk/encore/howtouseencore/desktop/). Freely available desktop tools include [OBS Studio](https://obsproject.com/) and [daVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) for recording and editing, which are both powerful but have more of a learning curve. MacOS provides QuickTime player and iMovie for recording and editing. TechRadar have a [list of screen recorder software](https://www.techradar.com/uk/news/the-best-free-screen-recorder) for other alternatives.
