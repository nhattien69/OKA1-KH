insert into [Account]
(
    [username],
    [pass]
)
values (
    @username,
    @pass
)
SELECT SCOPE_IDENTITY() as userId