const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
let input = process.argv.slice(2);
const values = [`%${input[0]}%`, input[1]];
pool.query(`
SELECT students.id as id, students.name as name, cohorts.name cohort_name
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name like $1
LIMIT $2;
`,values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));
