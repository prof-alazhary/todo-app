# todo-app
It's a simple app to mange a to-do list for every User.

-About Reference APIs:- <br />
you can use postman app to test and explore Reference's APIs through the following routes:-

to create new reference: <br />
`localhost:3000/reference/new method:post //ex:body :{summary:"some summary", tags:["one", "two"], url:"www.url.com"}`

to select one: <br />
`localhost:3000/reference/:id method:get`

to update: <br />
`localhost:3000/reference/:id method:put //ex=> body :{summary:"some other summary", url:"www.url2.com"}`

to delete: <br />
`localhost:3000/reference/:id method:delete`

to search by summary: <br />
`localhost:3000/reference/search method:post //ex=>body :{summary:"summary"}`

to search by tags: <br />
`localhost:3000/reference/search method:post //ex=>body :{tags:["two"]}`

-All of this APIs above are secured, So you shoud pass 'x-access-token' within request Headers. <br />
You can generate one, simply by running this script:- (make sure that you are in the root dir) <br />
`node generateToken.js`

