import { ThemeProvider } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { createMuiTheme } from '@material-ui/core';

import React from 'react'


const darkTheme = createMuiTheme ({
    palette:{
        type: "dark",
    },
});

const CustomPagination = ({setPage,numOfPages = 10}) => {

    const handlePageChange = (page) =>{
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div style={{width:"100%",display:"flex", justifyContent:"center",marginTop:"10px"}}>
        <ThemeProvider theme={darkTheme}>
            <Pagination count= {numOfPages} hideNextButton hidePrevButton color='primary'  onChange ={(e)=>handlePageChange(e.target.textContent)}  />
        </ThemeProvider>
        </div>
    )
}

export default CustomPagination
