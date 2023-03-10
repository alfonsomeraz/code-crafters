import mongoose from 'mongoose';
import dataEntry from '.model/dataEntry';
const PORT = process.env.PORT || 3001;
const url = "mongodb+srv://ashKittur:8KCwteOgxFsWPcGQ@cluster0.u5jjh5r.mongodb.net/test"
mongoose.connect(url, { useNewUrlParser: true})

// Create a new blog post object
const entry = new Entries({
  success: null,
  _id: "example-id",
  patientId: "example-patientID",
  age: 0,
  sex: "example-sex",
  zipCode: "example-zipCode",
  bmi: 0,
  __v: 0,
  examId: "example-examID",
  keyFindings: "example-keyFindings",
  brixiaScores: 0,
  imageURL: "example-imageURL",
  exams: [{
    _id: "example-id",
    patientId: "example-patientID",
    age: 0,
    sex: "example-sex",
    zipCode: "example-zipCode",
    bmi: 0,
    __v: 0,
    examId: "example-examID",
    keyFindings: "example-keyFindings",
    brixiaScores: 0,
    imageURL: "example-imageURL"
  }]
  });
  
  // Check for successful connection
  const db = mongoose.connection
  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('Connected to database'))
  // App is using json
  app.use(express.json())

  // App using routers
  const indexRouter = require('./routes/index')
  app.use('/index', indexRouter)
  const examsRouter = require('./routes/exams')
  app.use('/exams', examsRouter)
  const usersRouter = require('./routes/users')
  app.use('/users', usersRouter)
  
  app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.use(favicon(__dirname + 'client/build/favicon.ico'));
    app.get('*', function(req, res){
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  // Insert the article in our MongoDB database
  await entry.save();