/**
 *  obj = {
 *      name: "saidur rahman",
 *      age: 32,
 *      linkedId: 'linked/In/srsetu',
 *      email: 'srsetu@gmail.com',
 *      phone: '+884535435452',
 *      skills: ['js', 'react', 'wp', 'php', 'node'],
 *      interests: ['football', 'chess', 'Astronomy', 'traveling']
 *
 * }
 *
 */

const BioData = (props) => {
	console.log(props, "props");

	return (
		<div className="bio-data">
			<h2>BioData of {props.name}</h2>
			<hr />
			<div className="personal-info">
				<p>Age: {props.age}</p>
				<p>Phone: {props.phone}</p>
				<p>email: {props.email}</p>
				<p>LinkedId: {props.linkedIn}</p>
			</div>
			<div className="skills">
				<h2>My Skills:</h2>
				<ul>
					{props?.skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="interests">
				<h2>My Interests:</h2>
				<ul>
					{props?.interests?.map((interest) => (
						<li key={interest}>{interest}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

// const add = (a, b) => {
// 	return a + b;
// };

// add(10, 20);

// add(100, 200);

export default BioData;
