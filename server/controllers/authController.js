import { db } from "../database.js";
import bcrypt from "bcryptjs"; // Encriptar las contraseñas
import jwt from "jsonwebtoken"; // Token de Acceso


export const register = (req, res) => {

  //Verificar si el usuario existe
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if(err) return res.json(err) 
    if(data.length) return res.status(409).json("Ya existe este usuario")

    // Hashear la contraseña y crear el usuario
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      console.log(data)
      if (err) return res.json(err);
      return res.status(200).json("Usuario ha sido creado.");
      
    });
  });
};

export const login = (req, res) => {

  //Verificamos el usuario 
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if(data.length === 0) return res.status(404).json("Usuario no encontrado !!");
  });

  //Verificamos la contraseña
  const isPassCorrect = bcrypt.compareSync(req.body.password, data[0].password);  
  
  if(!isPassCorrect) 
    return res.status(400).json("Usuario o Contraseña Incorrecta!!");

  const token = jwt.sign({ id: data[0].id }, "jwtkey");
  const { password, ...other } = data[0];

  res.cookie("access_token", token, {
    httpOnly: true,
  }).status(200).json(other);
};

export const logout = (req, res) => {

}