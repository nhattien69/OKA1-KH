SELECT 
        [userId],
        [username],
        [pass]
FROM [dbo].[Account]
where [username] like @username 