
update [dbo].[User_Point]
set 
   
    [value_TotalPoint]= value_TotalPoint + @point,
    [day_Point]=@day_Point
where [userId]=@userId

select u.userId,u.email,p.value_TotalPoint,p.day_Point
  from [dbo].[Users] as u,[dbo].[User_Point] as p 
  where u.userId = p.userId AND u.userId = @userId