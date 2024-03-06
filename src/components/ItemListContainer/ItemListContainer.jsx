import classes from './ItemListContainer.module.css'


const List = (props) => {
    return (
        <div>
            <a className={classes.navlist}>{props.greeting}</a>
        </div>
    )
}

export default List;