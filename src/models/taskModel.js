import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'team',
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'projects',
    required: true,
  },
}, {
  timestamps: true,
});

const Task = mongoose.models.tasks || mongoose.model('tasks', taskSchema);

export default Task;
