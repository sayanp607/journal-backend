 # JOURNAL BACKEND

## 🌍 About the Project
- Proper Registration and Login system using JWT authentication .
- Add,view,edit,delete journals using CRUD operations.
 <!--line-->

 
## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/sayanp607/journal-backend.git
cd journal-backend
```

### **2️⃣ Install Dependencies**
```sh
npm init -y
npm install bcryptjs jsonwebtoken express mongoose cors dotenv
npm install --save-dev nodemon
```
### **3️⃣ Set Up Environment Variables**
```sh
MONGODB_URI= give your monodb connection link
PORT=5000
JWT_SECRET = give anything as per your wish
```
### **4️⃣ Update Scripts in package.json**
```sh
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

```

### **5️⃣ Run the Server**
```sh
npm run dev
```

Now, visit `http://localhost:5000` to see the project in action! 🎉

<!--line-->
 
