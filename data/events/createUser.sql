insert into [dbo].[Account]
(
    [username],
    [pass]
)
values (
    @username,
    @pass
)
SELECT SCOPE_IDENTITY() as userId