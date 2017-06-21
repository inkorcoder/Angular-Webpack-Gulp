export function closest(node: any, selector: string){
	while (node) {
		if (node.matches(selector)) return node;
		else node = node.parentElement;
	}
	return null;
}