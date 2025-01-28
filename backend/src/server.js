const app = require('./config/app');

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})