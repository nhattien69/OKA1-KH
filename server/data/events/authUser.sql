select u.userId,u.email,u.pass,u.fristName,u.lastName,u.phone,u.userAddress,u.cards,u.note,u.dateCreate,p.value_TotalPoint
  from [dbo].[Users] as u,[dbo].[User_Point] as p
  where u.email = @email and u.pass = @pass and u.userId = p.userId
