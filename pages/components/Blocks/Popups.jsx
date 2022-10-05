import { Popup } from '@components';

import styles from '../style.module.scss'

const PopupBlock = () => {

	return (
		<div
				style={{
					width: 200,
					display: 'flex',
					flexDirection: 'column',
					gap: 10,
            } }>
            
                <h3>Попапы:</h3>
				<Popup
					type='success'
					button='border'
					buttonText='Success попап'
					classNameButton={styles.button}
        			contentLabel="Success"
				>
					It is Success!
      			</Popup>
				
				<Popup
					type='error'
					button='border'
					buttonText='Error попап'
					classNameButton={styles.button}
        			contentLabel="Error"
				>
					It is Error!
                </Popup>
                <Popup
					type='confirm'
					button='border'
                    buttonText='Confirm попап'
                    buttonPopupConfirm='Delete'
                    buttonPopupDelete='Cancel'
					classNameButton={styles.button}
        			contentLabel="Error"
				>
					Do you want delete?
      			</Popup>
			</div>
	);
};

export { PopupBlock };
