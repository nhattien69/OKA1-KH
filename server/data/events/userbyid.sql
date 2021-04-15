SELECT 
        [userId],
        [username],
        [pass]
FROM [dbo].[Account]
where [userId] like @userId