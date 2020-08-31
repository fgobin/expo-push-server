## Coreline's expo push server

### Development
```bash
npm start
```

### Linting
```bash
npm run lint
```

### Production run
```bash
node src/backend
```
Can be automatically deployed to heroku because of Procfile

### Trying out the backend
Open your browser and visit graphql console at http://localhost:5001/playground.
After setting "request.credentials" to "include" in console settings, you can try out the backend there.

### Env variables for production run
DATABASE_TYPE=postgres  
DATABASE_URL=postgres://user:password@host:post/database-name (automatically provided by Heroku's postgres)  
JWT_SECRET=random-string  
PORT=5001 (automatically provided by Heroku)  
