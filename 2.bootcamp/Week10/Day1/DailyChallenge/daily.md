<!-- 1. Count how many actors are in the table -->

SELECT count(distinct actor_id)
FROM actor;

<!-- 2. Try to add a new actor, with some blank fields. What happens ? -->
<!-- insert a new row -->
insert into actor(first_name, last_name)
values ('sam','guetta')

select * from actor
where first_name = 'sam'