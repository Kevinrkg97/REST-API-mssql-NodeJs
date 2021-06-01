export const queries = {
    getAllProduct: 'SELECT * FROM bd_tecnicos_datos_telefonos',
    getTecnicosById: 'SELECT * FROM bd_tecnicos_datos_telefonos WHERE id_tecnico_dato_telefono = @Id'
}