update [dbo].[Users]
set 
    [fristName]=@fristName,
    [lastName]=@lastName
where [userId]=@userId


SELECT [email],[fristName],lastName
from [dbo].[Users]
where [userId]=@userId