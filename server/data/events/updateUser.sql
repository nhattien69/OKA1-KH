update [dbo].[Users]
set [email]=@email,
    [pass]=@pass,
    [fristName]=@fristName,
    [lastName]=@lastName,
    [phone]=@phone,
    [userAddress]=@userAddress,
    [cards]=@cards
where [userId]=@userId


SELECT [email],[pass],[fristName],lastName,phone,userAddress,cards
from [dbo].[Users]
where [userId]=@userId