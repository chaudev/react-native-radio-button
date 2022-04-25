// NGUYEN PHUC BAO CHAU - 25/04/2022
// REACT NATIVE 0.67.4
// TYPESCRIPT 4.6.2

import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const RadioButton = (props: RNRadioButton): JSX.Element => {
	const {size, color, activedColor, title, fontFamily, textColor, fontSize} = props;

	const _press = () => {
		!!props.onPress && props.onPress();
	};

	return (
		<View style={{flexDirection: 'row', alignItems: 'center'}}>
			<TouchableOpacity
				onPress={_press}
				activeOpacity={0.5}
				style={[
					styles.container,
					{
						...props.style,
						...props.containerStyle,
						backgroundColor: !!color ? color : '#E5F2FF',
						width: !!size ? size : 24,
						height: !!size ? size : 24,
					},
				]}>
				{!!props?.children && <>{props.children}</>}
				{!props?.children && props.actived && (
					<View
						style={[
							styles.active,
							{
								...props.activedStyle,
								backgroundColor: !!activedColor ? activedColor : '#007AFF',
								width: !!size ? size - 10 : 14,
								height: !!size ? size - 10 : 14,
							},
						]}
					/>
				)}
			</TouchableOpacity>

			{!!title && (
				<Text
					style={{
						marginLeft: 10,
						fontFamily: !!fontFamily ? fontFamily : '',
						fontSize: !!fontSize ? fontSize : 14,
						color: !!textColor ? textColor : '#000',
						fontWeight: !!props?.fontWeight ? props?.fontWeight : 'normal',
					}}>
					{title}
				</Text>
			)}
		</View>
	);
};

export default RadioButton;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 999,
	},
	active: {
		borderRadius: 999,
	},
});
