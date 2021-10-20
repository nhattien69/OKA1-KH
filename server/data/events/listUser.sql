SELECT u.userId,u.email,u.pass,u.fristName,u.lastName,u.phone,u.userAddress,u.cards,u.dateCreate,u.note,p.value_TotalPoint
from [dbo].[Users] as u,[dbo].[User_Point] as p
where u.userId = p.userId
