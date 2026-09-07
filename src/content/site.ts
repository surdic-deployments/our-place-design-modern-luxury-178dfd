// Source of truth for confirmed restaurant facts. See docs/project.md for
// provenance. Anything not confirmed there is marked TODO rather than guessed.

export const restaurant = {
  name: "Our Place",
  fullName: "Our Place Barbecue & Cocktailhouse",
  category: "Barbecue & Cocktailhouse · Fürth",
  address: {
    street: "Beim Liershof 3",
    postalCode: "90762",
    city: "Fürth",
  },
  phone: "+49 911 780 9881",
  phoneDisplay: "0911 780 9881",
  email: "info@ourplace-fuerth.de",
  reservationUrl: "#todo-resmio-reservation-url",
  takeawayUrl: "#todo-resmio-takeaway-url",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Our+Place+Beim+Liershof+3+90762+F%C3%BCrth",
};

export const hours = {
  lastConfirmed: "05.09.2026",
  lines: [
    { days: "Montag – Samstag", time: "ab 17:00 Uhr" },
    { days: "Küche", time: "bis 21:30 Uhr" },
    { days: "Sonntag", time: "Ruhetag" },
  ],
};

export const nav = [
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#unser-place", label: "Unser Place" },
  { href: "#besuch", label: "Besuch" },
];

export const proofPoints = [
  "Hickory-geräuchert",
  "Hausgemachte Buns",
  "Sharing Platters",
  "Cocktailhouse",
];

export type SignatureDish = {
  index: string;
  name: string;
  description: string;
  price: string;
  tag: string; // small editorial descriptor, e.g. spice or preparation note
};

export const signatureDishes: SignatureDish[] = [
  {
    index: "01",
    name: "Baby Back Rib Platter",
    description: "Hickory-geräucherte Rippchen, langsam gezogen, hausgemachte BBQ-Sauce.",
    price: "24,90 €",
    tag: "Mild",
  },
  {
    index: "02",
    name: "Smokehouse Burger",
    description: "226 g Franken-Black-Angus, hausgemachtes Brioche-Bun, geräucherter Pulled Pork Topping.",
    price: "15,90 €",
    tag: "Mittel",
  },
  {
    index: "03",
    name: "Dry-Aged Tomahawk",
    description: "Vorbestellung mind. 2 Std. im Voraus · für gemeinsame Tafelrunden gemacht.",
    price: "89,90 €",
    tag: "Vorbestellung",
  },
];

export const menuTeaser = {
  updated: "20.08.2025",
  categories: [
    {
      name: "Burger",
      items: [
        { name: "Our Place Burger", price: "15,90 €" },
        { name: "Smokehouse Burger", price: "15,90 €" },
        { name: "Veggie Burger", price: "14,90 €" },
      ],
    },
    {
      name: "Smokehouse",
      items: [
        { name: "Rebel Ribs", price: "14,30 €" },
        { name: "Rebel Rib Platter", price: "20,90 €" },
        { name: "Buffalo Hotwing Platter", price: "17,70 €" },
      ],
    },
    {
      name: "Steaks",
      items: [
        { name: "Rump Steak", price: "29,90 €" },
        { name: "Ribeye", price: "44,90 €" },
        { name: "Porterhouse (Vorbestellung)", price: "89,90 €" },
      ],
    },
  ],
};

export const occasion = {
  heading: "Der Anlass",
  paragraphs: [
    "Ein Fachwerkhaus in der Fürther Altstadt, ein Smoker, der seit dem Nachmittag läuft, und eine Bar, die bis spät in den Abend Cocktails schickt — das ist Our Place.",
    "Egal ob Feierabendrunde, Geburtstag in großer Runde oder ein ruhiger Abend zu zweit: die Ribs sind geraucht, die Platten sind zum Teilen gedacht, und der Tisch ist reserviert, bevor ihr ankommt.",
  ],
};

export const legal = {
  note: "Impressum & Datenschutz folgen in Kürze.",
};
