export const hasChanges = (formData, data) => {
	return Object.entries(formData).some(([key, value]) => value !== data[key])
}
