insert into [dbo].[Admins]
(
    [adminUsername],
    [adminPass]
)
values (
     @adminUsername,
    @adminPass
)
SELECT SCOPE_IDENTITY() as adminId