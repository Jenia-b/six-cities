
export function loadOffers(limit) {
  return fetch('https://7.react.pages.academy/six-cities/hotels')
    .then((response) => response.json())
    .then((json) => json.slice(0, limit));
}

export const offers = [{
  id: 'c8a57c3b-c2ed-4363-afd3-3d48c6212dcd',
  label: 'Premium',
  image: '../img/apartment-01.jpg',
  price: '120',
  name: 'Beautiful & luxurious apartment at great location',
  type: 'Apartment',
  rating: 100,
}, {
  id: '705a5854-ce2c-4dd6-9cdb-3db31034b9dc',
  image: '../img/room.jpg',
  price: '80',
  name: 'Wood and stone place',
  type: 'Private room',
  rating: 80,
  saved: true,
}, {
  id: '89aaff9b-2b58-49de-819b-0294451fbe41',
  image: '../img/apartment-02.jpg',
  price: '132',
  name: 'Canal View Prinsengracht',
  type: 'Apartment',
  rating: 60,
}, {
  id: '221a7917-6441-4913-9ba2-605b864a3e7e',
  label: 'Premium',
  image: '../img/apartment-03.jpg',
  price: '180',
  name: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment',
  rating: 50,
}, {
  id: '4226f54f-591f-4e8e-9367-cc03de74bafc',
  image: '../img/room.jpg',
  price: '80',
  name: 'Wood and stone place',
  type: 'Private room',
  rating: 100,
  saved: true,
}];
