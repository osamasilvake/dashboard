import { AiOutlineCheck } from 'react-icons/ai';

import { PricingTableType } from './PricingTable.enum';
import { PricingTableList } from './PricingTable.list';

const PricingTable = () => {
	const getBackgroundColor = (id: string) => {
		if (id === PricingTableType.Free) {
			return 'from-emerald-600 to-emerald-300';
		} else if (id === PricingTableType.Starter) {
			return 'from-orange-600 to-orange-300';
		} else if (id === PricingTableType.Premium) {
			return 'from-violet-700 to-violet-400';
		} else {
			return '';
		}
	};

	const getTextColor = (id: string) => {
		if (id === PricingTableType.Free) {
			return 'bg-emerald-300';
		} else if (id === PricingTableType.Starter) {
			return 'bg-orange-300';
		} else if (id === PricingTableType.Premium) {
			return 'bg-violet-400';
		} else {
			return '';
		}
	};

	return (
		<div className="bg-gradient-to-t from-white to-violet-300">
			<header className="text-center pt-5 pb-7">
				<h1 className="text-2xl font-semibold pb-1">Select a Subscription</h1>
				<p className="text-sm text-gray-500">
					Start for free or take advantage of our most popular upgrade features.
				</p>
			</header>

			<main className="flex justify-center gap-4 flex-wrap pb-8">
				{PricingTableList?.map((price) => (
					<div key={price.id} className="bg-white shadow-sm pb-5 w-64">
						<div className={`bg-gradient-to-t text-center pt-6 h-36 ${getBackgroundColor(price.id)}`}>
							<h2 className={`text-white text-sm inline-block px-2 py-1 rounded-lg ${getTextColor(price.id)}`}>
								{price.id}
							</h2>
							<p className="text-3xl text-white pt-1">{price.price}</p>
							<p className="text-xs text-white">{price.perMonth}</p>
						</div>
						<div className="text-center px-2 pt-5">
							<p className="text-sm font-bold">{price.usage}</p>
							<p className="text-sm font-semibold pt-1 pb-5">{price.description}</p>
							<button className="bg-white text-sm px-10 py-1 rounded-2xl border-2 border-blue-300 text-blue-800">
								Get Started
							</button>
							<ul className="pt-6 px-4 space-y-4">
								{price.list?.map((item) => (
									<li key={item.title} className="flex items-center gap-3">
										<div>
											<AiOutlineCheck className="text-indigo-700" />
										</div>
										<p className="text-start text-sm font-medium">
											<span className="font-medium" dangerouslySetInnerHTML={{ __html: item.title }} />
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</main>
		</div>
	);
};

export default PricingTable;
