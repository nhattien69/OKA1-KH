update [dbo].[Users]
set  
    [pass]=@pass
where [userId]=@userId

SELECT [email],[pass]
from [dbo].[Users]
where [userId]=@userId
