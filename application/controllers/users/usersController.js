// import { getAllUsers as getAllUsersService, addUser as addUserService  } from '../../services/userService.js'

import UserRepository from '../../../infrastructure/repositories/userRepository.js';

export const getAllUsers = async (req, res) => {
  try {
    const data = await UserRepository.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).send(`Error al obtener datos ${error}`);
  }
};

export const getUser = async (req, res) => {
  try {
    const data = await UserRepository.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send(`Error al obtener datos ${error}`);
  }
};

// export const addUser = async (req, res) => {
//     try {
//       const newData = req.body;
//       const result = await addUserService(newData);
//       res.json(result);
//     } catch (error) {
//       res.status(500).send('Error al agregar datos');
//     }
//   };