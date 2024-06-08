import axios from 'axios';

const request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://project-managment-system-fvtl.vercel.app/',
    timeout: 10000,
});

export async function getAllProjects() {
    try {
        const response = await request.get('/api/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        // throw new Error('Failed to fetch projects. Please try again later.');
    }
}

export async function getSingleProject(id) {
    try {
      const response = await request.get(`/api/projects/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function getSingleMember(id) {
    try {
      const response = await request.get(`/api/teammembers/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function getSingleTask(id) {
    try {
      const response = await request.get(`/api/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

export async function deleteProject(id) {
    try {
      await request.delete(`/api/projects/${id}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
export async function deleteMember(id) {
    try {
      await request.delete(`/api/teammembers/${id}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
export async function deleteTask(id) {
    try {
      await request.delete(`/api/tasks/${id}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

export async function addProject(data) {
    try {
        const response = await request.post(
          `/api/projects`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

export async function updateProject(id, data) {
    try {
        const response = await request.put(
          `/api/projects/${id}`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
export async function updateMember(id, data) {
    try {
        const response = await request.put(
          `/api/teammembers/${id}`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
export async function updateTask(id, data) {
    try {
        const response = await request.put(
          `/api/tasks/${id}`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function addMember(data) {
    try {
        const response = await request.post(
          `/api/teammembers`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function addTask(data) {
    try {
        const response = await request.post(
          `/api/tasks`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function addTasks(data) {
    try {
        const response = await request.post(
          `/api/tasks`,
          data
        );
        return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export async function getAllTeam() {
    try {
        const response = await request.get('/api/teammembers');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        // throw new Error('Failed to fetch projects. Please try again later.');
    }
}

export async function getAllTask() {
  try {
      const response = await request.get('/api/tasks');
      return response.data;
  } catch (error) {
      console.error('Error fetching projects:', error.message);
      // throw new Error('Failed to fetch projects. Please try again later.');
  }
}