import React, { FC } from 'react'
import Pagination from '@mui/material/Pagination'

type PaginationControllerProps = {
    variant?: string
    currentPage: number
    totalPages: number
    handlerChangeCurrentPage: (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => void
}

const PaginationController: FC<PaginationControllerProps> = ({
    variant,
    currentPage,
    totalPages,
    handlerChangeCurrentPage,
}) => {
    return (
        <div className="pagination-container">
            <div className={`pagination pagination--${variant}`}>
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
