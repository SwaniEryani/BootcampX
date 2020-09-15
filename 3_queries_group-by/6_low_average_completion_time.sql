SELECT students.name as student, avg(assignment_submissions.duration) as average_assignment_duration , AVG(assignments.duration) as average_estimated_time
FROM students
JOIN assignment_submissions ON student_id = students.id
JOIN assignments ON assignment_id = assignments.id
WHERE end_date IS NULL
GROUP BY student
HAVING avg(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY average_assignment_duration ;