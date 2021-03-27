const { restart } = require('nodemon');
const db = require('../db');

class Entry {
    constructor(entryInfo = {}) {
        this.entryInfo = entryInfo;
    }

    static createEntry(req, res) {
        this.entryInfo = req.body;

        async (req, res) => {
            try {
                await db.one(
                    'INSERT INTO entries (hours, day, wakeup, description, title) VALUES (${hours}, ${day}, ${wakeup}, ${description}, ${title})',
                    req.body
                );
                return res.status(200).json(this.entryInfo);
            }
            catch (err) {
                res.status(500).send(err);
            }
        }
    }

    static getEntries(req, res) {
        async (req, res) => {
            try {
                const entries = await db.any(
                    'SELECT * FROM entries WHERE user_id = ${user_id}', req.params
                );

                return res.status(200).json(entries)
            }
            catch (err) {
                res.status(500).send(err)
            }
        }
    }

    static getOneEntry(req, res) {
        async (req, res) => {
            try {
                const entry = await db.one(
                    'SELECT * FROM entries WHERE id=${id}, user_id=${user_id}', req.params
                );
                return res.status(200).json(entry);
            }
            catch (err) {
                res.status(500).send(err);
            }
        }
    }

    static updateEntry(req, res) {
        async (req, res) => {

            try {
                await db.any(this.parseBody(req));

                return 
            }
            catch (err) {
                res.status(500).send(err)
            }
        }
    }

    static parseBody(request) {
        const changes = Object.entries(request.body);

        let query = 'UPDATE entries SET';

        changes.forEach(([key, value], idx) => {
            if (idx!==changes.length-1) {
                query += ` ${key}=${value},`
            } else {
                query += ` ${key}=${value}`
            }
        })

        query += ` WHERE id=${request.params.id}`

        console.log(query)

        return query
    }

    static deleteEntry(req, res) {
        async (req, res) => {
            try {
                const entry = await db.none('DELETE FROM entries WHERE id=${id}', req.params);

                return res.status(200).json(entry);
            }
            catch (err) {
                res.status(500).send(err);
            }
        }
    }

}

module.exports = Entry;