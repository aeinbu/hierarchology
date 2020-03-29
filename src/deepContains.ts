
export const deepContains = <T>(
	nodeToExamine: T,
	predicate: (node: T) => boolean,
	getChildNodes: (node: T) => (T[] | undefined)
) : boolean => {
	if(predicate(nodeToExamine)) return true

	const children = getChildNodes(nodeToExamine) ?? []
	return children.some(childNode => deepContains(childNode, predicate, getChildNodes))
}