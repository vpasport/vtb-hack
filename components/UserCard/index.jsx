import { Svg } from '@components';


const UserCard = ({avatar, name}) =>
{
    return (
        <div>
            {
                !avatar && <Svg type='error404' />
            }
            <h3>{name}</h3> 
        </div>
       
    )
}

export {UserCard}