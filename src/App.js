import './App.css';
import Head from './Components/Head';
import Itemrow from './Components/Itemrow';
import Right from './Components/Right';

function App() {
	return (
		<div class="container main-container">
			<div class="row">

				<div class="col-xs-2">
					<Right />
				</div>

        		<div class="col-xs-10">
          			<Head />
          			<Itemrow />
      			</div>

      		</div>
    	</div>
  	);
}

export default App;
