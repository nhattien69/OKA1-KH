select CAST( GETDATE() AS Date ) as Today, count (distinct userId) AS NumberOfUser
from users
where dateCreate = CAST( GETDATE() AS Date )