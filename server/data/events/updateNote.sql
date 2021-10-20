update [dbo].[Users]
set 
    [note] = @note
where [email]=@email

SELECT [email],[note]
from [dbo].[Users]
where [email]=@email