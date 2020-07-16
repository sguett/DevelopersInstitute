const knex = require('knex');


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'postgres2626',
        database: 'hr1'
    }
});

// LESSON

// console.log(db.select('*').from('countries'));
// db.select().from('countries').where('country_name', 'Argentina')
//     .then(data => {
//         console.log(data);
//     })

// db('countries').where('country_id', 'ZW').update('country_name', 'Zimbabwee').returning('*')
//     .then(data => {
//         console.log(data);
//     })

// db('countries')
//     .where('country_id', 'ZZ')
//     .update({
//         country_id: 'ZW',
//         country_name: 'Zimbabwe'
//     })
//     .returning('*')
//     .then(data => {
//         console.log(data);
//     })

// db('countries')
//     .insert([
//         {
//             country_id: 'TN',
//             country_name: 'Timbabwe',
//             region_id: 4
//         },
//         {
//             country_id: 'QN',
//             country_name: 'Qimbabwe',
//             region_id: 4
//         }
//     ])
//     .returning('*')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

// db('countries')
//     .where({ country_id: 'QN' })
//     .del()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

// db('countries')
//     .join('locations', 'countries.country_id', 'locations.country_id')
//     .select('countries.country_id', 'countries.country_name', 'locations.city')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

// db('countries')
//     .join('locations', 'countries.country_id', 'locations.country_id')
//     .select('countries.country_id', 'countries.country_name', 'locations.city')
//     .then(data => {
//         data.forEach(item => {
//             console.log(item.country_id, item.city);
//         })
//     })
//     .catch(err => {
//         console.log(err.message);
//     })


// db('countries')
//     .count('country_id')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

// db.transaction((trx) => {
//     trx('countries')
//         .insert({
//             country_id: 'CC',
//             country_name: 'ccccc',
//             region_id: 4
//         })
//         .returning('*')
//         .then(data => {
//             return trx('countries')
//                 .insert({
//                     country_id: 'DD',
//                     country_name: 'ddddd',
//                     region_id: 4
//                 })
//                 .returning('*')
//                 .then(data => {
//                     console.log(data);
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 })
//         })
//         .then(
//             trx.commit
//         )
//         .catch(
//             trx.rollback
//         )
// }
// )


// EXERCISE

// 1. create table in hr database - table name logins
// 2. id, username, password
// 3. login Form
// 4. save the login info into the login table
// 5. if username not exist - insert into table
// 6. if username exist - check if password is correct
// 7. return a message to the user

// db.schema.createTable('logins', function (table) {
//     table.increments();
//     table.string('username');
//     table.string('password');
// })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })



