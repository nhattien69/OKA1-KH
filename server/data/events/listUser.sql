SELECT u.userId,u.email,u.pass,u.fristName,u.lastName,u.userAddress,u.cards,p.value_TotalPoint
from [dbo].[Users] as u,[dbo].[User_Point] as p
