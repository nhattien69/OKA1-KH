import React from 'react';
import axios from 'axios';

function ListUser(){
    window.addEventListener('load', async () => {
        try{
            const listUser = await axios
            .get(`https://oka1kh.azurewebsites.net/api/users`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("listUser: ", listUser);

            document.getElementById("user_table").innerHTML = "";

            document.getElementById("user_table").innerHTML = 
            "<tr>" +
                "<td>STT</td>"  +
                "<td>Mã user</td>"  +
                "<td>Họ user</td>"  +
                "<td>Tên user</td>" +
                "<td>Email</td>" +
                "<td>Số điện thoại</td>" +
            "</tr>" ;
            for(let i = 0; i < listUser.Users.length; i++)
            {
                document.getElementById("user_table").innerHTML +=
                "<tr>" +
                    "<td>" + (i+1) + ". </td>" +
                    "<td>" + listUser.Users[i].userId + "</td>" +
                    "<td>" + listUser.Users[i].lastName + "</td>" +               
                    "<td>" + listUser.Users[i].fristName + "</td>" +
                    "<td>" + listUser.Users[i].email + "</td>" +
                    "<td>" + listUser.Users[i].phone + "</td>" +
                "</tr>";
            }
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    })
    return(
        <div>
            <h2>Danh sách user</h2>
            <table id="user_table">

            </table>
        </div>
    );
}

export default ListUser;