<!-- Q1. What will be the OUTPUT of the following statement? -->
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NULL )
<!-- Output : 0 -->

<!-- Q2. What will be the OUTPUT of the following statement? -->
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id = 5 )
<!-- Output : 2 -->

<!-- Q3. What will be the OUTPUT of the following statement? -->
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab )
<!-- Output : 0 -->

<!-- Q4. What will be the OUTPUT of the following statement? -->
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NOT NULL )
<!-- Output : 2 -->
