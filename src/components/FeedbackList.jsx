import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({ handleDelete }) {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						// animate={{ x: 100 }}
						// transition={{ ease: 'easeOut', duration: 2 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 1.5 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// return (
	// 	<div className='feedback-list'>
	// 		{feedback.map((item) => (
	// 			<FeedbackItem
	// 				key={item.id}
	// 				item={item}
	// 				handleDelete={handleDelete}
	// 			/>
	// 		))}
	// 	</div>
	// );
}

export default FeedbackList;
