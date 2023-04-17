const getContacts = "SELECT * FROM contacts_t";

const getContactById = "SELECT * FROM contacts_t WHERE id = $1";

module.exports = {
    getContacts, getContactById
}