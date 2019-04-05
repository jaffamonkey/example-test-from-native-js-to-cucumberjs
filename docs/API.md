# API Server

## To start the API server

Open up your Terminal Program (for Macs. it's in the `Utilities` folder), and navigate the your api folder. For example:
```
node api.js
```

## Run API tests

First open new Terminal tab, navigate to your repo folder and run the two tests:

```
> node tests/api-test-get.js
{"success":"true","message":"todos retrieved successfully","todos":[{"id":1,"title":"example"}]}
> node tests/api-test-post.js
{ success: 'true',
  message: 'todo added successfully',
  todo: { id: 2, title: '50b' } }
```