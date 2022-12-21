type Row = {
    row: number | any
}

const Rating = ({ row }: Row) => {
    let arr = []
    let arrRow = row
    for (let i = 0;i < 5;i++) {
        arr.push(i)
    }

    return <>
        {arr.map((rating, index) => {
            return <span key={index} className={`block w-5 h-2 rounded-lg mx-1 my-4 ${index <= arrRow ? 'bg-[#544439]' : 'bg-[#E0E0E0]'}`}></span>
        })}
    </>

}
export default Rating
