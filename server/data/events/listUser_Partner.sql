SELECT u.userId,u.email, u.fristName,u.lastName,u.userAddress,u.phone,u.cards, p.value_TotalPoint
from [dbo].[Users] as u,[dbo].[User_Point] as p
where u.userId = p.userId