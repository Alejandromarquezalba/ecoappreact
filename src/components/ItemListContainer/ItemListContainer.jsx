import classes from './ItemListContainer.module.css'


const List = (props) => {
    return (
        <ul>
            <a className={classes.navlist}>{props.greeting}</a>
        </ul>
    )
}

export default List;