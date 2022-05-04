const userData = require('./users')
jest.mock('../services/users.js',()=>{
    return {
        getAllUsers : jest.fn(async () => {
            return {
                "id" : 1,
                "name" : "test",
                "last name" : "test"
            }
        })
    }
})

test('get all users ', async () => {

    const res = {};
    const req = {};
    const next = {};
    
    res.status = (obj) => res;
    res.json = (obj) => {
        return obj
    };


    const data = await userData.getAllUsers(req,res,next);
    console.log(data.users);
    
    expect(data.users.id).toBe(1);
});