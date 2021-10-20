insert into [dbo].[Users]
(
    [email],
    [pass],
    [fristName],
    [lastName],
    [phone],
    [userAddress],
    [cards],
    [dateCreate]
)
values (
    @email,
    @pass,
    @fristName,
    @lastName,
    @phone,
    @userAddress,
    @cards,
    GETDATE()
)
SELECT SCOPE_IDENTITY() as userId
