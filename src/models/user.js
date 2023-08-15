const mongoose = require('mongoose')
// Create a variable called userSchema and assign it to a new mongoose.Schema instance with the following properties:
const userSchema = new mongoose.Schema({
  name: String,
  status: String,
  age: Number,
  weight: Number,
  height: Number,
  coach: String,
  athletes: [],
  courses: [],
  ownedCourses: [],
})

// Create a User class with the following properties:
class User {
  // async subscribe(coach) {
  //   if (coach && coach.status === 'coach') {
  //     this.coach = coach.name
  //     coach.athletes.push(this.name)
  //   } else {
  //     console.log('You can only subscribe to a coach')
  //   }
  async subscribe(coachName) {
    const coach = await mongoose.model('User').findOne({ name: coachName, status: 'coach' })
    if (coach) {
      this.coach = coach.name
      coach.athletes.push(this.name)
      await Promise.all([this.save(), coach.save()]) // Save both user and coach
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
  createCourse(name, date, price) {
    if (this.status !== 'coach') {
      console.log('Only coaches can create courses')
      return
    }
    const course = Course.create({
      name,
      date,
      price,
      owner: this.name,
    })
    this.ownedCourses.push(course.name)
    return course
  }
}

userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
