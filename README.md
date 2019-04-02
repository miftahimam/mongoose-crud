# mongoose-crud

## List of routes

### Books

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `/books` | GET | `none` | `none` | Get all books info |
| `/books` | POST | `none` | `isbn:String`,`title:String`,`author:String`,`category:String`,`stock:number` | Create a book |
| `/books/:id` | DELETE | `none` | `_id : ObjectId` | Delete a book by its id |
| `/books/:id` | PUT | `none` | `title:String`, `field:String`, `value:String` | Update a book with new info by its title |
| `/books/:id` | GET | `none` | `_id : ObjectId` | Get info a book by its id |

### Members

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `/members` | GET | `none` | `none` | Get all users info |
| `/members` | POST | `none` | `name:String`,`address:String`,`zipcode:String`,`email:String`,`phone:String` | Create a member |
| `/members/:id` | DELETE | `none` | `_id : ObjectId` | Delete a member by its _id |
| `/members/:id` | PUT | `none` | `_id:ObjectId`, `field:String`, `value:String` | Update a member with new info by its _id |
| `/members/:id` | GET | `none` | `_id:ObjectId`, `field:String`, `value:String` | Get a member info by its _id |

### Transactions

| Route | HTTP | Params | Body | Description |
| ----- | ---- | --------- | ---- | ----------- |
| `/transactions` | GET | `none` | `none` | Get all users info |
| `/transactions` | POST | `none` | `member:ObjectId`,`in_date:Date`,`out_date:Date`,`due_date:Date`,`booklist:ObjectId` | Create a new transaction. |
| `/transactions/:id` | DELETE | `none` | `_id` | Delete a transaction by its _id |
| `/transactions/:id` | PUT | `none` | `_id:ObjectId`, `field:String`, `value:String` | Update a transaction with new info by its _id |
| `/transactions/:id` | GET | `none` | `_id:String`, `field:String`, `value:String` | Get  an info transaction by its _id |


## Usage

Make sure you have Node.js and npm installed on your computer, then run these commands:

``` 
npm install
npm run dev
```

Access the  on `http://localhost:9000/`