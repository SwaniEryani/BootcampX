SELECT name , count(*) as  total_assistances
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id AND name like 'Waylon Boehm'
GROUP BY name;

