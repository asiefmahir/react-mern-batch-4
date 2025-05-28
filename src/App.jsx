import BioData from "./components/BioData";

const bioDataInfo = [
	{
		name: "saidur rahman",
		age: 32,
		linkedId: "linked/In/srsetu",
		email: "srsetu@gmail.com",
		phone: "+884535435452",
		skills: ["js", "react", "wp", "php", "node"],
		interests: ["football", "chess", "Astronomy", "traveling"],
	},
	{
		name: "Asiefmahir",
		age: 26,
		linkedId: "linked/In/asiefmahir",
		email: "asiefmahir1@gmail.com",
		phone: "+453543545454",
		skills: ["js", "react", "node"],
		interests: ["football", "traveling"],
	},
	{
		name: "Saifur Rahman",
		age: 28,
		linkedId: "linked/In/asiefmahir",
		email: "asiefmahir1@gmail.com",
		phone: "+453543545454",
		skills: ["js", "react"],
		interests: ["football", "traveling"],
	},
];

// two Layer of a component
// Presentation Layer
// Data Layer/Logic Layer ->

function App() {
	let name = "mahir asief";
	// const clickHandler = (e) => {
	// 	console.log(e.target);
	// };
	return (
		<>
			<button
				onClick={(e) => {
					console.log(e.target);
				}}
			>
				Random Button
			</button>
			{bioDataInfo.map((bioData) => (
				<BioData
					name={bioData.name}
					age={bioData.age}
					linkedId={bioData.linkedId}
					email={bioData.email}
					phone={bioData.phone}
					skills={bioData.skills}
					interests={bioData.interests}
				/>
			))}
		</>
	);
}
// props

// BioData()

// class Person {

// }
// jsx ->

// App()
// <App />
// Component ->
// 3 rules
// 1) A Component Must be a Function
// 2) That function should return 'something'
// 3) That 'something' should be some html-type code (jsx coe)
// jsx ->

export default App;
