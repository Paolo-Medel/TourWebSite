import { bandList } from "./bands.js";
import { bookingHTML } from "./bookings.js";
import { venueList } from "./venues.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article>
    <h2>GIGS</h2>
    ${bookingHTML()}
</article>

<article>
    <section>
        <h2>Venues</h2>
        ${venueList()}
    </section>
    <section>
        <h2>Bands</h2>
        ${bandList()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
