import Card from './Card';
import RecentFiles from './RecentFiles';
import SearchInput from './SearchInput';

const Main = () => (
	<>
		<main className="bg-101 flex-grow px-5 pt-5">
			<SearchInput />
			<Card />
			<RecentFiles />
		</main>
	</>
);
export default Main;
