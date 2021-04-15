insert into [dbo].[Account]
(
    [username],
    [pass]
)
values (
    @username,
    @pass
)
SELECT 
        [userId], [username],[pass]
from [dbo].[Account]
