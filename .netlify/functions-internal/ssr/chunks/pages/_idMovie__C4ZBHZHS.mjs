/* empty css                          */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, g as addAttribute, i as renderTransition } from '../astro_DwIvQ8Gp.mjs';
import { $ as $$Layout } from './404_CM9X1WA9.mjs';
/* empty css                              */
/* empty css                          */

const movies = [
	{
		title: "Avatar",
		release_date: "2009-12-15",
		director: "James Cameron",
		actors: [
			"Sam Worthington",
			"Zoe Saldana",
			"Sigourney Weaver"
		],
		genre: "Action, Adventure, Fantasy",
		synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
		image: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
		rating: 7.8,
		trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
	},
	{
		title: "Avengers: Endgame",
		release_date: "2019-04-26",
		director: "Anthony Russo, Joe Russo",
		actors: [
			"Robert Downey Jr.",
			"Chris Evans",
			"Mark Ruffalo"
		],
		genre: "Action, Adventure, Drama",
		synopsis: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
		image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
		rating: 8.4,
		trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
	},
	{
		title: "Titanic",
		release_date: "1997-12-19",
		director: "James Cameron",
		actors: [
			"Leonardo DiCaprio",
			"Kate Winslet",
			"Billy Zane"
		],
		genre: "Drama, Romance",
		synopsis: "A seventeen-release_date-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
		image: "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UY218_.jpg",
		rating: 7.9,
		trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ"
	},
	{
		title: "Star Wars: Episode VII - The Force Awakens",
		release_date: "2015-12-15",
		director: "J.J. Abrams",
		actors: [
			"Daisy Ridley",
			"John Boyega",
			"Oscar Isaac"
		],
		genre: "Action, Adventure, Fantasy",
		synopsis: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
		image: "https://m.media-amazon.com/images/I/91FDYb0ehmL._AC_UY218_.jpg",
		rating: 7.9,
		trailer: "https://www.youtube.com/embed/sGbxmsDFVnE"
	},
	{
		title: "Avengers: Infinity War",
		release_date: "2018-04-25",
		director: "Anthony Russo, Joe Russo",
		actors: [
			"Robert Downey Jr.",
			"Chris Hemsworth",
			"Mark Ruffalo"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
		image: "https://m.media-amazon.com/images/I/91HAJrnBx0L._AC_UY218_.jpg",
		rating: 8.4,
		trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8"
	},
	{
		title: "Spider-Man: No Way Home",
		release_date: "2021-12-15",
		director: "Jon Watts",
		actors: [
			"Tom Holland",
			"Zendaya",
			"Benedict Cumberbatch"
		],
		genre: "Action, Adventure, Fantasy",
		synopsis: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
		image: "https://m.media-amazon.com/images/I/81Yopa9w4yL._AC_UY218_.jpg",
		rating: 8.3,
		trailer: "https://www.youtube.com/embed/JfVOs4VSpmA"
	},
	{
		title: "Jurassic World",
		release_date: "2015-06-12",
		director: "Colin Trevorrow",
		actors: [
			"Chris Pratt",
			"Bryce Dallas Howard",
			"Ty Simpkins"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
		image: "https://m.media-amazon.com/images/I/81bEk4cFbHL._AC_UY218_.jpg",
		rating: 7,
		trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
	},
	{
		title: "The Lion King",
		release_date: "2019-07-12",
		director: "Jon Favreau",
		actors: [
			"Donald Glover",
			"Beyoncé",
			"Seth Rogen"
		],
		genre: "Animation, Adventure, Drama",
		synopsis: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
		image: "https://m.media-amazon.com/images/I/81aLWmKrNVL._AC_UY218_.jpg",
		rating: 6.9,
		trailer: "https://www.youtube.com/embed/7TavVZMewpY"
	},
	{
		title: "The Avengers",
		release_date: "2012-04-25",
		director: "Joss Whedon",
		actors: [
			"Robert Downey Jr.",
			"Chris Evans",
			"Scarlett Johansson"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
		image: "https://m.media-amazon.com/images/I/81lMrc8bBRL._AC_UY218_.jpg",
		rating: 8,
		trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
	},
	{
		title: "Furious 7",
		release_date: "2015-04-01",
		director: "James Wan",
		actors: [
			"Vin Diesel",
			"Paul Walker",
			"Dwayne Johnson"
		],
		genre: "Action, Adventure, Thriller",
		synopsis: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
		image: "https://m.media-amazon.com/images/I/81ClciXon2L._AC_UY218_.jpg",
		rating: 7.1,
		trailer: "https://www.youtube.com/embed/Skpu5HaVkOc"
	},
	{
		title: "Frozen II",
		release_date: "2019-11-20",
		director: "Chris Buck, Jennifer Lee",
		actors: [
			"Kristen Bell",
			"Idina Menzel",
			"Josh Gad"
		],
		genre: "Animation, Adventure, Comedy",
		synopsis: "Anna, Elsa, Kristoff, Olaf, and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
		image: "https://m.media-amazon.com/images/I/91ttPlXef0L._AC_UY218_.jpg",
		rating: 6.8,
		trailer: "https://www.youtube.com/embed/bwzLiQZDw2I"
	},
	{
		title: "Avengers: Age of Ultron",
		release_date: "2015-04-22",
		director: "Joss Whedon",
		actors: [
			"Robert Downey Jr.",
			"Chris Hemsworth",
			"Mark Ruffalo"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
		image: "https://m.media-amazon.com/images/I/91-IY2F3ArL._AC_UY218_.jpg",
		rating: 7.3,
		trailer: "https://www.youtube.com/embed/tmeOjFno6Do"
	},
	{
		title: "Black Panther",
		release_date: "2018-02-13",
		director: "Ryan Coogler",
		actors: [
			"Chadwick Boseman",
			"Michael B. Jordan",
			"Lupita Nyong'o"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
		image: "https://m.media-amazon.com/images/I/81t5mOc1PeL._AC_UY218_.jpg",
		rating: 7.3,
		trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
	},
	{
		title: "Harry Potter and the Deathly Hallows: Part 2",
		release_date: "2011-07-07",
		director: "David Yates",
		actors: [
			"Daniel Radcliffe",
			"Emma Watson",
			"Rupert Grint"
		],
		genre: "Adventure, Drama, Fantasy",
		synopsis: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
		image: "https://m.media-amazon.com/images/I/91yy1iDB8OL._AC_UY218_.jpg",
		rating: 8.1,
		trailer: "https://www.youtube.com/embed/mObK5XD8udk"
	},
	{
		title: "Star Wars: Episode VIII - The Last Jedi",
		release_date: "2017-12-15",
		director: "Rian Johnson",
		actors: [
			"Daisy Ridley",
			"John Boyega",
			"Mark Hamill"
		],
		genre: "Action, Adventure, Fantasy",
		synopsis: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
		image: "https://m.media-amazon.com/images/I/81xtAp7e77L._AC_UY218_.jpg",
		rating: 7,
		trailer: "https://www.youtube.com/embed/Q0CbN8sfihY"
	},
	{
		title: "Jurassic World: Fallen Kingdom",
		release_date: "2018-06-06",
		director: "J.A. Bayona",
		actors: [
			"Chris Pratt",
			"Bryce Dallas Howard",
			"Rafe Spall"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
		image: "https://m.media-amazon.com/images/I/81tSb2CYRoL._AC_UY218_.jpg",
		rating: 6.2,
		trailer: "https://www.youtube.com/embed/vn9mMeWcgoM"
	},
	{
		title: "Frozen",
		release_date: "2013-11-27",
		director: "Chris Buck, Jennifer Lee",
		actors: [
			"Kristen Bell",
			"Idina Menzel",
			"Jonathan Groff"
		],
		genre: "Animation, Adventure, Comedy",
		synopsis: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
		image: "https://m.media-amazon.com/images/I/91FhnyvtjCL._AC_UY218_.jpg",
		rating: 7.4,
		trailer: "https://www.youtube.com/embed/FmrnYJGQQug"
	},
	{
		title: "Beauty and the Beast",
		release_date: "2017-03-16",
		director: "Bill Condon",
		actors: [
			"Emma Watson",
			"Dan Stevens",
			"Luke Evans"
		],
		genre: "Family, Fantasy, Musical",
		synopsis: "A selfish prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
		image: "https://m.media-amazon.com/images/I/91fU8TYkR4L._AC_UY218_.jpg",
		rating: 7.1,
		trailer: "https://www.youtube.com/embed/OvW_L8sTu5E"
	},
	{
		title: "Venom",
		release_date: "2018-09-28",
		director: "Ruben Fleischer",
		actors: [
			"Tom Hardy",
			"Michelle Rodriguez",
			"Riz Ahmed"
		],
		genre: "Action, Horror, Sci-Fi",
		synopsis: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote starts to bring people and their allies closer to the_elimination ofTARGET.",
		image: "https://m.media-amazon.com/images/I/91oaYOLSe3S._AC_UY218_.jpg",
		rating: 6.8,
		trailer: "https://www.youtube.com/embed/u9Mv98Gr5pY"
	},
	{
		title: "Incredibles 2",
		release_date: "2018-06-14",
		director: "Brad Bird",
		actors: [
			"Craig T. Nelson",
			"Holly Hunter",
			"Sarah Vowell"
		],
		genre: "Animation, Action, Adventure",
		synopsis: "The Incredibles family takes on a new mission, which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
		image: "https://m.media-amazon.com/images/I/91+VySrmrfL._AC_UY218_.jpg",
		rating: 7.6,
		trailer: "https://www.youtube.com/embed/8UwxL-Zheqk"
	},
	{
		title: "The Fate of the Furious",
		release_date: "2017-04-12",
		director: "F. Gary Gray",
		actors: [
			"Vin Diesel",
			"Jason Statham",
			"Dwayne Johnson"
		],
		genre: "Action, Adventure, Crime",
		synopsis: "When a mysterious woman seduces Dom into the world of crime and betrayal of those closest to him, the crew face trials that will test them as never before.",
		image: "https://m.media-amazon.com/images/I/818zLOmMUkL._AC_UY218_.jpg",
		rating: 6.7,
		trailer: "https://www.youtube.com/embed/JwMKRevYa_M"
	},
	{
		title: "Iron Man 3",
		release_date: "2013-05-03",
		director: "Shane Black",
		actors: [
			"Robert Downey Jr.",
			"Gwyneth Paltrow",
			"Don Cheadle"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
		image: "https://m.media-amazon.com/images/I/91JyaYilblL._AC_UL320_.jpg",
		rating: 7.1,
		trailer: "https://www.youtube.com/embed/bKWvs_yCT6c"
	},
	{
		title: "Minions",
		release_date: "2015-06-17",
		director: "Kyle Balda, Pierre Coffin",
		actors: [
			"Sandra Bullock",
			"Jon Hamm",
			"Michael Keaton"
		],
		genre: "Animation, Adventure, Comedy",
		synopsis: "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
		image: "https://m.media-amazon.com/images/I/71n1rpeQrKL._AC_UY218_.jpg",
		rating: 6.4,
		trailer: "https://www.youtube.com/embed/LSw_te6wexM"
	},
	{
		title: "Captain America: Civil War",
		release_date: "2016-04-27",
		director: "Anthony Russo, Joe Russo",
		actors: [
			"Chris Evans",
			"Robert Downey Jr.",
			"Scarlett Johansson"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.",
		image: "https://m.media-amazon.com/images/I/91QeHriyBcL._AC_UY218_.jpg",
		rating: 7.8,
		trailer: "https://www.youtube.com/embed/dKrVegVI0Us"
	},
	{
		title: "Aquaman",
		release_date: "2018-12-07",
		director: "James Wan",
		actors: [
			"Jason Momoa",
			"Amber Heard",
			"Willem Dafoe"
		],
		genre: "Action, Adventure, Fantasy",
		synopsis: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
		image: "https://m.media-amazon.com/images/I/916WSgvze3L._AC_UY218_.jpg",
		rating: 6.9,
		trailer: "https://www.youtube.com/embed/WDkg3h8PCVU"
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		release_date: "2003-12-01",
		director: "Peter Jackson",
		actors: [
			"Elijah Wood",
			"Viggo Mortensen",
			"Ian McKellen"
		],
		genre: "Action, Adventure, Drama",
		synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
		image: "https://m.media-amazon.com/images/I/91LAfx+AZhL._AC_UY218_.jpg",
		rating: 8.9,
		trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo"
	},
	{
		title: "Skyfall",
		release_date: "2012-11-09",
		director: "Sam Mendes",
		actors: [
			"Daniel Craig",
			"Javier Bardem",
			"Naomie Harris"
		],
		genre: "Action, Adventure, Thriller",
		synopsis: "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
		image: "https://m.media-amazon.com/images/I/91P7eK+4KmL._AC_UY218_.jpg",
		rating: 7.7,
		trailer: "https://www.youtube.com/embed/6kw1UVovByw"
	},
	{
		title: "Transformers: Dark of the Moon",
		release_date: "2011-06-25",
		director: "Michael Bay",
		actors: [
			"Shia LaBeouf",
			"Rosie Huntington-Whiteley",
			"Tyrese Gibson"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons to reach it and to learn its secrets.",
		image: "https://m.media-amazon.com/images/I/91bxF4jgMTL._AC_UY218_.jpg",
		rating: 6.2,
		trailer: "https://www.youtube.com/embed/Rf3OcxIFbRE"
	},
	{
		title: "Captain Marvel",
		release_date: "2019-03-08",
		director: "Anna Boden, Ryan Fleck",
		actors: [
			"Brie Larson",
			"Samuel L. Jackson",
			"Ben Mendelsohn"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
		image: "https://m.media-amazon.com/images/I/81e71LEqiVL._AC_UY218_.jpg",
		rating: 6.8,
		trailer: "https://www.youtube.com/embed/Z1BCujX3pw8"
	},
	{
		title: "Spider-Man: Far From Home",
		release_date: "2019-07-02",
		director: "Jon Watts",
		actors: [
			"Tom Holland",
			"Zendaya",
			"Jake Gyllenhaal"
		],
		genre: "Action, Adventure, Sci-Fi",
		synopsis: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
		image: "https://m.media-amazon.com/images/I/91A+eXyGmvL._AC_UY218_.jpg",
		rating: 7.4,
		trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE"
	},
	{
		title: "Jurassic Park",
		release_date: "1993-06-11",
		director: "Steven Spielberg",
		actors: [
			"Sam Neill",
			"Laura Dern",
			"Jeff Goldblum"
		],
		genre: "Adventure, Sci-Fi, Thriller",
		synopsis: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
		image: "https://m.media-amazon.com/images/I/7146s0GzEUL._AC_UY218_.jpg",
		rating: 8.1,
		trailer: "https://www.youtube.com/embed/lc0UehYemQA"
	},
	{
		title: "Venom: Let There Be Carnage",
		release_date: "2021-09-30",
		director: "Ruben Fleischer",
		actors: [
			"Tom Hardy",
			"Michelle Rodriguez",
			"Riz Ahmed"
		],
		genre: "Action, Horror, Sci-Fi",
		synopsis: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote starts to bring people and their allies closer to the_elimination ofTARGET.",
		image: "https://m.media-amazon.com/images/I/91me1m5qz4L._AC_UY218_.jpg",
		rating: 6.8,
		trailer: "https://www.youtube.com/embed/-FmWuCgJmxo"
	}
];
const series = [
	{
		title: "Twenty-Five Twenty-One",
		release_date: 2022,
		creators: [
			"Kwon Do-eun"
		],
		actors: [
			"Kim Tae-ri",
			"Nam Joo-hyuk",
			"Bona"
		],
		genre: "Drama, Romance",
		synopsis: "In a time when dreams seem out of reach, a teenage fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDF5fCHxkOvFXskuD8LJiJ5Qx65cL_t4czlakntmAOmz2wLelvHmZX64lfsuJdYcdlSA&usqp=CAU",
		rating: 8.7,
		id: "1s"
	},
	{
		title: "Game of Thrones",
		release_date: 2011,
		creators: [
			"David Benioff",
			"D.B. Weiss"
		],
		actors: [
			"Emilia Clarke",
			"Peter Dinklage",
			"Kit Harington"
		],
		genre: "Action, Adventure, Drama",
		synopsis: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
		image: "https://m.media-amazon.com/images/I/91wn+Av0LGL._AC_UY218_.jpg",
		rating: 9.3,
		id: "2s"
	},
	{
		title: "Breaking Bad",
		release_date: 2008,
		creators: [
			"Vince Gilligan"
		],
		actors: [
			"Bryan Cranston",
			"Aaron Paul",
			"Anna Gunn"
		],
		genre: "Crime, Drama, Thriller",
		synopsis: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
		image: "https://m.media-amazon.com/images/I/81Te1+KzW-L._AC_UY218_.jpg",
		rating: 9.5,
		id: "3s"
	},
	{
		title: "Stranger Things",
		release_date: 2016,
		creators: [
			"Matt Duffer",
			"Ross Duffer"
		],
		actors: [
			"Millie Bobby Brown",
			"Finn Wolfhard",
			"Winona Ryder"
		],
		genre: "Drama, Fantasy, Horror",
		synopsis: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
		image: "https://m.media-amazon.com/images/I/81Ld12DNDNL._AC_UY218_.jpg",
		rating: 8.7,
		id: "4s"
	},
	{
		title: "The Witcher",
		release_date: 2019,
		creators: [
			"Lauren Schmidt Hissrich"
		],
		actors: [
			"Henry Cavill",
			"Freya Allan",
			"Anya Chalotra"
		],
		genre: "Action, Adventure, Drama",
		synopsis: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
		image: "https://m.media-amazon.com/images/I/816PBiN8q5L._AC_UY218_.jpg",
		rating: 8.2,
		id: "5s"
	},
	{
		title: "The Mandalorian",
		release_date: 2019,
		creators: [
			"Jon Favreau"
		],
		actors: [
			"Pedro Pascal",
			"Gina Carano",
			"Giancarlo Esposito"
		],
		genre: "Action, Adventure, Fantasy",
		synopsis: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
		image: "https://m.media-amazon.com/images/I/81tfKiNfztL._AC_UY218_.jpg",
		rating: 8.8,
		id: "6s"
	},
	{
		title: "Friends",
		release_date: 1994,
		creators: [
			"David Crane",
			"Marta Kauffman"
		],
		actors: [
			"Jennifer Aniston",
			"Courteney Cox",
			"Lisa Kudrow"
		],
		genre: "Comedy, Romance",
		synopsis: "Follows the personal and professional lives of six twenty to thirty-something-release_date-old friends living in Manhattan.",
		image: "https://m.media-amazon.com/images/I/91eUTJInKkL._AC_UY218_.jpg",
		rating: 8.9,
		id: "7s"
	},
	{
		title: "The Office",
		release_date: 2005,
		creators: [
			"Greg Daniels",
			"Ricky Gervais",
			"Stephen Merchant"
		],
		actors: [
			"Steve Carell",
			"Jenna Fischer",
			"John Krasinski"
		],
		genre: "Comedy",
		synopsis: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
		image: "https://m.media-amazon.com/images/I/91d053F2aKL._AC_UY218_.jpg",
		rating: 8.9,
		id: "8s"
	},
	{
		title: "Sherlock",
		release_date: 2010,
		creators: [
			"Mark Gatiss",
			"Steven Moffat"
		],
		actors: [
			"Benedict Cumberbatch",
			"Martin Freeman",
			"Una Stubbs"
		],
		genre: "Crime, Drama, Mystery",
		synopsis: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
		image: "https://m.media-amazon.com/images/I/91Mdaxz+a0L._AC_UY218_.jpg",
		rating: 9.1,
		id: "9s"
	},
	{
		title: "The Walking Dead",
		release_date: 2010,
		creators: [
			"Frank Darabont"
		],
		actors: [
			"Andrew Lincoln",
			"Norman Reedus",
			"Melissa McBride"
		],
		genre: "Drama, Horror, Thriller",
		synopsis: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.",
		image: "https://m.media-amazon.com/images/I/81CPr4Aj4AL._AC_UY218_.jpg",
		rating: 8.2,
		id: "10s"
	},
	{
		title: "Westworld",
		release_date: 2016,
		creators: [
			"Lisa Joy",
			"Jonathan Nolan"
		],
		actors: [
			"Evan Rachel Wood",
			"Jeffrey Wright",
			"Ed Harris"
		],
		genre: "Drama, Mystery, Sci-Fi",
		synopsis: "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.",
		image: "https://m.media-amazon.com/images/I/81V2yYyPA2L._AC_UY218_.jpg",
		rating: 8.6,
		id: "11s"
	},
	{
		title: "The Crown",
		release_date: 2016,
		creators: [
			"Peter Morgan"
		],
		actors: [
			"Claire Foy",
			"Olivia Colman",
			"Imelda Staunton"
		],
		genre: "Biography, Drama, History",
		synopsis: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
		image: "https://m.media-amazon.com/images/I/71ux8QpsrkL._AC_UY218_.jpg",
		rating: 8.6,
		id: "12s"
	},
	{
		title: "Black Mirror",
		release_date: 2011,
		creators: [
			"Charlie Brooker"
		],
		actors: [
			"Daniel Lapaine",
			"Hannah John-Kamen",
			"Michaela Coel"
		],
		genre: "Drama, Sci-Fi, Thriller",
		synopsis: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
		image: "https://m.media-amazon.com/images/I/91LcizItUqL._AC_UY218_.jpg",
		rating: 8.8,
		id: "13s"
	},
	{
		title: "Money Heist",
		release_date: 2017,
		creators: [
			"Álex Pina"
		],
		actors: [
			"Úrsula Corberó",
			"Álvaro Morte",
			"Itziar Ituño"
		],
		genre: "Action, Crime, Drama",
		synopsis: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
		image: "https://m.media-amazon.com/images/I/617rEp7jnsL._AC_UY218_.jpg",
		rating: 8.2,
		id: "14s"
	},
	{
		title: "The Sopranos",
		release_date: 1999,
		creators: [
			"David Chase"
		],
		actors: [
			"James Gandolfini",
			"Lorraine Bracco",
			"Edie Falco"
		],
		genre: "Crime, Drama",
		synopsis: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
		image: "https://m.media-amazon.com/images/I/61kAZgy8xJL._AC_UY218_.jpg",
		rating: 9.2,
		id: "15s"
	},
	{
		title: "Narcos",
		release_date: 2015,
		creators: [
			"Carlo Bernard",
			"Chris Brancato",
			"Doug Miro"
		],
		actors: [
			"Pedro Pascal",
			"Wagner Moura",
			"Boyd Holbrook"
		],
		genre: "Biography, Crime, Drama",
		synopsis: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug lords who plagued the country through the release_dates.",
		image: "https://m.media-amazon.com/images/I/51AarO66jIL._AC_UY218_.jpg",
		rating: 8.8,
		id: "16s"
	},
	{
		title: "Peaky Blinders",
		release_date: 2013,
		creators: [
			"Steven Knight"
		],
		actors: [
			"Cillian Murphy",
			"Paul Anderson",
			"Helen McCrory"
		],
		genre: "Crime, Drama",
		synopsis: "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
		image: "https://m.media-amazon.com/images/I/81GRK4Wh-JL._AC_UY218_.jpg",
		rating: 8.8,
		id: "17s"
	},
	{
		title: "Vikings",
		release_date: 2013,
		creators: [
			"Michael Hirst"
		],
		actors: [
			"Katheryn Winnick",
			"Gustaf Skarsgård",
			"Alexander Ludwig"
		],
		genre: "Action, Adventure, Drama",
		synopsis: "Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes.",
		image: "https://m.media-amazon.com/images/I/71czas+QKHL._AC_UY218_.jpg",
		rating: 8.5,
		id: "18s"
	},
	{
		title: "The Handmaid's Tale",
		release_date: 2017,
		creators: [
			"Bruce Miller"
		],
		actors: [
			"Elisabeth Moss",
			"Yvonne Strahovski",
			"Joseph Fiennes"
		],
		genre: "Drama, Sci-Fi, Thriller",
		synopsis: "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
		image: "https://m.media-amazon.com/images/I/61twdQW63gL._AC_UY218_.jpg",
		rating: 8.4,
		id: "19s"
	}
];

const $$Astro = createAstro();
const $$idMovie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idMovie;
  const { idMovie } = Astro2.params;
  const movieFound = movies.find((movie) => movie.title === idMovie);
  if (!movieFound) return Astro2.redirect("/404");
  const { title, image, genre, director, actors, synopsis, trailer } = movieFound;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MisPeliculas | Proyecto", "data-astro-cid-2k5uzhdj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col gap-5 lg:flex-row  pb-10 h-full w-full items-center lg:items-start" data-astro-cid-2k5uzhdj> <article class="flex flex-col items-center rounded-lg bg-bgs p-4 max-w-[300px] " data-astro-cid-2k5uzhdj${addAttribute(renderTransition($$result2, "6clhoauk", "", `movie ${idMovie} link`), "data-astro-transition-scope")}> <picture class="overflow-hiddn rounded-lg" data-astro-cid-2k5uzhdj> <img class="w-full max-w-[200px] [aspect-ratio:1/1.4] transition-all duration-300 object-cover rounded-sm"${addAttribute(image, "src")}${addAttribute(title, "alt")} data-astro-cid-2k5uzhdj${addAttribute(renderTransition($$result2, "vm3hkh77", "", `movie ${idMovie} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col gap-2 items-center" data-astro-cid-2k5uzhdj> <p class="text-xs text-sky-400" data-astro-cid-2k5uzhdj>${genre}</p> <h1 class="text-2xl font-bold" data-astro-cid-2k5uzhdj>${title}</h1> <span class="text-xs text-sky-50/40 text-center" data-astro-cid-2k5uzhdj>${director}</span> <span class="text-xs text-sky-50/40 text-center" data-astro-cid-2k5uzhdj>${actors.join(", ")}</span> <p class="text-sm text-pretty text-sky-50/80" data-astro-cid-2k5uzhdj>${synopsis}</p> </div> </article> <div class="video w-full h-full" data-astro-cid-2k5uzhdj> <iframe class="w-full min-h-full aspect-video"${addAttribute(trailer, "src")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-2k5uzhdj></iframe> </div> </section> ` })} `;
}, "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/pages/movies/[idMovie].astro", "self");

const $$file = "/mnt/c/Users/Laptop/desktop/MY-PROJECTS/MisPeliculas/src/pages/movies/[idMovie].astro";
const $$url = "/movies/[idMovie]";

const _idMovie_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idMovie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _idMovie_ as _, movies as m, series as s };
