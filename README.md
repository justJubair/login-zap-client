# Login Zap

- [Live client site](https://login-zap-client.web.app)
- [Live server site](https://login-zap-server.vercel.app)

### User Management Website

- User Authentication: Implemented Firebase for secure user registration and login functionalities.
- Backend: Utilized Express and Node.js for a robust backend.
MongoDB used as the database for efficient storage and management of user data.
- CRUD Operations: Created a comprehensive user management system with CRUD operations (Create, Read, Update, Delete) for members.
- Search Functionality: Implemented a search feature to allow users to easily locate and filter members.
- Responsive Design: Employed TailwindCSS to ensure a visually appealing and responsive user interface across various devices.
- React Components: Utilized React components for a modular and maintainable codebase, promoting reusability.

### Getting Started:
- Clone the repository
```
git clone https://github.com/justJubair/login-zap-client.git
```

- Install the dependencies
```
npm install
```

- Create a project on firebase and update the credentials on .env.local file
```
VITE_APIKEY=Your_Credentials
VITE_AUTHDOMAIN=Your_Credentials
VITE_PROJECTID=Your_Credentials
VITE_STORAGEBUCKET=Your_Credentials
VITE_MESSAGINGSENDERID=Your_Credentials
VITE_APPID=Your_Credentials
```

- Run the application
```
npm run dev
``` 

- In order to access CRUD functionality, you also have to clone the [server side](https://github.com/justJubair/login-zap-server)





