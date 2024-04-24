# Book Management System
Create an .env file with the help of given env example and add the values
# API's

## **Authentication**

**SignUp** - Route(POST) - http://localhost:PORT/api/auth/signup
Body -{
  "email":"email@email.email",
  "password":"email"
}

**SignIn** - Route(POST) - http://localhost:PORT/api/auth/signin
Body -{
  "email":"email@email.email",
  "password":"email"
}
Cookie - access_token -"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhjZDI4ZjFiZTdkMDEzYjY1ZGI0YyIsImlhdCI6MTcxMzk1MDExOH0.3xXQ7OPasNU8dwxBClQAvFJ3cwn4LBlvdjneW8Cd1jw"

**SignOut**-Route(GET) - http://localhost:PORT/api/auth/signout

## **CRUD Books**
A user must be Signed In to use the api's
**Create**-Route()-http://localhost:PORT/api/book/create
Body-{
  "name":"bookName",
  "author":"authername",
  "year":2012
}
**Get/Filter**-Route(GET)-http://localhost:PORT/api/book/get?name=bookname&auther=authername&year=2212
**GetOne**-Route(GET)-http://localhost:PORT/api/book/get/id
**Update**-Route(POST) -http://localhost:PORT/api/book/update/id
Body(only add the values that are need to be updates)-{
  "name":"bookName",
  "author":"authername",
  "year":2012
}
**Delete**-Route(DELETE)-http://localhost:PORT/api/book/delete/id