import style from '../Lista.module.scss'

interface ItemListaProps {
    tarefa: string;
    tempo: string
}

export default function Item( {tarefa, tempo}: ItemListaProps ){
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
