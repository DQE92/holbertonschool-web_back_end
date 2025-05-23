const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the data into lines and filter out empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // Remove the header line (first line)
        const studentLines = lines.slice(1);
        
        // Filter out any empty student records
        const validStudents = studentLines.filter(line => {
          const fields = line.split(',');
          return fields.length >= 4 && fields[0].trim() !== '';
        });

        // Log total number of students
        console.log(`Number of students: ${validStudents.length}`);

        // Group students by field
        const fieldGroups = {};
        
        validStudents.forEach(line => {
          const fields = line.split(',');
          const firstName = fields[0].trim();
          const field = fields[3].trim();
          
          if (!fieldGroups[field]) {
            fieldGroups[field] = [];
          }
          fieldGroups[field].push(firstName);
        });

        // Log students by field
        Object.keys(fieldGroups).forEach(field => {
          const students = fieldGroups[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        });

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
