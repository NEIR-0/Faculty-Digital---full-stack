# Endpoints :

List of available endpoints:

- POST /login
- POST /register
- GET /

# 1. POST /login

Description:

- POST login

body:

```js
{
    "email": "admin@mail.com",
    "password": "admin123"
}
```

Response (200 - OK)

```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA0ODEyODM3fQ.IFFSbptiqdAPxedLpC9RWcJt9Ms2JPAOZLN6Kw3hjN0"
}
```

Response (400 - Bad Request)

```js
{
    "message": "email cant empty"
}
OR
{
    "message": "password cant empty"
}
```

Response (401 - Unauthenticated)

```js
{
    "message": "email/password invalid"
}
```

# 2. POST /register

Description:

- POST register

body:

```js
{
    "username": "udin",
    "email": "udin@mail.com",
    "password": "udin123"
}
```

Response (201 - OK)

```js
{
    "message": "success add new user"
}
```

Response (400 - Bad Request)

```js
{
    "message": "email cant empty"
}
OR
{
    "message": "password cant empty"
}
OR
{
    "message": "email must be unique"
}
OR
{
    "message": "must be email"
}
OR
{
    "message": "min password 5 lengths"
}
```

# 3. GET /

Description:

- Get all data of company Revenue

Response (200 - OK)

```js
[
    {
        "id": 12,
        "transactionDate": "2023-12-01T00:00:00.000Z",
        "source": "Product Sales",
        "total_Income": 108000000,
        "createdAt": "2024-01-09T15:42:52.425Z",
        "updatedAt": "2024-01-09T15:42:52.425Z"
    },
    {
        "id": 11,
        "transactionDate": "2023-11-01T00:00:00.000Z",
        "source": "Consulting",
        "total_Income": 102000000,
        "createdAt": "2024-01-09T15:42:52.425Z",
        "updatedAt": "2024-01-09T15:42:52.425Z"
    },
    {
        "id": 10,
        "transactionDate": "2023-10-01T00:00:00.000Z",
        "source": "Service Fees",
        "total_Income": 125000000,
        "createdAt": "2024-01-09T15:42:52.425Z",
        "updatedAt": "2024-01-09T15:42:52.425Z"
    },
    ....
];
```

Response (401 - InvalidToken)

```js
{
    "message": "invalid token"
}
```

Response (404 - not found)

```js
{
    "message": "user not found"
}
```

# Global Error

Response (500 - Internal Server Error)

```js
{
  message: "Interval Server Error";
}
```
