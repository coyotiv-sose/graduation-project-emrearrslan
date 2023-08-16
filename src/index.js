// Goal: Create a social website for sports coaches and athletes.

// The website should have the following features:

// Each user has a username and password.
// Each user is either a coach or an athlete.
// Each user has a profile with a name, profile picture, bio and personal records.
// Each user could tracing their training progress.
// Coaches should pay a monthly fee to use the website.
// Monthly fee is changed based on the number of athletes that are signed up for the coach.
// Athletes can attend events and teams

// Coaches homepage should have the following features:
// Coaches profile has a list of athletes that are signed up for the coach.
// Coaches profile has a list of training programs that are created by the coach.
// Coaches can sell events and training programs to athletes.
// Coaches can also create personal training programs for athletes.
// Coaches can also create teams and athletes can sign up for them.
// Coaches can also create posts and athletes can comment on them.
// Coaches can also create messages and athletes can reply to them.

// Athletes homepage should have the following features:
// Athletes profile has a list of coaches that the athlete is signed up for.
// Athletes profile has a list of teams, events and training programs that the athlete has signed up for.
// A
// Athletes can create posts and coaches can comment on them.
// Athletes can also create messages and coaches can reply to them.
// Athletes can also vote for the best coach.
// Athletes can also buy training programs from coaches.
// TODO: Arrange properties

const User = require('./models/user')
const Course = require('./models/course')
const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000'

// Terminal color
const colors = require('colors')

async function main() {
  // create users and courses with axios call to users API
  const emre = await axios.post('/users', {
    name: 'emre',
    status: 'athlete',
    age: 27,
    weight: 80,
    height: 180,
  })
  const mustafa = await axios.post('/users', {
    name: 'mustafa',
    status: 'athlete',
    age: 42,
    weight: 93,
    height: 187,
  })
  const numan = await axios.post('/users', {
    name: 'numan',
    status: 'coach',
    age: 30,
    weight: 80,
    height: 180,
  })
  const course1 = await axios.post('/courses', {
    owner: numan.data._id,
    name: 'course1',
    date: '01.01.2020',
    price: 100,
  })
  const course2 = await axios.post('/courses', {
    owner: numan.data._id,
    name: 'course2',
    date: '01.02.2020',
    price: 200,
  })
  const course3 = await axios.post('/courses', {
    owner: numan.data._id,
    name: 'course3',
    date: '01.03.2020',
    price: 300,
  })

  // emre subscribe to numan
  await axios.post(`/users/${emre.data._id}/subscriptions`, {
    coach: numan.data._id,
  })

  // await axios.delete('users/emre/subscriptions/numan')

  /*
  await axios.post('users/emre/purchases', {
    course: course1.data.name,
  })
*/
}

main()
