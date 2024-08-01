const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 8083;
const { exec } = require('child_process');

// Path to your credentials file
const credentialsPath = path.join(__dirname, 'aws-credentials.json');

// Read and parse the credentials file
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

// Configure the AWS SDK
AWS.config.update({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    region: credentials.region
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());


/* -----------Helper Functions----------- */

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function callPHPScript(phpScriptName) {
  return new Promise((resolve, reject) => {
    exec(`php ${phpScriptName}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(200);
      }
    });
  });
}

/* -----------ENDPOINTS----------- */

/* Holocron Endpoints */

app.get('/blue', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/blue.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

app.get('/red', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/red.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

app.get('/green', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/green.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

app.get('/magenta', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/magenta.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

app.get('/white', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/white.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

app.get('/cyan', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/cyan.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

app.get('/lime', async (req, res) => {
  try {
    let phpScriptName = './php/motorOn.php';
    let returnStatus = await callPHPScript(phpScriptName);
    phpScriptName = './php/lime.php';
    returnStatus = await callPHPScript(phpScriptName);
    delay(1000);    
    phpScriptName = './php/motorOff.php';
    returnStatus = await callPHPScript(phpScriptName);
    res.status(returnStatus).send('');
  } catch (error) {
    res.status(500).send('Error executing PHP script');
  }
});

/* Database Endpoints */
app.post('/put-item', (req, res) => {
  console.log("received request for /put-item");

  const params = {
      TableName: 'mgheraDB',
      Item: req.body
  };

  dynamoDB.put(params, (err, data) => {
      if (err) {
          console.log("err: ", err);
          res.status(500).send(err);
      } else {
        console.log("Success Putting in DB!");
          res.status(200).send(data);
      }
  });
  console.log("Completed request for /put-item");
});

app.post('/check-item', (req, res) => {
  const params = {
      TableName: 'mgheraDB',
      Key: {
          user: req.body.user,
      }
  };

  dynamoDB.get(params, (err, data) => {
      if (err) {
          console.error("Error getting item:", err);
          res.status(500).send(err);
      } else {
          if (data.Item) {
            if(data.Item.password == req.body.password) {
              res.status(200).send({ exists: true, id: data.Item.id });
            } else {
              res.status(200).send({ exists: false });
            }
          } else {
              res.status(200).send({ exists: false });
          }
      }
  });
});

app.post('/get-info', (req, res) => {
  const params = {
      TableName: 'mgheraDB',
      IndexName: 'id-index',
      KeyConditionExpression: 'id = :idVal',
      ExpressionAttributeValues: {
          ':idVal': int(req.body.id),
      }
  };

  dynamoDB.query(params, (err, data) => {
      if (err) {
          console.error("Error querying item:", err);
          res.status(500).send(err);
      } else {
          if (data.Items.length > 0) {
              res.status(200).send({ exists: true, user: data.Items[0].user, name: data.Items[0].name, permission: data.Items[0].permission });
          } else {
              res.status(200).send({ exists: false });
          }
      }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
