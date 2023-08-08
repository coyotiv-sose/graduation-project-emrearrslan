console.log("Hi coyote, let's have some JavaScript fun!")

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

/*
const emre = {
  username: 'emre',
  status: 'athlete',
  age: 27,
  weight: 80,
  height: 180,
  coach: '',

  subscribe(coach) {
    this.coach = coach.username
    coach.athletes.push(this.username)
  },
}

const mustafa = {
  username: 'mustafa',
  status: 'athlete',
  age: 42,
  weight: 93,
  height: 187,
  coach: '',
  subscribe(coach) {
    this.coach = coach.username
    coach.athletes.push(this.username)
  },
}

const numan = {
  username: 'numan',
  status: 'coach',
  age: 30,
  weight: 80,
  height: 180,
  athletes: [],
}

console.log(`emre has a name of ${emre.username} and he is ${emre.status}`)

emre.subscribe(numan)

console.log(`emre has a coach of ${emre.coach}`)
console.log(`numan has ${numan.athletes.length} athletes: ${numan.athletes}`)

mustafa.subscribe(numan)
console.log(`After mustafas subscribtion numan has ${numan.athletes.length} athletes: ${numan.athletes}`)
console.log('numans athletes', numan.athletes)
*/
const User = require('./user')
const Course = require('./course')
const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000'

// Terminal color
const colors = require('colors')

async function main() {
  // create a user with axios call to user API
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
  console.log('emre: ', emre.data)

  await axios.post('users/subscriptions', {
    athlete: emre.data.name,
    coach: numan.data.name,
  })
}
main()

// const emre = new User('emre', 'athlete', 27, 80, 180)
// const mustafa = new User('mustafa', 'athlete', 42, 93, 187)
// const thomas = new User('thomas', 'athlete', 21, 70, 181)
// const numan = new User('numan', 'coach', 30, 80, 180)

// const course1 = new Course('course1', '01.01.2020', 100)
// const course2 = new Course('course2', '01.02.2020', 200)
// const course3 = new Course('course3', '01.03.2020', 300)

// console.log(`emre has a name of ${emre.username} and he is ${emre.status}`)
// emre.subscribe(numan)
// console.log(`emre has a coach of ${emre.coach}`)
// console.log(`numan has ${numan.athletes.length} athletes: ${numan.athletes}`)

// emre.purchase(course1)
// console.log(`emre has ${emre.courses.length} courses: ${emre.courses}`)
// console.log(`course1 has ${course1.participants.length} participants: ${course1.participants}`)

// emre.unsubscribe(numan)
// console.log(`emre has a coach of after unsubscribe ${emre.coach}`)
// console.log(`numan has ${numan.athletes.length} athletes: ${numan.athletes}`)

// emre.subscribe(mustafa)
// console.log(`emre has a coach of ${emre.coach}`)

// console.log('hello'.green)
// console.log(`emre does not have a coach ${emre.coach === '' ? 'true'.blue : 'false'.red}`)
// console.log(`emre has a coach numan ${emre.coach === 'numan' ? 'true'.blue : 'false'.red}`)
