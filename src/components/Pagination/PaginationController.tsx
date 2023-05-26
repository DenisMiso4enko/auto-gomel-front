import React, { FC } from 'react'
import Pagination from '@mui/material/Pagination'

type PaginationControllerProps = {
    currentPage: number
    totalPages: number
    handlerChangeCurrentPage: (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => void
}

const PaginationController: FC<PaginationControllerProps> = ({
    currentPage,
    totalPages,
    handlerChangeCurrentPage,
}) => {
    return (
        <div className="pagination-container">
            <div className="pagination">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlerChangeCurrentPage}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    )
}

export default PaginationController
