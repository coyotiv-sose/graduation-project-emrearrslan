class User {
  athletes = []
  coach = ''
  courses = []
  constructor(name, status, age, weight, height) {
    this.name = name
    this.status = status
    this.age = age
    this.weight = weight
    this.height = height
  }
  subscribe(coach) {
    if (coach.status === 'coach') {
      this.coach = coach.name
      coach.athletes.push(this.name)
    } else {
      console.log('You can only subscribe to a coach')
    }
  }
  purchase(course) {
    this.courses.push(course.name)
    course.participants.push(this.name)
  }
  unsubscribe(coach) {
    this.coach = ''
    coach.athletes = coach.athletes.filter(athlete => athlete !== this.name)
  }
}

module.exports = User
