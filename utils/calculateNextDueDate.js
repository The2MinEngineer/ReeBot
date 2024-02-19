export function calculateNextDueDate(startDate, dueDate) {
	const start = new Date(startDate);
	const due = new Date(dueDate);

	// Calculate the time difference in days
	const timeDifferenceInDays = Math.ceil((due - start) / (1000 * 60 * 60 * 24));

	// Return the original due date and the calculated time difference in days
	return {
		nextDueDate: dueDate,
		repeatInterval: timeDifferenceInDays,
	};
}
