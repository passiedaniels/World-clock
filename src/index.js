//new jersey
let newJerseyElement = document.querySelector("#new-jersey");
let newJerseyTimeElement = document.querySelector("#new-jersey .time");
newJerseyTimeElement.innerHTML = moment()
  .tz("America/New_York")
  .format("MMM Do h:mm a");

//toronto
let torontoElement = document.querySelector("#toronto");
let torontoTimeElement = document.querySelector("#toronto .time");
torontoTimeElement.innerHTML = moment()
  .tz("America/Toronto")
  .format("MMM Do h:mm a");

//wembley
let wembleyElement = document.querySelector("#wembley");
let wembleyTimeElement = document.querySelector("#wembley .time");
wembleyTimeElement.innerHTML = moment()
  .tz("Europe/London")
  .format("MMM Do h:mm a");

//barcelona
let barcelonaElement = document.querySelector("#barcelona");
let barcelonaTimeElement = document.querySelector("#barcelona .time");
barcelonaTimeElement.innerHTML = moment()
  .tz("Europe/Madrid")
  .format("MMM Do  h:mm a");
