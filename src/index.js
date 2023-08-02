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
