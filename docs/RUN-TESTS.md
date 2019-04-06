# Browser and API tests

## Requirements
Open up your Terminal Program (for Macs. it's in the `Utilities` folder), and navigate to your repo folder. For example:
```
cd /User/myname/projects/repo-name
```
Then install the packages listed in Dependencies section of the `package.json` file.
```
npm install
```

## Browser testing

#### Start Chromedriver (ready for browser testing)
```
./node_modules/.bin/chromedriver
```
#### Start the web server
```
node ./web/server.js
```
#### Start test runniung
```
node ./tests/browser-test.js
```

## API testing

#### Start the API server
```
node ./api/api.js
```

#### Run API tests
```
> node tests/api-test-get.js
{"success":"true","message":"todos retrieved successfully","todos":[{"id":1,"title":"example"}]}
> node tests/api-test-post.js
{ success: 'true',
  message: 'todo added successfully',
  todo: { id: 2, title: '50b' } }
```
