function updateTime() {
  //new jersey
  let newJerseyElement = document.querySelector("#new-jersey");
  let newJerseyTimeElement = document.querySelector("#new-jersey .time");
  newJerseyTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMM Do h:mm:ss a");

  //toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoTimeElement = document.querySelector("#toronto .time");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("MMM Do h:mm:ss a");

  //wembley
  let wembleyElement = document.querySelector("#wembley");
  let wembleyTimeElement = document.querySelector("#wembley .time");
  wembleyTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMM Do h:mm:ss a");

  //barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaTimeElement = document.querySelector("#barcelona .time");
  barcelonaTimeElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("MMM Do  h:mm:ss a");
}

let selectElement = document.querySelector("#country");
selectElement.addEventListener("change", updateCity);

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityParts = cityTimezone.split("/");
  let region = cityParts[0];
  let city = cityParts[1].replace("_", " ");
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#flex");
  cityElement.innerHTML = `
              <div ><strong> ${city}💜</strong></div>
             <div>${region}</div>
               <div class="time">${cityTime.format("MMM Do  h:mm:ss a")} </div>
            </div>`;
}
