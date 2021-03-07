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

export { firebase, database as default };
