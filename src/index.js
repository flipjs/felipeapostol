module.exports = {
  bio: bio,
  firstName: firstName,
  lastName: lastName,
  fullName: fullName,
  birthDate: birthDate,
  interests: interests,
  job: job,
  json: json
}

function bio () {
  return {
    firstName: 'Felipe',
    lastName: 'Apostol',
    birthDate: '15 October',
    interests: [
      'pool',
      'darts',
      'photography',
      'mechanical keyboards',
      'javascript'
    ],
    job: 'Software Developer'
  }
}

function firstName () {
  return bio().firstName
}

function lastName () {
  return bio().lastName
}

function fullName () {
  return bio().firstName + ' ' + bio().lastName
}

function birthDate () {
  return bio().birthDate
}

function interests () {
  return bio().interests
}

function job () {
  return bio().job
}

function json () {
  return JSON.stringify(bio())
}

