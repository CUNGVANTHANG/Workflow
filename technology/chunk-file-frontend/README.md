## Chunk file

Mục đích dùng để tăng tốc độ upload file nặng và giảm được thời gian upload ở front end

Ở Front end Upload file 1GB thì sẽ mất thời gian hơn do xử lý trên một thread (luồng) duy nhất, thay vì đó ta sẽ chunk (hiểu là cắt file thành nhiều mảng) file rồi gửi đa luồng tới server, Back end sẽ nhận các file này rồi merge (ghép lại) lại thành file ban đầu kích thước 1GB

![image](https://github.com/user-attachments/assets/245bb4a6-8984-4cea-8a03-7b48dcd516cf)

![image](https://github.com/user-attachments/assets/86816d69-6806-40dc-9121-c07023b2a88e)

Nhược điểm: Back end phải tốn công merge lại, nếu front end gửi thông tin (thứ tự file sẽ merge) không chính xác về file thì back end sẽ không merge được gây ra mất dữ liệu. Yêu cầu xử lý chính xác ở front end
