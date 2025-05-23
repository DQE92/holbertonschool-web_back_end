const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.trim().split('\n').filter(line => line.trim() !== '');

    if (lines.length < 2) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    for (const line of students) {
      const data = line.split(',');
      const firstName = data[0];
      const field = data[data.length - 1];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    }

    for (const field in fields) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
