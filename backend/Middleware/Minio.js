import Minio from 'minio'
const client = new Minio.Client({
    endPoint: 'http://localhost:9001/',
    accessKey: 'dev',
    secretKey: 'password123',
    secure: false,
})


