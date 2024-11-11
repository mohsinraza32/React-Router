const StudentList = ({students,atendence}) =>{

    
    return(
        <>
            <table border="1" width={"100%"}>
                <tr>
                    <th>Name</th>
                    <th>Roll Num</th>
                    <th>isActive</th>
                    <th>Adress</th>
                </tr>
                {
                    students.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.roll_num}</td>
                                <td>{item.isActive ? "True" : "False"}</td>
                                <td>{item.adress}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <table border="1" width={"100%"}>
                <tr>
                    <th>Date</th>
                    <th>Id</th>
                    <th>Status</th>
                </tr>
                {
                    atendence.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.id}</td>
                                <td style={{color: item.status === "A" ? "red" : ""}}>{item.status}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}


export default StudentList;