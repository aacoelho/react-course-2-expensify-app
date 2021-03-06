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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
// 	});

// 	console.log(expenses);
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			})
// 		});

// 		console.log(expenses);
// 	});

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createAt: 976123498763
// });

// database.ref('notes/-MV8Kn4rjJUAuK8fASat').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref().set({
// 	name: 'Angela Coelho',
// 	age: 27,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Frontend developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Coimbra',
// 		country: 'Portugal'
// 	}
// }).then(() => {
// 	console.log('Data is saved.');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Porto'
// });

// database.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed.');
// 	}).catch((e) => {
// 		console.log('Did not remove data', e);
// 	});
