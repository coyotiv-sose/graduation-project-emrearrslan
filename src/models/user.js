const mongoose = require('mongoose')
const Course = require('./course')
const autopopulate = require('mongoose-autopopulate')
// Create a variable called userSchema and assign it to a new mongoose.Schema instance with the following properties:
const userSchema = new mongoose.Schema({
  name: String,
  status: String,
  age: Number,
  weight: Number,
  height: Number,
  coach: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true },
  athletes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  ownedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
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

  // create subscribe athlete to coach
  async subscribe(coach) {
    this.coach = coach
    coach.athletes.push(this)
    await this.save()
    await coach.save()
  }

  // unsubscribe(coach) {
  //   this.coach = ''
  //   coach.athletes = coach.athletes.filter(athlete => athlete !== this.name)
  // }

  // create async unsubscribe method to unsubscribe athlete from coach
  async unsubscribe(coach) {
    this.coach = ''
    coach.athletes = coach.athletes.findOne({ name: coachName, status: 'coach' })
    await this.save()
    await coach.save()
  }

  // purchase(course) {
  //   this.courses.push(course.name)
  //   course.participants.push(this.name)
  // }

  // create async purchase method to purchase course
  async purchase(course) {
    this.courses.push(course.name)
    course.participants.push(this.name)
    await this.save()
    await course.save()
  }

  // create refund method to refund course

  // create async createCourse method to create course
  async createCourse(name, date, price) {
    if (this.status !== 'coach') {
      console.log('Only coaches can create courses')
      return
    }
    const course = await Course.create({
      name,
      date,
      price,
      owner: this,
    })
    this.ownedCourses.push(course)
    await this.save()
    return course
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
module.exports = mongoose.model('User', userSchema)
