
export function ListItems(props) {
    return <div>
        <h3>List Items Demo</h3>
        <ul>
            {
                props.list.map((listItem, idx)=>{
                   return <li key={"list-items-"+idx}>{listItem}</li>
                })
            }
        </ul>
    </div>
}