class User {
  athletes = []
  coach = ''
  courses = []
  constructor(username, status, age, weight, height) {
    this.username = username
    this.status = status
    this.age = age
    this.weight = weight
    this.height = height
  }
  subscribe(coach) {
    if (coach.status === 'coach') {
      this.coach = coach.username
      coach.athletes.push(this.username)
    } else {
      console.log('You can only subscribe to a coach')
    }
  }
  purchase(course) {
    this.courses.push(course.name)
    course.participants.push(this.username)
  }
  unsubscribe(coach) {
    this.coach = ''
    coach.athletes = coach.athletes.filter(athlete => athlete !== this.username)
  }
}

module.exports = User
