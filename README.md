## Trybesmith

The project was developed at the end of Trybe's 26th block, where I studied _Typescript_.

![some-codes](https://user-images.githubusercontent.com/99998543/194629856-a7a0c94c-0038-4006-bc2c-f76799942830.png)

### How it works

I am thrilled to present my first project using Typescript. This time I produced a restful API, using Typescript and Express.
The application has endpoints to GET and POST information in a MySql database.

### Endpoints

<details>
<summary><h4>POST</h4></summary>

- **`/products`**: to create a new product.
	- requisition body model:
```json
{
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}
```

- **`/users`**: to create a new user.
	- requisition body model:
```json
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

- **`/login`**: to sign in with a user.
	- requisition body model:
```json
{ 
  "username": "MAX",
  "password": "SavingPeople"
}
```

- **`/orders`**: to create a new order with your user.
	- For this endpoint you need to send a token by the `Authentication` key on the header. The token you be receive when you sign in (`POST /login`).
	- requisition body model:
```json
{
  "productsIds": [1, 2]
}
```
</details>

<details>
<summary><h4>GET</h4></summary>

- **`/products`**: to list all products.
- **`/orders`**: to list all orders.
</details>

----------

If you see something that can be improved, don’t hesitate to contact me! All feedback is very welcome.✨
