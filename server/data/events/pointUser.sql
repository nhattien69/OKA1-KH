select u.userId,u.email,u.pass,u.fristName,u.lastName,u.phone,u.userAddress,u.cards,p.value_TotalPoint,p.day_Point
  from [dbo].[Users] as u,[dbo].[User_Point] as p 
  where u.userId = p.userId