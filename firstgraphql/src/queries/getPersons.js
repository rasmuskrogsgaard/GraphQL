export const getPersons = `
  query AllPeople {
    allPeople {
      people {
        id
        name
        gender
      }
    }
  }
`;