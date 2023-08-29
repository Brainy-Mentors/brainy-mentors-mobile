import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, mentorId TEXT, text TEXT, isCurrentUser INTEGER)'
    );
  });
};

const insertMessage = (mentorId, text, isCurrentUser, callback) => {
  console.log(mentorId, text, isCurrentUser, "addmessage insert!");

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO messages (mentorId, text, isCurrentUser) VALUES (?, ?, ?)',
      [mentorId, text, isCurrentUser ? 1 : 0],
      (_, { insertId }) => {
        callback(insertId);
      }
    );
  });
};

const getAllMessages = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM messages', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};
const getAllMessagesByMentorId = (mentorId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM messages WHERE mentorId = ?',
      [mentorId],
      (_, { rows }) => {
        callback(rows._array);
      }
    );
  });
};

export { setupDatabase, insertMessage, getAllMessages, getAllMessagesByMentorId };
