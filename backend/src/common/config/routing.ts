import express from 'express';
import * as bodyParser from "body-parser";
import * as swagger from 'swagger-express-ts';
import swaggerUi from 'swagger-ui-express';
const router: express.Router = express.Router();

router.use('/', function(request, response){
  response.status(200);
})
router.use(swagger.express(
  {
    definition : {
      openapi: "3.0",
      info : {
        title : "Api" ,
        version : "1.0"
      } ,
    }
  }
));
router.use('/api-docs/swagger', swaggerUi.serve, swaggerUi.setup({}, {
  swaggerOptions: {
    url: '/api/v1/api-docs/swagger.json'
  }
}));
router.use(bodyParser.json());



router.use(function (err, req, res, next) {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ error: 'Invalid token' });
  }
});

export {
  router
}
