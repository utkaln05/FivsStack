import mongoose from 'mongoose';

// Define the Contact schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: [10, 'Message must be at least 10 characters']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model or get it if it already exists
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;