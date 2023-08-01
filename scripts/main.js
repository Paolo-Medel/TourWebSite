import { bandList } from "./bands.js";
import { bookingHTML } from "./bookings.js";
import { venueList } from "./venues.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Tour Manager</h1>
<article class="gigs">
    <h2>GIGS</h2>
    ${bookingHTML()}
</article>

<article class="flex">
    <section class="column">
        <h2>Venues</h2>
        ${venueList()}
    </section>
    <section class="column">
        <h2>Bands</h2>
        ${bandList()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
