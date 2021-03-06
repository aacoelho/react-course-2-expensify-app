import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBcUb8ARlN-O-qSZCC92z6zMDL6Mncjx-A",
	authDomain: "react-course-2-expensify.firebaseapp.com",
	databaseURL: "https://react-course-2-expensify-default-rtdb.firebaseio.com",
	projectId: "react-course-2-expensify",
	storageBucket: "react-course-2-expensify.appspot.com",
	messagingSenderId: "482033928247",
	appId: "1:482033928247:web:e68b7ccf045f2f313617b2",
	measurementId: "G-4DGVDSC1L4"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
	name: 'Angela Coelho',
	age: 26,
	isSingle: true,
	location: {
		city: 'Coimbra',
		country: 'Portugal'
	}
}).then(() => {
	console.log('Data is saved.');
}).catch((e) => {
	console.log('This failed.', e);
});

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('Porto');

database.ref('attributes').set({
	height: 158,
	weight: 60
}).then(() => {
	console.log('Second set call worked.');
}).catch((e) => {
	console.log('Things didnt for the second error.', e);
});

