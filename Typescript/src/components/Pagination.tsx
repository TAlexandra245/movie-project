import React from 'react'


const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }: any) => {

    let pages:Array<any> = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((page: any, index: any) => {
                return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}

        </div>
    )
}

export default Pagination