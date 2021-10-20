update [dbo].[Users]
set 
    [cards] = @cards
where [email]=@email

SELECT [email], [cards]
from [dbo].[Users]
where [email]=@email