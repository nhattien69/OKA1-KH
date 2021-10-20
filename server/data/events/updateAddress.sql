update [dbo].[Users]
set 
    [userAddress] = @userAddress
where [email]=@email

SELECT [email],[userAddress]
from [dbo].[Users]
where [email]=@email