insert into [dbo].[Users]
(
    [email],
    [pass],
    [dateCreate]
)
values (
    @email,
    @pass,
    CAST( GETDATE() AS Date )
)
SELECT SCOPE_IDENTITY() as userId
