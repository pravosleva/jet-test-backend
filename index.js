let express = require('express');
let app = express();
app.set('port', process.env.PORT || 1111);
var cors = require('cors');
//Read more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());
app.get('/jetsArray', (req, res) => {
  res.type('application/json');
  let jetsArray = [
    {
      flightNumber: '001a',
      coordinates: { lat: 77.777777, lon: 88.888888 }
    },
    {
      flightNumber: '002b',
      coordinates: { lat: 55.555555, lon: 66.666666 }
    },
  ];
  res.send(jetsArray);
});
app.use((req, res) => {
  res.type('application/json');
  res.status(404);
  res.send({'msg': '404 - Not found'});
});
app.use((req, res) => {
  res.type({'msg': 'application/json'});
  res.status(500);
  res.send('500 - Internal Server Error');
});
app.listen(app.get('port'), function(){
  console.log('Express running on ' + app.get('port') + '; Ctrl+C to end.');
});
