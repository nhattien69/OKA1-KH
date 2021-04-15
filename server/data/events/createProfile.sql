update [dbo].[Account]
set [TenNguoiDung]=@TenNguoiDung,
    [SoDienThoai]=@SoDienThoai,
    [CMND]=@CMND,
    [Email]=@Email,
    [TheNganHang]=@TheNganHang
where [userId]=@userId

SELECT 
[TenNguoiDung],[SoDienThoai],[CMND],[Email],[TheNganHang]
from [dbo].[Account]
where [userId]=@userId
