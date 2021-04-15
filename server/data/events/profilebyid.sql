SELECT 
         [userId],
        [TenNguoiDung],
        [SoDienThoai],
        [CMND],
        [Email],
        [TheNganHang]
FROM [dbo].[Account]
where [TenNguoiDung] like @TenNguoiDung