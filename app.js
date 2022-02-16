import express from 'express';
import * as Eta from 'eta';

const app = express();
app.engine('eta', Eta.renderFile);
app.set('view engine', 'eta');
app.set('views', './views');
const port = 3000;

app.get('/', (req, res) => {
  res.render('output', { name: 'Jane Doe' });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
