// repositories/userRepository.js

import db from '../database/index.js';

class UserRepository {
  constructor() {
    this.db = db;
  }

  async findByUser(user) {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM users WHERE user = ?', [user], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results[0]);
      });
    });
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM users', (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }

//   async save(user) {
//     return new Promise((resolve, reject) => {
//       this.db.query('INSERT INTO users SET ?', user, (err, results) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(results.insertId);
//       });
//     });
//   }

//   async update(id, user) {
//     return new Promise((resolve, reject) => {
//       this.db.query('UPDATE users SET ? WHERE id = ?', [user, id], (err, results) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(results.changedRows);
//       });
//     });
//   }

//   async delete(id) {
//     return new Promise((resolve, reject) => {
//       this.db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(results.affectedRows > 0);
//       });
//     });
//   }
}

export default new UserRepository();
