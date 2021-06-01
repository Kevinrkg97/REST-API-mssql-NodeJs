import {getConnection, queries} from '../database';




export const getTecnicos = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct);
        res.json(result.recordset);
    }catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTecnicosById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("Id", id)
        .query(queries.getTecnicosById);

    res.send(result.recordset[0]);
};