import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://www.omdbapi.com/?t=${city}&apikey=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);  //THIS line is a significant change from fetch and async
      $('.showHumidity').text(body.Title); //This is different than the fetch and async- they used response.Title template literals
      $('.showTemp').text(body.Director);  //- they used response.Title template literals
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
