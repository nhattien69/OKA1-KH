select dateCreate as dateCreate, count (distinct userId) AS NumberOfUser
from users
where dateCreate BETWEEN 
	(select dateCreate
	from users
	where userId = (
	SELECT MIN(userId)
	FROM users))
	and CAST( GETDATE() AS Date )
group by dateCreate
ORDER BY dateCreate DESC