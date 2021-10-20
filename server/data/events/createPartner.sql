insert into [dbo].[Partners]
(
    [partnerUsername],
    [partnerPass],
    [partnerRole]
)
values (
    @partnerUsername,
    @partnerPass,
    @partnerRole
)
SELECT SCOPE_IDENTITY() as partnerId