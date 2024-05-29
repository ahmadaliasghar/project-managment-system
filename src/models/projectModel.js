import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  category: {
    type: String,
    required: true,
  },
  projectLead: {
    type: Schema.Types.ObjectId,
    ref: 'TeamMember',
    required: true,
  },
  teamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TeamMember',
    },
  ],
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tasks',
    },
  ],
}, {
  timestamps: true,
});

const Projects = mongoose.models.projects || mongoose.model('projects', projectSchema);

export default Projects;
