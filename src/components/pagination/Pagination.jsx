import './Pagination.css'


export default function Pagination( {total, limit, getFunction} ) {

    const btns = Math.ceil(total / limit)

    let btnArray = []

    for(let i = 0; i < btns; i++){
        btnArray.push(<button key={i} onClick={()=> getFunction(i)} className='pagination-button'>{ i + 1 }</button>)
    }

    return(
        <div className='pagination-container'>
            { btnArray }
        </div>
    )

}
