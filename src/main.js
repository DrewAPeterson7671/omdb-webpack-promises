import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://www.omdbapi.com/?t=${city}&apikey=${process.env.API_KEY}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });

   const getElements = function(response) {
      $('.showHumidity').text(`${response.Title}`);
       $('.showTemp').text(`${response.Director}`);
      // $('.showHumidity').text(`The humidity in ${city} is ${response.title}%`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
