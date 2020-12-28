import React from 'react';

import {
	SelectionWrapper,
	SelectionOption,
} from './InputSelectStyles.elements';

const InputSelect = () => {
	return (
		<SelectionWrapper>
			<SelectionOption selected disabled hidden>
				Choose your device
			</SelectionOption>
			<SelectionOption>Option 1</SelectionOption>
			<SelectionOption>Option 2</SelectionOption>
		</SelectionWrapper>
	);
};

export default InputSelect;
