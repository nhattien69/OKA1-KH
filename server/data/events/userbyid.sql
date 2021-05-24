SELECT 

    [userId],
    email,
    pass,
    fristName,
    lastName,
    phone,
    userAddress,
    cards

from [dbo].[Users]
where userId=@userId