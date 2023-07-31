import { getBands } from "./database.js";
import { getBookings } from "./database.js";

export const bandList = () => {
  const Bands = getBands();
  let HTMLstrings = `<ul>`;

  for (const band of Bands) {
    HTMLstrings += `<li data-type="bands" data-name="${band.name}">${band.name}</li>`;
  }
  HTMLstrings += `</ul>`;
  return HTMLstrings;
};

addEventListener("click", (itemClicked) => {
  const whatWasClicked = itemClicked.target;
  let bandsThatBooked = "";
  const bookings = getBookings();

  if (whatWasClicked.dataset.type === "bands") {
    for (const gigs of bookings) {
      if (gigs.nameOfBand === whatWasClicked.dataset.name) {
        bandsThatBooked += gigs.nameOfVenue + ", ";
      }
    }
    window.alert(`This band has been booked at ${bandsThatBooked}`);
  }
});
