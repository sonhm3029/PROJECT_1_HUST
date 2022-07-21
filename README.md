# PROJECT 1 - 20212 - HUST

Members:

- Nguyễn Ngọc Mai
- Hoàng Minh Sơn

## I. Các bước chạy project

1. Clone project về
2. Trong Cửa sổ terminal gõ:

```cmd
npm install
```

Để tải về các module đã install được ghi trong file package.json

Sau khi tải các module cần thiết

```cmd
npm dev
```

## II. Cấu trúc thư mục

Thư mục | Mô tả
--------|------
config | Thực hiện các lệnh config cho project
database | Khai báo kết nối đến database 
middleware | Khai báo, thực hiện các middleware
routes | Khai báo các routes, các api
controller | Khai báo cáo controller ứng với các routes ( các file code module thực hiện logic lấy dl từ database -> truyền qua api -> render lên client)
views | Các file template engine ( phần UI)
public | Gồm các thư mục chứa file image, css, js cho việc xây dựng UI/UX


## III. Các công nghệ dùng trong project

1. Mô hình serverside rendering với Expressjs, Template Engine handlebarsjs
2. Triển khai server với AWS:
    - Server environment: Elastic Beanstalk
    - Code compile và deploy lên server environment: Codepipeline
    - Database của AWS: RDS Postgresql với setup security cho các IP theo ý muốn
    - Cron job với lambda function và S3 của AWS để scheduled work ( auto lấy data từ google drive và upload lên database vào 6h sáng mỗi ngày)
    - Sử dụng S3 để lưu trữ và truy xuất dữ liệu.


## IV. Tài liệu tham khảo:


[https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
[https://aws.amazon.com/vi/getting-started/hands-on/build-react-app-amplify-graphql/?pg=cloudessentials](https://aws.amazon.com/vi/getting-started/hands-on/build-react-app-amplify-graphql/?pg=cloudessentials)
[https://aws.amazon.com/vi/getting-started/hands-on/create-nosql-table/?e=gs2020&p=dddb](https://aws.amazon.com/vi/getting-started/hands-on/create-nosql-table/?e=gs2020&p=dddb)
[https://aws.amazon.com/vi/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/](https://aws.amazon.com/vi/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)
[https://aws.amazon.com/vi/getting-started/hands-on/build-web-app-s3-lambda-api-gateway-dynamodb/?trk=gs_card](https://aws.amazon.com/vi/getting-started/hands-on/build-web-app-s3-lambda-api-gateway-dynamodb/?trk=gs_card)
[https://aws.amazon.com/vi/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/](https://aws.amazon.com/vi/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/)


