update [dbo].[Account]
set [username]=@username,
    [pass]=@pass
where [userId]=@userId


SELECT [username],[pass]
from [dbo].[Account]
where [userId]=@userId