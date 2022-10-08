import React from 'react';
import { Island, Popup } from '@components';

import PropTypes from 'prop-types';

import styles from './style.module.scss';

const Tasks = ({ tasks }) =>
{
    const monthTasks = tasks.filter(task => task?.type === undefined || task.type === 'default');
    const weeklyTasks = tasks.filter(task => task.type === 'weekly');
    
    return (
        <div className={ styles.tasks }>
            { !!weeklyTasks && <h3 className={ styles.tasks_headline }>Задания на неделю:</h3> }
            <div className={ styles.tasks_container }>
                { !!weeklyTasks && weeklyTasks.map((task, index) =>
                    {
                        const props = {
                            ...task,
                            key: index
                        };
                        return React.createElement(Island, props);
                        
                    })
                }  
            </div>
            { !!monthTasks && <h3 className={ styles.tasks_headline }>Задания на месяц:</h3> }
            <div className={ styles.tasks_container }>
                { !!monthTasks && monthTasks.map((task, index) =>
                    {
                        const props = {
                            ...task,
                            key: index
                        };
                        return React.createElement(Island, props); 
                        
                    })
                }
            </div>
            <Popup
                    type='custom'
                    button='none'
                    isOpenNow={ true }
                    contentLabel="Custom"
                    closePopupNow={ () => setIsOpen(!isOpenNow) }>
            
                    <div className={ styles.tasks_description }>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore facilis
                            sapiente reprehenderit dolores veniam rem modi
                            repudiandae perferendis enim, quos quis sed optio quisquam accusantium quaerat
                            voluptatum aliquid magni!
                        </p>
                    </div>
			</Popup>
        </div>    
    );
};

Tasks.propTypes = {
	tasks: PropTypes.array
};

export {Tasks}