const db = require('../db');

class Entry {
    constructor() {

    }

    async createEntry(req, res) {
        // this.entryInfo = req.body;

        // console.log(req.params.user_id)
        // console.log(
        //     await db.query(`SELECT hours FROM entries`)
        // )
        try {
            const entry = await db.one(
                `INSERT INTO entries (hours, day, title, description, user_id) VALUES ($<hours>, $<day>, $<title>, $<description>, ${req.params.user_id}) RETURNING *`,
                req.body
            )
            // console.log("screm")

            
            res.status(200).json(entry);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    async getEntries(req, res) {
        try {
            const entries = await db.any(
                'SELECT * FROM entries WHERE user_id = ${user_id}', req.params
            );

            res.status(200).json(entries)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    async getOneEntry(req, res) {
        try {
            const entry = await db.any(
                'SELECT * FROM entries WHERE id=${id}, user_id=${user_id}', req.params
            );
            res.status(200).json(entry);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    async updateEntry(req, res) {

        try {

            const entry = await db.one
            (Entry.parseBody(req))
            // ('UPDATE entries SET hours=$1 WHERE id=$2 AND user_id=$3 RETURNING *', [req.body.hours, req.params.id, req.params.user_id]);

            res.status(200).json(entry)
        }
        catch (err) {
            res.status(500).send(err)
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

        query += ` WHERE id=${request.params.id} AND user_id=${request.params.user_id} RETURNING *`

        return query
    }

    async deleteEntry(req, res) {
        try {
            const entry = await db.none('DELETE FROM entries WHERE id=${id} AND user_id=${user_id}', req.params);

            res.status(200).json(entry);
        }
        catch (err) {
            res.status(500).send(err);
        }

    }

}

module.exports = Entry;