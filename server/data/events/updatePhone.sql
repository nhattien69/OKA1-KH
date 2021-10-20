update [dbo].[Users]
set 
    [phone] = @phone
where [userId]=@userId

SELECT [email],[phone]
from [dbo].[Users]
where [userId]=@userId