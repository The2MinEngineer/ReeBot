export function calculateNextDueDate(startDate, dueDate, repeatInterval) {
	if (!repeatInterval) {
		return dueDate;
	}

	const start = new Date(startDate);
	const due = new Date(dueDate);

	// Calculate the time difference in milliseconds
	const timeDifference = due - start;

	// Calculate the next due date by adding the repeat interval to the current due date
	const nextDueDate = new Date(due.getTime() + repeatInterval * timeDifference);

	return nextDueDate.toISOString().split("T")[0];
}
