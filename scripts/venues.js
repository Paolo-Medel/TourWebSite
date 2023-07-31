import { getVenues } from "./database.js";
import { getBookings } from "./database.js";

export const venueList = () => {
  const venues = getVenues();
  let HTML = `<ul>`;

  for (const venue of venues) {
    HTML += `<li data-type="venue" data-name="${venue.name}">${venue.name}</li>`;
  }
  HTML += `</ul>`;
  return HTML;
};

addEventListener("click", (itemClicked) => {
  const whatWasClicked = itemClicked.target;
  let bandsThatBooked = "";
  const bookings = getBookings();

  if (whatWasClicked.dataset.type === "venue") {
    for (const gigs of bookings) {
      if (gigs.nameOfVenue === whatWasClicked.dataset.name) {
        bandsThatBooked += gigs.nameOfBand + ", ";
      }
    }
    window.alert(`This venue has booked ${bandsThatBooked}`);
  }
});
