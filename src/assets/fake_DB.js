const date0 = new Date(2020, 9, 2, 15, 0);
const date1 = new Date(2020, 9, 11, 11, 0);
const date2 = new Date(2020, 9, 4, 9, 0);
const date3 = new Date(2020, 10, 5, 15, 0);
const date4 = new Date(2020, 9, 6, 14, 0);
const date5 = new Date(2020, 9, 7, 17, 0);
const date6 = new Date(2020, 9, 8, 15, 0);
const date7 = new Date(2020, 9, 9, 15, 0);
const date8 = new Date(2020, 9, 10, 20, 0);

const events = [
  {
    id: 1,
    title1: "Van Gogh",
    title2: "musée d'Orsay",
    src: "/images/img1.png",
    date: date0,
    type: "art"
  },
  {
    id: 2,
    title1: "Intelligence artificielle",
    title2: "mythes et réalités",
    src: "/images/img2.png",
    date: date1,
    type: "sciences"
  },
  {
    id: 3,
    title1: "San Francisco",
    title2: "lieux insolites",
    src: "/images/img3.png",
    date: date2,
    type: "voyages"
  },
  {
    id: 4,
    title1: "Hokusai",
    title2: "musée Guimet",
    src: "/images/img4.png",
    date: date3,
    type: "art"
  },
  {
    id: 5,
    title1: "Le bal des philosophes",
    title2: "Bal Blomet",
    src: "/images/img5.png",
    date: date4,
    type: "musique"
  },
  {
    id: 6,
    title1: "Rangiroa",
    title2: "voyage au bout du monde",
    src: "/images/img6.png",
    date: date7,
    type: "voyages"
  },
  {
    id: 7,
    title1: "La feijoada",
    title2: "apprenez avec un chef",
    src: "/images/img7.png",
    date: date7,
    type: "cuisine"
  },
  {
    id: 8,
    title1: "Gengis Khan",
    title2: "le loup bleu",
    src: "/images/img8.png",
    date: date3,
    type: "histoire"
  },
  {
    id: 9,
    title1: "Loisirs",
    title2: "un potager en ville",
    src: "/images/img9.png",
    type: "loisirs",
    date: date8
  },
  {
    id: 10,
    title1: "Pierre Soulages",
    title2: "musée Pompidou",
    src: "/images/img10.png",
    type: "art",
    date: date8
  }
];

export default events;
