import { getBands, getBookings } from "./database.js";

export const bookingHTML = () => {
  const bookings = getBookings();
  let HTMLstring = `<ul>`;

  for (const gig of bookings) {
    HTMLstring += `<li data-type="bookings" data-band="${gig.nameOfBand}">${gig.nameOfBand} are playing at ${gig.nameOfVenue} on ${gig.date}`;
  }
  HTMLstring += `</ul>`;
  return HTMLstring;
};

addEventListener("click", (itemClicked) => {
  const whatWasClicked = itemClicked.target;
  let bandInfo = [];
  const bands = getBands();

  if (whatWasClicked.dataset.type === "bookings") {
    for (const band of bands) {
      if (whatWasClicked.dataset.band === band.name) {
        bandInfo.push(band);
      }
    }

    for (const band of bandInfo) {
      window.alert(
        `${band.name}
        ${band.genre}
        formed in ${band.formedYear}
        ${band.members} band members`
      );
    }
  }
});
