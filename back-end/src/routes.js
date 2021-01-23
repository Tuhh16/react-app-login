const express = require('express')
const jwt = require('jsonwebtoken')
const authMiddleware = require('./auth')
const router = express.Router()
const { db } = require('./database/dbconfig')

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const result = await db.get('users')
      .find({ email: email, senha: password })
    .write()

  if(result !== undefined){
      return res.status(200).json({
        result,
        token: jwt.sign(result, 'PRIVATEKEY'),
      });
    }else{
      return res.status(404).json('Usuário ou senha inválido')
    }
});

/**
 * Private route
 */
router.use(authMiddleware);

router.get('/users', async (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Mateus Silva',
      website: 'https://devacademy.com.br',
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      website: 'https://facebook.com',
    },
    {
      id: 3,
      name: 'Bill Gates',
      website: 'https://www.microsoft.com',
    },
  ]);
});

module.exports = router;
