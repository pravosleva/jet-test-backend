let express = require('express');
let app = express();
app.set('port', process.env.PORT || 1111);
var cors = require('cors');
//  see more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());
app.get('/jetsArray', (req, res) => {
  res.type('application/json');
  // see more: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  let _getRandomArbitrary = (min, max) => ((Math.random() * (max - min) + min).toFixed(6));
  //let _getCoordinates = () => { lat: _getRandomArbitrary(10, 90), lon: _getRandomArbitrary(10, 90) };
  let jetsArray = [
    {
      flightNumber: '001a',
      coordinates: { lat: _getRandomArbitrary(10, 90), lon: _getRandomArbitrary(10, 90) }
    },
    {
      flightNumber: '002b',
      coordinates: { lat: _getRandomArbitrary(10, 90), lon: _getRandomArbitrary(10, 90) }
    },
    {
      flightNumber: '003c',
      coordinates: { lat: _getRandomArbitrary(10, 90), lon: _getRandomArbitrary(10, 90) }
    },
  ];
  res.send(jetsArray);
});
app.use((req, res) => {
  res.type('application/json');
  res.status(404);
  res.send({ msg: '404 - Not found' });
});
app.use((req, res) => {
  res.type({ msg: 'application/json' });
  res.status(500);
  res.send({ msg: '500 - Internal Server Error' });
});

app.listen(app.get('port'), function(){
  console.log('Express running on ' + app.get('port') + '; Ctrl+C to end.');
});
