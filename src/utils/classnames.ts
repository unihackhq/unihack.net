type ClassNameTypes = string | undefined;

export const mergeClassNames = (...classNames: ClassNameTypes[]) => {
	return classNames.filter(Boolean).join(" ");
};
