
export function ListItems(props) {
    return <div>
        <h4>{props.heading}</h4>
        <ul>
            {
                props.list.map((listItem, idx)=>{
                   return <li key={"list-items-"+idx}>{listItem}</li>
                })
            }
        </ul>
    </div>
}