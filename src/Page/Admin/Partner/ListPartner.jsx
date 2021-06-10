import React from 'react';
import axios from 'axios';

function ListPartner(){
    window.addEventListener('load', async () => {
        try{
            const listPartner = await axios
            .get(`https://oka1kh.azurewebsites.net/api/partners`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("list: ", listPartner);

            document.getElementById("partner_table").innerHTML = "";

            document.getElementById("partner_table").innerHTML = 
            "<tr>" +
                "<td>STT</td>"  +
                "<td>Mã partner</td>"  +
                "<td>Tên partner</td>"  +
                "<td>Vai trò</td>"  +
            "</tr>" ;
            for(let i = 0; i < listPartner.Partner.length; i++)
            {
                document.getElementById("partner_table").innerHTML +=
                "<tr>" +
                    "<td>" + (i+1) + ". </td>" +
                    "<td>" + listPartner.Partner[i].partnerId + "</td>" +
                    "<td>" + listPartner.Partner[i].partnerUername + "</td>" +
                    "<td>" + listPartner.Partner[i].partnerRole + "</td>" +                        
                "</tr>";
            }
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    })
    return(
        <div>
            <h2>Danh sách partner</h2>
            <table id="partner_table">

            </table>
        </div>
    );
}

export default ListPartner;