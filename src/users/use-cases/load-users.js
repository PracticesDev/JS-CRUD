

export const loadUsers = async (page = 1) => {

    const url = `${import.meta.env.VITE_DB_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)

}