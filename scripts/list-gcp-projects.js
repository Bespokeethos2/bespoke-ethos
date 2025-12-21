const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

async function listProjects() {
  const keyPath = 'c:\\Vercel\\service-account-key.json';
  if (!fs.existsSync(keyPath)) {
    console.error('Service account key not found');
    return;
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const cloudresourcemanager = google.cloudresourcemanager('v1');
  
  try {
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const res = await cloudresourcemanager.projects.list();
    const projects = res.data.projects;
    if (projects && projects.length) {
      console.log('Projects:');
      projects.forEach((project) => {
        console.log(`${project.name} (${project.projectId})`);
      });
    } else {
      console.log('No projects found.');
    }
  } catch (err) {
    console.error('The API returned an error: ' + err);
  }
}

listProjects();
