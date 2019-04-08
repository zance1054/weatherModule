import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';


export default class ForecastCard extends Component {

	render() {
		let time;

		// Create a new date from the passed date time
		var date = new Date(this.props.detail.dt*1000);

		// Hours part from the timestamp
		var hours = date.getHours();

		//converts default military time to standard time 
		if(Number(hours) > 12)
		{
			var tmp = Number(hours) - 12;

			hours = String(tmp);

			var status = " PM";
		}

		else
		{
				var status = " AM"
		}

		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();

		time = hours + ':' + minutes.substr(-2) + status;

		return (
			<Card containerStyle={styles.card}>
				<Text style={styles.notes}>{this.props.location}</Text>

				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
					<Image style={{width:100, height:100}} source={{uri:"https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png"}} />
					<Text style={styles.time}>{time}</Text>
				</View>


				<Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />

				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Text style={styles.notes}>{this.props.detail.weather[0].description}</Text>
					<Text style={styles.notes}>{Math.round( this.props.detail.main.temp * 10) / 10 }&#8457;</Text>
				</View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	card:{
		backgroundColor:'rgba(56, 172, 236, 1)',
		borderWidth:0,
		borderRadius:20
	},
	time:{
		fontSize:38,
		color:'#fff'
	},
	notes: {
		fontSize: 18,
		color:'#fff',
		textTransform:'capitalize'
	}
});
