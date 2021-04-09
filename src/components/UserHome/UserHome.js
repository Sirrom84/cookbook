import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import "../UserHome/UserHome.css";

export default function UserHome() {
	const [options, setOptions] = useState(false);
	const showOptions = () => setOptions(!options);

	return (
		<div className="user-home-container">
			<nav className="recipe-header">
				<h1 className="recipes-header-text">Recipes</h1>
				<Link to="#" className="options-toggle">
					<a onClick={showOptions}>
						{!options ? <FaChevronDown /> : <FaChevronUp />}
					</a>
				</Link>
			</nav>

			<nav className={!options ? "options-hidden" : "options-showing"}>
				<ul className="recipe-options-list">
					<Link to="/chicken">
						<li>Chicken</li>
					</Link>
					<Link path="/beef">
						<li>Beef</li>
					</Link>
					<Link to="/pork">
						<li>Pork</li>
					</Link>
					<Link to="/fish">
						<li>Fish</li>
					</Link>
					<Link to="/pasta">
						<li>Pasta</li>
					</Link>
					<Link to="/favourites">
						<li>Favourites</li>
					</Link>
				</ul>
			</nav>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste
				sit molestias corrupti illum at alias porro, numquam veritatis, omnis
				nulla eligendi. Praesentium illo culpa laudantium? Porro quam ducimus
				ipsa beatae, distinctio ex fuga neque accusamus excepturi eaque eius
				voluptas quos quo illo obcaecati aperiam, impedit praesentium
				exercitationem laudantium nobis qui voluptatum perferendis! Doloremque
				nesciunt excepturi omnis nihil libero quos ipsa doloribus ipsam
				inventore facere, alias consequatur, rem commodi laborum velit vel
				numquam dolor aliquam fugiat esse sed iste laudantium eaque. Libero
				doloremque ut similique dolorum id accusantium quas distinctio unde
				fugiat, asperiores quidem quod dignissimos, recusandae ex sit aliquam
				nam quisquam, eligendi reprehenderit. Sint, labore doloribus! Delectus
				omnis quaerat error, totam repellat at voluptas explicabo, sunt autem
				suscipit numquam repellendus, odio ducimus. Praesentium quaerat
				cupiditate, enim dolorum voluptates eaque magni reprehenderit
				consequatur dolorem! Non, nihil repellendus ratione maiores consectetur
				ipsum dignissimos inventore, obcaecati, corporis asperiores nostrum unde
				distinctio eos. Laudantium quo vitae numquam? Totam autem aut
				doloremque, molestias iure dolore! Incidunt voluptas facilis hic
				excepturi asperiores! Iste facilis fuga, iure dolorum saepe accusantium
				aut eaque! Accusantium, magnam nesciunt culpa minus voluptas natus animi
				error enim nemo corrupti dolorum voluptatem aspernatur doloribus
				perspiciatis molestias odit iusto, mollitia at aperiam doloremque
				veritatis et vitae. Dolorem, accusamus quis pariatur ipsum nobis, itaque
				exercitationem distinctio vel, nostrum repellendus aliquam. Fuga eaque,
				placeat, repellendus, excepturi eius commodi alias quia ipsam totam
				perferendis omnis. Pariatur, mollitia? Ullam quaerat quidem inventore
				illo sit. Dolorem id sapiente inventore rem dolores. Eligendi, fugit!
				Atque veritatis sint voluptatibus laborum tempora magni ipsum iure
				architecto ullam dignissimos pariatur inventore natus neque labore nemo,
				explicabo necessitatibus. Praesentium, dignissimos. Libero ad aliquid
				voluptatum illo repellendus consequatur eum repellat molestiae corporis
				architecto, incidunt eveniet quo dolore. Quas assumenda fuga, facilis,
				labore odit asperiores illum enim quisquam velit ratione optio quia
				nostrum sed quaerat non quis fugit. Dolorum vero eligendi rem similique
				doloribus quaerat voluptatibus et atque pariatur quis voluptate, id
				reprehenderit, officiis earum aspernatur, magnam ipsa ea modi iste?
				Explicabo incidunt error nihil aspernatur dolore est eos beatae! In
				ratione accusantium iusto optio sed unde quaerat officia adipisci veniam
				dolor voluptate, eligendi debitis molestias excepturi! Exercitationem
				itaque nemo omnis quis sint illo repellendus voluptatem rem dicta, amet
				non eligendi cupiditate aliquam veniam animi. Quia incidunt quas
				voluptatibus! Aliquam corporis voluptas vitae esse consequatur vero!
				Delectus ad error iste consequuntur vel eveniet, saepe labore corporis
				assumenda dolorum nihil deleniti aut. Culpa officiis rem ullam
				distinctio hic vel enim, facilis et possimus alias modi optio odio
				commodi consequatur nisi aliquid? Facilis consectetur quaerat ea
				repudiandae soluta harum animi atque voluptates, sunt officia ad
				dolores, vel maiores. Neque sapiente eos vitae provident, libero, vel
				odio deserunt, veritatis enim soluta ad quasi quis? Accusamus, ipsa
				porro voluptates reprehenderit quibusdam maiores ex natus vitae modi
				consequatur asperiores veritatis mollitia omnis error dolores assumenda
				nulla sunt repellat id unde minus iure! Repudiandae dolor voluptatem
				molestias asperiores similique porro minima eligendi nulla impedit
				cupiditate! Fugiat quis est voluptates rerum numquam sint, quam culpa
				doloremque, necessitatibus voluptate dolore minus, eveniet hic.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste
				sit molestias corrupti illum at alias porro, numquam veritatis, omnis
				nulla eligendi. Praesentium illo culpa laudantium? Porro quam ducimus
				ipsa beatae, distinctio ex fuga neque accusamus excepturi eaque eius
				voluptas quos quo illo obcaecati aperiam, impedit praesentium
				exercitationem laudantium nobis qui voluptatum perferendis! Doloremque
				nesciunt excepturi omnis nihil libero quos ipsa doloribus ipsam
				inventore facere, alias consequatur, rem commodi laborum velit vel
				numquam dolor aliquam fugiat esse sed iste laudantium eaque. Libero
				doloremque ut similique dolorum id accusantium quas distinctio unde
				fugiat, asperiores quidem quod dignissimos, recusandae ex sit aliquam
				nam quisquam, eligendi reprehenderit. Sint, labore doloribus! Delectus
				omnis quaerat error, totam repellat at voluptas explicabo, sunt autem
				suscipit numquam repellendus, odio ducimus. Praesentium quaerat
				cupiditate, enim dolorum voluptates eaque magni reprehenderit
				consequatur dolorem! Non, nihil repellendus ratione maiores consectetur
				ipsum dignissimos inventore, obcaecati, corporis asperiores nostrum unde
				distinctio eos. Laudantium quo vitae numquam? Totam autem aut
				doloremque, molestias iure dolore! Incidunt voluptas facilis hic
				excepturi asperiores! Iste facilis fuga, iure dolorum saepe accusantium
				aut eaque! Accusantium, magnam nesciunt culpa minus voluptas natus animi
				error enim nemo corrupti dolorum voluptatem aspernatur doloribus
				perspiciatis molestias odit iusto, mollitia at aperiam doloremque
				veritatis et vitae. Dolorem, accusamus quis pariatur ipsum nobis, itaque
				exercitationem distinctio vel, nostrum repellendus aliquam. Fuga eaque,
				placeat, repellendus, excepturi eius commodi alias quia ipsam totam
				perferendis omnis. Pariatur, mollitia? Ullam quaerat quidem inventore
				illo sit. Dolorem id sapiente inventore rem dolores. Eligendi, fugit!
				Atque veritatis sint voluptatibus laborum tempora magni ipsum iure
				architecto ullam dignissimos pariatur inventore natus neque labore nemo,
				explicabo necessitatibus. Praesentium, dignissimos. Libero ad aliquid
				voluptatum illo repellendus consequatur eum repellat molestiae corporis
				architecto, incidunt eveniet quo dolore. Quas assumenda fuga, facilis,
				labore odit asperiores illum enim quisquam velit ratione optio quia
				nostrum sed quaerat non quis fugit. Dolorum vero eligendi rem similique
				doloribus quaerat voluptatibus et atque pariatur quis voluptate, id
				reprehenderit, officiis earum aspernatur, magnam ipsa ea modi iste?
				Explicabo incidunt error nihil aspernatur dolore est eos beatae! In
				ratione accusantium iusto optio sed unde quaerat officia adipisci veniam
				dolor voluptate, eligendi debitis molestias excepturi! Exercitationem
				itaque nemo omnis quis sint illo repellendus voluptatem rem dicta, amet
				non eligendi cupiditate aliquam veniam animi. Quia incidunt quas
				voluptatibus! Aliquam corporis voluptas vitae esse consequatur vero!
				Delectus ad error iste consequuntur vel eveniet, saepe labore corporis
				assumenda dolorum nihil deleniti aut. Culpa officiis rem ullam
				distinctio hic vel enim, facilis et possimus alias modi optio odio
				commodi consequatur nisi aliquid? Facilis consectetur quaerat ea
				repudiandae soluta harum animi atque voluptates, sunt officia ad
				dolores, vel maiores. Neque sapiente eos vitae provident, libero, vel
				odio deserunt, veritatis enim soluta ad quasi quis? Accusamus, ipsa
				porro voluptates reprehenderit quibusdam maiores ex natus vitae modi
				consequatur asperiores veritatis mollitia omnis error dolores assumenda
				nulla sunt repellat id unde minus iure! Repudiandae dolor voluptatem
				molestias asperiores similique porro minima eligendi nulla impedit
				cupiditate! Fugiat quis est voluptates rerum numquam sint, quam culpa
				doloremque, necessitatibus voluptate dolore minus, eveniet hic.
			</p>
		</div>
	);
}
