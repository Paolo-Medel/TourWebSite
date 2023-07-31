const database = {
  bookings: [
    {
      nameOfVenue: "Event Palace",
      nameOfBand: "Funky Groovers",
      date: "Thursday",
    },
    { nameOfVenue: "Event Palace", nameOfBand: "Metal Titans", date: "Friday" },
    {
      nameOfVenue: "Event Palace",
      nameOfBand: "The Rockin' Legends",
      date: "Saturday",
    },
    { nameOfVenue: "Event Palace", nameOfBand: "Jazz Masters", date: "Sunday" },
    {
      nameOfVenue: "Gala Gardens",
      nameOfBand: "Electric Vibes",
      date: "Thursday",
    },
    { nameOfVenue: "Gala Gardens", nameOfBand: "Indie Waves", date: "Friday" },
    {
      nameOfVenue: "Gala Gardens",
      nameOfBand: "Classic Harmonies",
      date: "Saturday",
    },
    {
      nameOfVenue: "Gala Gardens",
      nameOfBand: "Soulful Serenade",
      date: "Sunday",
    },
    {
      nameOfVenue: "Celebration Hall",
      nameOfBand: "Rap Titans",
      date: "Thursday",
    },
    {
      nameOfVenue: "Celebration Hall",
      nameOfBand: "Folk Tales",
      date: "Friday",
    },
    {
      nameOfVenue: "Celebration Hall",
      nameOfBand: "Punk Rebels",
      date: "Saturday",
    },
    {
      nameOfVenue: "Celebration Hall",
      nameOfBand: "Symphonic Sounds",
      date: "Sunday",
    },
    {
      nameOfVenue: "Festive Plaza",
      nameOfBand: "Techno Wizards",
      date: "Thursday",
    },
    { nameOfVenue: "Festive Plaza", nameOfBand: "R&B Harmony", date: "Friday" },
    {
      nameOfVenue: "Festive Plaza",
      nameOfBand: "Acoustic Serenity",
      date: "Saturday",
    },
    {
      nameOfVenue: "Festive Plaza",
      nameOfBand: "Gospel Voices",
      date: "Sunday",
    },
    {
      nameOfVenue: "Joyful Manor",
      nameOfBand: "Ska Skippers",
      date: "Thursday",
    },
    { nameOfVenue: "Joyful Manor", nameOfBand: "Disco Fever", date: "Friday" },
    {
      nameOfVenue: "Joyful Manor",
      nameOfBand: "Blues Brothers",
      date: "Saturday",
    },
    { nameOfVenue: "Joyful Manor", nameOfBand: "Reggae Vibes", date: "Sunday" },
    {
      nameOfVenue: "Merry Lodge",
      nameOfBand: "Country Roads",
      date: "Thursday",
    },
    {
      nameOfVenue: "Merry Lodge",
      nameOfBand: "Pop Sensations",
      date: "Friday",
    },
    {
      nameOfVenue: "Merry Lodge",
      nameOfBand: "Rhythmic Beats",
      date: "Saturday",
    },
    {
      nameOfVenue: "Merry Lodge",
      nameOfBand: "The Rockin' Legends",
      date: "Sunday",
    },
  ],
  venues: [
    {
      name: "Event Palace",
      address: "1234 Elm Street, CityA, StateA",
      squareFootage: 6000,
      maxOccupancy: 800,
    },
    {
      name: "Gala Gardens",
      address: "5678 Oak Avenue, CityB, StateB",
      squareFootage: 4000,
      maxOccupancy: 400,
    },
    {
      name: "Celebration Hall",
      address: "9876 Maple Drive, CityC, StateC",
      squareFootage: 3500,
      maxOccupancy: 300,
    },
    {
      name: "Festive Plaza",
      address: "2468 Pine Road, CityD, StateD",
      squareFootage: 5500,
      maxOccupancy: 700,
    },
    {
      name: "Joyful Manor",
      address: "1357 Birch Lane, CityE, StateE",
      squareFootage: 2500,
      maxOccupancy: 200,
    },
    {
      name: "Merry Lodge",
      address: "7890 Cedar Street, CityF, StateF",
      squareFootage: 1800,
      maxOccupancy: 150,
    },
  ],
  bands: [
    {
      name: "The Rockin' Legends",
      members: 4,
      genre: "Rock 'n' Roll",
      formedYear: 1955,
    },
    {
      name: "Funky Groovers",
      members: 6,
      genre: "Funk",
      formedYear: 1973,
    },
    {
      name: "Jazz Masters",
      members: 5,
      genre: "Jazz",
      formedYear: 1960,
    },
    {
      name: "Electric Vibes",
      members: 3,
      genre: "Electronic",
      formedYear: 2001,
    },
    {
      name: "Country Roads",
      members: 4,
      genre: "Country",
      formedYear: 1987,
    },
    {
      name: "Soulful Serenade",
      members: 7,
      genre: "Soul",
      formedYear: 1968,
    },
    {
      name: "Pop Sensations",
      members: 5,
      genre: "Pop",
      formedYear: 2005,
    },
    {
      name: "Rhythmic Beats",
      members: 4,
      genre: "Hip Hop",
      formedYear: 1992,
    },
    {
      name: "Classic Harmonies",
      members: 6,
      genre: "Classical",
      formedYear: 1970,
    },
    {
      name: "Metal Titans",
      members: 4,
      genre: "Metal",
      formedYear: 1980,
    },
    {
      name: "Indie Waves",
      members: 3,
      genre: "Indie",
      formedYear: 2010,
    },
    {
      name: "Reggae Vibes",
      members: 5,
      genre: "Reggae",
      formedYear: 1978,
    },
    {
      name: "Alternative Echo",
      members: 4,
      genre: "Alternative Rock",
      formedYear: 1995,
    },
    {
      name: "Blues Brothers",
      members: 5,
      genre: "Blues",
      formedYear: 1967,
    },
    {
      name: "Disco Fever",
      members: 6,
      genre: "Disco",
      formedYear: 1975,
    },
    {
      name: "Ska Skippers",
      members: 4,
      genre: "Ska",
      formedYear: 1982,
    },
    {
      name: "Gospel Voices",
      members: 8,
      genre: "Gospel",
      formedYear: 1950,
    },
    {
      name: "Acoustic Serenity",
      members: 2,
      genre: "Acoustic",
      formedYear: 2008,
    },
    {
      name: "R&B Harmony",
      members: 5,
      genre: "R&B",
      formedYear: 1998,
    },
    {
      name: "Techno Wizards",
      members: 3,
      genre: "Techno",
      formedYear: 1989,
    },
    {
      name: "Symphonic Sounds",
      members: 40,
      genre: "Symphonic",
      formedYear: 1930,
    },
    {
      name: "Punk Rebels",
      members: 3,
      genre: "Punk",
      formedYear: 1976,
    },
    {
      name: "Folk Tales",
      members: 4,
      genre: "Folk",
      formedYear: 1965,
    },
    {
      name: "Rap Titans",
      members: 3,
      genre: "Rap",
      formedYear: 1988,
    },
  ],
};

export const getBookings = () => {
  return database.bookings.map((booking) => ({ ...booking }));
};

export const getVenues = () => {
  return database.venues.map((venue) => ({ ...venue }));
};

export const getBands = () => {
  return database.bands.map((band) => ({ ...band }));
};
