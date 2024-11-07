-- SELECT * FROM users 
-- WHERE id between 2 and 4;
-- select * from users
-- where id >= 2 and id <= 4;
-- Select  id, name as fullname,email from users

-- select * from users 
-- where password is not null

-- select * from users
-- where email ilike '%user1%';
-- select * from users  where status = true AND (name ILIKE '%user1 %' OR email ILIKE '%user1%')

-- select * from users
-- order by name,id desc


-- SELECT * FROM users ORDER BY id desc LIMIT 2 OFFSET 1
-- OFFSET loai trừ mặc định là 0 => Tính năng phân tran 

-- SUM, COUNT, MAX, MIN, AVG


-- select sum(age) as age,name from 
-- select count(id) as count_age, age from users
-- group by age
-- having count(id) >= 2;
-- select count(id) as count_age,age from users 
-- group by age 
-- order by count_age desc limit 1

-- select * from users where age IN(select age from users 
-- group by age 
-- order by count(age) desc limit 1)

















