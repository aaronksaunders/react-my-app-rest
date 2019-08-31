let people = [];

// this is basically initializing the data in the application
export const loadAllPeople = async () => {
  // using promises
  let url = "https://randomuser.me/api/?results=10";
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      people = result.results;
      return people;
    });
};

// this is getting all of the people we have loaded
export const getAllPeople = () => {
  return people;
};
// this is getting a specific person based on the
// id specified by the caller
export const getPersonById = _id => {
  return people.find(person => {
    return person.phone == _id;
  });
};

// using async await
// let url = "https://randomuser.me/api/?results=10";
// let response = await fetch(url);
// let result = await response.json();
// people = result.results;
// return people;
