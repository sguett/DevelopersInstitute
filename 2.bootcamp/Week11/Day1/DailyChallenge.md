create table items(
	item_id serial not null primary key,
	item_name text not null,
	price decimal not null,
	stock integer
);

insert into items(item_name,price,stock)
values ('plate1',12.9,10),('plate2',10.9,7),('plate3',20.9,15),
	('desert1',5.9,4),('desert2',7.5,8),('desert3',11.5,6),
	('coca',3,50),('mineral water',1.5,50),('fanta',3,30),('ice tea',3,30);
	
select * from items;

create table orders(
	order_nb integer not null,
	item_id integer not null references items(item_id) ON DELETE CASCADE,
	quantity integer not null
);

insert into orders(order_nb,item_id,quantity)
values (1,1,1),(1,2,2),(2,3,1),(2,5,1),(2,10,1);

select * from orders;

create or replace function total(ord int) returns decimal as $$
begin
	return (select sum(quantity*i.price) from orders o 
	left join items i on o.item_id = i.item_id
	where order_nb = ord);
end;$$
LANGUAGE PLPGSQL;

select * from total(1)