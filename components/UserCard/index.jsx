import { Svg } from '@components';

import styles from './style.module.scss';


const UserCard = ({avatar, name, email}) =>
{
    return (
        <div className={styles['user-card']}>
            <div className={ styles['user-card_avatar'] }>
                {
                    !avatar && <Svg type='avatar' className={ styles['user-card_avatar--empty'] } />
                }
                {
                    avatar && <img src={avatar } alt={`Avatar ${name}`} />
                }
            </div>
            <div className={ styles['user-card_info'] }>
                <h3>{ name }</h3> 
                <a href={ `mailto:${email}` }>{ email }</a>
            </div>
        </div>
       
    )
}

export {UserCard}